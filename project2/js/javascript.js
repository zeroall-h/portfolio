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
