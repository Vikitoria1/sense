const header = document.querySelector('.header');

window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY;

    if (scrollPos > 80) {
        header.classList.add("header__scrolled");
    } else {
        header.classList.remove("header__scrolled");
    }
});

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__button');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');

    document.body.classList.toggle('menu-is-open');
});