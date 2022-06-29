const modalСonfirm = document.querySelector('.modal__wrapper[data-modal="mail"]'),
      modalСonfirmСlose = document.querySelector('.modal__btn'),
      overlayСonfirm      = document.querySelector('.modal__overlay');

import JustValidate from 'just-validate';
const validation = new JustValidate('#form',
{
  tooltip: {
    position: 'top',
  },
});

validation

.addField('#name', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Впишите имя состоящее из 3 и более знаков!'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Впишите имя состоящее из не более 30 знаков!'
  },
  {
    rule: 'required',
    value: true,
    errorMessage: 'Введите имя!'
  }
])
.addField('#email', [
  {
    rule: 'required',
    value: true,
    errorMessage: 'Email обязателен',
  },
  {
    rule: 'email',
    value: true,
    errorMessage: 'Введите корректный Email',
  },
])
.addField('#text', [
  {
    rule: 'required',
    value: true,
    errorMessage: 'Напишите интересующий вопрос, пожелание или предложение!'
  },
])
.addField('#agree', [
  {
    rule: 'required',
    errorMessage: 'Согласие!'
  },
])

.onSuccess((event) => {
  console.log('Validation passes and form submitted', event);

  let formData = new FormData(event.target);

  console.log(...formData);

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('Отправлено');

modalСonfirm.classList.add('active');
overlayСonfirm.classList.add('active');

      }
    }
  }

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);

  event.target.reset();
});



modalСonfirmСlose.addEventListener('click', function() {
  modalСonfirm.classList.remove('active');
  overlayСonfirm.classList.remove('active');
});
