document.addEventListener("DOMContentLoaded", function () {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });

    document.getElementById("shop_link").addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.getElementById("shop");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });

    document.getElementById("products").addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.getElementById("recruit_new");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });

    document.querySelector('.menu_toggle').addEventListener('click', function () {
        document.querySelector('.nav_links').classList.toggle('active');
    });
});
