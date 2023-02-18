$(document).ready(function () {
  $(".reviewSlider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: "ease-in-out",
    loop: true,
    dots: true,
    arrows: false,
  });
});
