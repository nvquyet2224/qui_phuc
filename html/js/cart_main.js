
function productRelatedSlider() {
    if (document.querySelector(".product-related .productsSlider")) {
        new Swiper(".product-related .productsSlider", {
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
                el: '.product-related .swiper-scrollbar',
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
                nextEl: ".product-related .nav-next",
                prevEl: ".product-related .nav-prev",
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

function openCartPop() {

    const product = document.querySelector(".products");

    if (product) {
        product.addEventListener("click", (e) => {
            const item = e.target.closest(".add-to-cart");
            if (item) {
                openPopup('#addToCartPop');
            }
        });

    }

    // close mess
    const closeMes = document.querySelector("#addToCartPop .popup-close");
    closeMes.addEventListener("click", function () {
        closePopup('#addToCartPop');
    });

}

(function () {
    productRelatedSlider();
    openCartPop();
})();
