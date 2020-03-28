"use strict"
$('.menu__list').removeClass('menu__list--show');

$('.menu__btn').click(() => {
    $('.menu__hamburger').toggleClass('menu__hamburger--active');
    $('.menu__list').toggleClass('menu__list--show');
});


