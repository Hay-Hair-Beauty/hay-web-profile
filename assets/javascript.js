$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const logoSlide = document.querySelector('.logo-slide');
  const images = document.querySelectorAll('.logo-slide img');

  images.forEach(image => {
      image.addEventListener('click', () => {
          if (logoSlide.classList.contains('paused')) {
              logoSlide.classList.remove('paused');
          } else {
              logoSlide.classList.add('paused');
          }
      });
  });
});





