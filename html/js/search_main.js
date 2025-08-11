function resultSearch() {
  const searchResultRef = document.getElementById("search-result");
  const searchTitleRef = document.getElementById("search-result-title");
  const searchValueRef = document.getElementById("search-result-value");
  const searchFormRef = document.getElementById("search-result-form");
  const productsRef = document.querySelector(".section.categories");
  const inputRef = document.getElementById("input-search-result");
  const iconClearRef = document.getElementById("search-result--clear");
  const btnSearchRef = document.getElementById("search-result-go-search");

  if (inputRef) {
    inputRef.addEventListener("keyup", (e) => {
      iconClearRef.classList.toggle("show", !!e.target.value);
    });
  }

  if (iconClearRef) {
    iconClearRef.addEventListener("click", () => {
      iconClearRef.classList.remove("show");
      inputRef.value = "";
    });
  }

  const params = new URLSearchParams(window.location.search);
  const searchValue = params.get("search");
  if (searchValue) {
    if (searchFormRef) {
      searchFormRef.classList.toggle("hide", !(searchValue.length > 4));
    }
    if (searchResultRef) {
      searchResultRef.classList.toggle("empty", searchValue.length > 4);
    }

    if (productsRef) {
      productsRef.classList.toggle("hide", searchValue.length > 4);
    }

    if (searchTitleRef) {
      searchTitleRef.innerText =
        searchValue.length > 4
          ? "Xin lỗi, Qui Phúc không tìm thấy kết quả"
          : "Kết quả tìm kiếm";
    }
    if (searchValueRef) {
      searchValueRef.innerText = `“${searchValue}“`;
    }
  }
}
(function () {
  resultSearch();
})();
