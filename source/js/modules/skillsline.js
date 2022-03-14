const counters = document.querySelectorAll('.skills__level-digit');
const scale = document.querySelectorAll('.skills__level-fill');

counters.forEach( (item, i) => {
  scale[i].style.width = item.innerHTML;
});
