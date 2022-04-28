const hamburger = document.querySelector(".nav__hamburguer");
const nav = document.querySelector(".nav__links");

console.log(hamburger);
console.log(nav);

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (
    nav.classList.contains("active") &&
    e.target != nav &&
    e.target != hamburger
  ) {
    nav.classList.toggle("active");
  }
});
