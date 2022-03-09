const { src, dest } = require('gulp');


// Плагины
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const size = require('gulp-size');
const imgSharp = require("gulp-sharp-responsive");


// Конфигурация
const route = require('../config/route');
const setting = require('../config/setting');


// Обработка image
const ogImgTask = () => {
  return src(route.ogimg.src)
    .pipe(plumber(
      notify.onError({
      title: "OG Images",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(size({ title: "OG" }))
    .pipe(imgSharp(setting.ogImg))
    .pipe(size({ title: "OGmin" }))
    .pipe(dest(route.img.dest))
}

module.exports = ogImgTask;
