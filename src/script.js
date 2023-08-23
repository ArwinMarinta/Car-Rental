const hamburger = document.querySelector("#hamburger");
const navMobile = document.querySelector("#nav-mobile");
const exit = document.querySelector("#exit");

// Button Membuka Sidebar
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMobile.classList.toggle("hidden");
});

//Button Exit sidebar
exit.addEventListener("click", function () {
  navMobile.classList.toggle("hidden");
});

// Navbar
// window.onscroll = function () {
//   const header = document.querySelector("navbar");
//   const fixedNav = header.offsetTop;

//   if (window.onscroll > fixedNav) {
//     header.classList.add("navbar-fixed");
//   } else {
//     header.classList.remove("navbar-fixed");
//   }
// };
