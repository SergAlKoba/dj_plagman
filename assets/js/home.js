$('.banner_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow next"><img src="../img/arrow_right.svg"></button>',
    prevArrow: '<button class="slick-arrow prev"><img src="../img/arrow_left.svg"></button>',
    responsive: [
        {
          
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
    ]
});

$('.courses_slider').slick({
  slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button class="slick-arrow next"><img src="../img/arrow_right.svg"></button>',
    prevArrow: '<button class="slick-arrow prev"><img src="../img/arrow_left.svg"></button>',
    responsive: [
        {
          
          breakpoint: 1024,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
})