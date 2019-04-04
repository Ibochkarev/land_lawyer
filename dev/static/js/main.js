$(document).ready(function () {

  $('.slider_wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false
  });

  allCarousels.each(function () {
    var slidesRow = $(this).find('.slider_wrap'),
      slideControls = $(this).find('.slide-controls');

    if (slidesRow.is('.slider_wrap')) {
      slidesRow.slick({
        slide: '.slider_item',
        autoplay: true,
        appendArrows: slideControls,
        prevArrow: slideControls.find('.slide-arrow.arrow-prev'),
        nextArrow: slideControls.find('.slide-arrow.arrow-next'),
        appendDots: slideControls,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dotsClass: 'custom-dots', //slick generates this <ul.custom-dots> within the appendDots container
        customPaging: function (slider, i) {
          var slideNumber = i + 1,
            totalSlides = slider.slideCount;
          return (
            '<a class="dot" role="button" title="' +
            slideNumber +
            ' of ' +
            totalSlides +
            '"><span class="string">' +
            slideNumber +
            '/' +
            totalSlides +
            '</span></a>'
          );
        }
      });
    }
  });


});