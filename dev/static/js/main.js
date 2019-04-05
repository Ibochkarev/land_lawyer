$(document).ready(function () {

  $('#slider-post .slider_wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });

  $('#slider-reasons .slider_wrap').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false
  });

  $('#clients .slider_wrap').slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    dots: true,
    arrows: false
  });

});