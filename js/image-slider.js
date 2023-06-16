window.onload = function () {
  var $slider = $(".carousel");
  var $sliderContainer = $(".carousel-container");
  var $slides = $(".carousel-image");
  var $slideWidth = $slides.width();
  var $slideHeight = $slides.height();
  var $slideCount = $slides.length;
  var $slideIndex = 0;
  var $totalWidth = $slideCount * $slideWidth;
  var $interval = 10000;

  var $dragging = false;

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

    var marginLeft = index * -$slideWidth;

    $sliderContainer.animate({ marginLeft: marginLeft }, 500);

    $slideIndex = index;
  }

  setInterval(function () {
    if (!$dragging) {
      goToSlide($slideIndex + 1);
    }
  }, $interval);

  $("#left-arrow").click(function () {
    goToSlide($slideIndex - 1);
  });

  $("#right-arrow").click(function () {
    goToSlide($slideIndex + 1);
  });
};
