const menuButton = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__hamburger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

const toggleMenu = () => {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(navItem => navItem.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open')
        nav.classList.remove('open')
        menuNav.classList.remove('open')
        navItems.forEach(navItem => navItem.classList.remove('open'));

        showMenu = false;
    }
}

menuButton.addEventListener('click', toggleMenu);