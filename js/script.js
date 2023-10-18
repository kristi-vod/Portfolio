const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
      
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const procents = document.querySelectorAll('.skills__progress-procent'),
    lines = document.querySelectorAll('.skills__progress-line span');

procents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
})