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
    
})(jQuery);


//------------------------------------------------ Clock ----------------------
function updateDateTime() {
    const currentDate = new Date(); // ระบุวันที่และเวลาที่คุณต้องการแสดง
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const formattedDate = currentDate.toLocaleDateString('th-TH', options);

    document.getElementById('datetime').textContent = formattedDate;
}

// เรียกใช้ฟังก์ชันเพื่อแสดงวันที่และเวลาปัจจุบัน
updateDateTime();

// อัปเดตวันที่และเวลาทุกวินาที
setInterval(updateDateTime, 1000);

//------------------------------------------------ Clock ----------------------

document.addEventListener('DOMContentLoaded', function () {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookie = document.getElementById('accept-cookie');

    function updateCookieConsentPosition() {
        if (localStorage.getItem('cookiesAccepted') === null) {
            cookieConsent.style.display = 'block';
        }
        // ตรวจสอบความสูงของหน้าจอ
        const windowHeight = window.innerHeight;
        // ตรวจสอบความสูงของ Cookie Consent Box
        const consentHeight = cookieConsent.clientHeight;
        // ถ้าความสูงของหน้าจอน้อยกว่าความสูงของ Cookie Consent Box
        if (windowHeight < consentHeight) {
            cookieConsent.style.top = '0';
            cookieConsent.style.height = windowHeight + 'px';
            cookieConsent.style.overflowY = 'auto';
        }
    }

    // เรียกใช้ฟังก์ชันในการตรวจสอบและปรับ Cookie Consent Box
    updateCookieConsentPosition();

    // เมื่อหน้าจอเปลี่ยนขนาดใหม่
    window.addEventListener('resize', function () {
        updateCookieConsentPosition();
    });

    acceptCookie.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });
});

// --------------------------- SlideShow --------------------------------------------------------------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function nextSlide() {
    // หาสไลด์ถัดไป
    var nextSlide = document.querySelector(".slideshow-container img:nth-child(2)");
  
    // เลื่อนสไลด์ไปที่สไลด์ถัดไป
    nextSlide.scrollIntoView({
      behavior: "smooth",
    });
  }
  
  // เรียกใช้ฟังก์ชัน nextSlide() ทุกๆ 2 วินาที
  setInterval(nextSlide, 2000);

// --------------------------- PopupLogin --------------------------------------------------------------------
document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("Click",function(){
    document.querySelector(".popup").classList.remove("active");
});