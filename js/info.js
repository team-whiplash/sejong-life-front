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
    if (!contactList) return;
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

// 지도 렌더링
function renderCampusMap() {
    const sejongLatLng = new kakao.maps.LatLng(37.550434, 127.073193);
    const container = document.getElementById('map');

    const options = {
        center: sejongLatLng,
        level: 3,
    };

    const map = new kakao.maps.Map(container, options);

    const marker = new kakao.maps.Marker({
        position: sejongLatLng,
        map: map,
        title: '세종대학교',
    });

    const infowindow = new kakao.maps.InfoWindow({
        content: '<div style="padding:5px;font-size:14px;">세종대학교</div>',
    });

    kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

// 초기 실행
window.onload = () => {
    renderContactList();
    renderCampusMap();

    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderContactList(e.target.value);
        });
    }
};
