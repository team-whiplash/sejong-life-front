const colleges = {
  인문과학대학: ['korean', 'international', 'history', 'education'],
  사회과학대학: ['administration', 'media', 'law'],
  경영경제대학: ['business', 'economics'],
  호텔관광대학: ['hotel_food', 'franchise', 'biz', 'culinary'],
  생명과학대학: ['life_system', 'smartbio'],
  예체능대학: ['painting', 'fashion', 'music', 'sports', 'dance', 'film'],
  공과대학: [
    'mechanical_engineering',
    'Aerospace',
    'nano',
    'nuclear',
    'construction',
    'department_of_civil',
    'environment',
    'energy',
    'defense',
    'architecture',
  ],
  인공지능융합대학: [
    'computer',
    'information',
    'data_science',
    'ai_electronic',
    'Semiconductor',
    'ai_robot',
    'software',
    'creative',
    'intelligent',
    'ai',
  ],
  자연과학대학: ['math', 'physics', 'chemistry'],
  대양휴머니티칼리지: ['Free', 'pick'],
};

// 학과 코드와 이름 매핑
const deptNames = {
  korean: '국어국문학과',
  international: '국제학부',
  history: '역사학과',
  education: '교육학과',
  administration: '행정학과',
  media: '미디어커뮤니케이션학과',
  law: '법학과',
  business: '경영학과',
  economics: '경제학과',
  hotel_food: '호텔관광경영외식학부',
  franchise: '호텔외식관광프랜차이즈경영학과',
  biz: '호텔외식비즈니스학과',
  culinary: '글로벌조리학과',
  life_system: '생명시스템학부',
  smartbio: '스마트생명산업융합학과',
  painting: '회화과',
  fashion: '패션디자인학과',
  music: '음악과',
  sports: '체육학과',
  dance: '무용과',
  film: '영화예술학과',
  mechanical_engineering: '기계공학과',
  Aerospace: '우주항공시스템공학부',
  nano: '나노신소재공학과',
  nuclear: '양자원자력공학과',
  construction: '건축공학과',
  department_of_civil: '건설환경공학과',
  environment: '환경융합공학과',
  energy: '지구자원시스템공학과(전 에너지자원공학과)',
  defense: '국방시스템공학과',
  architecture: '건축학과',
  computer: '컴퓨터공학과',
  information: '정보보호학과',
  data_science: '인공지능데이터사이언스학과',
  ai_electronic: 'AI융합전자공학과',
  semiconductor: '반도체시스템공학과',
  ai_robot: 'AI로봇학과',
  software: '콘텐츠소프트웨어학과',
  creative: '창의소프트학부',
  math: '수학통계학과',
  physics: '물리천문학과',
  chemistry: '화학과',
  Free: '자유전공학부',
  pick: '균형교양선택(2022 ~ 2025학년도)',
  intelligent: '지능정보융합학과',
  ai: '인공지능학과',
};

const pageTitle = document.getElementById('page-title');
const curriculumContainer = document.getElementById('curriculum-container');
const collegeSelect = document.getElementById('college-select');
const deptSelect = document.getElementById('dept-select');
const yearSelect = document.getElementById('year-select');
const majorSelect = document.getElementById('major-select');
const confirmBtn = document.getElementById('confirm-btn');

// 단과대 옵션 채우기
for (const college in colleges) {
  const option = document.createElement('option');
  option.value = college;
  option.textContent = college;
  collegeSelect.appendChild(option);
}

// 학과별 년도별 세부전공 데이터
const detailedMajors = {
  math: {
    2019: ['수학전공', '응용통계학전공'],
    2020: ['수학전공', '응용통계학전공'],
    2021: ['수학전공', '응용통계학전공'],
  },
  Aerospace: {
    2019: ['우주항공공학전공', '항공시스템공학전공'],
    2020: ['우주항공공학전공', '항공시스템공학전공'],
    2021: ['우주항공공학전공', '항공시스템공학전공'],
    2022: ['우주항공공학전공', '항공시스템공학전공'],
    2023: ['우주항공공학전공', '항공시스템공학전공'],
    2024: ['우주항공공학전공', '항공시스템공학전공', '지능형드론융합전공'],
    2025: ['우주항공공학전공', '항공시스템공학전공', '지능형드론융합전공'],
  },
  ai_robot: {
    2019: ['스마트기기전공', '무인이동체공학전공'],
    2020: ['스마트기기전공', '무인이동체공학전공'],
    2021: ['스마트기기전공', '무인이동체공학전공'],
    2022: ['스마트기기전공', '무인이동체공학전공'],
  },
  creative: {
    2019: ['디자인이노베이션전공', '만화애니메이션텍전공'],
    2020: ['디자인이노베이션전공', '만화애니메이션텍전공'],
    2021: ['디자인이노베이션전공', '만화애니메이션텍전공'],
    2022: ['디자인이노베이션전공', '만화애니메이션텍전공'],
    2023: ['디자인이노베이션전공', '만화애니메이션텍전공'],
    2024: ['디자인이노베이션전공', '만화애니메이션텍전공'],
    2025: ['디자인이노베이션전공', '만화애니메이션텍전공'],
  },
  hotel_food: {
    2019: ['호텔관광경영학', '외식경영학'],
    2020: ['호텔관광경영학', '외식경영학'],
    2021: ['호텔관광경영학', '외식경영학'],
    2022: ['호텔관광경영학', '외식경영학'],
    2023: ['호텔관광경영학', '외식경영학'],
    2024: ['호텔관광경영학', '외식경영학'],
    2025: ['호텔관광경영학', '외식경영학'],
  },
  international: {
    2019: ['영어데이터융합학', '중국통상학', '일어일문학'],
    2020: ['영어데이터융합학', '중국통상학', '일어일문학'],
    2021: ['영어데이터융합학', '중국통상학', '일어일문학'],
    2022: ['영어데이터융합학', '중국통상학', '일어일문학'],
    2023: ['영어데이터융합학', '중국통상학', '일어일문학'],
    2024: ['영어데이터융합학', '중국통상학', '일어일문학'],
    2025: ['영어데이터융합학', '중국통상학', '일어일문학'],
  },
  life_system: {
    2019: ['식품생명공학전공', '바이오융합공학', '바이오산업자원공학'],
    2020: ['식품생명공학전공', '바이오융합공학', '바이오산업자원공학'],
    2021: ['식품생명공학전공', '바이오융합공학', '바이오산업자원공학'],
    2022: ['식품생명공학전공', '바이오융합공학', '바이오산업자원공학'],
    2023: ['식품생명공학전공', '바이오융합공학', '바이오산업자원공학'],
    2024: ['식품생명공학전공', '바이오융합공학', '바이오산업자원공학'],
    2025: ['식품생명공학전공', '바이오융합공학', '바이오산업자원공학'],
  },
};

// 단과대 선택 시 학과 노출
// 단과대 선택 시 학과 노출
collegeSelect.addEventListener('change', () => {
  const selectedCollege = collegeSelect.value;

  // 초기화
  deptSelect.innerHTML = '<option value="">학과 선택</option>';
  yearSelect.innerHTML = '<option value="">년도 선택</option>';
  majorSelect.innerHTML = '<option value="">전공 선택</option>';

  // 모든 선택 요소 숨기기
  deptSelect.classList.add('hide');
  yearSelect.classList.add('hide');
  majorSelect.classList.add('hide');
  confirmBtn.classList.add('hide');

  curriculumContainer.innerHTML = '';
  pageTitle.textContent = '';

  if (selectedCollege && colleges[selectedCollege]) {
    colleges[selectedCollege].forEach((dept) => {
      const option = document.createElement('option');
      option.value = dept;
      option.textContent = deptNames[dept] || dept;
      deptSelect.appendChild(option);
    });
    // 학과 선택 표시
    deptSelect.classList.remove('hide');
  }
});

// 학과 선택 시 년도 노출
deptSelect.addEventListener('change', () => {
  const selectedDept = deptSelect.value;
  yearSelect.innerHTML = '<option value="">년도 선택</option>';
  majorSelect.innerHTML = '<option value="">전공 선택</option>';
  [yearSelect, majorSelect, confirmBtn].forEach((el) =>
    el.classList.add('hide')
  );
  curriculumContainer.innerHTML = '';
  pageTitle.textContent = '';

  if (selectedDept) {
    let validYears = [];
    if (selectedDept === 'pick') {
      validYears = [2022, 2023, 2024, 2025];
    } else if (selectedDept === 'Free') {
      validYears = [2025];
    } else if (selectedDept === 'semiconductor') {
      validYears = [2023, 2024, 2025];
    } else if (selectedDept === 'smartbio') {
      validYears = [2021, 2022, 2023, 2024, 2025]; // ✅ 여기에 추가!
    } else if (selectedDept === 'ai') {
      validYears = [2021, 2022, 2023];
    } else if (selectedDept === 'intelligent') {
      validYears = [2025]; // 지능정보융합학과
    } else {
      validYears = Array.from({ length: 7 }, (_, i) => 2019 + i); // 기본: 2019~2025
    }

    validYears.forEach((year) => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = `${year}학년도`;
      yearSelect.appendChild(option);
    });

    yearSelect.classList.remove('hide');
  }
});

// 년도 선택 시 세부전공 or 확인 버튼 노출
yearSelect.addEventListener('change', () => {
  const dept = deptSelect.value;
  const year = parseInt(yearSelect.value);
  majorSelect.innerHTML = '<option value="">전공 선택</option>';
  majorSelect.classList.add('hide');
  confirmBtn.classList.add('hide');
  curriculumContainer.innerHTML = '';
  pageTitle.textContent = '';

  if (!year) return;

  // 균형선택, 자유전공 관련 처리
  if (dept === 'pick') {
    // 균형선택(2022~2025) → 단과대학 목록 띄우고 확인버튼 노출
    const balanceColleges = [
      '인문과학계열',
      '사회과학계열',
      '경영경제계열',
      '호텔관광계열',
      '생명과학계열',
      '자연과학계열',
      '공과계열',
      '인공지능융합계열',
      '전자정보공학계열',
      '예체능계열',
    ];
    majorSelect.innerHTML = '<option value="">단과대학 선택</option>';
    balanceColleges.forEach((college) => {
      const option = document.createElement('option');
      option.value = college;
      option.textContent = college;
      majorSelect.appendChild(option);
    });
    majorSelect.classList.remove('hide');
    confirmBtn.classList.remove('hide');
    return;
  }

  if (dept === 'Free') {
    // 자유전공학부 → 단과대학 목록 띄우고 확인버튼 노출
    const freeColleges = [
      '인문과학대학',
      '사회과학대학',
      '경영경제대학',
      '호텔관광대학',
      '생명과학대학',
      '자연과학대학',
      '공과대학',
      '인공지능융합대학',
    ];
    majorSelect.innerHTML = '<option value="">단과대학 선택</option>';
    freeColleges.forEach((college) => {
      const option = document.createElement('option');
      option.value = college;
      option.textContent = college;
      majorSelect.appendChild(option);
    });
    majorSelect.classList.remove('hide');
    confirmBtn.classList.remove('hide');
    return;
  }

  // 세부전공이 있는 학과/년도면 세부전공 목록 띄우기
  if (detailedMajors[dept] && detailedMajors[dept][year]) {
    majorSelect.innerHTML = '<option value="">세부전공 선택</option>';
    detailedMajors[dept][year].forEach((m) => {
      const option = document.createElement('option');
      option.value = m;
      option.textContent = m;
      majorSelect.appendChild(option);
    });
    majorSelect.classList.remove('hide');
    confirmBtn.classList.add('hide');
  } else {
    // 세부전공 없으면 확인버튼 바로 노출
    majorSelect.classList.add('hide');
    confirmBtn.classList.remove('hide');
  }
});

// 세부전공 선택 시 확인 버튼 노출
majorSelect.addEventListener('change', () => {
  const val = majorSelect.value;
  if (val) {
    confirmBtn.classList.remove('hide');
  } else {
    confirmBtn.classList.add('hide');
  }
});

// 확인 버튼 클릭 시 커리큘럼 불러오기
confirmBtn.addEventListener('click', () => {
  const dept = deptSelect.value;
  const year = yearSelect.value;
  const major = majorSelect.value;
  let title = '';
  let path = '';

  if (dept === 'Free' || dept === 'pick') {
    // 자유전공 or 균형선택
    if (!major) {
      alert('단과대학을 선택해주세요.');
      return;
    }
    title = `${major} ${year}학년도 교과과정`;
    path = `departments/${year}/${dept}_${major}.json`;
  } else if (detailedMajors[dept] && detailedMajors[dept][year]) {
    // 세부전공 선택 없으면 못 넘어감. 세부전공이 선택된 경우
    if (major) {
      title = `${major} ${year}학년도 교과과정`;
      path = `departments/${year}/${dept}_${major}.json`;
    } else {
      alert('세부전공을 선택해주세요.');
      return;
    }
  } else {
    // 세부전공 없는 경우
    title = `${deptNames[dept]} ${year}학년도 교과과정`;
    path = `departments/${year}/${dept}.json`;
  }

  pageTitle.textContent = title;
  curriculumContainer.textContent = '로딩 중...';

  fetch(encodeURI(path))
    .then((res) => res.json())
    .then((data) => renderCurriculum(data.curriculum, data.notice))
    .catch(() => {
      curriculumContainer.textContent = '데이터를 불러오지 못했습니다.';
    });
});

function renderCurriculum(curriculumData, noticeText = '') {
  // 공지사항 먼저 출력
  curriculumContainer.innerHTML = '';

  if (noticeText) {
    curriculumContainer.innerHTML += `
    <div class="notice" style="padding: 10px; margin-bottom: 10px; background-color: #f9f3c3; border-left: 5px solid #e0c200; white-space: pre-line;">
      ${noticeText}
    </div>
  `;
  }

  // 균형교양선택 등 (연도/학기 없이 단순 목록)
  if (
    Array.isArray(curriculumData) &&
    curriculumData.every((item) => item.name && item.credits && item.type)
  ) {
    curriculumContainer.innerHTML += `
      <table>
        <thead>
          <tr><th>영역</th><th>과목명</th><th>학점</th></tr>
        </thead>
        <tbody>
          ${curriculumData
            .map(
              (course) => `
            <tr>
              <td>${course.type}</td>
              <td>${course.name}</td>
              <td>${course.credits}</td>
            </tr>
          `
            )
            .join('')}
        </tbody>
      </table>
    `;
    return;
  }

  // 일반 커리큘럼 (연도/학기 있는 경우)
  curriculumContainer.innerHTML += curriculumData
    .map(
      (entry) => `
    <div class="curriculum-item">
      <h2>${entry.year}학년 ${entry.semester}학기</h2>
      <table>
        <thead>
          <tr><th>구분</th><th>과목명</th><th>학점</th></tr>
        </thead>
        <tbody>
          ${entry.courses
            .map(
              (course) => `
            <tr>
              <td>${course.type}</td>
              <td>${course.name}</td>
              <td>${course.credits}</td>
            </tr>
          `
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `
    )
    .join('');
}
