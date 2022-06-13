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

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let tk = '';
  grecaptcha.ready(function() {
    grecaptcha.execute('.', {action: 'homepage'}).then(function(token) {
      tk = token;
      document.getElementById('token').value = token;
      const data = new URLSearchParams();
      for (const pair of new FormData(document.querySelector('form'))) {
          data.append(pair[0], pair[1]);
      }
      fetch('mail.php', {
        method: 'post',
        body: data,
      })
      .then(response => response.json())
      .then(result => {
        if (result['om_score'] >= 0.5) {
          console.log('Человек')
          .onSuccess((event) => {
            console.log('Validation passes and form submitted', event);
            let formData = new FormData(event.target);
            console.log(...formData);
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  console.log('Отправлено');
                  overlayСonfirm.classList.add('active');
                  modalСonfirm.classList.add('active');
                }
              }
            }
            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);
            event.target.reset();
          });
        } else {
          console.log('Бот')
        }
      });
    });
  });
})

modalСonfirmСlose.addEventListener('click', function() {
  modalСonfirm.classList.remove('active');
  overlayСonfirm.classList.remove('active');
});
