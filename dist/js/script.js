const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeEl = document.querySelector('.menu__close');

hamburger.addEventListener('click', (e) => {
  menu.classList.add('active');
});

closeEl.addEventListener('click', (e) => {
  menu.classList.remove('active');
});
