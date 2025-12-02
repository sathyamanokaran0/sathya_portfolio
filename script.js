
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector(' .navbar');
    window.scrollY > 50 ?
        navbar.style.backgroundColor = 'rgba(19, 16, 16, 0.98)' :
        navbar.style.backgroundColor = 'rgba(9, 11, 13, 0.95)';

});
