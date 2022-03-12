const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger_active');
  menu.classList.add('active');
});

hamburgerClose.addEventListener('click', () => {
	hamburgerClose.classList.toggle('hamburger-close_active');
  menu.classList.remove('active');
  hamburger.classList.toggle('hamburger_active');
});
