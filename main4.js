/*----------ХЭДЕР---------*/

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        if (window.scrollY > 100) {
            header.classList.add("fixed-header");
        } else {
            header.classList.remove("fixed-header");
        }
    });
});

/*-------------------*/

document.getElementById('interactive').addEventListener('click', function() {
    alert('Вы кликнули на изображение! Посетите раздел продукция, чтобы узнать больше о наших предложениях.');
});