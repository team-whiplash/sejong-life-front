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

document.addEventListener('DOMContentLoaded', () => {
  console.log('meal.js loaded');

  initEventListeners();
  renderStores();
});
