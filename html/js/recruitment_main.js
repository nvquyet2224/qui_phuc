
(function () {
    // open mess fake
    const btn = document.getElementById("btnApply");
    btn.addEventListener("click", function () {
        openPopup('#messPop');
    });

    // close mess
    const closeMes = document.querySelector("#messPop .popup-close");
    closeMes.addEventListener("click", function () {
        closePopup('#messPop');
    });

})();
