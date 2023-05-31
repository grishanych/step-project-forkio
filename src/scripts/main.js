const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__item-block-hidden");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//test
const navLink = document.querySelectorAll(".header__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




//  download a webpage in PDF format

