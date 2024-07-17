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

/*----------ОБРАТНАЯ СВЯЗЬ---------*/

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
   alert('Сообщение отправлено!');
    this.reset();
  });

  /*-------------------*/
  