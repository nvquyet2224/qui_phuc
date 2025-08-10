function storeCommon() {
  const items = document.querySelectorAll(".store_map-list .item");
  if (items.length) {
    items.forEach((item) => {
      item.addEventListener("click", function () {
        items.forEach((el) => el.classList.remove("current"));
        this.classList.add("current");
      });
    });
  }
}

(function () {
    storeCommon()
})();
