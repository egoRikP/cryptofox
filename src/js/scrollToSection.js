let menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(item.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});