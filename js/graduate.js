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
    생명과학대학: ['biosystem', 'smartbio', 'bioconverge', 'foodbio'],
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
        'creative',
        'cyber',
        'intelligent',
    ],
    자연과학대학: ['math', 'Physics', 'Chemistry'],
    대양휴머니티칼리지: ['Free', 'pick'],
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
    biosystem: '바이오산업자원공학과',
    bioconverge: '바이오융합공학과',
    foodbio: '식품생명공학과',
    smartbio: '스마트생명산업융합학과',
    painting: '회화과',
    fashion: '패션디자인학과',
    music: '음악과',
    sports: '체육학과',
    dance: '무용과',
    film: '영화예술학과',
    Mechanical_Engineering: '기계공학과',
    Aerospace: '우주항공시스템공학부',
    Nano: '나노신소재공학과',
    Nuclear: '양자원자력공학과',
    Construction: '건축공학과',
    Department_of_Civil: '건설환경공학과',
    environment: '환경융합공학과',
    energy: '지구자원시스템공학과(전 에너지자원공학과)',
    Defense: '국방시스템공학과',
    Architecture: '건축학과',
    Computer: '컴퓨터공학과',
    Information: '정보보호학과',
    Data_Science: '인공지능데이터사이언스학과',
    AI_electronic: 'AI융합전자공학과',
    Semiconductor: '반도체시스템공학과',
    AI_Robot: 'AI로봇학과',
    Software: '콘텐츠소프트웨어학과',
    creative: '창의소프트학부',
    cyber: '사이버국방학과',
    math: '수학통계학과',
    Physics: '물리천문학과',
    Chemistry: '화학과',
    Free: '자유전공학부',
    pick: '균형교양선택(2022 ~ 2025학년도)',
    intelligent: '지능정보융합학과',
};

const pageTitle = document.getElementById('page-title');
const collegeSelect = document.getElementById('college-select');
const deptSelect = document.getElementById('dept-select');
const yearSelect = document.getElementById('year-select');
const confirmBtn = document.getElementById('confirm-btn');
const curriculumContainer = document.getElementById('curriculum-container');

// ✅ 단과대 셀렉트 옵션 추가
for (const college in colleges) {
    const option = document.createElement('option');
    option.value = college;
    option.textContent = college;
    collegeSelect.appendChild(option);
}

// ✅ 단과대 선택 시 학과 로딩
collegeSelect.addEventListener('change', () => {
    const selectedCollege = collegeSelect.value;

    deptSelect.innerHTML = '<option value="">학과 선택</option>';
    yearSelect.innerHTML = '<option value="">년도 선택</option>';
    deptSelect.classList.add('hide');
    yearSelect.classList.add('hide');
    confirmBtn.classList.add('hide');
    curriculumContainer.innerHTML = '';
    pageTitle.textContent = '교과과정'; // 페이지 타이틀 초기화
    if (selectedCollege && colleges[selectedCollege]) {
        colleges[selectedCollege].forEach((dept) => {
            const option = document.createElement('option');
            option.value = dept;
            option.textContent = deptNames[dept] || dept;
            deptSelect.appendChild(option);
        });
        deptSelect.classList.remove('hide');
    }
});

// ✅ 학과 선택 시 연도 셀렉트 활성화
deptSelect.addEventListener('change', () => {
    const selectedDept = deptSelect.value;
    yearSelect.innerHTML = '<option value="">년도 선택</option>';
    yearSelect.classList.add('hide');
    confirmBtn.classList.add('hide');
    curriculumContainer.innerHTML = '';
    pageTitle.textContent = '교과과정'; // 페이지 타이틀 초기화
    if (selectedDept) {
        let validYears = [];

        if (selectedDept === 'pick') validYears = [2022, 2023, 2024, 2025];
        else if (selectedDept === 'Free') validYears = [2025];
        else if (selectedDept === 'Semiconductor')
            validYears = [2023, 2024, 2025];
        else validYears = Array.from({ length: 7 }, (_, i) => 2019 + i);

        validYears.forEach((year) => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = `${year}학년도`;
            yearSelect.appendChild(option);
        });

        yearSelect.classList.remove('hide');
    }
});

// ✅ 연도 선택 시 확인 버튼 표시
yearSelect.addEventListener('change', () => {
    if (yearSelect.value) {
        confirmBtn.classList.remove('hide');
    } else {
        confirmBtn.classList.add('hide');
    }
    pageTitle.textContent = '교과과정'; // 페이지 타이틀 초기화
});

// ✅ 확인 버튼 클릭 시 학과 정보 로드
// 확인 버튼 클릭 이벤트
confirmBtn.addEventListener('click', () => {
    const selectedDept = deptSelect.value;
    const selectedYear = yearSelect.value;

    if (!selectedDept || !selectedYear) {
        alert('학과와 년도를 모두 선택해주세요.');
        return;
    }

    fetch(`./departments/${selectedYear}/${selectedDept}.json`)
        .then((res) => res.json())
        .then((data) => {
            pageTitle.textContent = `${data.department} ${selectedYear}학년도 교과과정`;
            renderCurriculum(data.curriculum);
        })
        .catch((err) => {
            console.error(err);
            curriculumContainer.innerHTML =
                '<p style="text-align: center; margin-top: 20px;">데이터를 불러오지 못했습니다.</p>';
        });
});

// ✅ 커리큘럼 렌더링
function renderCurriculum(curriculumData) {
    curriculumContainer.innerHTML = curriculumData
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
