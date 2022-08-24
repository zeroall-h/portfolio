const header = document.querySelector("header");
const h1 = document.querySelector("h1");
const main = document.querySelector("main");

// location 토글
$("#officeBtn").on("click", function (e) {
  e.preventDefault();
  $("#officeBtn").removeClass("line");
  $("#factoryBtn").removeClass("line");
  $("#officeContents").removeClass("on");
  $("#factoryContents").removeClass("on");
  $("#officeContents").addClass("on");
  $(this).addClass("line");
  $("#map").style.display = "block";
});
$("#factoryBtn").on("click", function () {
  $("#officeBtn").removeClass("line");
  $("#factoryBtn").removeClass("line");
  $("#officeContents").removeClass("on");
  $("#factoryContents").removeClass("on");
  $("#factoryContents").addClass("on");
  $(this).addClass("line");
  $("#map").style.display = "none";
});

addEventListener("scroll", () => {
  if (scrollY > h1.offsetHeight) {
    header.classList.add("active");
    main.classList.add("active");
  } else if (scrollY <= h1.offsetHeight) {
    header.classList.remove("active");
    main.classList.remove("active");
  }
});

// kakao map 실행코드 (map)
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

// kakao map 실행코드 (map1)
var container1 = document.getElementById("map1");

var options1 = {
  center: new kakao.maps.LatLng(37.1, 126.9105),
  level: 3,
};
var map1 = new kakao.maps.Map(container1, options1);
// 마커가 표시될 위치입니다
var markerPosition1 = new kakao.maps.LatLng(37.1, 126.9105);
// 마커를 생성합니다
var marker1 = new kakao.maps.Marker({
  position: markerPosition1,
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map1);
// 인포윈도우
var iwContent1 = '<div style="padding:5px">    효성중공업 공장 </div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwPosition1 = new kakao.maps.LatLng(37.1, 126.9105); //인포윈도우 표시 위치입니다
// 인포윈도우를 생성합니다
var infowindow1 = new kakao.maps.InfoWindow({
  position: iwPosition1,
  content: iwContent1,
});
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map1, marker1);
