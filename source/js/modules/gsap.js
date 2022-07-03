import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const text1 = document.querySelector('.split-text1'),
      text2 = document.querySelector('.split-text2'),
      text3 = document.querySelector('.split-text3');

const splitText1 = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<div class="word1">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter1'>$&</div>") +
			`</div>`;
	});
	return el;
};

const splitText2 = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<div class="word2">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter2'>$&</div>") +
			`</div>`;
	});
	return el;
};

const splitText3 = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<div class="word3">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter3'>$&</div>") +
			`</div>`;
	});
	return el;
};

const split1 = splitText1(text1),
      split2 = splitText2(text2),
      split3 = splitText3(text3);

function random(min, max){
  return (Math.random() * (max - min)) + min;
}

Array.from(split1.querySelectorAll('.letter1')).forEach((el, idx) => {
	gsap.from(el, 2.5, {
		opacity: 0,
		scale: .1,
		x: random(-300, 300),
		y: random(-300, 300),
		z: random(-300, 300),
		delay: idx * 0.01,
		repeat: 0,
	})
});

Array.from(split2.querySelectorAll('.letter2')).forEach((el, idx) => {
	gsap.from(el, 4.5, {
		opacity: 0,
		scale: .1,
		x: random(-300, 300),
		y: random(-300, 300),
		z: random(-300, 300),
		delay: idx * 0.01,
		repeat: 0,
	})
});

Array.from(split3.querySelectorAll('.letter3')).forEach((el, idx) => {
	gsap.from(el, 6.5, {
		opacity: 0,
		scale: .1,
		x: random(-300, 300),
		y: random(-300, 300),
		z: random(-300, 300),
		delay: idx * 0.01,
		repeat: 0,
	})
});


function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("reveal-in-left")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("reveal-in-right")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.5,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal-in").forEach(function(elem) {
    hide(elem);
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) },
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) }
    });
  });
});








const magneticMouseEvent = {
	power : {
		x  : 20,
		y  : 20,
	},
	events : [],
	ing    : false,
	target : null,

	onInit(){
		const _this = this;
		var events = document.querySelectorAll('.btn');
		for (var i = 0; i < events.length; i++) {
			_this.events.push({
				el    : events[i],
				enter : {
					func  : null,
					event : null,
				},
				leave : {
					func  : null,
					event : null,
				},
			});
		}
		for (var i = 0; i < this.events.length; i++) {
			var v = this.events[i];
			v.enter.func = function(e){
				_this.target = e.target;
				_this.ing    = true;
			};
			v.enter.event = v.el.addEventListener( 'mouseenter', v.enter.func );
			v.leave.func = function(e){
				_this.onMouseLeave();
				_this.ing = false;
			};
			v.leave.event = v.el.addEventListener( 'mouseleave', v.leave.func );
		}
	},
	onMouseMove(e){
		if( this.ing && this.target ){
			const x = e.clientX;
			const y = e.clientY;
			const rect = this.target.getBoundingClientRect();
			const ax = (( x - rect.left ) / rect.width - 0.5)*2; // -1 ~ 1
			const ay = (( y - rect.top ) / rect.height - 0.5)*2; // -1 ~ 1
			const dx = ( ax * 180 ) * Math.PI / 180;
			const dy = ( ay * 180 ) * Math.PI / 180;
			gsap.to( this.target, {
				duration : 0.4,
				rotation : dx,
				x        : dx * this.power.x,
				y        : dy * this.power.y,
			});
		}
	},
	onMouseLeave(){
		gsap.to( this.target, {
			duration : 0.8,
			rotation : 0,
			x : 0,
			y : 0,
			ease : 'power2.out'
		});
	},
	onDestroy(){
		for (var i = 0; i < this.events.length; i++) {
			var v = this.events[i];
			v.el.removeEventListener('mouseenter',v.enter.func);
			v.el.removeEventListener('mouseleave',v.leave.func);
		}
		this.events = [];
		this.ing = false;
	}
}

magneticMouseEvent.onInit();
window.addEventListener('mousemove' , e =>{
	magneticMouseEvent.onMouseMove(e);
});
