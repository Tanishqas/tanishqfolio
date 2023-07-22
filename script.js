let menuicon = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
}