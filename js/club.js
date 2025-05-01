const clubs = [
    { name: "죽순회", desc: "다양한 경험을 접할 수 있는 세종대 중앙 봉사 동아리.", category: "봉사/친목/대외활동" },
    { name: "한울림", desc: "세종대학교 클래식기타 중앙동아리.", category: "기타" },
    { name: "세종문학회", desc: "회비 없는 중앙 문학 동아리.", category: "기타" },
    { name: "CCC", desc: "세종대 중앙 기독교 연합 동아리.", category: "봉사/친목/대외활동" },
    { name: "IVF", desc: "세종대학교 기독교 중앙동아리.", category: "종교" },
    { name: "JYM", desc: "세종대학교 중앙 기독교 연합 선교 동아리.", category: "봉사/친목/대외활동" },
    { name: "레지나", desc: "세종대학교 중앙 가톨릭 동아리.", category: "종교" },
    { name: "발파람", desc: "세종대 중앙 태권 동아리.", category: "체육/레저" },
    { name: "산악부", desc: "세종대 중앙 산악 동아리.", category: "체육/레저" },
    { name: "ESCAPER", desc: "세종대 주짓수 동아리.", category: "기타" },
    { name: "롤링세종", desc: "세종대 볼링 동아리.", category: "기타" },
    { name: "세종스키", desc: "한국대학스키연맹(KUSTA) 소속 세종대 중앙 스키 동아리.", category: "체육/레저" },
    { name: "FC해레본", desc: "세종대 중앙 축구 동아리.", category: "체육/레저" },
    { name: "판도라큐브", desc: "게임 제작에 대해 배우고 공부하는 학술 동아리.", category: "학술/전공 연계" },
    { name: "세종극회", desc: "세종대학교 중앙 연극 동아리.", category: "공연/예술/문화" },
    { name: "NODE", desc: "자동화 프로젝트와 빠른 검증 가능한 소규모 프로젝트를 중심적으로 기획, 개발하는 학술 동아리.", category: "학술/전공 연계" },
    { name: "INTRO", desc: "세종대학교 중앙 힙합 동아리.", category: "공연/예술/문화" },
    { name: "ZIUM", desc: "세종대 아마추어 오케스트라.", category: "공연/예술/문화" },
    { name: "En#", desc: "IT 개발 학술 동아리.", category: "학술/전공 연계" },
    { name: "THE BLACK", desc: "2006년 설립된 중앙 보컬 동아리.", category: "공연/예술/문화" },
    { name: "세종서회", desc: "세종대학교 중앙 서예 동아리.", category: "공연/예술/문화" },
    { name: "인터페이스", desc: "중앙 학술 프로그래밍 동아리.", category: "학술/전공 연계" },
    { name: "Prompt", desc: "AI 융합전자공학과 동아리로, 인공지능, 머신러닝, 임베디드 시스템에 관심 있는 학술 동아리.", category: "학술/전공 연계" },
    { name: "터벌림", desc: "올해 42주년을 맞는 풍물 동아리.", category: "기타" },
    { name: "MASTER", desc: "세종대학교 중앙 보드게임 동아리.", category: "기타" },
    { name: "SJYC", desc: "세종대 중앙동아리 요트부.", category: "체육/레저" },
    { name: "무붕", desc: "인공지능융합대학 소속 밴드 동아리.", category: "공연/예술/문화" },
    { name: "THE EYES", desc: "세종대학교 환경 동아리.", category: "기타" },
    { name: "셀스(SELS)", desc: "초등학생 대상 영어 교육 봉사 동아리.", category: "봉사/친목/대외활동" },
    { name: "늘햄코러스", desc: "중앙 우수 밴드 동아리.", category: "공연/예술/문화" },
    { name: "S.S.G", desc: "정보보호 학술 동아리.", category: "학술/전공 연계" },
    { name: "RUSH", desc: "세종대 중앙 농구 동아리.", category: "체육/레저" },
    { name: "SECLZ", desc: "세종대 클라이밍 동아리.", category: "체육/레저" },
    { name: "UNSA", desc: "유엔한국협회(UNA) 산하 단체로, 국내 최대 연합 동아리 단체.", category: "봉사/친목/대외활동" },
    { name: "세종 로타랙트", desc: "국제 로타리클럽 산하 대학생 연합 봉사 동아리.", category: "봉사/친목/대외활동" },
    { name: "SOULTRAIN", desc: "중앙 흑인 음악 동아리.", category: "공연/예술/문화" },
    { name: "밤부", desc: "세종대 사진 중앙 동아리.", category: "공연/예술/문화" },
    { name: "세종투자연구회", desc: "세종대 주식투자 중앙 동아리.", category: "기타" },
    { name: "유마프렌", desc: "마케팅 중앙동아리.", category: "학술/전공 연계" },
    { name: "LIFRARY", desc: "생명과학과 관련된 여러 학술 활동과 정보 탐색 및 공유를 중점으로 하는 학술 동아리.", category: "학술/전공 연계" },
    { name: "RUDDER", desc: "로켓, RC항공기 제작 소모임.", category: "학술/전공 연계" },
    { name: "Sound Plus", desc: "세종대학교 중앙 밴드 동아리.", category: "공연/예술/문화" },
    { name: "PAGE7", desc: "세종대 유일 중앙 락밴드 동아리.", category: "공연/예술/문화" },
    { name: "TODO", desc: "세종대 액티비티 동아리.", category: "기타" },
    { name: "SMARCLE", desc: "AI로봇학과 인공지능 응용 학술동아리.", category: "학술/전공 연계" },
    { name: "별무리", desc: "교내유일 천문관측 중앙동아리.", category: "기타" },
    { name: "STC", desc: "세종대 테니스 동아리.", category: "체육/레저" },
    { name: "MESH", desc: "전공 학술 발표, 스터디, 진로 세미나 등을 진행하는 나노신소재공학부 학술동아리.", category: "학술/전공 연계" },
    { name: "JUMP", desc: "세종대 스노우보드 중앙 동아리.", category: "체육/레저" },
    { name: "TSP", desc: "세종대 탁구 중앙 동아리.", category: "체육/레저" },
    { name: "NinesiX", desc: "세종대학교 단과대 연합 댄스동아리.", category: "봉사/친목/대외활동" },
    { name: "Foogle", desc: "식품 산업을 탐구하고 연구하는 식품생명공학전공 유일한 학술동아리.", category: "학술/전공 연계" },
    { name: "SAI", desc: "세종대학교 중앙 인공지능 동아리.", category: "학술/전공 연계" },
    { name: "세종킹스", desc: "세종대 유일 중앙 야구 동아리.", category: "체육/레저" },
    { name: "한손", desc: "세종대학교 중앙 만화 동아리.", category: "공연/예술/문화" },
    { name: "유스 호스텔", desc: "세종대학교 중앙 여행 동아리.", category: "취미/기타" },
    { name: "아룸", desc: "기획, 디자인, 개발, 코딩테스트 준비 및 프로젝트를 중심으로 운영되는 학술 동아리.", category: "학술/전공 연계" },
    { name: "세콕세콕", desc: "세종대 배드민턴 동아리.", category: "체육/레저" },
    { name: "그리디", desc: "IT 프로그래밍 동아리.", category: "학술/전공 연계" },
    { name: "두바퀴", desc: "세종대 오토바이 동아리.", category: "체육/레저" },
    { name: "MIS", desc: "세종대학교 중앙 문화·친목 동아리.", category: "봉사/친목/대외활동" },
    { name: "G:low", desc: "한국인, 외국인 학생들과 함께 한류에 대한 주제 탐구와 연구 및 문화 체험 활동을 하는 학술 동아리.", category: "공연/예술/문화" }
  ];
  
  let currentCategory = "전체";
  let currentPage = 1;
  const itemsPerPage = 20;
  
  function filterClubs(category) {
    currentCategory = category;
    currentPage = 1;
    renderClubs();
  }
  
  function renderClubs() {
    const list = document.getElementById("club-list");
    list.innerHTML = "";
  
    const filtered = currentCategory === "전체"
      ? clubs
      : clubs.filter(club => club.category === currentCategory);
  
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filtered.slice(start, end);
  
    for (const club of pageItems) {
      const card = document.createElement("div");
      card.className = "club-card";
      card.innerHTML = `<h3>${club.name}</h3><p>${club.desc}</p>`;
      list.appendChild(card);
    }
  
    // 페이지 정보 업데이트
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    document.getElementById("page-info").textContent = `${currentPage} / ${totalPages}`;
    document.querySelector("#pagination button:first-child").disabled = currentPage === 1;
    document.querySelector("#pagination button:last-child").disabled = currentPage === totalPages;
  }
  
  function nextPage() {
    currentPage++;
    renderClubs();
  }
  
  function prevPage() {
    currentPage--;
    renderClubs();
  }
  
  renderClubs();
  