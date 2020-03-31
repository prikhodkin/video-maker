if(window.matchMedia('(max-width: 1199px)').matches){
  $('.program__list').slick({
    adaptiveHeight: true,
    prevArrow: '.program__button--prev',
    nextArrow: '.program__button--next'
  });
}
