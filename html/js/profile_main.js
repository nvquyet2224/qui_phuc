function profileCommon() {
  const setCurrent = (target) => {
    //item
    document.querySelectorAll(".profile-detail--item").forEach((elm) => {
      const _target = elm.getAttribute("data-target");
      if (_target === target) {
        elm.classList.add("current");
      } else {
        elm.classList.remove("current");
      }
    });

    document.querySelectorAll(".tab-item").forEach((elm) => {
      const _target = elm.getAttribute("data-target");
      if (_target === target) {
        elm.classList.add("current");
      } else {
        elm.classList.remove("current");
      }
    });
  };
  document.querySelectorAll(".profile-tab .tab-item").forEach((elm) => {
    elm.addEventListener("click", () => {
      const _target = elm.getAttribute("data-target");
      setCurrent(_target);
    });
  });

  const setAccount = (target) => {
    //item
    document.querySelectorAll(".account--item").forEach((elm) => {
      const _target = elm.getAttribute("data-account");
      if (_target === target) {
        elm.classList.add("current");
      } else {
        elm.classList.remove("current");
      }
    });
  };

  const backAccount = document.getElementById("back-account");
  const editAccount = document.getElementById("account-edit");
  const backAccountBtn = document.getElementById("btn-back-account");
  [backAccount, editAccount, backAccountBtn].forEach((item) => {
    console.log('backAccountBtn', item)
    if (item) {
      item.addEventListener("click", function () {
        const _target = this.getAttribute("data-account");
        console.log('item', _target)
        setAccount(_target);
      });
    }
  });


  const setAddress = (target) => {
    //item
    document.querySelectorAll(".address--item").forEach((elm) => {
      const _target = elm.getAttribute("data-address");
      if (_target === target) {
        elm.classList.add("current");
      } else {
        elm.classList.remove("current");
      }
    });
  };

  
  document.querySelectorAll(".edit-address, .back-address, .address-btn").forEach((elm) => {
    elm.addEventListener("click", () => {
      const _target = elm.getAttribute("data-address");
      setAddress(_target);
    });
  });
}

(function () {
  profileCommon();
})();
