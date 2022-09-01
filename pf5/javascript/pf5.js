// aos 연결
AOS.init();
// top 이동버튼
addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 500) {
    $(".goUp").addClass("on");
  } else {
    $(".goUp").removeClass("on");
  }
});
