const circle = document.getElementById('circleFill');
const activeBtn = document.querySelector('.buttonup');

const progressAnimation = () => {
  let scrollTop = window.scrollY;
  let windowHeight = window.innerHeight;
  let siteHeight = document.documentElement.scrollHeight;
  let percentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);

  let radius = circle.getAttribute('r');
  let circleLength = 2 * Math.PI * radius;
  circle.setAttribute('stroke-dasharray', circleLength);
  circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
};

progressAnimation();

window.addEventListener('scroll', () => {
  progressAnimation();
  if (window.pageYOffset > 580) {
    activeBtn.style.display = 'block'
  } else {
    activeBtn.style.display = 'none'
  }
});
