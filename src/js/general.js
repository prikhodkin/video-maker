//= "../blocks/menu/menu.js"
//= "../blocks/vh-check/vh-check.js"
//= "../blocks/program/program.js"
//= "../blocks/gallery/gallery.js"
//= "../blocks/write/write.js"
//= "../blocks/instagram/instagram.js"
//= "../blocks/reviews/reviews.js"

$(function(){
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});
