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

/*----------АККОРДЕОН---------*/

var tmpObj = document.getElementsByClassName("accordion");
for (var i = 0; i < tmpObj.length; i++) {
	tmpObj[i].addEventListener("click", function() {
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

/*-------------------*/

/*----------СЛАЙДЕР---------*/

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 5000;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function changeSlide(index) {
    slides[currentIndex].style.opacity = 0;
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].style.opacity = 1;
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    changeSlide(currentIndex + 1);
}

function prevSlide() {
    changeSlide(currentIndex - 1);
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

setInterval(nextSlide, slideInterval);

/*-------------------*/



