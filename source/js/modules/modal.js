const modalButtons = document.querySelectorAll('.portfolio__link'),
      modalButtonsCertificate = document.querySelectorAll('.resume__btn'),
      overlay      = document.getElementById('overlay'),
      modalWrap    = document.querySelector('.modal__wrapper'),
      modalCertificate    = document.querySelectorAll('.modal__wrapper-certificate'),
      closeButtons = document.querySelectorAll('.modal__close'),
      htmlModal = document.documentElement;

modalButtons.forEach(function(item){
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-modal'),
          modalElem = document.querySelector('.modal__wrapper[data-modal="' + modalId + '"]');
    modalElem.classList.add('active');
    overlay.classList.add('active-overlay');
    let pagePosition = window.scrollY;
    htmlModal.classList.add('fix-scroll');
    htmlModal.dataset.position = pagePosition;
    htmlModal.style.top = -pagePosition + 'px';
  });
});

modalButtonsCertificate.forEach(function(item){
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const modalId = this.getAttribute('data-modal'),
          modalElem = document.querySelector('.modal__wrapper-certificate[data-modal="' + modalId + '"]');
    modalElem.classList.add('active');
    overlay.classList.add('active-overlay');
  });
});

closeButtons.forEach(function(item){
  item.addEventListener('click', function() {
    const parentModal = this.closest('.modal__wrapper[data-modal]');
    parentModal.classList.remove('active');
    overlay.classList.remove('active-overlay');

    let pagePosition = parseInt(htmlModal.dataset.position, 10);
    htmlModal.style.top = 'auto';
    htmlModal.classList.remove('fix-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    htmlModal.removeAttribute('data-position');
    htmlModal.style.top = "";
  });
});


modalCertificate.forEach(function(item){
  item.addEventListener('click', function() {
    const parentModal = this.closest('.modal__wrapper-certificate[data-modal]');
    parentModal.classList.remove('active');
    overlay.classList.remove('active-overlay');

    let pagePosition = parseInt(htmlModal.dataset.position, 10);
    htmlModal.style.top = 'auto';
    htmlModal.classList.remove('fix-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    htmlModal.removeAttribute('data-position');
    htmlModal.style.top = "";
  });
});

overlay.addEventListener('click', function() {
  // modalCertificate.classList.remove('active');
  // overlay.classList.remove('active-overlay');
});
