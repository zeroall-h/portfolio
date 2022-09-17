const container = document.querySelector(".container");
const stickyBox = document.querySelector(".sticky_box");
const horizontal = document.querySelector(".horizontal");
const row4circle = document.querySelector(".row4circle");
const symbol = document.querySelector(".symbol");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const bar4 = document.querySelector(".bar4");
const row4wrap2 = document.querySelector(".row4wrap2");
const jeju = document.querySelector(".empty_box")
const row2 = document.querySelector(".row2")

const calcHeight = (item) => {
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;

  // horizontal의 숨겨진 영역까지의 가로 크기(전체크기) - 브라우저 가로 크기 + 브라우저의 높이
  return item.scrollWidth - clientWidth + clientHeight;
};

let conHt = (container.style.height = `${calcHeight(horizontal)}px`);
// 스크롤이 될때마다 값을 받아와 가로 이동
addEventListener("scroll", () => {
  horizontal.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
});
addEventListener("scroll", () => {
  
  if (stickyBox.offsetTop > 50) {
    document.getElementById("logoright").src =
      "./images/bottom_logo_right_black.png";
    document.getElementById("menubar").style.color = "#000";
    document.getElementById("menuBox").style.backgroundColor = "#000";
  } else {
    document.getElementById("logoright").src = "./images/bottom_logo_right.png";
    document.getElementById("menubar").style.color = "#fff";
    document.getElementById("menuBox").style.backgroundColor = "#fff";
  }

  if (stickyBox.offsetTop > 800) {
    document.getElementById("logocenter").src =
      "./images/header_logo_black.png";
  } else {
    document.getElementById("logocenter").src =
      "./images/header_logo_white.png";
  }

  if (stickyBox.offsetTop > 1800) {
    document.getElementById("logotop").src =
      "./images/header_logo_left_black.png";
    document.getElementById("logoleft").src =
      "./images/bottom_logo_left_black.png";
  } else {
    document.getElementById("logotop").src = "./images/header_logo_left.png";
    document.getElementById("logoleft").src = "./images/bottom_logo_left.png";
  }
});

addEventListener("scroll", () => {
 

  let scrolled =
    document.documentElement.scrollTop /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  if (scrolled > 0.27 && scrolled < 0.48) {
    row4wrap2.style.background =
      "url(./images/brand_b0.jpg) no-repeat 50%/cover";
    row4circle.style.opacity = 1;
    bar1.style.opacity =
      bar2.style.opacity =
      bar3.style.opacity =
      bar4.style.opacity =
        1;
    row4circle.style.width = row4circle.style.height =
      2300 -
      document.documentElement.clientWidth *
        10 *
        (scrolled * scrolled * scrolled) +
      "px";
    bar1.style.width = bar2.style.width =
      (document.documentElement.clientWidth -
        (2300 -
          document.documentElement.clientWidth *
            10 *
            (scrolled * scrolled * scrolled))) /
        2 +
      1 +
      "px";
    bar3.style.height = bar4.style.height =
      (document.documentElement.clientHeight -
        (2300 -
          document.documentElement.clientWidth *
            10 *
            (scrolled * scrolled * scrolled))) /
        2 +
      1 +
      "px";
  } else if (scrolled < 0.27) {
    row4wrap2.style.background =
      "url(./images/brand_b0.jpg) no-repeat 50%/cover";

    row4circle.style.opacity = 0;
    bar1.style.opacity = 0;
    bar2.style.opacity = 0;
    bar3.style.opacity = 0;
    bar4.style.opacity = 0;
  } else {
    row4circle.style.opacity = 1;
    bar1.style.opacity =
      bar2.style.opacity =
      bar3.style.opacity =
      bar4.style.opacity =
        1;
    row4wrap2.style.background =
      "url(./images/logo_color.png) no-repeat 50%/12%";
  }
});
// 푸터 가로스크롤
const container1 = document.querySelector(`.container1`);
const stickyBox1 = document.querySelector(`.sticky_box1`);
const horizontal1 = document.querySelector(`.horizontal1`);
const calcHeight1 = (item) => {
  const clientWidth1 = document.documentElement.clientWidth;
  const clientHeight1 = document.documentElement.clientHeight;

  /* horizontal의 숨겨진 영역까지의 가로 크기 (전체크기) - 브라우저 가로 크기 + 브라우저의 높이 */
  return item.scrollWidth - clientWidth1 + clientHeight1;
};

let conHt1 = (container1.style.height = `${calcHeight1(horizontal1)}px`);

// 스크롤이 될때마다 값을 받아와 가로 이동
addEventListener("scroll", () => {
  horizontal1.style.transform = `translateX(-${stickyBox1.offsetTop}px)`; //
});

// 메뉴
$('#menubar').on('click', (e)=>{
  e.preventDefault();
  $('#menu').toggleClass("visible");
})


AOS.init();

