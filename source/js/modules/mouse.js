document.getElementsByTagName("body")[0].addEventListener("mousemove", (n) => {
  t.style.left = n.clientX + "px",
  t.style.top = n.clientY + "px",
  e.style.left = n.clientX + "px",
  e.style.top = n.clientY + "px",
  i.style.left = n.clientX + "px",
  i.style.top = n.clientY + "px"
});
const t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");

function n(t) {
  e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
  e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-mouse"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}
function o(t) {
  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s);
}

document.addEventListener('DOMContentLoaded', function () {
  var hoverLink = document.querySelector('.img-1');
  var bodychange = document.querySelector('body');

  hoverLink.addEventListener('mouseenter', function (e) {
      bodychange.classList.add('img-1-wrap');
  });
  hoverLink.addEventListener('mouseleave', function () {
      bodychange.classList.remove('img-1-wrap');
  })
})
document.addEventListener('DOMContentLoaded', function () {
  var hoverLink = document.querySelector('.img-2');
  var bodychange = document.querySelector('body');

  hoverLink.addEventListener('mouseenter', function (e) {
      bodychange.classList.add('img-2-wrap');
  });
  hoverLink.addEventListener('mouseleave', function () {
      bodychange.classList.remove('img-2-wrap');
  })
})
document.addEventListener('DOMContentLoaded', function () {
  var hoverLink = document.querySelector('.img-3');
  var bodychange = document.querySelector('body');

  hoverLink.addEventListener('mouseenter', function (e) {
      bodychange.classList.add('img-3-wrap');
  });
  hoverLink.addEventListener('mouseleave', function () {
      bodychange.classList.remove('img-3-wrap');
  })
})
document.addEventListener('DOMContentLoaded', function () {
  var hoverLink = document.querySelector('.img-4');
  var bodychange = document.querySelector('body');

  hoverLink.addEventListener('mouseenter', function (e) {
      bodychange.classList.add('img-4-wrap');
  });
  hoverLink.addEventListener('mouseleave', function () {
      bodychange.classList.remove('img-4-wrap');
  })
})
document.addEventListener('DOMContentLoaded', function () {
  var hoverLink = document.querySelector('.img-5');
  var bodychange = document.querySelector('body');

  hoverLink.addEventListener('mouseenter', function (e) {
      bodychange.classList.add('img-5-wrap');
  });
  hoverLink.addEventListener('mouseleave', function () {
      bodychange.classList.remove('img-5-wrap');
  })
})
document.addEventListener('DOMContentLoaded', function () {
  var hoverLink = document.querySelector('.img-6');
  var bodychange = document.querySelector('body');

  hoverLink.addEventListener('mouseenter', function (e) {
      bodychange.classList.add('img-6-wrap');
  });
  hoverLink.addEventListener('mouseleave', function () {
      bodychange.classList.remove('img-6-wrap');
  })
})


