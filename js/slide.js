$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        arrows:true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3, 
        responsive: [
            {
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
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
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

            
$('.header-burger').click(function(event){
    $('body').toggleClass('lock');
});

$('.header-link').click(function(event){
    $('body').toggleClass('lock');
});
                    
                        