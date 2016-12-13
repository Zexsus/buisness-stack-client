$(document).ready(function () {
    $('.slider').slick({
        nextArrow: '.slick-next, .slick-nav-next',
        prevArrow: '.slick-prev, .slick-nav-prev',
        dots: false,
        asNavFor: '.slider-nav',
    });

    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider',
        focusOnSelect: true,
        centerPadding: '60px',
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows:false

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                     arrows:false
                }
            }
        ]
    });
});