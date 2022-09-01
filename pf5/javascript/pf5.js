// aos 연결
AOS.init();
// top 이동버튼
addEventListener("scroll", () => {
  if (scrollY > 500) {
    $(".goUp").addClass("on");
  } else {
    $(".goUp").removeClass("on");
  }
});
