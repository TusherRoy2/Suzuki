let menuBar = document.querySelector(".fa-bars");
let menuClose = document.querySelector(".fa-times");
let nav = document.querySelector("nav");

menuBar.addEventListener("click", function (e) {
  e.preventDefault();
  nav.classList.add("block");
  menuBar.classList.add("none");
  menuClose.classList.add("block");
  if (menuClose.classList.contains("none")) {
    menuClose.classList.remove("none");
  }
  if (nav.classList.contains("none")) {
    nav.classList.remove("none");
    nav.classList.add("block");
  }
});
menuClose.addEventListener("click", function (e) {
  e.preventDefault();
  nav.classList.remove("block");
  nav.classList.add("none");
  menuClose.classList.add("none");
  if (menuBar.classList.contains("none")) {
    menuBar.classList.remove("none");
    menuBar.classList.add("block");
  }
});

let fix_2_m = document.querySelector(".fix_2_m");

fix_2_m.addEventListener("click", () => {
  fix_2_m.style.height = "auto";
  if (){}
});
