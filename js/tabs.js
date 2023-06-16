const tabLinks = document.querySelectorAll(".tab-list a");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    tabContents.forEach((content) => {
      content.style.display = "none";
    });
    document.querySelector(id).style.display = "block";
    tabLinks.forEach((link) => {
      link.parentElement.classList.remove("active");
    });
    link.parentElement.classList.add("active");
  });
});

document.querySelector(".tab-list li:first-child").classList.add("active");
document.querySelector("#tab1").style.display = "block";
