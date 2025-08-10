function yearClick() {
    const history = document.querySelector(".history");

    if (history) {
        history.addEventListener("click", (e) => {
            const item = e.target.closest(".nav-overlay li");

            if (item) {
                if (!item.classList.contains('current')) {

                    const target = item.getAttribute('data-target');

                    const oldItem = document.querySelector(".nav-overlay li.current");
                    const oldDetail = document.querySelector(".year-detail .detail.current");

                    if (oldItem && oldDetail) {
                        oldItem.classList.remove('current');
                        oldDetail.classList.remove('current');
                    }

                    // active
                    item.classList.add('current');
                    document.querySelector('.year-detail .detail[data-target="' + target + '"]').classList.add('current');

                }

            }

        });

    }
}

(function () {
    yearClick();
})();

