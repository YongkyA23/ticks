let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    speed: 800,
    gap: 30,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
  }).mount();
});
