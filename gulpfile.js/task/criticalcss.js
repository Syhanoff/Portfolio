// Плагины
const critical = require('critical');


// Конфигурация
const route = require('../config/route');
const setting = require('../config/setting');


// Обработка SCSS
const criticalCSS = (done) => {
    critical.generate({
      base: route.scss.dest,
      src: '../../release/index.html',
      css: [ 'css/style.css', 'css/libs.css' ],
      target: {
        css: `critical.min.css`,
        uncritical: `async.min.css`
      },
      width: 1280,
      height: 480,
  });
  done();
}


module.exports = criticalCSS;





