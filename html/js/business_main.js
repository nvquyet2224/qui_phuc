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

function projectSlider() {
    if (document.querySelector(".projectsSlider")) {
        const slide = document.querySelector(".projectsSlider");
        const elm = document.querySelector("#projects");
        new Swiper(slide, {
            //modules: [Navigation],
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 1,
            spaceBetween: 40,
            slidesPerGroup: 1,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            breakpoints: {
                1024: {
                    slidesPerView: 1.5,
                    spaceBetween: 40
                }
            },
            navigation: {
                nextEl: elm.querySelector(".nav-next"),
                prevEl: elm.querySelector(".nav-prev"),
            },
            on: {
                init: function (swiper) { },
                transitionStart: function (swiper) { },
                transitionEnd: function (swiper) { },
                click(swiper) { },
            },
        });
    }
}

function collectionSlider() {
    const setCurrent = (target) => {
        // nav
        // banner
        document.querySelectorAll(".collection_banner--item").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });
        //item
        document.querySelectorAll(".collection_product--item").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });
    };

    if (document.querySelector(".collectionNavSlider")) {
        const elm = document.querySelector("#slider-nav");
        const slide = elm.querySelector(".collectionNavSlider");
        new Swiper(slide, {
            //modules: [Navigation],
            effect: "slide",
            loop: true,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 1,
            spaceBetween: 10,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            navigation: {
                nextEl: elm.querySelector(".nav-next"),
                prevEl: elm.querySelector(".nav-prev"),
            },
            on: {
                init: function (swiper) { },
                transitionStart: function (swiper) { },
                transitionEnd: function (swiper) {
                    const activeSlide = swiper.slides[swiper.activeIndex];
                    const target = activeSlide.getAttribute("data-target");

                    console.log(
                        "Active slide element:",
                        activeSlide.getAttribute("data-target")
                    );
                    setCurrent(target);
                },
                click(swiper) { },
            },
        });
    }
}


function brandAccordion() {
    const elm = document.querySelector(".brand__personal-accordion");
    if (elm) {
        const accordions = elm.querySelectorAll(".accordion-item .title");
        accordions.forEach((item) => {
            item.addEventListener("click", (e) => {
                const parent = item.closest(".accordion-item");
                if (!parent) return;

                if (parent.classList.contains("current")) {
                    // Đã có class current rồi → không làm gì
                    return;
                }

                // Xóa class current ở tất cả các accordion-item khác
                const allItems = elm.querySelectorAll(".accordion-item");
                allItems.forEach((el) => el.classList.remove("current"));

                // Thêm class current vào item được click
                parent.classList.add("current");
            });
        });
    }
}

(function () {
    kitchenSlider();
    projectSlider();
    collectionSlider();
    brandAccordion();
})();