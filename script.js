// Example: Parallax Effect on Scroll
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    hero.style.backgroundPositionY = -window.scrollY * 0.5 + 'px';
});
