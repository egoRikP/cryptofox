const burgerButton = document.querySelector('.burger-button');
const menu = document.querySelector('.responsive-menu');
const responsiveMenu = document.querySelector('.responsive-menu-content');

let isAnimating = false;

burgerButton.addEventListener('click', toggleMenu);

responsiveMenu.addEventListener('click', ({target}) => {
    if (target.matches('button, a')) toggleMenu();
});

menu.addEventListener('click', ({target}) => {
    if (target === menu) toggleMenu();
});

function toggleMenu() {
    if (isAnimating) return;
    isAnimating = true;

    burgerButton.classList.toggle('active');
    responsiveMenu.classList.toggle('active-menu');
    menu.classList.toggle('active-menu');
    document.body.classList.toggle('no-scroll');

    setTimeout(() => {
        isAnimating = false;
    }, 300);
}