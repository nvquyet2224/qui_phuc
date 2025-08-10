
function detailSilder() {
  if (document.querySelector(".productsLookbooksSlider")) {
    document.querySelectorAll(".products_content--item").forEach((elm) => {
      const slide = elm.querySelector(".productsLookbooksSlider");
      new Swiper(slide, {
        //modules: [Navigation],
        direction: "vertical",
        effect: "slide",
        loop: false,
        speed: 1000,
        preloadImages: false,
        lazy: true,
        // disableOnInteraction: true,
        // pauseOnMouseEnter: true,
        slidesPerView: 4,
        spaceBetween: 0,
        // allowTouchMove: true,
        // watchOverflow: true,
        // initialSlide: 0,
        // autoHeight: false,
        // breakpoints: {
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 0,
        //   },
        // },
        on: {
          init: function (swiper) {},
          transitionStart: function (swiper) {},
          transitionEnd: function () {},
          click(swiper) {},
        },
      });
    });
  }
}

(function () {
    detailSilder()
})();