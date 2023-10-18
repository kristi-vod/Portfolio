$(document).ready(function(){
    $('.industries__slider-inner').slick({
      slidesToShow: 1,
      Infinity: true,
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img src="./icons/arrow_prev.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="./icons/arrow_next.png"></button>',
    });
});
const hamburger = document.querySelector('.promo__hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});