// ================ MENU SHOW Y HIDDEN ================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ===== MENU SHOW =====
// ===== VALIDATE IF CONSTANT EXIST
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ===== MENU HIDDEN =====
// VALIDATE IF CONSTANT EXIST
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ================ REMOVE MENU MOBILE ================
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // WHEN WE CLICK ON EACH NAV__LINK, WE REMOVE THE SHOW-MENU CLASS
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// =============== ACCORDION SKILLS ===============
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll("skills__header");

function toggleSkills() {
  let itemClass = this.parentNde.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((e) => {
  el.addEventListener("click", toggleSkills);
});

// ================ QUALIFICATION TABS ================
const tabs = document.querySelectorAll("[data-target");
const tabContents = document.querySelectorAll("[data-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContents) => {
      tabContents.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

// ================ SERVICES MODAL ================
const modalViews = document.querySelectorAll(".services__modal");
const moodalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, index) => {
  modalBtn.addEventListener("click", () => {
    modal(index);
  });
});

modalCloses.forEach((modalClose, index) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

// =============== PORTFOLIO SWIPER ================
var swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagiantion",
    clickable: true,
  },
});

// ================ SCROLL SECTION ACTIVE LINK ================
const section = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYoffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionid = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionid + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionid + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ================ CHANGE BACKGROUND HEADER ================
function scrollHeader() {
  const nav = document.getElementById("header");
  //when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll, scrollHeader");

// ================ SHOW SCROLL UP ================
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is greater than 560 viewport height, add the scroll-top class to the header tag
  if (this.scrollY >= 560) scrollup.class.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// ================ DARK LIGHT THEME ================
const themeButton = document.getElementById("theme-button");
const darktheme = "dark-theme";
const icontheme = "uil-sun";

// PREVIOUSLY SELECTED TOPIC (IF USER SELECTED)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darktheme) ? "dark" : "light";
const getcurrentIcon = () =>
  themeButton.classList.contains(icontheme) ? "uil-moon" : "uil-soon";

//  we validate if the user previously chose 4 topic
if (selectedTheme) {
  //
  document.body.classList[selectedIcon === "dark" ? "add" : "remove"](
    darktheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    icontheme
  );
}

// activate or deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // add or remove the dark / icon theme
  document.body.classList.toggle(darktheme);
  themeButton.classList.toggle(icontheme);
  // we save the theme and the current icon that user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getcurrentIcon());
});
