// TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector('.navbar-nav');
// KETIKA HAMBURGER DIKLIK
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// CLICK DILUAR SIDEBAR UNTUK MENGHILANGKAN HAMBURGER
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
}) 
