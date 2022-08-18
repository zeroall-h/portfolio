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

const factory = document.querySelector("#factoryBtn");
const office = document.querySelector("#officeBtn");
const map1 = document.querySelector("#map1");

factory.addEventListener("click", (e) => {
  e.preventDefault();
  map.style.display = "none";
  map1.classList.toggle("on");
});
office.addEventListener("click", (e) => {
  e.preventDefault();
  map.classList.toggle("invisible");
  map1.classList.remove("on");
});

// kakao map 실행코드
var container = document.getElementById("map");

var options = {
  center: new kakao.maps.LatLng(37.5214, 126.9105),
  level: 3,
};
var map = new kakao.maps.Map(container, options);
// 마커가 표시될 위치입니다
var markerPosition = new kakao.maps.LatLng(37.5214, 126.9105);
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition,
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
// 인포윈도우
var iwContent = '<div style="padding:5px">    효성중공업 본사 </div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwPosition = new kakao.maps.LatLng(37.5214, 126.9105); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
  position: iwPosition,
  content: iwContent,
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker);

// location 토글
$("#officeBtn").on("click", function (e) {
  e.preventDefault();
  $("#officeBtn").removeClass("line");
  $("#factoryBtn").removeClass("line");
  $("#officeContents").removeClass("on");
  $("#factoryContents").removeClass("on");
  $("#officeContents").addClass("on");
  $(this).addClass("line");
});
$("#factoryBtn").on("click", function (e) {
  e.preventDefault();
  $("#officeBtn").removeClass("line");
  $("#factoryBtn").removeClass("line");
  $("#officeContents").removeClass("on");
  $("#factoryContents").removeClass("on");
  $("#factoryContents").addClass("on");
  $(this).addClass("line");
});
