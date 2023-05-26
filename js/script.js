const menuIcon = document.getElementById("navbaritems");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("show");
  menuIcon.classList.toggle("open");
});
