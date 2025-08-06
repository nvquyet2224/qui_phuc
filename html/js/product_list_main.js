


const checkedData = new Map();
const elements = {
    productList: document.getElementById("products-list"),
    navigation: document.getElementById("products-navigation"),
    notFound: document.getElementById("products-notfound"),
    deleteFilter: document.getElementById("delete-filter"),
    btnReset: document.getElementById("btn-reset"),
    btnApply: document.getElementById("btn-apply"),
    btnOpen: document.getElementById("open-filter"),
    btnClose: document.getElementById("btn-close-filter"),
    elmFilter: document.getElementById("filter__accordion"),
    accordionHeaders: document.querySelectorAll(".accordion__header"),
    tags: document.querySelector(".head-tags"),
    accordionBody: document.querySelector(".accordion__body"),
    amount: document.getElementById("amount"),
};

// Ẩn/hiện thông báo không tìm thấy sản phẩm
const toggleNotFound = (show) => {
    elements.productList.classList.toggle("hide", show);
    elements.navigation.classList.toggle("hide", show);
    elements.notFound.classList.toggle("hide", !show);
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

// Khởi tạo slider giá
const initPriceSlider = () => {
    const $slider = $("#slider-range");
    const $inputLeft = $("#number-left");
    const $inputRight = $("#number-right");
    const min = parseInt($inputLeft.attr("min"), 10) || 0;
    const max = parseInt($inputRight.attr("max"), 10) || 30000000;
    const numberFormatter = new Intl.NumberFormat("vi-VN");

    const formatVND = (value) =>
        value === 0 ? "0" : `${numberFormatter.format(value)} đ`;
    const parseNumber = (value) => parseInt(value.replace(/[^\d]/g, ""), 10) || 0;

    $slider.slider({
        range: true,
        min,
        max,
        values: [
            parseNumber($inputLeft.val()) || min,
            parseNumber($inputRight.val()) || max,
        ],
        slide: (event, ui) => {
            $inputLeft.val(formatVND(ui.values[0]));
            $inputRight.val(formatVND(ui.values[1]));
        },
    });

    $inputLeft.val(formatVND($slider.slider("values", 0)));
    $inputRight.val(formatVND($slider.slider("values", 1)));

    $inputLeft.on("change", () => {
        let val = parseNumber($inputLeft.val());
        const right = $slider.slider("values", 1);
        val = Math.max(min, Math.min(val, right));
        $slider.slider("values", 0, val);
        $inputLeft.val(formatVND(val));
    });

    $inputRight.on("change", () => {
        let val = parseNumber($inputRight.val());
        const left = $slider.slider("values", 0);
        val = Math.min(max, Math.max(val, left));
        $slider.slider("values", 1, val);
        $inputRight.val(formatVND(val));
    });
};

// Ẩn bộ lọc
const hideFilter = () => {
    elements.elmFilter.classList.remove("show");
    $("body").removeClass("noScroll");
};

// Xử lý sự kiện nút lọc
const handleFilterEvents = () => {
    if (elements.btnOpen && elements.elmFilter) {
        elements.btnOpen.addEventListener("click", () => {
            elements.elmFilter.classList.add("show");
            $("body").addClass("noScroll");
        });
    }
    if (elements.btnClose && elements.elmFilter) {
        elements.btnClose.addEventListener("click", hideFilter);
        elements.btnReset.addEventListener("click", hideFilter);
        elements.btnApply.addEventListener("click", hideFilter);
    }
};

// Xử lý accordion
const toggleAccordion = (content, use) => {
    const isOpen = content.classList.contains("open");
    use.setAttribute("xlink:href", isOpen ? "#icon-increase" : "#icon-decrease");
    content.style.display = isOpen ? "none" : "block";
    setTimeout(
        () => content.classList.toggle("open", !isOpen),
        isOpen ? 200 : 10
    );
};

const closeAllAccordions = () => {
    elements.accordionHeaders.forEach((header) => {
        const parent = header.closest(".list_accordion");
        const content = parent.querySelector(".accordion__content");
        const use = parent.querySelector("use");
        if (content.classList.contains("open")) toggleAccordion(content, use);
    });
};

const initAccordionEvents = () => {
    elements.accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const parent = header.closest(".list_accordion");
            toggleAccordion(
                parent.querySelector(".accordion__content"),
                parent.querySelector("use")
            );
        });
    });
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
        toggleNotFound(false);
        closeAllAccordions();
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
            toggleNotFound(checkedData.size > 4);
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
            toggleNotFound(checkedData.size > 4);
        }
    });

    elements.deleteFilter.addEventListener("click", resetFilters);
    elements.btnReset.addEventListener("click", resetFilters);
};

(function () {
    elements.deleteFilter.classList.add("hide");
    initPriceSlider();
    handleFilterEvents();
    initAccordionEvents();
    handleCheckboxes();
})();
