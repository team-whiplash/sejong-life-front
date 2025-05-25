const startYear = 2024;
const startMonth = 11; // 12월
const endYear = 2026;
const endMonth = 1; // 2월
// const pastelColors = [
//   '#64A9F7', // 하늘청 블루
//   '#6DD6C3', // 민트그린
//   '#B497E8', // 라벤더 퍼플
//   '#F48FB1', // 로즈핑크
//   '#FF8A80', // 딥코랄
//   '#FFB74D', // 바닐라 오렌지
//   '#7986CB', // 라이트 인디고
//   '#A8D5BA', // 연카키
//   '#4FC3F7', // 스틸 블루
// ];
const pastelColors = [
  '#FF5252', // 강렬한 레드
  '#FF9800', // 선명한 오렌지
  '#4CAF50', // 진한 그린
  '#2196F3', // 선명한 블루
  '#9C27B0', // 보라 (강한 톤)
  '#E91E63', // 핫핑크
  '#795548', // 브라운 (차분하지만 대비 좋음)
  '#00BCD4', // 밝은 시안 (민트보다 쨍함)
];

const today = new Date(); // 오늘 날짜
let current = new Date(today.getFullYear(), today.getMonth(), 1);

// 범위를 벗어난 경우 기본값으로 fallback
if (
  current.getFullYear() < startYear ||
  (current.getFullYear() === startYear && current.getMonth() < startMonth)
) {
  current = new Date(startYear, startMonth, 1);
} else if (
  current.getFullYear() > endYear ||
  (current.getFullYear() === endYear && current.getMonth() > endMonth)
) {
  current = new Date(endYear, endMonth, 1);
}
let rangeEvents = [];

function renderCalendar() {
  const title = document.getElementById('month-title');
  const grid = document.getElementById('calendar-grid');
  grid.innerHTML = '';

  const year = current.getFullYear();
  const month = current.getMonth();
  title.textContent = `${year}년 ${month + 1}월`;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // 요일 헤더
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  weekdays.forEach((d) => {
    const label = document.createElement('div');
    label.className = 'day-label';
    label.textContent = d;
    grid.appendChild(label);
  });

  // 빈칸 (이전 달)
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'day-cell inactive';
    grid.appendChild(empty);
  }

  // 날짜 출력
  for (let d = 1; d <= daysInMonth; d++) {
    const cell = document.createElement('div');
    cell.className = 'day-cell';
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(
      d
    ).padStart(2, '0')}`;
    cell.innerHTML = `<div class="date">${d}</div>`;

    if (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      d === today.getDate()
    ) {
      cell.classList.add('today');
    }

    // 오늘 날짜에 해당하는 모든 이벤트 필터링
    const eventsToday = rangeEvents.filter(
      (ev) => dateStr >= ev.start && dateStr <= ev.end
    );

    let hasLongEvent = false;

    eventsToday.forEach((ev) => {
      const startDate = new Date(ev.start);
      const endDate = new Date(ev.end);
      const duration = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

      // 14일 이하인 이벤트만 밑줄 표시
      if (duration <= 14) {
        const indicator = document.createElement('div');
        indicator.className = 'event-indicator';
        indicator.style.backgroundColor = ev.color;
        cell.appendChild(indicator);
      } else {
        hasLongEvent = true;
      }
    });

    if (hasLongEvent) {
      cell.classList.add('long-event-day');
    }

    grid.appendChild(cell);
  }
}

function nextMonth() {
  if (
    current.getFullYear() < endYear ||
    (current.getFullYear() === endYear && current.getMonth() < endMonth)
  ) {
    current.setMonth(current.getMonth() + 1);
    loadEventsAndRender(current.getFullYear(), current.getMonth());
  }
}

function prevMonth() {
  if (
    current.getFullYear() > startYear ||
    (current.getFullYear() === startYear && current.getMonth() > startMonth)
  ) {
    current.setMonth(current.getMonth() - 1);
    loadEventsAndRender(current.getFullYear(), current.getMonth());
  }
}

function getRandomDifferentColor(prevColor) {
  const candidates = pastelColors.filter((c) => c !== prevColor);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function loadEventsAndRender(year, month) {
  const path = `data/event/${year}-${String(month + 1).padStart(2, '0')}.json`;

  fetch(path)
    .then((res) => (res.ok ? res.json() : []))
    .then((data) => {
      rangeEvents = [];

      if (!data || data.length === 0) {
        renderCalendar();
        renderSchedulePanel();
        return;
      }

      // 1. 색상 셔플
      const shuffledColors = [...pastelColors].sort(() => Math.random() - 0.5);

      // 2. 이벤트에 색 고정 배정 (색이 부족하면 다시 섞어서 재사용)
      let colorIndex = 0;
      rangeEvents = data.map((ev, i) => {
        if (colorIndex >= shuffledColors.length) {
          // 색 다 쓰면 다시 셔플 (또는 원하면 error throw 가능)
          colorIndex = 0;
        }
        const assignedColor = shuffledColors[colorIndex++];
        return { ...ev, color: assignedColor };
      });

      renderCalendar();
      renderSchedulePanel();
    })
    .catch(() => {
      rangeEvents = [];
      renderCalendar();
    });
}

function renderSchedulePanel() {
  const panel = document.querySelector('.calendar-detail-inner');
  panel.innerHTML = ''; // 초기화

  if (rangeEvents.length === 0) {
    panel.innerHTML = `<p class="no-schedule-text">학사일정이 없습니다.</p>`;
    return;
  }

  rangeEvents.forEach((ev) => {
    const startDate = new Date(ev.start);
    const endDate = new Date(ev.end);
    const duration = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;

    const div = document.createElement('div');

    // 🔶 조건에 따라 long-event 클래스 추가
    div.className = 'schedule-item' + (duration > 14 ? ' long-event' : '');

    div.innerHTML = `
      <div class="schedule-title" style="color:${ev.color}">${ev.title}</div>
      <div class="schedule-date">${ev.start} ~ ${ev.end}</div>
    `;
    panel.appendChild(div);
  });
}

loadEventsAndRender(current.getFullYear(), current.getMonth());
