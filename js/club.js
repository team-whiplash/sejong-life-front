const clubs = [
    { name: "죽순회", desc: "다양한 경험을 접할 수 있는 세종대 중앙 봉사 동아리.", category: "봉사/친목/대외활동",img:"assets/images/club/juksun.jpg" },
    { name: "한울림", desc: "세종대학교 클래식기타 중앙동아리.", category: "공연/예술/문화" ,img:"assets/images/club/hanullim.jpg" },
    { name: "세종문학회", desc: "회비 없는 중앙 문학 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/SejongLiterarySociety.jpg"},
    { name: "CCC", desc: "세종대 중앙 기독교 연합 동아리.", category: "종교",img:"assets/images/club/ccc.jpg" },
    { name: "IVF", desc: "세종대학교 기독교 중앙동아리.", category: "종교" ,img:"assets/images/club/ivf.jpg"},
    { name: "JYM", desc: "세종대학교 중앙 기독교 연합 선교 동아리.", category: "종교" ,img:"assets/images/club/jym.jpg"},
    { name: "레지나", desc: "세종대학교 중앙 가톨릭 동아리.", category: "종교" ,img:"assets/images/club/regina.jpg"},
    { name: "발파람", desc: "세종대 중앙 태권 동아리.", category: "체육/레저" ,img:"assets/images/club/balparam.jpg"},
    { name: "산악부", desc: "세종대 중앙 산악 동아리.", category: "체육/레저" ,img:"assets/images/club/sac.jpg"},
    { name: "ESCAPER", desc: "세종대 주짓수 동아리.", category: "체육/레저" ,img:"assets/images/club/escaper.jpg"},
    { name: "롤링세종", desc: "세종대 볼링 동아리.", category: "체육/레저" ,img:"assets/images/club/rolling sejong.jpg"},
    { name: "세종스키", desc: "한국대학스키연맹(KUSTA) 소속 세종대 중앙 스키 동아리.", category: "체육/레저",img:"assets/images/club/sejongski.jpg"},
    { name: "FC해레본", desc: "세종대 중앙 축구 동아리.", category: "체육/레저" ,img:"assets/images/club/hyeryebon.jpg"},
    { name: "판도라큐브", desc: "게임 제작에 대해 배우고 공부하는 학술 동아리.", category: "학술/전공 연계",img:"assets/images/club/pandoracube.jpg" },
    { name: "세종극회", desc: "세종대학교 중앙 연극 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/SejongDramaClub.jpg"},
    { name: "NODE", desc: "자동화 프로젝트를 개발하는 학술 동아리.", category: "학술/전공 연계" ,img:"assets/images/club/Node.jpeg"},
    { name: "INTRO", desc: "세종대학교 중앙 힙합 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/INTRO.jpg"},
    { name: "ZIUM", desc: "세종대 아마추어 오케스트라.", category: "공연/예술/문화" ,img:"assets/images/club/Zium.jpg"},
    { name: "En#", desc: "IT 개발 학술 동아리.", category: "학술/전공 연계" ,img:"assets/images/club/Ensharp.jpg"},
    { name: "THE BLACK", desc: "2006년 설립된 중앙 보컬 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/TheBlack.jpg"},
    { name: "세종서회", desc: "세종대학교 중앙 서예 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/SejongCalligraphySociety.jpg"},
    { name: "인터페이스", desc: "중앙 학술 프로그래밍 동아리.", category: "학술/전공 연계" ,img:"assets/images/club/Interface.jpg"},
    { name: "Prompt", desc: "AI 융합전자공학과 학술 동아리.", category: "학술/전공 연계" ,img:"assets/images/club/Prompt.jpg"},
    { name: "터벌림", desc: "세종대학교 중앙 풍물 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/Teobeollim.jpg"},
    { name: "MASTER", desc: "세종대학교 중앙 보드게임 동아리.", category: "봉사/친목/대외활동" ,img:"assets/images/club/master.jpg"},
    { name: "SJYC", desc: "세종대 중앙동아리 요트부.", category: "체육/레저" ,img:"assets/images/club/YachtClub.jpg"},
    { name: "무붕", desc: "인공지능융합대학 소속 밴드 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/Moobong.jpg"},
    { name: "THE EYES", desc: "세종대학교 환경 동아리.", category: "봉사/친목/대외활동" ,img:"assets/images/club/TheEyes.jpg"},
    { name: "셀스(SELS)", desc: "초등학생 대상 영어 교육 봉사 동아리.", category: "봉사/친목/대외활동" ,img:"assets/images/club/SELS.jpg"},
    { name: "늘햄코러스", desc: "중앙 우수 밴드 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/NeulhemChorus.jpg"},
    { name: "S.S.G", desc: "정보보호 학술 동아리.", category: "학술/전공 연계" ,img:"assets/images/club/SSG.jpg"},
    { name: "RUSH", desc: "세종대 중앙 농구 동아리.", category: "체육/레저" ,img:"assets/images/club/rush.jpg"},
    { name: "SECLZ", desc: "세종대 클라이밍 동아리.", category: "체육/레저" ,img:"assets/images/club/Secles.jpg"},
    { name: "UNSA", desc: "유엔한국협회(UNA) 산하 국내 최대 연합 동아리.", category: "봉사/친목/대외활동",img:"assets/images/club/UNSA.jpg"},
    { name: "세종 로타랙트", desc: "대학생 연합 봉사 동아리.", category: "봉사/친목/대외활동" ,img:"assets/images/club/SejongRotaract.jpg"},
    { name: "SOULTRAIN", desc: "중앙 흑인 음악 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/SoulTrain.jpg"},
    { name: "밤부", desc: "세종대 사진 중앙 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/Bamboo.jpg"},
    { name: "세종투자연구회", desc: "세종대 주식투자 중앙 동아리.", category: "학술/전공 연계" ,img:"assets/images/club/SejongInvestmentResearchSociety.jpg"},
    { name: "유마프렌", desc: "마케팅 중앙동아리.", category: "학술/전공 연계" ,img:"assets/images/club/Yumafren.jpg"},
    { name: "LIFRARY", desc: "생명과학과 관련된 정보 탐색 및 공유를 중점으로 하는 학술 동아리.", category: "학술/전공 연계" ,img:"assets/images/club/LIFrary.jpg"},
    { name: "RUDDER", desc: "로켓, RC항공기 제작 소모임.", category: "학술/전공 연계" ,img:"assets/images/club/Rudder.jpg"},
    { name: "Sound Plus", desc: "세종대학교 중앙 밴드 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/SoundPlus.jpg"},
    { name: "PAGE7", desc: "세종대 유일 중앙 락밴드 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/Page7.jpg"},
    { name: "TODO", desc: "세종대 액티비티 동아리.", category: "봉사/친목/대외활동" ,img:"assets/images/club/TODO.jpg"},
    { name: "SMARCLE", desc: "AI로봇학과 인공지능 응용 학술동아리.", category: "학술/전공 연계" ,img:"assets/images/club/Smarcle.jpg"},
    { name: "별무리", desc: "교내유일 천문관측 중앙동아리.", category: "학술/전공 연계" ,img:"assets/images/club/Byeolmuri.jpg"},
    { name: "STC", desc: "세종대 테니스 동아리.", category: "체육/레저" ,img:"assets/images/club/STC.jpg"},
    { name: "MESH", desc: "나노신소재공학부 학술동아리.", category: "학술/전공 연계" ,img:"assets/images/club/Mesh.jpg"},
    { name: "JUMP", desc: "세종대 스노우보드 중앙 동아리.", category: "체육/레저" ,img:"assets/images/club/JUMP.jpg"},
    { name: "TSP", desc: "세종대 탁구 중앙 동아리.", category: "체육/레저" ,img:"assets/images/club/TSP.jpg"},
    { name: "NinesiX", desc: "세종대학교 단과대 연합 댄스동아리.", category: "봉사/친목/대외활동" ,img:"assets/images/club/NineSix.jpg"},
    { name: "Foogle", desc: "식품생명공학전공 학술동아리.", category: "학술/전공 연계" ,img:"assets/images/club/Foogle.jpg"},
    { name: "SAI", desc: "세종대학교 중앙 인공지능 동아리.", category: "학술/전공 연계" ,img:"assets/images/club/SAI.jpg"},
    { name: "세종킹스", desc: "세종대 유일 중앙 야구 동아리.", category: "체육/레저" ,img:"assets/images/club/SejongKings.jpg"},
    { name: "한손", desc: "세종대학교 중앙 만화 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/Hansone.jpg"},
    { name: "유스 호스텔", desc: "세종대학교 중앙 여행 동아리.", category: "봉사/친목/대외활동" ,img:"assets/images/club/YouthHostel.jpg"},
    { name: "아롬", desc: "코딩 및 프로젝트를 중심으로 운영되는 학술 동아리.", category: "학술/전공 연계" ,img:"assets/images/club/Alom.jpg"},
    { name: "세콕세콕", desc: "세종대 배드민턴 동아리.", category: "체육/레저" ,img:"assets/images/club/SekokSekok.jpg"},
    { name: "그리디", desc: "IT 프로그래밍 동아리.", category: "학술/전공 연계" ,img:"assets/images/club/greedy.jpg"},
    { name: "두바퀴", desc: "세종대 오토바이 동아리.", category: "체육/레저" ,img:"assets/images/club/Dubaqwi.jpg"},
    { name: "MIS", desc: "세종대학교 중앙 문화·친목 동아리.", category: "봉사/친목/대외활동" ,img:"assets/images/club/mis.jpg"},
    { name: "G:low", desc: "한류에 대한 주제 탐구와 연구 및 문화 체험 활동을 하는 학술 동아리.", category: "공연/예술/문화" ,img:"assets/images/club/Glow.jpg"}
  ];
  clubs.sort((a, b) => {
    return a.name.localeCompare(b.name, 'ko-KR');
  });
  let currentCategory = "전체";
  let currentPage = 1;
  const itemsPerPage = 20;

  function formatDesc(text) {
  return text.replace(/\n/g, '<br>');
}

  function filterClubs(category,event) {
    currentCategory = category;
    currentPage = 1;
    renderClubs();
    document.querySelectorAll('#filters button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  }
  
  function renderClubs(forcedList = null) {
    const list = document.getElementById("club-list");
    list.innerHTML = "";
  
    const filtered = forcedList ?? (
      currentCategory === "전체"
        ? clubs
        : clubs.filter(club => club.category === currentCategory)
    );
  
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filtered.slice(start, end);
    if (pageItems.length === 0) {
      list.innerHTML = `<p style="grid-column: span 4; text-align:center; color:#888;">검색 결과가 없습니다.</p>`;
      return;
    }
    for (const club of pageItems) {
      const card = document.createElement("div");
      card.className = "club-card";
      card.innerHTML = `
        <div class="club-card-content">
          <img src="${club.img}" alt="${club.name}" class="club-image">
          <div class="club-text">
            <h3>${club.name}</h3>
            <p>${formatDesc(club.desc)}</p>
          </div>
        </div>
      `;
      list.appendChild(card);
    }
  
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    document.getElementById("page-info").textContent = `${currentPage} / ${totalPages}`;
    const prevBtn = document.querySelector("#pagination button:first-child");
    const nextBtn = document.querySelector("#pagination button:last-child");

    prevBtn.style.visibility = currentPage === 1 ? "hidden" : "visible";
    nextBtn.style.visibility = currentPage === totalPages ? "hidden" : "visible";

  }
  
  function searchClubs() {
    const keyword = document.getElementById("search-input").value.toLowerCase();
    currentCategory = "전체"; // 검색 시 필터 해제
    currentPage = 1;
  
    // 이름 or 설명에 검색어가 포함된 동아리만 필터링
    const filtered = clubs.filter(club =>
      club.name.toLowerCase().includes(keyword) ||
      club.desc.toLowerCase().includes(keyword)
    );
  
    renderClubs(filtered); // 검색 결과만 표시
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
  