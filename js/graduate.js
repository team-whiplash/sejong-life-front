// 통합된 graduate.js
const colleges = {
            인문과학대학: ['korean', 'japanese', 'english', 'chinese', 'history', 'education'],
            사회과학대학: ['administration', 'media', 'law'],
            경영경제대학: ['business', 'economics'],
            호텔관광대학: ['hotel', 'foodservice', 'franchise', 'biz', 'culinary'],
            생명과학대학: ['biosystem', 'smartbio'],
            예체능대학: ['painting', 'fashion', 'music', 'sports', 'dance', 'film'],
            공과대학: ['Mechanical_Engineering', 'Aerospace', 'Nano', 'Nuclear', 'Construction', 'Department_of_Civil', 'environment', 'energy', 'Defense', 'Architecture'],
            인공지능융합대학: ['Computer', 'Information', 'Data_Science', 'AI_electronic', 'Semiconductor', 'AI_Robot', 'Software', 'creative', 'cyber','intelligent'],
            자연과학대학: ['math', 'Physics', 'Chemistry'],
            대양휴머니티칼리지: ['Free', 'pick']
        };

        const deptNames = {
            korean: '국어국문학과', japanese: '일어일문학과', english: '영어영문학과', chinese: '중국통상학과', history: '역사학과', education: '교육학과',
            administration: '행정학과', media: '미디어커뮤니케이션학과', law: '법학과',
            business: '경영학과', economics: '경제학과',
            hotel: '호텔관광경영학과', foodservice: '외식경영학과', franchise: '호텔외식관광프랜차이즈경영학과', biz: '호텔외식비즈니스학과', culinary: '글로벌조리학과',
            biosystem: '생명시스템학부', smartbio: '스마트생명산업융합학과',
            painting: '회화과', fashion: '패션디자인학과', music: '음악과', sports: '체육학과', dance: '무용과', film: '영화예술학과',
            Mechanical_Engineering: '기계공학과', Aerospace: '우주항공시스템공학부', Nano: '나노신소재공학과', Nuclear: '양자원자력공학과',
            Construction: '건축공학과', Department_of_Civil: '건설환경공학과', environment: '환경융합공학과', energy: '지구자원시스템공학과(전 에너지자원공학과)', Defense: '국방시스템공학과', Architecture: '건축학과',
            Computer: '컴퓨터공학과', Information: '정보보호학과', Data_Science: '인공지능데이터사이언스학과', AI_electronic: 'AI융합전자공학과', Semiconductor: '반도체시스템공학과', AI_Robot: 'AI로봇학과', Software: '콘텐츠소프트웨어학과', creative: '창의소프트학부', cyber: '사이버국방학과',
            math: '수학통계학과', Physics: '물리천문학과', Chemistry: '화학과',
            Free: '자유전공학부', pick: '균형교양선택(2022 ~ 2025학년도)', intelligent : '지능정보융합학과',
        };

        const majors = {
            math: {
                years: [2019, 2020, 2021],
                majors: {
                    수학전공: 'mathmajor',
                    응용통계학전공: 'statmajor'
                },
            },
            'AI_Robot': {
                years: [2019, 2020, 2021, 2022],
                majors: {
                    스마트기기전공: 'smart',
                    무인이동체공학전공: 'drone'
                },
            },
            creative: {
                years: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
                majors: {
                    디자인이노베이션전공: 'design',
                    만화애니메이션텍전공: 'cartoon'
                }
            }
        };

        const collegeMenu = document.getElementById('college-menu');
        const deptMenu = document.getElementById('dept-menu');
        const curriculumContainer = document.getElementById('curriculum-container');
        const pageTitle = document.getElementById('page-title');

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
            pageTitle.textContent = deptNames[dept];

            if (dept === 'pick') {
        curriculumContainer.innerHTML = `
            <h2>계열별필수·균형교양 과목 이수 (2022~2025학년도)</h2>
            <table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
                <thead>
                    <tr>
                        <th>영역</th>
                        <th>과목명</th>
                        <th>학점</th>
                        <th>제외 계열</th>
                        <th>이수시기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td rowspan="4">역사와 사상</td><td>동서양의사상과윤리</td><td>3</td><td rowspan="4">인문과학</td><td rowspan="13">2~4학년</td></tr>
                    <tr><td>성서와기독교</td><td>3</td></tr>
                    <tr><td>세계사</td><td>3</td></tr>
                    <tr><td>한국현대사</td><td>3</td></tr>

                    <tr><td rowspan="4">자연과 과학</td><td>생명과학의이해</td><td>3</td><td rowspan="4">자연과학, 생명과학, 지적정보공학, 소프트웨어융합, 공과</td></tr>
                    <tr><td>수의체계</td><td>3</td></tr>
                    <tr><td>지구환경과기후변화</td><td>3</td></tr>
                    <tr><td>정보기술과로봇시대</td><td>3</td></tr>

                    <tr><td rowspan="3">경제와 사회</td><td>경제학</td><td>3</td><td rowspan="3">사회과학, 경영경제, 호텔관광</td></tr>
                    <tr><td>미디어법과방송</td><td>3</td></tr>
                    <tr><td>현대사회와법</td><td>3</td></tr>

                    <tr><td rowspan="3">문화와 예술</td><td>융합예술의이해</td><td>3</td><td rowspan="3">예체능</td></tr>
                    <tr><td>디지털기술과메타버스</td><td>3</td></tr>
                    <tr><td>현대미술이해</td><td>3</td></tr>

                    <tr><td colspan="2"><strong>계</strong></td><td>9</td><td colspan="2"></td></tr>
                </tbody>
            </table>
            <p style="margin-top: 10px;">
                ※ 단, 소프트웨어융합대학 창의소프트학부(디자인이노베이션전공, 만화애니메이션텍전공)은 ‘문화와예술’ 영역 제외
            </p>
        `;
        return;
    }

            if (dept === 'Free') {
                const faculties = [
                    '인문과학대학', '사회과학대학', '경영경제대학', '호텔관광대학',
                    '생명과학대학', '자연과학대학', '공과대학', '인공지능융합대학'
                ];

                const facultyMenu = document.createElement('div');
                facultyMenu.style.display = 'flex';
                facultyMenu.style.gap = '10px';
                facultyMenu.style.margin = '20px 0';

                faculties.forEach((faculty) => {
                    const btn = document.createElement('button');
                    btn.textContent = faculty;

                    btn.addEventListener('click', () => {
                        curriculumContainer.innerHTML = '';
                        const yearBtn = document.createElement('button');
                        yearBtn.textContent = '2025학년도';
                        yearBtn.addEventListener('click', () => {
                            fetch(`./departments/2025/Free_${faculty}.json`)
                                .then(res => res.json())
                                .then(data => {
                                    pageTitle.textContent = `자유전공학부 - ${faculty} 2025학년도 교과과정`;
                                    renderCurriculum(data.curriculum);
                                })
                                .catch(() => curriculumContainer.textContent = '데이터를 불러오지 못했습니다.');
                        });
                        curriculumContainer.appendChild(yearBtn);
                    });

                    facultyMenu.appendChild(btn);
                });

                curriculumContainer.appendChild(facultyMenu);
                return;
            }

            const yearMenu = document.createElement('div');
            yearMenu.style.margin = '20px 0';
            yearMenu.style.display = 'flex';
            yearMenu.style.gap = '10px';

            let validYears = [];
            if (dept === 'pick') {
                validYears = [2022, 2023, 2024, 2025];
            } else if (dept === 'Free') {
                validYears = [2025];
            } else if (dept === 'Aerospace') {
                validYears = [2019, 2020, 2021, 2022, 2023, 2024, 2025];
            } else if (dept === 'Semiconductor') 
            {
                validYears = [2023, 2024, 2025];

            } 
            else if (dept === 'cyber') {
                validYears = [2025];
            }
            
            else {
                validYears = Array.from({ length: 7 }, (_, i) => 2019 + i);
            }

            validYears.forEach((year) => {
                const yearBtn = document.createElement('button');
                yearBtn.textContent = `${year}학년도`;

                yearBtn.addEventListener('click', () => {
                    curriculumContainer.innerHTML = '';

                    if (dept === 'Aerospace') {
                        const majorsAero = {
                            space: { name: '우주항공공학전공', years: [2019, 2020, 2021, 2022, 2023, 2024, 2025] },
                            air: { name: '항공시스템공학전공', years: [2019, 2020, 2021, 2022, 2023, 2024, 2025] },
                            mix: { name: '지능형드론융합전공', years: [2024, 2025] }
                        };

                        const majorMenu = document.createElement('div');
                        majorMenu.style.display = 'flex';
                        majorMenu.style.gap = '10px';
                        majorMenu.style.margin = '10px 0';

                        for (const [code, info] of Object.entries(majorsAero)) {
                            if (info.years.includes(year)) {
                                const btn = document.createElement('button');
                                btn.textContent = info.name;
                                btn.addEventListener('click', () => {
                                    fetch(`./departments/${year}/${dept}_${code}.json`)
                                        .then(res => res.json())
                                        .then(data => {
                                            pageTitle.textContent = `${data.department} (${info.name}) ${year}학년도 교과과정`;
                                            renderCurriculum(data.curriculum);
                                        })
                                        .catch(() => curriculumContainer.textContent = '전공 데이터를 불러오지 못했습니다.');
                                });
                                majorMenu.appendChild(btn);
                            }
                        }

                        curriculumContainer.appendChild(majorMenu);
                        return;
                    }

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
                                    .then(res => res.json())
                                    .then(data => {
                                        pageTitle.textContent = `${data.department} (${majorName}) ${year}학년도 교과과정`;
                                        renderCurriculum(data.curriculum);
                                    })
                                    .catch(() => curriculumContainer.textContent = '전공 데이터를 불러오지 못했습니다.');
                            });

                            majorMenu.appendChild(majorBtn);
                        }

                        curriculumContainer.appendChild(majorMenu);
                    } else {
                        fetch(`./departments/${year}/${dept}.json`)
                            .then(res => res.json())
                            .then(data => {
                                pageTitle.textContent = `${data.department} ${year}학년도 교과과정`;
                                renderCurriculum(data.curriculum);
                            })
                            .catch(() => curriculumContainer.textContent = '학과 데이터를 불러오지 못했습니다.');
                    }
                });

                yearMenu.appendChild(yearBtn);
            });

            curriculumContainer.appendChild(yearMenu);
        }

        function renderCurriculum(curriculumData) {
            curriculumContainer.innerHTML += curriculumData.map((entry) => `
                <div class="curriculum-item">
                    <h2>${entry.year}학년 ${entry.semester}학기</h2>
                    <table>
                        <thead>
                            <tr><th>구분</th><th>과목명</th><th>학점</th></tr>
                        </thead>
                        <tbody>
                            ${entry.courses.map((course) => `
                                <tr>
                                    <td>${course.type}</td>
                                    <td>${course.name}</td>
                                    <td>${course.credits}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `).join('');
        }

        createCollegeButtons();