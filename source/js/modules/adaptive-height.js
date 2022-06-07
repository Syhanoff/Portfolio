const adaptiveHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

adaptiveHeight();

window.addEventListener('resize', () => {
  adaptiveHeight();
});
