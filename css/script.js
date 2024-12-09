document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const navbarLi = document.querySelector('.navbar-li');

menu.addEventListener('click', () => {
    navbarLi.classList.toggle('active'); // Toggle class 'active'
});
