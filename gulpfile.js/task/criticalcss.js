// Плагины
const critical = require('critical');


// Конфигурация
const route = require('../config/route');
// const setting = require('../config/setting');


// Обработка SCSS
const criticalCSS = (done) => {
    return critical.generate({
      inline: true,
      base: route.html.dest,
      src: 'index.html',
      css: [ 'css/style-critical.css', 'css/style-async.css' ],
      target: {
        // css: `critical.css`,
        html: 'index.html',
        uncritical: `css/async.css`
      },
      width: 1280,
      height: 480,
  });
  // done();
}


module.exports = criticalCSS;





