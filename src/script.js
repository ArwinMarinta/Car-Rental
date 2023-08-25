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

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add("navbar-fixed");
//   } else {
//     header.classList.remove("navbar-fixed");
//   }
// };

// Slide Testimoni
// let sliderContainer = document.getElementById("slideContainer");
// let slider = document.getElementById("slider");
// let card = slider.getElementById("li");

// let elementsToShow = 2;

// let slideContainerWidth = sliderContainer.clientWidth;

// let cardWidth = slideContainerWidth / elementsToShow;

// slider.style.width = card.length * cardWidth + "px";

// for (let index = 0; index < card.length; index++) {
//   const element = card[index];
//   element.style.width = cardWidth + "px";
// }
