const hamburger = document.querySelector("#hamburger");
const navMobile = document.querySelector("#nav-mobile");
const exit = document.querySelector("#exit");

// Button Open Sidebar
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMobile.classList.toggle("hidden");
});

//Button Exit sidebar
exit.addEventListener("click", function () {
  navMobile.classList.toggle("hidden");
});
