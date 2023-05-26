// Get the menu icon and navbar items elements
const menuIcon = document.getElementById("menu-icon");
const navbarItems = document.querySelector(".navbaritems");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", function () {
  // Toggle the "open" class on navbar items
  navbarItems.classList.toggle("open");
});
