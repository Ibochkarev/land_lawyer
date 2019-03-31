$(document).ready(function () {

  var allCarousels = $('.slideshow');

  allCarousels.each(function () {
    var slidesRow = $(this).find('.slides-row'),
      slideControls = $(this).find('.slide-controls');

    if (slidesRow.is('.sliding-items')) {
      slidesRow.slick({
        slide: 'img',
        autoplay: true,
        appendArrows: slideControls,
        prevArrow: slideControls.find('.slide-arrow.arrow-prev'),
        nextArrow: slideControls.find('.slide-arrow.arrow-next'),
        appendDots: slideControls,
        dots: true,
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

  // Cost one window

  allCarousels.each(function () {
    var slidesRow = $(this).find('.costOneWindows_wrap'),
      slideControls = $(this).find('.slide-controls');

    if (slidesRow.is('.costOneWindows_wrap')) {
      slidesRow.slick({
        slide: '.cost_item',
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: slideControls,
        prevArrow: slideControls.find('.slide-arrow.arrow-prev'),
        nextArrow: slideControls.find('.slide-arrow.arrow-next'),
        appendDots: slideControls,
        dots: true,
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

  // Cost windows 4 col

  allCarousels.each(function () {
    var slidesRow = $(this).find('.row'),
      slideControls = $(this).find('.slide-controls');

    if (slidesRow.is('.price_windows-wrap')) {
      slidesRow.slick({
        slide: '.products_promo-item',
        autoplay: true,
        appendArrows: slideControls,
        prevArrow: slideControls.find('.slide-arrow.arrow-prev'),
        nextArrow: slideControls.find('.slide-arrow.arrow-next'),
        appendDots: slideControls,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
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

  // Reviews

  allCarousels.each(function () {
    var slidesRow = $(this).find('.row'),
      slideControls = $(this).find('.slide-controls');

    if (slidesRow.is('.reviews_wrap')) {
      slidesRow.slick({
        slide: '.col-12.col-sm-4.col-lg-4',
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        appendArrows: slideControls,
        prevArrow: slideControls.find('.slide-arrow.arrow-prev'),
        nextArrow: slideControls.find('.slide-arrow.arrow-next'),
        appendDots: slideControls,
        dots: true,
        dotsClass: 'custom-dots',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ], //slick generates this <ul.custom-dots> within the appendDots container
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
        },

      });
    }
  });

  // Banner Slider

  allCarousels.each(function () {
    var slidesRow = $(this).find('.content__banner-wrap'),
      slideControls = $(this).find('.slide-controls');

    if (slidesRow.is('.content__banner-wrap')) {
      slidesRow.slick({
        slide: '.banner-item',
        autoplay: true,
        appendArrows: slideControls,
        prevArrow: slideControls.find('.slide-arrow.arrow-prev'),
        nextArrow: slideControls.find('.slide-arrow.arrow-next'),
        appendDots: slideControls,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'custom-dots',
        //slick generates this <ul.custom-dots> within the appendDots container
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

  // Detail post slider

  allCarousels.each(function () {
    var slidesRow = $(this).find('.post-header-wrap'),
      slideControls = $(this).find('.slide-controls');

    if (slidesRow.is('.post-header-wrap')) {
      slidesRow.slick({
        slide: '.post-img',
        autoplay: true,
        appendArrows: slideControls,
        prevArrow: slideControls.find('.slide-arrow.arrow-prev'),
        nextArrow: slideControls.find('.slide-arrow.arrow-next'),
        appendDots: slideControls,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
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

  // Interested block Slider

  allCarousels.each(function () {
    var slidesRow = $(this).find('.post-wrap'),
      slideControls = $(this).find('.slide-controls');

    if (slidesRow.is('.post-wrap')) {
      slidesRow.slick({
        slide: '.post-item',
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

  // Promo block Slider

  allCarousels.each(function () {
    var slidesRow = $(this).find('.products_promo-wrap'),
      slideControls = $(this).find('.slide-controls');

    if (slidesRow.is('.products_promo-wrap')) {
      slidesRow.slick({
        slide: '.products_promo-item',
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

  allCarousels.each(function () {
    var slidesRow = $(this).find('.products_promo-wrap .promo_wrap'),
      slideControls = $(this).find('.slide-controls');

    if (slidesRow.is('.products_promo-wrap .promo_wrap')) {
      slidesRow.slick({
        slide: '.products_promo-item',
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

  $('[data-toggle="tooltip"]').tooltip();

  $('.fotorama').fotorama({
    maxwidth: '100%',
    allowfullscreen: true,
    nav: 'thumbs'
  });

});