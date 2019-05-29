var toggle__nav = document.querySelector(".page-header__trigger"),
    nav = document.querySelector(".page-header__navigation-bottom");
    list = document.querySelector(".page-header__list--extra");

    toggle__nav.classList.remove("page-header__trigger--nojs");
    nav.classList.remove("page-header__navigation-bottom--nojs");
    list.classList.add("page-header__list--js");

    toggle__nav.addEventListener("click", function (e) {
      e.preventDefault();
      nav.classList.toggle("page-header__navigation-bottom--open");
      toggle__nav.classList.toggle("page-header__trigger--close");
    });
