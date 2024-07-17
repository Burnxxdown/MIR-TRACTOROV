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

/*----------КАРТОЧКИ---------*/

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => {
      if (c !== card) {
        c.classList.remove('expanded');
      }
    });
    card.classList.toggle('expanded');
  });
});

function book() {
    var phoneNumber = prompt("Введите номер телефона для связи:");
    if (phoneNumber != null) {
      alert("Спасибо за бронирование! Мы свяжемся с вами по номеру " + phoneNumber);
    }
  }

/*-------------------*/