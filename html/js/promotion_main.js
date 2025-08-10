

function inventorySlider() {
    if (document.querySelector(".by-inventory .productsSlider")) {
        new Swiper(".by-inventory .productsSlider", {
            //modules: [Navigation, Scrollbar, FreeMode, Mousewheel],
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 4,
            spaceBetween: 0,
            freeMode: true,
            grabCursor: true,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            scrollbar: {
                el: '.by-inventory .swiper-scrollbar',
                hide: false,
                draggable: true
            },
            mousewheel: {
                sensitivity: 1,
                forceToAxis: true,
                releaseOnEdges: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0
                }
            },
            navigation: {
                nextEl: ".by-inventory .nav-next",
                prevEl: ".by-inventory .nav-prev",
            },
            on: {
                init: function (swiper) {
                },
                transitionStart: function (swiper) {
                },
                transitionEnd: function () { },
                click(swiper) {
                }
            },
        });
    }
}

function priceSlider() {
    if (document.querySelector(".by-price .productsSlider")) {
        new Swiper(".by-price .productsSlider", {
            //modules: [Navigation, Scrollbar, FreeMode, Mousewheel],
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 4,
            spaceBetween: 0,
            freeMode: true,
            grabCursor: true,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            scrollbar: {
                el: '.by-price .swiper-scrollbar',
                hide: false,
                draggable: true
            },
            mousewheel: {
                sensitivity: 1,
                forceToAxis: true,
                releaseOnEdges: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0
                }
            },
            navigation: {
                nextEl: ".by-price .nav-next",
                prevEl: ".by-price .nav-prev",
            },
            on: {
                init: function (swiper) {
                },
                transitionStart: function (swiper) {
                },
                transitionEnd: function () { },
                click(swiper) {
                }
            },
        });
    }
}

function quiphucSlider() {

    if (document.querySelector(".promotion-quiphuc .promotionSlider")) {

        new Swiper(".promotion-quiphuc .promotionSlider", {
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 1.5,
            spaceBetween: 12,
            freeMode: true,
            grabCursor: true,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            scrollbar: {
                el: '.promotion-quiphuc .swiper-scrollbar',
                hide: false,
                draggable: true
            },
            mousewheel: {
                sensitivity: 1,
                forceToAxis: true,
                releaseOnEdges: true,
            },
            navigation: {
                nextEl: ".promotion-quiphuc .nav-next",
                prevEl: ".promotion-quiphuc .nav-prev",
            },
            on: {
                init: function (swiper) {
                },
                transitionStart: function (swiper) {
                },
                transitionEnd: function () { },
                click(swiper) {
                }
            },
        });

    }
}

function khoinghiepSlider() {
    if (document.querySelector(".promotion-khoinghiep .promotionSlider")) {
        new Swiper(".promotion-khoinghiep .promotionSlider", {
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 1.5,
            spaceBetween: 12,
            freeMode: true,
            grabCursor: true,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            scrollbar: {
                el: '.promotion-khoinghiep .swiper-scrollbar',
                hide: false,
                draggable: true
            },
            mousewheel: {
                sensitivity: 1,
                forceToAxis: true,
                releaseOnEdges: true,
            },
            navigation: {
                nextEl: ".promotion-khoinghiep .nav-next",
                prevEl: ".promotion-khoinghiep .nav-prev",
            },
            on: {
                init: function (swiper) {
                },
                transitionStart: function (swiper) {
                },
                transitionEnd: function () { },
                click(swiper) {
                }
            },
        });
    }
}


(function () {
    quiphucSlider();
    inventorySlider();
    priceSlider();
    khoinghiepSlider();
})();
