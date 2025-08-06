function kitchenSlider() {

    const setCurrent = (clickedSlide) => {
        let cur = clickedSlide.querySelector(".kitchen_thumb--img");
        if (!cur) {
            cur = clickedSlide.querySelector(".kitchen_pot");
        }
        const target = cur.getAttribute("data-target");

        // Banner
        document.querySelectorAll(".kitchen_banner--item").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });

        // Hot pot
        document.querySelectorAll(".kitchen_pot").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });
        // detail
        document.querySelectorAll(".kitchen_detail--item").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });
    };

    if (document.querySelector(".thumbSlider")) {
        let byClick = false;

        new Swiper(".thumbSlider", {
            //modules: [Pagination, Autoplay, Navigation, Scrollbar, Mousewheel],
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 3,
            spaceBetween: 10,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            scrollbar: {
                el: ".kitchen_thumb .swiper-scrollbar",
                hide: false,
                draggable: true,
            },
            mousewheel: {
                sensitivity: 1,
                forceToAxis: true,
                releaseOnEdges: true,
            },
            navigation: {
                nextEl: ".kitchen_thumb .swiper-button-next",
                prevEl: ".kitchen_thumb .swiper-button-prev",
            },
            on: {
                init: function (swiper) { },
                transitionStart: function (swiper) {
                    if (byClick) {
                        console.log('___byClick', byClick);
                        byClick = false;
                    } else {
                        const currentIndex = swiper.activeIndex;
                        const currentSlide = swiper.slides[currentIndex];
                        if (currentSlide) {
                            setCurrent(currentSlide);
                        }
                    }
                },
                transitionEnd: function () { },
                click(swiper) {
                    byClick = true;
                    const clickedSlide = swiper.clickedSlide;
                    const clickedIndex = swiper.clickedIndex;
                    if (clickedSlide) {
                        setCurrent(clickedSlide);
                        console.log('____clickedSlide', clickedSlide);
                        swiper.slideTo(clickedIndex);
                    }
                },
            },
        });

        new Swiper(".cardSlider", {
            //modules: [Navigation, Scrollbar, Mousewheel],
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 1,
            spaceBetween: 10,
            allowTouchMove: true,
            //freeMode: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            scrollbar: {
                el: ".cardSlider .swiper-scrollbar",
                hide: false,
                draggable: true,
            },
            mousewheel: {
                sensitivity: 1,
                forceToAxis: true,
                releaseOnEdges: true,
            },
            navigation: {
                nextEl: ".kitchen .nav-next",
                prevEl: ".kitchen .nav-prev",
            },
            on: {
                init: function (swiper) { },
                transitionStart: function (swiper) {
                    const currentIndex = swiper.activeIndex;
                    const currentSlide = swiper.slides[currentIndex];
                    if (currentSlide) {
                        setCurrent(currentSlide);
                    }
                },
                transitionEnd: function () { },
                click(swiper) {
                    // const clickedSlide = swiper.clickedSlide;
                    // const clickedIndex = swiper.clickedIndex;
                    // if (clickedSlide) {
                    //   setCurrent(clickedSlide);
                    //   swiper.slideTo(clickedIndex);
                    // }
                },
            },
        });

    }
}

function productNewSlider() {
    if (document.querySelector(".product-new .productsSlider")) {
        new Swiper(".product-new .productsSlider", {
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
                el: '.product-new .swiper-scrollbar',
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
                nextEl: ".product-new .nav-next",
                prevEl: ".product-new .nav-prev",
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

function productPromotionSlider() {
    if (document.querySelector(".product-promotion .productsSlider")) {
        new Swiper(".product-promotion .productsSlider", {
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
                el: '.product-promotion .swiper-scrollbar',
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
                nextEl: ".product-promotion .nav-next",
                prevEl: ".product-promotion .nav-prev",
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

function whatnowSlider() {

    const setCurrent = (target) => {
        // nav
        document.querySelectorAll('.nav-overlay li').forEach((elm) => {
            const _target = elm.getAttribute('data-target');
            if (_target === target) {
                elm.classList.add('current');
            } else {
                elm.classList.remove('current');
            }
        });

        // banner
        document.querySelectorAll('.whatnow_banner--item').forEach((elm) => {
            const _target = elm.getAttribute('data-target');
            if (_target === target) {
                elm.classList.add('current');
            } else {
                elm.classList.remove('current');
            }
        });
        //item
        document.querySelectorAll('.whatnow_thumb--item').forEach((elm) => {
            const _target = elm.getAttribute('data-target');
            if (_target === target) {
                elm.classList.add('current');
            } else {
                elm.classList.remove('current');
            }
        });
    }

    if (document.querySelector(".whatnowSlider")) {
        document.querySelectorAll('.whatnow_thumb--item').forEach((elm) => {
            const slide = elm.querySelector('.whatnowSlider')
            new Swiper(slide, {
                //modules: [Navigation],
                effect: "slide",
                loop: false,
                speed: 1000,
                preloadImages: false,
                lazy: true,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                slidesPerView: 3,
                spaceBetween: 10,
                allowTouchMove: true,
                watchOverflow: true,
                initialSlide: 0,
                autoHeight: false,
                breakpoints: {
                    320: {
                        slidesPerView: 2.1,
                        spaceBetween: 10
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                },
                navigation: {
                    nextEl: elm.querySelector('.nav-next'),
                    prevEl: elm.querySelector('.nav-prev'),
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
        });


    }

    //filter nav
    const navTab = document.querySelector('.whatnow .nav-overlay');
    if (navTab) {
        navTab.addEventListener("click", (e) => {
            const target = e.target.closest(".nav-overlay li");
            if (target) {
                if (!target.classList.contains('current')) {
                    const tab = target.getAttribute('data-target');
                    setCurrent(tab);
                }
            }
        });
    }

}

function promotionSlider() {
    if (document.querySelector(".promotionSlider")) {
        new Swiper(".promotionSlider", {
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 2,
            spaceBetween: 0,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 0
                }
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
    kitchenSlider();
    productNewSlider();
    productPromotionSlider();
    whatnowSlider();
    promotionSlider();
})();
