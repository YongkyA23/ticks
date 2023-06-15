// Get the menu icon and navbar items elements
const menuIcon = document.getElementById("menu-icon");
const navbarItems = document.querySelector(".navbaritems");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", function () {
  // Toggle the "open" class on navbar items
  navbarItems.classList.toggle("open");
});

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
  });
});

// set the default tab to be tab1
document.querySelector(".tab-list li:first-child").classList.add("active");
document.querySelector("#tab1").style.display = "block";
