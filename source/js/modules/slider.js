const sliderBox = document.querySelector('.modal__slider-variants');
const leftPicture = document.querySelector('.modal__img-varia1');
const leftImage = leftPicture.querySelector('img');
const runner = document.querySelector('.modal__slider-runner');

let isActive = false;

// document.addEventListener('DOMContentLoaded', () => {
// 	let width = sliderBox.offsetWidth;
//   leftImage.style.width = `${width}px`;
// });

runner.addEventListener('mousedown', () => {
	isActive = true;
});

document.addEventListener('mouseup', () => {
	isActive = false;
});

document.addEventListener('mouseleave', () => {
	isActive = false;
});

const beforeAfterSlider = (x) => {
	let shift = Math.max(0, Math.min(x, sliderBox.offsetWidth));
	leftPicture.style.width = `${shift}px`;
	runner.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
	e.stopPropagation();
	e.preventDefault();
	return false;
};

document.addEventListener('mousemove', (e) => {
	if (!isActive) {
		return;
	}
	let x = e.pageX;
	x -= sliderBox.getBoundingClientRect().left;
	beforeAfterSlider(x);
	pauseEvents(e);
});


runner.addEventListener('touchstart', () => {
	isActive = true;
});

document.addEventListener('touchend', () => {
	isActive = false;
});

document.addEventListener('touchcancel', () => {
	isActive = false;
});

document.addEventListener('touchmove', (e) => {
	if (!isActive) {
		return;
	}

  let x;

  let i;
  for (i = 0; i < e.changedTouches.length; i++) {
  	x = e.changedTouches[i].pageX;
  }

  x -= sliderBox.getBoundingClientRect().left;

  beforeAfterSlider(x);
  pauseEvents(e);
});
