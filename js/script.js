var $slider = $(".carousel");

var $sliderContainer = $(".carousel-container");
var $slides = $(".carousel-image");

var $slideWidth = $slides.width();

var $slideHeight = $slides.height();

var $slideCount = $slides.length;

var $slideIndex = 0;

var $totalWidth = $slideCount * $slideWidth;

$slider.css({ width: $slideWidth, height: $slideHeight });

$sliderContainer.css({
  width: $totalWidth,
  height: $slideHeight,
  marginLeft: -$slideWidth,
});

$slides.css({ width: $slideWidth, height: $slideHeight });

function goToSlide(index) {
  if (index < 0) {
    index = $slideCount - 1;
  } else if (index >= $slideCount) {
    index = 0;
  }

  $sliderContainer.css({ marginLeft: index * -$slideWidth });

  $slideIndex = index;
}

$("#left-arrow").click(function () {
  $sliderContainer.animate(
    {
      left: +$slideWidth,
    },
    "slow",
    () => {
      $(".carousel-image:last-child").prependTo(".carousel-image-container");
      $sliderContainer.css("left", "");
    }
  );
});

$("#right-arrow").click(function () {
  $sliderContainer.animate(
    {
      left: -$slideWidth,
    },
    "slow",
    () => {
      $(".carousel-image:first-child").appendTo(".carousel-image-container");
      $sliderContainer.css("left", "");
    }
  );
});

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
