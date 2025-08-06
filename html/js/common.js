
function menuAnim() {
  // Mouse event
  document.querySelectorAll('.nav-item').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      const container = item.querySelector('.dropdown-menu > .container');
      const menuH = container ? container.offsetHeight : 0;
      const winH = window.innerHeight - 200;
      const realH = menuH < winH ? menuH : winH;

      document.querySelector('.header').classList.add('header-in');
      document.querySelector('.bg-menu').style.height = realH + 'px';
      item.classList.add('active');

      // lazy
      lazyEvent();

    });

    item.addEventListener('mouseleave', function () {
      document.querySelector('.bg-menu').style.height = '0px';
      item.classList.remove('active');
      document.querySelector('.header').classList.remove('header-in');
    });
  });

}

function resize() {
  const updateHeaderHeight = () => {
    document.body.style.setProperty("--winH", `${window.innerHeight}px`);
  };

  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight);
}

function navClick() {
  // Toggle menu
  document.querySelector(".toggle-menu").addEventListener("click", () => {
    const menu = document.querySelector(".header");
    if (menu && menu.classList.contains("open-menu")) {
      menu.classList.remove("open-menu");
      document.querySelector("html, body").classList.remove("no-scroll");
      if (document.querySelector('.nav-item.current')) {
        document.querySelector('.nav-item.current').classList.remove('current');
      }
    } else {
      document.querySelector("html, body").classList.add("no-scroll");
      menu.classList.add("open-menu");
    }
  });

  // Open sub menu
  const nav = document.querySelector(".nav");

  if (nav) {
    nav.addEventListener("click", (e) => {
      const item = e.target.closest(".nav-item");
      if (item) {
        item.classList.add('current');
      }

      //close
      const target = e.target.closest(".back-menu");
      if (target) {
        if (document.querySelector('.nav-item.current')) {
          document.querySelector('.nav-item.current').classList.remove('current');
        }
      }

      //close menu
      const closeMenu = e.target.closest(".close-menu");
      if (closeMenu) {
        document.querySelector(".toggle-menu").click();
      }

    });

  }
}

function accordionClick(blockAccordion) {
  const accordion = document.querySelector(blockAccordion);
  if (accordion) {
    accordion.addEventListener("click", (e) => {
      const item = e.target.closest(".accordion-header");
      const parent = item?.closest('.accordion');

      const body = parent.querySelector('.accordion-body');
      const detail = parent.querySelector('.accordion-detail');
      const itemH = detail.clientHeight + 'px';

      if (item.classList.contains('current')) {
        item.classList.remove('current');
        if(accordion.classList.contains('dropdown-menu')) {
          body.style.setProperty('--data-h', '0px');
        } else {
          body.style.height = '0px';  
        }
        
      } else {
        accordion.querySelectorAll('.accordion-header').forEach((_item) => {
          _item.classList.remove("current");
          const oldBody = _item?.closest('.accordion').querySelector('.accordion-body');
          if(accordion.classList.contains('dropdown-menu')) {
            oldBody.style.setProperty('--data-h', '0px');
          } else {
            oldBody.style.height = '0px';  
          }
          //oldBody.style.height = "0px";
          //body.style.setProperty('--data-h', '0px');
        });
        // set current
        item.classList.add('current');
        //body.style.height = itemH;
        if(accordion.classList.contains('dropdown-menu')) {
          body.style.setProperty('--data-h', itemH);
        } else {
          body.style.height = itemH;
        }
      }

    });
  }
}

function lazyEvent() {
  document.querySelectorAll('.lazy-event:not(.loaded)').forEach((item) => {
    const src = item.getAttribute('data-src');
    item.setAttribute('src', src);
    item.classList.add('loaded');
  });
}

/*
function selectClick() {


  // Open dropdown
  $('.select-header').on('click', function () {
    if ($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open');
    } else {
      $('.open').removeClass('open');
      $(this).parent().addClass('open');
    }
  });

  // Fake select apartment item
  $('.select-box li').on('click', function () {
    let text = $(this).html();
    const select = $(this).closest('.select');
    select.find('.select-selected').html(text);
    select.removeClass('open');
    select.find('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  // Close dropdown when click out
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.select').length) {
      $('.select.open').removeClass('open');
    }
  });

}

function navAccordion() {
  $('div.dropdown-menu--title').on('click', function () {
    const box = $(this).closest('.dropdown-menu--subitem');
    const body = box.find('.container-list');
    const detail = box.find('.container-list ul');
    const bodyH = detail.innerHeight();
    if ($(this).hasClass('current')) {
      $(this).removeClass('current');
      body.css('--data-h', '0px');
    } else {
      const oldCur = $('.dropdown-menu--title.current');
      if(oldCur.length) {
        const oldBox = $(oldCur).closest('.dropdown-menu--subitem');
        const oldBody = oldBox.find('.container-list');
        oldBody.css('--data-h', '0px').removeClass('current');
        oldCur
      }
      $(this).addClass('current');
      body.css('--data-h', bodyH + 'px');
    }

  });

}

function onScroll() {

  function setDelay(items, start) {
    if ($(items).length) {
      $(items).each(function (index) {
        $(this).css('animation-delay', `${(index + 1) * start}s`); // Delay increases for each item
      });
    }
  }

  // Function to add/remove class on scroll
  var lastScrollTop = 0;
  function toggleClassOnView() {
    setTimeout(() => {
      const items = ``;
      $(items).each(function () {
        if ($(this).length) {
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          // Kiá»ƒm tra náº¿u pháº§n tá»­ Ä‘Ã£ vÃ o khung nhÃ¬n
          if (elementTop < viewportBottom && elementBottom > viewportTop) {
            $(this).addClass('in-view');
          }

          // Kiá»ƒm tra náº¿u pháº§n tá»­ Ä‘Ã£ thoÃ¡t khá»i khung nhÃ¬n
          if (elementBottom <= viewportTop || elementTop >= viewportBottom) {
            $(this).removeClass('in-view');
          }
        }

      });
      var scrollTop = $(this).scrollTop();
      //if (scrollTop > lastScrollTop) {
      if (scrollTop > 50) {
        $('.header').addClass('sticky');
      } else {
        $('.header').removeClass('sticky');
      }
      //} else if (scrollTop < lastScrollTop) {
      //$('.header').removeClass('sticky');
      //}
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, 50);
  }

  $(window).on('scroll resize', toggleClassOnView);

  setDelay('.breadcrumb li', 0.15);
  setDelay('.tab-menu li', 0.15);
  toggleClassOnView();

}*/


function isInViewport(el, offset = 200) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight + offset && rect.bottom > -offset
  );
}

function loadImagesOnScroll() {
  document.querySelectorAll('.lazy:not(.loaded)').forEach(img => {
    if (window.innerWidth >= 1024) {
      if (!img.classList.contains('sp')) {
        if (isInViewport(img, 50)) {
          const src = img.getAttribute('data-src');
          if (src) {
            img.setAttribute('src', src);
            img.classList.add('loaded');
          }
        }
      }
    } else {
      if (!img.classList.contains('pc')) {
        if (isInViewport(img, 200)) {
          const src = img.getAttribute('data-src');
          if (src) {
            img.setAttribute('src', src);
            img.classList.add('loaded');
          }
        }
      }
    }

  });

  // Kiểm tra scrollTop và xử lý header
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.addEventListener('scroll', loadImagesOnScroll);
window.addEventListener('load', loadImagesOnScroll);

(function () {
  navClick();
  menuAnim();
  resize();
  accordionClick('.dropdown-menu--customize');
  //onScroll();
  //selectClick();
  //navAccordion();
  // setTimeout(() => {
  //   document.body.style.fontFamily = "'Montserrat', sans-serif";
  // }, 1500);
})();
