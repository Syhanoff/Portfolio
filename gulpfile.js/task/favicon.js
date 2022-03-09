const { src, dest } = require('gulp');


// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const rename = require("gulp-rename");
const favicons = require ('gulp-favicons');
const filter = require ('gulp-filter');


// Конфигурация
const route = require('../config/route');
const setting = require('../config/setting');



const faviconTask = () => {
  return src(route.favicon.src)
    .pipe(plumber(
      notify.onError({
      title: "Favicon",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(rename(setting.renameFav))
    .pipe(dest(route.favicon.dest))
    .pipe(favicons(setting.favicon))
    .pipe(dest(route.favicon.dest))
    .pipe(filter([
      'favicon.ico'
    ]))
    .pipe(dest(route.root));
}


module.exports = faviconTask;
