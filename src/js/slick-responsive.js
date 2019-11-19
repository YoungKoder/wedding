$(window).on('load resize orientationchange', function() {
    $('.services_cards').each(function(){
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 768) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    mobileFirst: true,
                    infinite:true,
                    arrows:false,
                    dots:false,
                });
            }
        }
    });
});