$( document ).ready( function() {
  $( '.main_slider' ).bxSlider({
    auto: true,
    pause: 3000,
    pager:false,
   nextText: '<i class="fas fa-chevron-right"></i>',
  prevText: '<i class="fas fa-chevron-left"></i>',
  });
} );

$(function () {
    $('.gallery').bxSlider({
     
      slideWidth: 600,
      slideWidth:200,
      minSlides:1,
      maxSlides:4,
      slideMargin:30,
      moveSlides:4,
      pager:false,
  
    });
})
