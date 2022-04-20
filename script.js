const panah = document.querySelector(".panahscroll");
window.addEventListener("scroll", function() {
    windowPosition = window.scrollY > 200;
    panah.classList.toggle("scroll-active", windowPosition);
});