const hamburger = document.querySelector('.burger'),
      lineTop = document.querySelector('.burger__line-top'),
      lineMiddle = document.querySelector('.burger__line-middle'),
      lineBottom = document.querySelector('.burger__line-bottom'),
      // buttonClose = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu__link'),
      overlayMenu = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  lineTop.classList.toggle('active');
  lineMiddle.classList.toggle('active');
  lineBottom.classList.toggle('active');
});

overlayMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  lineTop.classList.toggle('active');
  lineMiddle.classList.toggle('active');
  lineBottom.classList.toggle('active');
});

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
    lineTop.classList.toggle('active');
    lineMiddle.classList.toggle('active');
    lineBottom.classList.toggle('active');
  })
})

// buttonClose.addEventListener('click', () => {
//   menu.classList.remove('active');
//   lineTop.classList.toggle('active');
//   lineMiddle.classList.toggle('active');
//   lineBottom.classList.toggle('active');
// });
