class LogosMarquee {
  constructor({
    containerSelector = ".marquee__ctn",
    trackSelector = ".marquee__track",
    speed = 60,
  } = {}) {
    this.container = document.querySelector(containerSelector);
    this.track = document.querySelector(trackSelector);
    this.speed = speed;

    if (!this.container || !this.track) {
      console.warn("Marquee: éléments introuvables.");
      return;
    }

    this.trackWidth = this.track.getBoundingClientRect().width;
    this.pos = 0;
    this.start = null;
    this.rafId = null;

    this.setup();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  setup() {
    this.container.style.width = `${this.trackWidth}px`;
    this.clone = this.track.cloneNode(true);
    this.container.appendChild(this.clone);
    this.container.style.willChange = "transform";
  }

  animate(timestamp) {
    if (!this.start) this.start = timestamp;

    const elapsed = timestamp - this.start;
    this.pos = -(elapsed / 1000) * this.speed;

    if (Math.abs(this.pos) >= this.trackWidth) {
      this.start = timestamp;
      this.pos = 0;
    }

    this.container.style.transform = `translateX(${this.pos}px)`;

    this.rafId = requestAnimationFrame(this.animate);
  }

  destroy() {
    cancelAnimationFrame(this.rafId);
    if (this.clone) this.clone.remove();
    this.container.style.transform = "";
    this.container.style.willChange = "";
  }
}

function handleSearch() {
  const iconOpenRef = document.getElementById("icon-open-search");
  const iconCloseRef = document.getElementById("icon-close-search");
  const iconGoSearchRef = document.getElementById("icon-go-search");
  const searchPopupRef = document.querySelector(".search_popup");
  const inputRef = document.getElementById("input-search");
  const iconClearRef = document.getElementById("search-but--clear");
  const resultDefaultRef = document.getElementById("result-default");
  const resultProductRef = document.getElementById("result-product");
  const suggestSearchs = document.querySelectorAll(".search_popular-item");

  const goSearch = (value) => {
    if (!value) return;
    const url = `/html/tim-kiem.html?search=${encodeURIComponent(value)}`;
    window.location.href = url;
  };

  if (iconOpenRef) {
    iconOpenRef.addEventListener("click", () => {
      lazyEvent();
      if (searchPopupRef.classList.contains("show")) {
        searchPopupRef.classList.remove("show");
        document.querySelector("body").classList.remove("no-scroll");
      } else {
        searchPopupRef.classList.add("show");
        document.querySelector("body").classList.add("no-scroll");
      }
    });
  }

  if (iconCloseRef) {
    iconCloseRef.addEventListener("click", () => {
      searchPopupRef.classList.remove("show");
      document.querySelector("body").classList.remove("no-scroll");
    });
  }

  if (inputRef) {
    inputRef.addEventListener("keyup", (e) => {
      iconClearRef.classList.toggle("show", !!e.target.value);
      if (e.target.value && e.target.value.length > 4) {
      }
      resultDefaultRef.classList.toggle(
        "hide",
        e.target.value && e.target.value.length > 4
      );
      resultProductRef.classList.toggle(
        "hide",
        !(e.target.value && e.target.value.length > 4)
      );
      const value = e.target.value.trim();

      if (e.key === "Enter") {
        goSearch(e.target.value);
      }
      if (value) {
        if (iconGoSearchRef) {
          iconGoSearchRef.addEventListener("click", () => {
            goSearch(e.target.value);
          });
        }
      }
    });
  }

  if (iconClearRef) {
    iconClearRef.addEventListener("click", () => {
      iconClearRef.classList.remove("show");
      inputRef.value = "";
      resultDefaultRef.classList.remove("hide");
      resultProductRef.classList.add("hide");
    });
  }

  if (suggestSearchs) {
    suggestSearchs.forEach((item) => {
      item.addEventListener("click", () => {
        const value = item.getAttribute("data-value");
        iconClearRef.classList.add("show");
        inputRef.value = value;
        resultDefaultRef.classList.add("hide");
        resultProductRef.classList.remove("hide");
      });
    });
  }
}

function handleMiniCart() {
  const buttonCartRef = document.getElementById("icon-open-minicart");
  const miniCartRef = document.getElementById("mini-cart");
  const buttonCloseRef = document.getElementById("mini-cart--close");
  if (buttonCartRef) {
    buttonCartRef.addEventListener("click", () => {
      lazyEvent();
      if (miniCartRef) {
        miniCartRef.classList.add("show");
         document.querySelector("body").classList.add("no-scroll");
      }
    });
  }
  if (buttonCloseRef) {
    buttonCloseRef.addEventListener("click", () => {
      if (miniCartRef) {
        miniCartRef.classList.remove("show");
         document.querySelector("body").classList.remove("no-scroll");
      }
    });
  }
}

function menuAnim() {
  // Mouse event
  document.querySelectorAll(".nav-item").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      const container = item.querySelector(".dropdown-menu > .container");
      const menuH = container ? container.offsetHeight : 0;
      const winH = window.innerHeight - 200;
      const realH = menuH < winH ? menuH : winH;

      document.querySelector(".header").classList.add("header-in");
      document.querySelector(".bg-menu").style.height = realH + "px";
      item.classList.add("active");

      // lazy
      lazyEvent();
    });

    item.addEventListener("mouseleave", function () {
      document.querySelector(".bg-menu").style.height = "0px";
      item.classList.remove("active");
      document.querySelector(".header").classList.remove("header-in");
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
      if (document.querySelector(".nav-item.current")) {
        document.querySelector(".nav-item.current").classList.remove("current");
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
        item.classList.add("current");
      }

      //close
      const target = e.target.closest(".back-menu");
      if (target) {
        if (document.querySelector(".nav-item.current")) {
          document
            .querySelector(".nav-item.current")
            .classList.remove("current");
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

function menuAccordion() {
  const accordion = document.querySelector(".dropdown-menu--customize");
  if (accordion) {
    accordion.addEventListener("click", (e) => {
      const item = e.target.closest(".accordion-header");
      const parent = item?.closest(".accordion");

      const body = parent.querySelector(".accordion-body");
      const detail = parent.querySelector(".accordion-detail");
      const itemH = detail.clientHeight + "px";

      if (item.classList.contains("current")) {
        item.classList.remove("current");
        body.style.setProperty("--data-h", "0px");
      } else {
        accordion.querySelectorAll(".accordion-header").forEach((_item) => {
          _item.classList.remove("current");
          const oldBody = _item
            ?.closest(".accordion")
            .querySelector(".accordion-body");
          oldBody.style.setProperty("--data-h", "0px");
        });
        // set current
        item.classList.add("current");
        body.style.setProperty("--data-h", itemH);
      }
    });
  }
}

function filterEvents() {
  const accordion = document.querySelector(".filter");
  if (accordion) {
    accordion.addEventListener("click", (e) => {
      // Accordion
      const item = e.target.closest(".accordion__header");

      if (item) {
        const parent = item?.closest(".list_accordion");
        const body = parent.querySelector(".accordion__content");
        const detail = parent.querySelector(".accordion__detail");
        const itemH = detail.clientHeight + "px";

        if (item.classList.contains("current")) {
          item.classList.remove("current");
          body.style.height = "0px";
        } else {
          accordion.querySelectorAll(".accordion__header").forEach((_item) => {
            _item.classList.remove("current");
            const oldBody = _item
              ?.closest(".list_accordion")
              .querySelector(".accordion__content");
            oldBody.style.height = "0px";
          });
          // set current
          item.classList.add("current");
          body.style.height = itemH;
        }
      }

      // Filter mobile
      const box = e.target.closest(".head-top--left");
      if (box) {
        document.querySelector("body").classList.add("no-scroll");
        const parent = box?.closest(".filter");
        const filterMob = parent.querySelector(".filter__accordion");
        if (filterMob) {
          filterMob.classList.add("open");
        }
      }

      // close filter
      const close = e.target.closest(".close-filter");
      if (close) {
        const parent = close?.closest(".filter");
        const filterMob = parent.querySelector(".filter__accordion");
        if (filterMob) {
          filterMob.classList.remove("open");
        }
        document.querySelector("body").classList.remove("no-scroll");
      }
    });
  }
}

function toggleSelect() {
  const page = document.querySelector(".page");
  if (page) {
    page.addEventListener("click", (e) => {
      const header = e.target.closest(".select-header");

      // header
      if (header) {
        const parent = header?.closest(".select");
        if (parent.classList.contains("open")) {
          parent.classList.remove("open");
        } else {
          const oldSelect = document.querySelector(".select.open");
          if (oldSelect) {
            oldSelect.classList.remove("open");
          }
          parent.classList.add("open");
        }
      } else {
        const oldSelect = document.querySelector(".select.open");
        if (oldSelect) {
          oldSelect.classList.remove("open");
        }
      }

      //item
      const item = e.target.closest(".select-box li");
      if (item) {
        const parent = item?.closest(".select");

        if (!item.classList.contains("selected")) {
          const text = item.textContent;
          const value = item.getAttribute("data-value");
          console.log("selected", value);
          if (value !== "" && value !== "none") {
            parent.classList.add("hasSelected");
          } else {
            parent.classList.remove("hasSelected");
          }
          // old selected
          const oldSelected = parent.querySelector("li.selected");
          if (oldSelected) {
            oldSelected.classList.remove("selected");
          }
          // set selected text for header
          parent.querySelector(".select-selected").innerHTML = text;
          item.classList.add("selected");
          parent.classList.remove("open");
        }
      }
    });
  }
}

function lazyEvent() {
  document.querySelectorAll(".lazy-event:not(.loaded)").forEach((item) => {
    const src = item.getAttribute("data-src");
    item.setAttribute("src", src);
    item.classList.add("loaded");
  });
}

function isInViewport(el, offset = 200) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight + offset && rect.bottom > -offset;
}

function loadImagesOnScroll() {
  document.querySelectorAll(".lazy:not(.loaded)").forEach((img) => {
    if (window.innerWidth >= 1024) {
      if (!img.classList.contains("sp")) {
        if (isInViewport(img, 200)) {
          const src = img.getAttribute("data-src");
          if (src) {
            img.setAttribute("src", src);
            img.classList.add("loaded");
          }
        }
      }
    } else {
      if (!img.classList.contains("pc")) {
        if (isInViewport(img, 200)) {
          const src = img.getAttribute("data-src");
          if (src) {
            img.setAttribute("src", src);
            img.classList.add("loaded");
          }
        }
      }
    }
  });

  // Kiểm tra scrollTop và xử lý header
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function openPopup(byThis) {
  const oldPop = document.querySelector(".popup.open");
  const body = document.querySelector("body");
  if (oldPop) {
    curPop.classList.remove("open");
  }
  const curPop = document.querySelector(byThis);
  if (curPop) {
    body.classList.add("noScroll");
    curPop.classList.add("open");
  }
}

function closePopup(byThis) {
  const oldPop = document.querySelector(byThis);
  const body = document.querySelector("body");
  if (oldPop) {
    oldPop.classList.remove("open");
  }
  body.classList.remove("noScroll");
}

window.addEventListener("scroll", loadImagesOnScroll);
window.addEventListener("load", loadImagesOnScroll);

(function () {
  handleSearch();
  handleMiniCart();

  navClick();
  menuAnim();
  resize();

  menuAccordion();

  filterEvents();

  toggleSelect();

  // marquee
  if (document.querySelector(".marquee__ctn")) {
    new LogosMarquee({
      containerSelector: ".marquee__ctn",
      trackSelector: ".marquee__track",
      speed: 120,
    });
  }
})();
