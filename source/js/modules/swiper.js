import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  loop: true,
  // stopOnLastSlide : false,
	speed : 500,
	autoplay: {
		delay: 3000,
	}
});
