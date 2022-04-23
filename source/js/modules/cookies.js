function checkCookies(){
  let cookieDate = localStorage.getItem('cookieDate');
  let cookieNotification = document.getElementById('cookie_notification');
  let cookieBtn = cookieNotification.querySelector('.cookie__btn');
  if( !cookieDate || (+cookieDate + 31536000000) < Date.now() ){
      cookieNotification.classList.add('show');
  }
  cookieBtn.addEventListener('click', function(){
      localStorage.setItem( 'cookieDate', Date.now() );
      cookieNotification.classList.remove('show');
  })
}
checkCookies();
