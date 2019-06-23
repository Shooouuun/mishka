var toggle__nav = document.querySelector(".page-header__trigger"),
    nav = document.querySelector(".page-header__navigation-bottom");
    list = document.querySelector(".page-header__list--extra");
    modal__trigger = document.querySelector(".modal-js-button");
    modal__overlay = document.querySelector(".modal-cart__overlay");
    modal__wrapper = document.querySelector(".modal-cart__wrapper")

    toggle__nav.classList.remove("page-header__trigger--nojs");
    nav.classList.remove("page-header__navigation-bottom--nojs");
    list.classList.add("page-header__list--js");

    toggle__nav.addEventListener("click", function (e) {
      e.preventDefault();
      nav.classList.toggle("page-header__navigation-bottom--open");
      toggle__nav.classList.toggle("page-header__trigger--close");
    });

    modal__trigger.addEventListener("click", function (e) {
      e.preventDefault();
      modal__overlay.classList.add("modal-cart__overlay--open");
      modal__wrapper.classList.add("modal-cart__wrapper--open")
    });
