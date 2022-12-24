

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navEl = document.querySelectorAll(".main-nav-link");
const price = document.querySelectorAll(".price");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
console.log(price);





