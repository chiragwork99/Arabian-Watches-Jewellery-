/* Header Sticky */

$(window).scroll(function () {
    var e = $(".bottom-header"),
        s = $(window).scrollTop();
    if (s >= 180) e.addClass("fixed");
    else e.removeClass("fixed")
});


// trending sliders 
function initSwiper() {
    new Swiper(".trending-slider", {
        direction: "horizontal",
        loop: true,
        centeredSlides: true,
        freeMode: true,
        speed: 300,
        spaceBetween: 25,
        observer: true,
        observeParents: true,
        breakpoints: {
            1920: {
                slidesPerView: 4
            },
            1024: {
                spaceBetween: 25,
                slidesPerView: 2.5
            },
            768: {
                spaceBetween: 25,
                slidesPerView: 2.5
            },
            640: {
                spaceBetween: 25,
                slidesPerView: 2
            },
            420: {
                spaceBetween: 25,
                slidesPerView: 1
            }
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
            dragSize: 50
        }
    });
} 
$(document).ready(function () {
    initSwiper(); 
    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        setTimeout(function () {
            initSwiper();
            swiper.update()
        }, 100)
    }); 
});

// magazine-slider 
new Swiper(".magazine-slider", {
    direction: "horizontal",
    loop: true,
    centeredSlides: false,
    freeMode: false,
    speed: 300,
    spaceBetween: 25,
    breakpoints: {
        1920: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 2
        },
        640: {
            slidesPerView: 2
        },
        568: {
            slidesPerView: 1,
            spaceBetween: 25
        }
    },
    navigation: {
        nextEl: "#swiper-next",
        prevEl: "#swiper-prev"
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true, 
    }
});

// Mobile Menu``
$(".menu-icon").click(function() { 
    $(".bottom-header").toggleClass("active"); 
});