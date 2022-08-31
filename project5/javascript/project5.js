// 메뉴 토글 버튼
const gnbWrap = document.querySelector(".gnbWrap");
const logo = document.querySelector("#logo");
const headerTop = document.querySelector(".headerTop");
const headerLeft = document.querySelector(".headerLeft");
const menuImage = document.querySelector("#menuImage");
const gnb = document.querySelector("#gnb");
const intro = document.querySelector(".intro");
gnbWrap.addEventListener("click", function () {
  this.classList.toggle("on");
  logo.classList.toggle("on1");
  headerTop.classList.toggle("on");
  headerLeft.classList.toggle("on");
  menuImage.classList.toggle("on");
});
gnbWrap.addEventListener("click", () => {
  gnb.classList.toggle("on");
});

// intro 버튼
addEventListener("scroll", () => {
  if (scrollY > 300) {
    intro.style.right = 0;
  }
});

// 스와이퍼 설정
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// aos
AOS.init();
