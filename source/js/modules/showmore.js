var more = document.querySelectorAll('.portfolio__more-btn');
var box=document.querySelectorAll('portfolio__link');

for (var i = 0; i < more.length; i++) {
  more[i].addEventListener('click', function() {
    var showPerClick = 6;

    var hidden = this.parentNode.querySelectorAll('button.portfolio__link_hidden');
    for (var i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return this.outerHTML = "";

      // hidden[i].classList.add('.');
      hidden[i].classList.remove('portfolio__link_hidden');
    }
  });
}
