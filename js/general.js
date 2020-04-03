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
//# sourceMappingURL=maps/general.js.map
