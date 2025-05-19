const clubs = [
{ name: "CCC", desc: "중앙 기독교 연합 동아리", category: "종교", img: "assets/images/club/ccc.jpg", instagram: "https://www.instagram.com/sejong.univ_ccc" },
{ name: "ESCAPER", desc: "주짓수 동아리", category: "체육/레저", img: "assets/images/club/escaper.jpg" },
{ name: "En#", desc: "IT 개발 학술 동아리", category: "학술/전공 연계", img: "assets/images/club/Ensharp.jpg", instagram: "https://www.instagram.com/ensharp_sejong/" },
{ name: "FC해례본", desc: "중앙 축구 동아리", category: "체육/레저", img: "assets/images/club/hyeryebon.jpg", instagram:"https://www.instagram.com/haeryebon"},
{ name: "Foogle", desc: "식품생명공학전공 학술 동아리", category: "학술/전공 연계", img: "assets/images/club/Foogle.jpg", instagram: "https://www.instagram.com/foogle_26/" },
{ name: "G:low", desc: "한류에 대한 주제 탐구와 연구 및 문화 체험 활동을 하는 학술 동아리", category: "공연/예술/문화", img: "assets/images/club/Glow.jpg" },
{ name: "INTRO", desc: "중앙 힙합 동아리", category: "공연/예술/문화", img: "assets/images/club/INTRO.jpg", instagram: "https://www.instagram.com/intro__sejong/" },
{ name: "IVF", desc: "중앙 기독교 동아리", category: "종교", img: "assets/images/club/ivf.jpg", instagram: "https://www.instagram.com/sj_ivf" },
{ name: "JUMP", desc: "중앙 스노우보드 동아리", category: "체육/레저", img: "assets/images/club/JUMP.jpg" },
{ name: "JYM", desc: "중앙 기독교 연합 선교 동아리", category: "종교", img: "assets/images/club/jym.jpg", instagram: "https://www.instagram.com/sejong_jym" },
{ name: "LIFRARY", desc: "생명과학과 관련된 정보 탐색 및 공유를 중점으로 하는 학술 동아리", category: "학술/전공 연계", img: "assets/images/club/LIFrary.jpg" },
{ name: "MASTER", desc: "중앙 보드게임 동아리", category: "봉사/친목/대외활동", img: "assets/images/club/master.jpg", instagram: "https://www.instagram.com/sejong_master/" },
{ name: "MESH", desc: "나노신소재공학부 학술동아리", category: "학술/전공 연계", img: "assets/images/club/Mesh.jpg", instagram: "https://www.instagram.com/mesh_sejong/" },
{ name: "MIS", desc: "중앙 문화·친목 동아리", category: "봉사/친목/대외활동", img: "assets/images/club/mis.jpg" },
{ name: "NODE", desc: "자동화 프로젝트를 개발하는 학술 동아리", category: "학술/전공 연계", img: "assets/images/club/Node.jpeg" },
{ name: "NinesiX", desc: "단과대 연합 댄스동아리", category: "봉사/친목/대외활동", img: "assets/images/club/NineSix.jpg", instagram: "https://www.instagram.com/9ine_si6/" },
{ name: "PAGE7", desc: "유일 중앙 락밴드 동아리", category: "공연/예술/문화", img: "assets/images/club/Page7.jpg", instagram: "https://www.instagram.com/page7_insejong/" },
{ name: "Prompt", desc: "AI 융합전자공학과 학술 동아리", category: "학술/전공 연계", img: "assets/images/club/Prompt.jpg", instagram: "https://www.instagram.com/sejong_prompt/" },
{ name: "RUDDER", desc: "로켓, RC항공기 제작 소모임", category: "학술/전공 연계", img: "assets/images/club/Rudder.jpg", instagram: "https://www.instagram.com/rudder_sejong/" },
{ name: "RUSH", desc: "중앙 농구 동아리", category: "체육/레저", img: "assets/images/club/rush.jpg", instagram: "https://www.instagram.com/sejong_rush_official/" },
{ name: "S.S.G", desc: "정보보호 학술 동아리", category: "학술/전공 연계", img: "assets/images/club/SSG.jpg",instagram:"https://www.instagram.com/ssg_sejong/" },
{ name: "SAI", desc: "중앙 인공지능 동아리", category: "학술/전공 연계", img: "assets/images/club/SAI.jpg", instagram: "https://www.instagram.com/sejong_ai/" },
{ name: "SECLZ", desc: "클라이밍 동아리", category: "체육/레저", img: "assets/images/club/Secles.jpg", instagram: "https://www.instagram.com/sju_seclz/" },
{ name: "SJYC", desc: "중앙동아리 요트부", category: "체육/레저", img: "assets/images/club/YachtClub.jpg", instagram: "https://www.instagram.com/sejong_yacht_club" },
{ name: "SMARCLE", desc: "AI로봇학과 인공지능 응용 학술동아리", category: "학술/전공 연계", img: "assets/images/club/Smarcle.jpg", instagram: "https://www.instagram.com/sejongsmarcle/" },
{ name: "SOULTRAIN", desc: "중앙 흑인 음악 동아리", category: "공연/예술/문화", img: "assets/images/club/SoulTrain.jpg", instagram: "https://www.instagram.com/soultrain_sejong/" },
{ name: "STC", desc: "테니스 동아리", category: "체육/레저", img: "assets/images/club/STC.jpg", instagram: "https://www.instagram.com/sejong_tennis_club" },
{ name: "Sound Plus", desc: "중앙 밴드 동아리", category: "공연/예술/문화", img: "assets/images/club/SoundPlus.jpg", instagram: "https://www.instagram.com/sound__plus/" },
{ name: "THE BLACK", desc: "중앙 보컬 동아리", category: "공연/예술/문화", img: "assets/images/club/TheBlack.jpg", instagram: "https://www.instagram.com/theblack_sj/" },
{ name: "THE EYES", desc: "환경 동아리", category: "봉사/친목/대외활동", img: "assets/images/club/TheEyes.jpg", instagram: "https://www.instagram.com/sejong_theeyes" },
{ name: "TODO", desc: "액티비티 동아리", category: "봉사/친목/대외활동", img: "assets/images/club/TODO.jpg", instagram: "https://www.instagram.com/sejong__todo/" },
{ name: "TSP", desc: "중앙 탁구 동아리", category: "체육/레저", img: "assets/images/club/TSP.jpg", instagram: "https://www.instagram.com/sejongtsp" },
{ name: "UNSA", desc: "유엔한국협회(UNA) 산하 국내 최대 연합 동아리", category: "봉사/친목/대외활동", img: "assets/images/club/UNSA.jpg", instagram: "https://www.instagram.com/sejong_unsa/" },
{ name: "ZIUM", desc: "아마추어 오케스트라", category: "공연/예술/문화", img: "assets/images/club/Zium.jpg", instagram: "https://www.instagram.com/sejong_zium_orchestra/" },
{ name: "그리디", desc: "IT 프로그래밍 동아리", category: "학술/전공 연계", img: "assets/images/club/greedy.jpg" },
{ name: "늘혬코러스", desc: "중앙 우수 밴드 동아리", category: "공연/예술/문화", img: "assets/images/club/NeulhemChorus.jpg", instagram:"https://www.instagram.com/nlheam/"},
{ name: "두바퀴", desc: "오토바이 동아리", category: "체육/레저", img: "assets/images/club/Dubaqwi.jpg", instagram: "https://www.instagram.com/sejong_univ_riders/" },
{ name: "레지나", desc: "중앙 가톨릭 동아리", category: "종교", img: "assets/images/club/regina.jpg", instagram: "https://www.instagram.com/regina_sejong_" },
{ name: "롤링세종", desc: "볼링 동아리", category: "체육/레저", img: "assets/images/club/rolling sejong.jpg", instagram: "https://www.instagram.com/sejong_rolling?igshid=NzZlODBkYWE4Ng%3D%3D" },
{ name: "무붕", desc: "인공지능융합대학 소속 밴드 동아리", category: "공연/예술/문화", img: "assets/images/club/Moobong.jpg", instagram: "https://www.instagram.com/band_mooboong/" },
{ name: "발파람", desc: "중앙 태권 동아리", category: "체육/레저", img: "assets/images/club/balparam.jpg" },
{ name: "밤부", desc: "중앙 사진 동아리", category: "공연/예술/문화", img: "assets/images/club/Bamboo.jpg", instagram: "https://www.instagram.com/sejong_bamboo/" },
{ name: "별무리", desc: "중앙 천문관측 동아리", category: "학술/전공 연계", img: "assets/images/club/Byeolmuri.jpg", instagram: "https://www.instagram.com/_byeolmoory/" },
{ name: "산악부", desc: "중앙 산악 동아리", category: "체육/레저", img: "assets/images/club/sac.jpg", instagram: "https://www.instagram.com/sejong_alpineclub" },
{ name: "세종 로타랙트", desc: "대학생 연합 봉사 동아리", category: "봉사/친목/대외활동", img: "assets/images/club/SejongRotaract.jpg", instagram:"https://www.instagram.com/sejong_rota/" },
{ name: "세종극회", desc: "중앙 연극 동아리", category: "공연/예술/문화", img: "assets/images/club/SejongDramaClub.jpg", instagram: "https://www.instagram.com/sejongxdrama/" },
{ name: "세종문학회", desc: "회비 없는 중앙 문학 동아리", category: "공연/예술/문화", img: "assets/images/club/SejongLiterarySociety.jpg", instagram: "https://www.instagram.com/sejong_moonhak/" },
{ name: "세종서회", desc: "중앙 서예 동아리", category: "공연/예술/문화", img: "assets/images/club/SejongCalligraphySociety.jpg", instagram: "https://www.instagram.com/sejong_calligraphy/" },
{ name: "세종스키", desc: "한국대학스키연맹(KUSTA) 소속 세종대 중앙 스키 동아리", category: "체육/레저", img: "assets/images/club/sejongski.jpg", instagram: "https://www.instagram.com/sejongskiteam" },
{ name: "세종킹스", desc: "중앙 야구 동아리", category: "체육/레저", img: "assets/images/club/SejongKings.jpg", instagram:"https://www.instagram.com/sejong_kings_"},
{ name: "세종투자연구회", desc: "중앙 주식투자 동아리", category: "학술/전공 연계", img: "assets/images/club/SejongInvestmentResearchSociety.jpg", instagram: "https://www.instagram.com/sejong_sisc/" },
{ name: "세콕세콕", desc: "배드민턴 동아리", category: "체육/레저", img: "assets/images/club/SekokSekok.jpg", instagram: "https://www.instagram.com/sejong_scsc/" },
{ name: "셀스(SELS)", desc: "초등학생 대상 영어 교육 봉사 동아리", category: "봉사/친목/대외활동", img: "assets/images/club/SELS.jpg", instagram:"https://www.instagram.com/sejong_sels/" },
{ name: "아롬", desc: "코딩 및 프로젝트를 중심으로 운영되는 학술 동아리", category: "학술/전공 연계", img: "assets/images/club/Alom.jpg", instagram: "https://www.instagram.com/alomsejong/" },
{ name: "유마프렌", desc: "중앙 마케팅 동아리", category: "학술/전공 연계", img: "assets/images/club/Yumafren.jpg", instagram: "https://www.instagram.com/sejong_umf/" },
{ name: "유스 호스텔", desc: "중앙 여행 동아리", category: "봉사/친목/대외활동", img: "assets/images/club/YouthHostel.jpg", instagram: "https://www.instagram.com/sju_youthhostel/" },
{ name: "인터페이스", desc: "중앙 학술 프로그래밍 동아리", category: "학술/전공 연계", img: "assets/images/club/Interface.jpg", instagram: "https://www.instagram.com/interface518/" },
{ name: "죽순회", desc: "중앙 봉사 동아리", category: "봉사/친목/대외활동", img: "assets/images/club/juksun.jpg", instagram: "https://www.instagram.com/sejong_juksun/" },
{ name: "터벌림", desc: "중앙 풍물 동아리", category: "공연/예술/문화", img: "assets/images/club/Teobeollim.jpg", instagram: "https://www.instagram.com/sejong_evz/" },
{ name: "판도라큐브", desc: "게임 제작에 대해 배우고 공부하는 학술 동아리", category: "학술/전공 연계", img: "assets/images/club/pandoracube.jpg", instagram: "https://www.instagram.com/pandora_cube_/" },
{ name: "한손", desc: "중앙 만화 동아리", category: "공연/예술/문화", img: "assets/images/club/Hansone.jpg", instagram: "https://www.instagram.com/hanson_sj/" },
{ name: "한울림", desc: "중앙 클래식 동아리", category: "공연/예술/문화", img: "assets/images/club/hanullim.jpg", instagram: "https://www.instagram.com/hanwoolim_guitar/" }
];

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
            <div class="club-header">
              <h3>${club.name}</h3>
              ${club.instagram ? `
                <a href="${club.instagram}" target="_blank" class="insta-icon-link">
                <img src="assets/icons/instagram.svg" alt="Instagram" class="insta-icon">
                </a>` : ''}
            </div>
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
  