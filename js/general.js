"use strict";

$('.menu__list').removeClass('menu__list--show');
$('.menu__btn').click(function () {
  $('.menu__hamburger').toggleClass('menu__hamburger--active');
  $('.menu__list').toggleClass('menu__list--show');
});

(function () {
  vhCheck({
    cssVarName: 'vh-offset',
    force: false,
    bind: true,
    redefineVh: false,
    updateOnTouch: false
  });
})();

if (window.matchMedia('(max-width: 1199px)').matches) {
  $('.program__list').slick({
    adaptiveHeight: true,
    prevArrow: '.program__button--prev',
    nextArrow: '.program__button--next'
  });
}

if (window.matchMedia('(max-width: 1199px)').matches) {
  $('.gallery__list').slick({
    centerMode: true,
    centerPadding: '30px',
    arrows: false
  });
}

$('.write__list').slick({
  centerMode: false,
  centerPadding: '0',
  slidesToShow: 8,
  responsive: [{
    breakpoint: 900,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 3
    }
  }, {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1
    }
  }]
});

if (window.matchMedia('(max-width: 1199px)').matches) {
  $('.reviews__list').slick({
    centerMode: true,
    centerPadding: '30px',
    arrows: false
  });
}

$(function () {
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(_href).offset().top + "px"
    });
    return false;
  });
});
//# sourceMappingURL=maps/general.js.map
