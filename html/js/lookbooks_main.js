function roomsTab() {
  const setCurrent = (target) => {
    // nav
    document.querySelectorAll(".rooms_tab .rooms_tab--item").forEach((elm) => {
      const _target = elm.getAttribute("data-target");
      if (_target === target) {
        elm.classList.add("current");
      } else {
        elm.classList.remove("current");
      }
    });

    //item
    document.querySelectorAll(".rooms_content--item").forEach((elm) => {
      const _target = elm.getAttribute("data-target");
      if (_target === target) {
        elm.classList.add("current");
      } else {
        elm.classList.remove("current");
      }
    });
  };

  //filter nav
  const navTab = document.querySelector(".rooms_tab");
  if (navTab) {
    navTab.addEventListener("click", (e) => {
      const target = e.target.closest(".rooms_tab .rooms_tab--item");
      if (target) {
        if (!target.classList.contains("current")) {
          const tab = target.getAttribute("data-target");
          setCurrent(tab);
        }
      }
    });
  }
}

(function () {
  roomsTab();
})();
