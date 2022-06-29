const modalButtons = document.querySelectorAll('.portfolio__link'),
      modalButtonsCertificate = document.querySelectorAll('.resume__btn'),
      overlay      = document.querySelector('.modal__overlay'),
      modalWrap    = document.querySelector('.modal__wrapper'),
      closeButtons = document.querySelectorAll('.modal__close');
      htmlModal = document.documentElement;
      let scrollPosition = window.pageYOffset;

modalButtons.forEach(function(item){
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-modal'),
          modalElem = document.querySelector('.modal__wrapper[data-modal="' + modalId + '"]');
    modalElem.classList.add('active');
    overlay.classList.add('active');
    let scrollPosition = window.pageYOffset;
    htmlModal.style.top = -scrollPosition + "px";
    htmlModal.classList.add('fix');
  });
});

modalButtonsCertificate.forEach(function(item){
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-modal'),
          modalElem = document.querySelector('.modal__wrapper-certificate[data-modal="' + modalId + '"]');
    modalElem.classList.add('active');
    overlay.classList.add('active');
  });
});

closeButtons.forEach(function(item){
  item.addEventListener('click', function() {
    const parentModal = this.closest('.modal__wrapper[data-modal]');
    parentModal.classList.remove('active');
    overlay.classList.remove('active');
    htmlModal.classList.remove('fix');
    window.scroll(0, scrollPosition + "px");
    htmlModal.style.top = "";
  });
});

// closeButtons.forEach(item => {
//   item.addEventListener('click', () => {
//   this.classList.remove('active');
//   overlay.classList.remove('active');
  // htmlModal.classList.remove('fix');
  // window.scroll(0, scrollPosition + "px");
  // htmlModal.style.top = "";
//   })
// })

// closeButtons.addEventListener('click', () => {
//   modalWrap.classList.remove('active');
//   overlay.classList.remove('active');

//   html.classList.remove('fix');
//   window.scrollTo(0, scrollPosition);
//   html.style.top = "";
// });

overlay.addEventListener('click', function() {
  document.querySelector('.modal__wrapper-certificate.active').classList.remove('active');
  this.classList.remove('active');
});


