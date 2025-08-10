function loginCommon() {
  const setCurrent = (target) => {
    //item
    document.querySelectorAll(".login-form--item").forEach((elm) => {
      const _target = elm.getAttribute("data-target");
      if (_target === target) {
        elm.classList.add("current");
      } else {
        elm.classList.remove("current");
      }
    });
  };

  document.querySelectorAll(".login-form-btn, .back-login").forEach((elm) => {
    elm.addEventListener("click", () => {
      const _target = elm.getAttribute("data-target");
      setCurrent(_target);
    });
  });
}

(function () {
  loginCommon();
})();
