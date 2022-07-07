// Плагины
const critical = require('critical');


// Конфигурация
const route = require('../config/route');
// const setting = require('../config/setting');


// Обработка SCSS
const criticalCSS = (done) => {
    return critical.generate({
      base: route.html.dest,
      src: 'index.html',
      css: [ 'css/style.css', 'css/libs.css' ],
      target: {
        css: `critical.css`,
        uncritical: `async.css`
      },
      width: 1280,
      height: 480,
  });
  // done();
}


module.exports = criticalCSS;





