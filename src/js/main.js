
var toglBtn = document.querySelector(".navbar_togler"),
        navbarCol = document.querySelector(".navbar_collapse");
    
    toglBtn.addEventListener('click', function(e){
        if(navbarCol.classList.contains("navbar_collapse--active") && toglBtn.classList.contains("navbar_togler--active") ){
            navbarCol.classList.remove("navbar_collapse--active");
            toglBtn.classList.remove("navbar_togler--active");
        }
        else{
            navbarCol.classList.add("navbar_collapse--active");
            toglBtn.classList.add("navbar_togler--active");
        }
    });
    // slick-responsive
    // $(window).on('load resize orientationchange', function() {
    //     $('.variable-width').each(function(){
    //         var $carousel = $(this);
    //         /* Initializes a slick carousel only on mobile screens */
    //         // slick on mobile
    //         if ($(window).width() > 768) {
    //             if ($carousel.hasClass('slick-initialized')) {
    //                 $carousel.slick('unslick');
    //             }
    //         }
    //         else{
    //             if (!$carousel.hasClass('slick-initialized')) {
    //                 $carousel.slick({
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     mobileFirst: true,
    //                     infinite:true,
    //                     arrows:false,
    //                     dots:false,
    //                     wariableWidth:true
    //                 });
    //             }
    //         }
    //     });
    // });
    $( document ).ready(function(){
        $('.variable-width').slick({
            arrows:false,
            dots:true,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            centerMode: false,
            variableWidth: true,
            responsive:[
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                },
                {
                    breakpoint:4000,
                    settings: "unslick"
                }
            ]
            
        })
    })