// 교내 전화번호부 데이터
const contactData = {
    대학본부: [
        { name: '총장실', tel: '02-3408-3201' },
        { name: '학사지원과', tel: '02-3408-3026' },
        { name: '교무과', tel: '02-3408-3035' },
        { name: '재무과', tel: '02-3408-3020' },
    ],
    부대시설: [
        { name: '도서관', tel: '02-3408-3401' },
        { name: '학생회관', tel: '02-3408-3402' },
    ],
};

// 전화번호부 렌더링 함수
function renderContactList(filter = '') {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';

    for (const [category, contacts] of Object.entries(contactData)) {
        const section = document.createElement('div');
        section.className = 'contact-section';

        const title = document.createElement('h3');
        title.textContent = category;
        section.appendChild(title);

        const list = document.createElement('ul');
        contacts.forEach((contact) => {
            if (!filter || contact.name.includes(filter)) {
                const item = document.createElement('li');
                item.innerHTML = `<span>${contact.name}</span><a href="tel:${contact.tel}">${contact.tel}</a>`;
                list.appendChild(item);
            }
        });

        if (list.children.length > 0) {
            section.appendChild(list);
            contactList.appendChild(section);
        }
    }
}

// 지도 이미지만 렌더링 (마커 없음)
function renderCampusMap() {
    const map = document.getElementById('map');

    const img = document.createElement('img');
    img.src = 'assets/images/info/map.png'; // 지도 이미지 경로
    img.alt = '세종대학교 캠퍼스 지도';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.borderRadius = '8px';
    img.style.objectFit = 'cover';

    map.innerHTML = '';
    map.appendChild(img);
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    renderContactList();
    renderCampusMap();

    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderContactList(e.target.value);
        });
    }
});
