const colleges = {
    "인문과학대학": ["korean", "japanese", "english", "chinese", "history", "education"],
    "사회과학대학": ["administration", "media", "law"],
    "경영경제대학": ["business", "economics"],
    "호텔관광대학": ["hotel", "foodservice", "franchise", "biz", "culinary"],
    "생명과학대학": ["biosystem", "smartbio"],
    "예체능대학": ["painting", "fashion", "music", "sports", "dance", "film"]
};

const deptNames = {
    "korean": "국어국문학과",
    "japanese": "일어일문학과",
    "english": "영어영문학과",
    "chinese": "중국통상학과",
    "history": "역사학과",
    "education": "교육학과",
    "administration": "행정학과",
    "media": "미디어커뮤니케이션학과",
    "law": "법학과",
    "business": "경영학과",
    "economics": "경제학과",
    "hotel": "호텔관광경영학과",
    "foodservice": "외식경영학과",
    "franchise": "호텔외식관광프랜차이즈경영학과",
    "biz": "호텔외식비즈니스학과",
    "culinary": "글로벌조리학과",
    "biosystem": "생명시스템학부",
    "smartbio": "스마트생명산업융합학과",
    "painting": "회화과",
    "fashion": "패션디자인학과",
    "music": "음악과",
    "sports": "체육학과",
    "dance": "무용과",
    "film": "영화예술학과"
};

const collegeMenu = document.getElementById('college-menu');
const deptMenu = document.getElementById('dept-menu');
const curriculumContainer = document.getElementById('curriculum-container');

function createCollegeButtons() {
    for (const college in colleges) {
        const btn = document.createElement('button');
        btn.textContent = college;
        btn.addEventListener('click', () => showDepartments(college));
        collegeMenu.appendChild(btn);
    }
}

function showDepartments(college) {
    deptMenu.style.display = 'flex';
    deptMenu.innerHTML = '';
    curriculumContainer.innerHTML = '';
    colleges[college].forEach(dept => {
        const btn = document.createElement('button');
        btn.textContent = deptNames[dept];
        btn.addEventListener('click', () => loadDepartment(dept));
        deptMenu.appendChild(btn);
    });
}

function loadDepartment(dept) {
    fetch(`./departments/${dept}.json`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('page-title').textContent = `${data.department} 교과과정`;
            curriculumContainer.innerHTML = '';

            data.curriculum.forEach(entry => {
                const item = document.createElement('div');
                item.classList.add('curriculum-item');

                const title = document.createElement('h2');
                title.textContent = `${entry.year}학년 ${entry.semester}학기`;
                item.appendChild(title);

                const table = document.createElement('table');
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>구분</th>
                            <th>과목명</th>
                            <th>학점</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${entry.courses.map(course => `
                            <tr>
                                <td>${course.type}</td>
                                <td>${course.name}</td>
                                <td>${course.credits}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                `;
                item.appendChild(table);
                curriculumContainer.appendChild(item);
            });
        })
        .catch(err => {
            curriculumContainer.textContent = "데이터를 불러오지 못했습니다.";
            console.error(err);
        });
}

createCollegeButtons();
