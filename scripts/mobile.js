// Hamburger menu ------------------------------------------->
let mobileButton = document.getElementsByClassName("hamburger");
let mobileMenu = document.getElementsByClassName("mobile-menu");
// de ce functioneaa doar cand ii codu aici sus? inainte de fetch logic
const showMenu = function () {
  if (mobileMenu[0].classList.contains("active")) {
    mobileMenu[0].classList.remove("active");
  } else {
    mobileMenu[0].classList.add("active");
  }
};

mobileButton[0].onclick = showMenu;
