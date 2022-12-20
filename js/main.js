/* Load Header, Footer */
async function fetchHtmlAsText(url) {
  const response = await fetch(url);
  return await response.text();
}

async function importPage(target) {
  document.querySelector('#' + target).innerHTML = await fetchHtmlAsText(target + '.html');
}

/* Load Main */
(async function () {
  await importPage('header');
  await importPage('footer');

  // gnbMenu 풀다운
  // 헤더 높이, li .on 추가
  const header = document.querySelector('#header');
  const gnbMenu = document.querySelectorAll('ul.gnb_menu>li');

  for (let i = 0; i < gnbMenu.length - 1; i++) {
    gnbMenu[i].addEventListener('mouseover', (e) => {
      header.classList.add('on');
      e.currentTarget.classList.add('on');
    });
    gnbMenu[i].addEventListener('mouseout', (e) => {
      header.classList.remove('on');
      e.currentTarget.classList.remove('on');
    });
  }

  // 모바일/태블릿 헤더
  const mobMenu = document.querySelector('#header>div.mo');
  const mobMenuOpen = document.querySelector('#header>div.mo>i.open');
  const mobMenuClose = document.querySelector('#header>div.mo>i.close');
  const mognbMenu = document.querySelectorAll('ul.gnb_menu_mo>li');

  mobMenuOpen.addEventListener('click', (e) => {
    e.preventDefault();
    mobMenu.classList.add('on');
    header.style.backgroundColor = 'white';
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
  mobMenuClose.addEventListener('click', (e) => {
    e.preventDefault();
    mobMenu.classList.remove('on');
    header.style.backgroundColor = 'transparent';
  });

  for (let i = 0; i < mognbMenu.length - 1; i++) {
    mognbMenu[i].addEventListener('click', (e) => {
      e.preventDefault();
      e.currentTarget.classList.toggle('on');
    });
  }

  // 스크롤 헤더
  window.addEventListener('wheel', (e) => {
    if (mobMenu.classList.contains('on') || e.deltaY < -40) {
      header.style.top = '0';
    } else if (e.deltaY > 0) {
      header.style.top = '-120px';
    }
  });

  // footer 리스트
  const footerList = document.querySelectorAll('.footer_inner > .top > ul > li');

  for (let i = 0; i < footerList.length; i++) {
    footerList[i].addEventListener('click', (e) => {
      e.preventDefault();
      e.currentTarget.classList.toggle('on');
    });
  }
})();
