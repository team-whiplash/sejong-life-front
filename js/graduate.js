// 통합된 graduate.js
const colleges = {
    인문과학대학: [
        'korean',
        'japanese',
        'english',
        'chinese',
        'history',
        'education',
    ],
    사회과학대학: ['administration', 'media', 'law'],
    경영경제대학: ['business', 'economics'],
    호텔관광대학: ['hotel', 'foodservice', 'franchise', 'biz', 'culinary'],
    생명과학대학: ['biosystem', 'smartbio'],
    예체능대학: ['painting', 'fashion', 'music', 'sports', 'dance', 'film'],
    공과대학: [
        'Mechanical_Engineering',
        'Aerospace',
        'Nano',
        'Nuclear',
        'Construction',
        'Department_of_Civil',
        'environment',
        'energy',
        'Defense',
        'Architecture',
    ],
    인공지능융합대학: [
        'Computer',
        'Information',
        'Data_Science',
        'AI_electronic',
        'Semiconductor',
        'AI_Robot',
        'Software',
    ],
    자연과학대학: ['math', 'Physics', 'Chemistry'],
    대양휴머니티칼리지: ['Free'],
};

const deptNames = {
    korean: '국어국문학과',
    japanese: '일어일문학과',
    english: '영어영문학과',
    chinese: '중국통상학과',
    history: '역사학과',
    education: '교육학과',
    administration: '행정학과',
    media: '미디어커뮤니케이션학과',
    law: '법학과',
    business: '경영학과',
    economics: '경제학과',
    hotel: '호텔관광경영학과',
    foodservice: '외식경영학과',
    franchise: '호텔외식관광프랜차이즈경영학과',
    biz: '호텔외식비즈니스학과',
    culinary: '글로벌조리학과',
    biosystem: '생명시스템학부',
    smartbio: '스마트생명산업융합학과',
    painting: '회화과',
    fashion: '패션디자인학과',
    music: '음악과',
    sports: '체육학과',
    dance: '무용과',
    film: '영화예술학과',
    Mechanical_Engineering: '기계공학과',
    Aerospace: '항공우주공학과',
    Nano: '나노신소재공학과',
    Nuclear: '양자원자력공학과',
    Construction: '건축공학과',
    Department_of_Civil: '건설환경공학과',
    environment: '환경융합공학과',
    energy: '지구자원시스템공학과(전 에너지자원공학과)',
    Defense: '국방시스템공학과',
    math: '수학통계학과',
    Computer: '컴퓨터공학과',
    Information: '정보보호학과',
    Architecture: '건축학과',
    Data_Science: '인공지능데이터사이언스학과',
    Physics: '물리천문학과',
    Chemistry: '화학과',
    AI_electronic: 'AI융합전자공학과',
    Semiconductor: '반도체시스템공학과',
    AI_Robot: 'AI로봇학과',
    Software: '콘텐츠소프트웨어학과',
    Free: '자유전공',
};

const majors = {
    math: {
        years: [2019, 2020, 2021],
        majors: {
            수학전공: 'mathmajor',
            응용통계학전공: 'statmajor',
        },
    },
    'AI Robot': {
        years: [2019, 2020, 2021, 2022],
        majors: {
            스마트기기전공: 'smart',
            무인이동체공학전공: 'drone',
        },
    },
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
    colleges[college].forEach((dept) => {
        const btn = document.createElement('button');
        btn.textContent = deptNames[dept];
        btn.addEventListener('click', () => loadDepartment(dept));
        deptMenu.appendChild(btn);
    });
}

function loadDepartment(dept) {
    curriculumContainer.innerHTML = '';

    const yearMenu = document.createElement('div');
    yearMenu.id = 'year-menu';
    yearMenu.style.margin = '20px 0';
    yearMenu.style.display = 'flex';
    yearMenu.style.gap = '10px';

    for (let year = 2019; year <= 2025; year++) {
        const yearBtn = document.createElement('button');
        yearBtn.textContent = `${year}학년도`;

        yearBtn.addEventListener('click', () => {
            curriculumContainer.innerHTML = '';
            const pageTitle = document.getElementById('page-title');

            if (majors[dept] && majors[dept].years.includes(year)) {
                const majorMenu = document.createElement('div');
                majorMenu.style.margin = '10px 0';
                majorMenu.style.display = 'flex';
                majorMenu.style.gap = '10px';

                for (const majorName in majors[dept].majors) {
                    const majorCode = majors[dept].majors[majorName];
                    const majorBtn = document.createElement('button');
                    majorBtn.textContent = majorName;

                    majorBtn.addEventListener('click', () => {
                        fetch(`./departments/${year}/${dept}_${majorCode}.json`)
                            .then((res) => res.json())
                            .then((data) => {
                                pageTitle.textContent = `${data.department} (${majorName}) ${year}학년도 교과과정`;
                                renderCurriculum(data.curriculum);
                            })
                            .catch((err) => {
                                curriculumContainer.textContent =
                                    '해당 전공 데이터를 불러오지 못했습니다.';
                                console.error(err);
                            });
                    });

                    majorMenu.appendChild(majorBtn);
                }

                curriculumContainer.appendChild(majorMenu);
            } else {
                fetch(`./departments/${year}/${dept}.json`)
                    .then((res) => res.json())
                    .then((data) => {
                        pageTitle.textContent = `${data.department} ${year}학년도 교과과정`;
                        renderCurriculum(data.curriculum);
                    })
                    .catch((err) => {
                        curriculumContainer.textContent =
                            '해당 학년도 데이터를 불러오지 못했습니다.';
                        console.error(err);
                    });
            }
        });

        yearMenu.appendChild(yearBtn);
    }

    curriculumContainer.appendChild(yearMenu);
}

function renderCurriculum(curriculumData) {
    curriculumContainer.innerHTML += curriculumData
        .map((entry) => {
            return `
            <div class="curriculum-item">
                <h2>${entry.year}학년 ${entry.semester}학기</h2>
                <table>
                    <thead>
                        <tr>
                            <th>구분</th>
                            <th>과목명</th>
                            <th>학점</th>
                        </tr>
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
        `;
        })
        .join('');
}

createCollegeButtons();
