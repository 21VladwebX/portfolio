
$(document).ready(function(){
  if($(window).width()<= 980){

    $('#hamburger').on('click',function(){
      $('.header__menu').css({
        "left": "0px",
        "transform": "scale(1,1)",
        "z-index" : "10",
        "opacity": "1",
        "position" : "fixed"

      });
    });
    
    $('#close').on('click',function(){
      $('.header__menu').css({
        "left": "-70%",
        "transform": "scale(0.001,0.001)"
      });
    });

  }
});
