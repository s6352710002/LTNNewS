(function ($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.header').addClass('header-sticky');
        } else {
            $('.header').removeClass('header-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 1080) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });
    
    document.addEventListener('DOMContentLoaded', function () {
        const backToTopLink = document.getElementById('back-to-top');

        // Show the link when the user scrolls down 100px from the top
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
                backToTopLink.style.display = 'block';
            } else {
                backToTopLink.style.display = 'none';
            }
        });

        // Smooth scroll to the top when the link is clicked
        backToTopLink.addEventListener('click', function (e) {
            e.preventDefault(); // หยุดการนำทางไปยัง "#" (แท็กลิงก์ที่ถูกคลิก)

            const smoothScrollToTop = () => {
                if (window.scrollY > 0) {
                    window.scrollTo(0, window.scrollY - 15); // ปรับความเร็วที่คุณต้องการให้มันเลื่อนขึ้น
                    requestAnimationFrame(smoothScrollToTop);
                }
            };

            smoothScrollToTop();
        });
    });
    
    // Category News Slider
    $('.cn-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})(jQuery);

