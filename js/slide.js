$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        arrows:true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3, 
        
    });
  });

  

  
  $(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('#topNubex').fadeIn();
  } else {
  $('#topNubex').fadeOut();
  }
  });
  $('#topNubex').click(function() {
  $('#Topscroll,html').animate({scrollTop:0},10);
  });
  });
 