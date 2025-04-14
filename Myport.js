let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active'); 
    menuIcon.classList.toggle('bx-x');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
};
