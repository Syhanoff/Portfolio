const modalButtons = document.querySelectorAll('.portfolio__link'),
      modalButtonsCertificate = document.querySelectorAll('.resume__btn'),
      overlay      = document.querySelector('.modal__overlay'),
      closeButtons = document.querySelectorAll('.modal__close');

modalButtons.forEach(function(item){
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-modal'),
          modalElem = document.querySelector('.modal__wrapper[data-modal="' + modalId + '"]');
    modalElem.classList.add('active');
    overlay.classList.add('active');
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
  item.addEventListener('click', function(e) {
    const parentModal = this.closest('.modal__wrapper');
    parentModal.classList.remove('active');
    overlay.classList.remove('active');
  });
});

overlay.addEventListener('click', function() {
  document.querySelector('.modal__wrapper.active').classList.remove('active');
  this.classList.remove('active');
});

overlay.addEventListener('click', function() {
  document.querySelector('.modal__wrapper-certificate.active').classList.remove('active');
  this.classList.remove('active');
});
