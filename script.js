
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navber');

menubar.oneclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle(active);
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove(active);
};