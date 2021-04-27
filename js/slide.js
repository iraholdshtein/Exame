$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        arrows:true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveheihts: true,
        adaptivewidth: true,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows:true,
             
            }
          },
            
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows:true,

              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false,
                  arrows:true,
  
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow:2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: false,
                  arrows:true,
  
                }
              },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
                arrows:true
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                infinite:true,
                arrows:false,
                adaptiveheihts:true,
                autoplay: true,
                auytoSpeed:300,
                PauseOnHover: true,
                PauseOnDots: true,
                PauseOnDotsHover: true
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
                    
                        