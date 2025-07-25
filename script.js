// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Fecha o menu mobile se estiver aberto após clicar em um link
            const mobileNav = document.getElementById('mobile-nav-links');
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
            }
        }
    });
});

// Menu responsivo (hambúrguer)
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.getElementById('mobile-nav-links');

    if (mobileMenu && mobileNavLinks) {
        mobileMenu.addEventListener('click', function () {
            mobileNavLinks.classList.toggle('active');
        });
    }
});
