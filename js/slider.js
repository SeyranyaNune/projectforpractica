$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        easing: 'linear',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggale: false,
        waitForAnimate: false,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 810,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow:12,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    });
    $('.center').slick({
      dots: false,
      arrows: false,
      adaptiveHeight: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      easing: 'linear',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 1500,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggale: false,
      waitForAnimate: false,
      centerMode: false,
      variableWidth: true,
});
});

 

