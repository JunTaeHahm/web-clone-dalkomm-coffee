// 배너 리스트
const bnnSec = document.querySelector('.content1>ul.banner');
const bnnList = document.querySelectorAll('.content1>ul.list>li');

// 배너 번호
let bnnNum = 0;
let lastNum = bnnList.length - 1;

// 배너 리스트 클릭
for (let i = 0; i < bnnList.length; i++) {
  bnnList[i].addEventListener('click', (e) => {
    bnnNum = i;
    bnnSec.style.left = `${-bnnNum * 100}%`;
    bnnList.forEach((item) => {
      item.classList.remove('on');
    });
    e.currentTarget.classList.add('on');
  });
}

// 오토배너
function autoBanner() {
  bnnNum++;
  if (bnnNum > lastNum) bnnNum = 0;
  bnnList.forEach((item) => {
    item.classList.remove('on');
  });
  bnnList[bnnNum].classList.add('on');
  bnnSec.style.left = `${-bnnNum * 100}%`;
  autoBnn = setTimeout(autoBanner, 10000);
}
let autoBnn = setTimeout(autoBanner, 10000);

// circle 마우스 움직임
const circle_l = document.querySelector('.circle_l');
const circle_m = document.querySelector('.circle_m');
const circle_s = document.querySelector('.circle_s');

const body = document.querySelector('body');
body.addEventListener('mousemove', (e) => {
  let scrX = e.screenX;
  let scrY = e.screenY;

  circle_l.style.top = `${300 - scrY / 3}px`;
  circle_l.style.right = `${-50 + scrX / 10}px`;

  circle_m.style.top = `${400 - scrY / 5}px`;
  circle_m.style.left = `${10 - scrX / 10}px`;

  circle_s.style.top = `${150 + scrY / 3}px`;
  circle_s.style.left = `${50 + scrX / 7}px`;
});
