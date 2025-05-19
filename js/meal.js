let currentCategory = 'campus';
let currentType = 'cafe';

function renderStores() {
  const container = document.querySelector('.store-list');
  container.innerHTML = ''; // 초기화

  if (!window.mealData) {
    console.warn('mealData is undefined');
    return;
  }

  const filtered = mealData.filter(
    (item) => item.category === currentCategory && item.type === currentType
  );

  filtered.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'store';

    div.innerHTML = `
      <div class="store-card">
        <img src="${item.image}" alt="${
      item.name
    }" class="store-image" loading="lazy">
        <p class="store-name">${item.name}</p>
        <p class="store-position">${item.position}</p>
       
         <div class="hover-overlay">
          <p class="hover-title">${item.name}</p>
          <p class="hover-desc">${item.description || ''}</p>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

function initEventListeners() {
  document.querySelectorAll('.category-tabs .tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document
        .querySelectorAll('.category-tabs .tab')
        .forEach((el) => el.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.dataset.category;
      if (category) {
        currentCategory = category;
        renderStores();
      }
    });
  });

  document.querySelectorAll('.type-buttons .type-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document
        .querySelectorAll('.type-buttons .type-btn')
        .forEach((el) => el.classList.remove('selected'));
      btn.classList.add('selected');

      const type = btn.dataset.type;
      if (type) {
        currentType = type;
        renderStores();
      }
    });
  });
}

const getLunchRecommendation = () => {
  // 두 조건에 맞는 배열 나누기
  const campusList = mealData.filter(
    (item) => item.category === 'campus' && item.type === 'restaurant'
  );

  const offcampusList = mealData.filter(
    (item) => item.category === 'offcampus' && item.type === 'restaurant'
  );

  // 둘을 합친 전체 배열
  const total = [...campusList, ...offcampusList];

  if (total.length === 0) {
    console.warn('No lunch recommendation available');
    return null;
  }

  // 전체에서 하나 무작위 선택
  const randomIndex = Math.floor(Math.random() * total.length);
  return total[randomIndex];
};

function renderRecommendation(meal) {
  const container = document.getElementById('recommend-result');
  container.innerHTML = ''; // 초기화

  const wrapper = document.createElement('div');
  wrapper.className = 'recommend-card-wrapper';

  wrapper.innerHTML = `
    <div class="recommend-close-btn">×</div>
    <div class="store-card recommend-card">
      <div class="recommend-title">오늘의 점심 추천</div>
      <img class="store-image" src="${meal.image}" alt="${meal.name}">
      <p class="store-name">${meal.name}</p>
      <p class="store-position">${meal.position}</p>
    </div>
  `;

  container.appendChild(wrapper);

  // 닫기 버튼 기능
  const closeBtn = wrapper.querySelector('.recommend-close-btn');
  closeBtn.addEventListener('click', () => {
    container.innerHTML = '';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('meal.js loaded');

  // initEventListeners();
  // renderStores();

  const recommendBtn = document.getElementById('recommend-btn');
  if (recommendBtn) {
    recommendBtn.addEventListener('click', () => {
      const meal = getLunchRecommendation();
      if (meal) {
        renderRecommendation(meal);
      } else {
        alert('추천할 식당이 없습니다.');
      }
    });
  }

  initEventListeners();
  renderStores();
});
