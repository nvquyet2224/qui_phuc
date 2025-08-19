
function experienceSilder() {
  if (document.querySelector(".experienceSlider")) {

    let byClick = false;

    const setCurrent = (clickedSlide) => {
      console.log(clickedSlide);
      const target = clickedSlide.getAttribute("data-target");

      // // Banner
      document.querySelectorAll(".kitchen_banner--item").forEach((elm) => {
        const _target = elm.getAttribute("data-target");
        if (_target === target) {
          elm.classList.add("current");
        } else {
          elm.classList.remove("current");
        }
      });

      // // Hot pot
      document.querySelectorAll(".kitchen_pot").forEach((elm) => {
        const _target = elm.getAttribute("data-target");
        if (_target === target) {
          elm.classList.add("current");
        } else {
          elm.classList.remove("current");
        }
      });

    };

    new Swiper(".experienceSlider", {
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
      watchOverflow: true,
      initialSlide: 0,
      autoHeight: false,
      navigation: {
        nextEl: ".experience-item .nav-next",
        prevEl: ".experience-item .nav-prev",
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
  }
}

function productRelatedSlider() {
  if (document.querySelector(".product-related .productsSlider")) {
    new Swiper(".product-related .productsSlider", {
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
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
      navigation: {
        nextEl: ".product-related .nav-next",
        prevEl: ".product-related .nav-prev",
      },
      on: {
        init: function (swiper) { },
        transitionStart: function (swiper) { },
        transitionEnd: function () { },
        click(swiper) { },
      },
    });
  }
}

function lookbookSlider() {
  if (document.querySelector(".lookbookSlider")) {
    new Swiper(".lookbookSlider", {
      //modules: [Navigation, Scrollbar, FreeMode, Mousewheel],
      effect: "slide",
      loop: false,
      speed: 1000,
      preloadImages: false,
      lazy: true,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      grabCursor: true,
      allowTouchMove: true,
      watchOverflow: true,
      initialSlide: 0,
      autoHeight: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      navigation: {
        nextEl: ".lookbook-related .nav-next",
        prevEl: ".lookbook-related .nav-prev",
      },
      on: {
        init: function (swiper) { },
        transitionStart: function (swiper) { },
        transitionEnd: function () { },
        click(swiper) { },
      },
    });
  }
}


//lookbook_viewmore

function lookbookClick() {
  // Open sub menu
  const lookbook = document.querySelector(".lookbook");

  if (lookbook) {
    lookbook.addEventListener("click", (e) => {
      // view more
      const item = e.target.closest(".lookbook_viewmore");
      if (item) {
        if (item.classList.contains('show')) {
          item.classList.remove('show');
          document.querySelector('.lookbook_product').classList.remove('show');
          if(document.querySelector('.loolbook-other')) {
            document.querySelector('.loolbook-other').classList.remove('show');
          }
        } else {
          item.classList.add('show');
          document.querySelector('.lookbook_product').classList.add('show');
          
        }
      }

      // show other
      const openOther = e.target.closest(".meta-link");
      const otherBlock = document.querySelector('.loolbook-other');
      if (openOther) {
          otherBlock.classList.add('show');
          if(document.querySelector('.lookbook_product')) {
            document.querySelector('.lookbook_product').classList.remove('show');
          }
          lazyEvent();
      }
      // close other
      const closeOther = e.target.closest(".other-header");
      if (closeOther) {
        otherBlock.classList.remove('show');
        if(document.querySelector('.lookbook_viewmore')) {
          document.querySelector('.lookbook_viewmore').classList.remove('show');
        }
      }

      // open cart
      
      const opencart = e.target.closest(".meta-but");
      if(opencart) {
        if(document.querySelector('.mini-cart-popup')) {
          document.querySelector('.mini-cart-popup').classList.add('show');
        }
      }


    });
  }



}

(function () {
  experienceSilder();
  productRelatedSlider();
  lookbookSlider();
  lookbookClick();

  // close mobile landscape
  if(document.querySelector('.lookbook_experience')) {
    document.querySelector('body').classList.add('land-mb');
  }
})();