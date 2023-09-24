// /=== MENU SHOW Y HIDDEN======/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");


// ============================ MENU SHOW ================//
// validdate if consstnant exists

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}


// =========== MENU HIDDEN ======//
// VALIDATE IF CONSTANT EXISISTS
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}


// ===== REMPVE MENU MOBILE =====/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // ================WHEN WE CLICK ON EACH NAV__LINK, we REMOVE THE SHOW-MENU CLASS
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


// ==========================ACORDION SKILLS ================/
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }

    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});


// =========================== QUALIFICATION TABS ======================//
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");

        tabs.forEach((tab) => {
            tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
    });
});

// =====================================SERIVE MODAL==============//
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
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


//========================= POROTOFOLIO SWIPER =========================/
var swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagniation: {
        el: ".swiper-pagniation",
        clickable: true,
    },
});


// ========================SCROLL SECTION ACTIVE LINK =====================/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);


// =================== CHANGE BACKGROUND HEADER ==========/
function scrollHeader () {
    const nav = document.getElementById("header");
    // when the scroll is greater than 200 viewport height, add the scroll-header
    // to the header tag
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.closeList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);


// ========================= SHOW SCROLL UP ======================/
function scrollUp () {
    const scrollUp = document.getElementById("scroll-up");
    //when the scroll is higher than 560 viewport height, add the show-scroll class
    // to the tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll"); 
}
window.addEventListener("scroll", scrollUp);


// ======================================= DARK LIGHT THEME ============
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// ============PREV SELECTED TOPIC (IF USER SELECTED)=====
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// ===== WE OBTAIN THE CURRENT THEME THAT THE INTERFACE HAS BY VALIDATING THE DARK THEME CLASS
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// WE VALIDATE IF THE USER PREV CHOSE A TOPIC
if (selectedTheme) {
    // IF THE VALIDATION IS FULFILLED, WE ASK WHAT THE ISSUE WAS TO KNOW IF WE ACTIVED
    // OR DEACTIVED THE DARK
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
    document.body.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
    // 
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // 
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});