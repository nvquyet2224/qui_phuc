


const checkedData = new Map();
const elements = {
    result: document.getElementById("filterResult"),
    paging: document.getElementById("filterPaging"),
    empty: document.getElementById("filterEmpty"),
    deleteFilter: document.getElementById("filterDelete"),
    btnReset: document.getElementById("filterReset"),
    btnApply: document.getElementById("filterApply"),
    elmFilter: document.getElementById("filter__accordion"),
    tags: document.getElementById("filterTag"),
    accordionBody: document.querySelector(".accordion__body"),
    amount: document.getElementById("filterAmount"),
};

// Ẩn/hiện thông báo không tìm thấy sản phẩm
const toggleNotFound = (show) => {
    elements.result.classList.toggle("hide", show);
    elements.paging.classList.toggle("hide", show);
    elements.empty.classList.toggle("hide", !show);
    if (show) {
        elements.amount.innerHTML = "0 sản phẩm";
    } else {
        if (checkedData.size > 2) {
            elements.amount.innerHTML = "24 sản phẩm";
        } else {
            elements.amount.innerHTML = "134 sản phẩm";
        }
    }
};

// Ẩn bộ lọc
const hideFilter = () => {
    elements.elmFilter.classList.remove("open");
    document.querySelector('body').classList.remove('no-scroll');
};

// Xử lý sự kiện nút lọc
const handleFilterEvents = () => {
    elements.btnReset.addEventListener("click", hideFilter);
    elements.btnApply.addEventListener("click", hideFilter);
};


// Xử lý checkbox và tags
const handleCheckboxes = () => {
    if (!elements.accordionBody) return;

    const inputs = elements.accordionBody.querySelectorAll(
        'input[type="checkbox"]'
    );

    const renderTags = () => {
        elements.tags.classList.toggle("has-tag", checkedData.size > 0);

        elements.tags.innerHTML = [...checkedData]
            .map(
                ([value, text]) => `
        <div class="tag" data-value="${value}">
          ${text}
          <button>
            <svg>
              <use xlink:href="#icon-close"></use>
            </svg>
          </button>
        </div>
      `
            )
            .join("");
    };

    const toggleDeleteButton = () => {
        elements.deleteFilter.classList.toggle("hide", checkedData.size === 0);
    };

    const resetFilters = () => {
        checkedData.clear();
        inputs.forEach((input) => (input.checked = false));
        renderTags();
        toggleDeleteButton();
    };

    inputs.forEach((input) => {
        const label = input.closest("label");
        const textSpan = label?.querySelector("span:not([class])");
        const spanText = textSpan?.textContent.trim() || input.value;

        input.addEventListener("change", (e) => {
            if (e.target.checked) {
                checkedData.set(input.value, spanText);
            } else {
                checkedData.delete(input.value);
            }
            renderTags();
            toggleDeleteButton();
            //fake show empty
            toggleNotFound(checkedData.size > 1);
        });
    });

    elements.tags.addEventListener("click", (e) => {
        const tag = e.target.closest(".tag");
        if (tag) {
            const value = tag.dataset.value;
            checkedData.delete(value);
            inputs.forEach((input) => {
                if (input.value === value) input.checked = false;
            });
            renderTags();
            toggleDeleteButton();
            // fake show empty
            toggleNotFound(checkedData.size > 1);
        }
    });

    elements.deleteFilter.addEventListener("click", resetFilters);
    elements.btnReset.addEventListener("click", resetFilters);
};

(function () {
    handleFilterEvents();
    handleCheckboxes();
})();
