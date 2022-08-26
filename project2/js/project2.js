// 상단 네비 색 변경
const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const main = document.querySelector("main");

addEventListener("scroll", () => {
  if (scrollY > h1.offsetHeight) {
    header.classList.add("active");
    main.classList.add("active");
  } else if (scrollY <= h1.offsetHeight) {
    header.classList.remove("active");
    main.classList.remove("active");
  }
});

// 메뉴 토글 버튼
let num = 0;
$(".menuBtn").on("click", () => {
  if (num % 2 == 0) {
    $("#navigator").stop().slideDown();
    $("#gnbBtn").addClass("on");

    num++;
  } else {
    $("#navigator").stop().slideUp();
    $("#gnbBtn").removeClass("on");
    num++;
  }
});

// 스와이퍼 1
var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 스와이퍼 2
var swiper2 = new Swiper(".swiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// 스와이퍼 3
var swiper3 = new Swiper(".swiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//goup버튼
addEventListener("scroll", () => {
  if (scrollY > 100) {
    $(".go_up").addClass("on");
  } else {
    $(".go_up").removeClass("on");
  }
});

// Location 이동 버튼
$(".btn a").click(function () {
  $(".btn a").removeClass("active");
  $(this).addClass("active");
  var i = $(this).parent().index();
  $(".bwrap > div").fadeOut(0);
  $(".bwrap > div").eq(i).fadeIn(0);
});

// kakao map 실행코드 (map)
var container = document.getElementById("map");
var options = {
  center: new kakao.maps.LatLng(37.5214, 126.9105),
  level: 3,
};
var map = new kakao.maps.Map(container, options);
var markerPosition = new kakao.maps.LatLng(37.5214, 126.9105);
var marker = new kakao.maps.Marker({
  position: markerPosition,
});
marker.setMap(map);
var iwContent = '<p style="width:150px; font-size:1rem">효성중공업 본사</p>',
  iwPosition = new kakao.maps.LatLng(37.5214, 126.9105);
var infowindow = new kakao.maps.InfoWindow({
  position: iwPosition,
  content: iwContent,
});
infowindow.open(map, marker);

// kakao map 실행코드 (map1)

var mapContainer = document.getElementById("map1"),
  mapOption = {
    center: new kakao.maps.LatLng(36.5613, 127.2527),
    level: 5,
  };
var map = new kakao.maps.Map(mapContainer, mapOption);
$(".btn li:last-child").on("click", function relayout() {
  map.relayout();
});
marker.setMap(map);

var markerPosition = new kakao.maps.LatLng(36.5613, 127.2527);
var marker = new kakao.maps.Marker({
  position: markerPosition,
});
