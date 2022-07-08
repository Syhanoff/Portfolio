const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();


// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gulpSass = require('gulp-sass');
const dartSass = require('sass');
const sass = gulpSass(dartSass);
const size = require('gulp-size');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const sassGlob = require('gulp-sass-glob');
const replace = require('gulp-replace');
const autoprefixer = require('gulp-autoprefixer');
const gulpif = require('gulp-if');
const group = require('gulp-group-css-media-queries');
const purgecss = require('gulp-purgecss');
// const avifWebpCss = require('gulp-avif-css');


// Конфигурация
const route = require('../config/route');
const setting = require('../config/setting');


// Обработка SCSS
const stylesTask = () => {
  // src(route.scss.srcLibs, { sourcemaps: setting.isDev })
  // .pipe(plumber(
  //   notify.onError({
  //   title: "SCSSLibs",
  //   message: "Error: <%= error.message %>"
  //   })
  // ))
  // .pipe(sass.sync(setting.sass))
  // .pipe(dest(route.scss.dest), { sourcemaps: setting.isDev })
  // .pipe(size({
  //   title: "libs-critical.css"
  // }))
  // .pipe(purgecss(setting.purgecss))
  // .pipe(cleanCss(setting.cleanCss))
  // .pipe(rename(setting.rename))
  // .pipe(size({
  //   title: "libs-critical.min.css"
  // }))
  // .pipe(dest(route.scss.dest), { sourcemaps: setting.isDev });




  // src(route.scss.srcLibsCritical, { sourcemaps: setting.isDev })
  //   .pipe(plumber(
  //     notify.onError({
  //     title: "SCSSLibsCritical",
  //     message: "Error: <%= error.message %>"
  //     })
  //   ))
  //   .pipe(sass.sync(setting.sass))
  //   .pipe(dest(route.scss.dest), { sourcemaps: setting.isDev })
  //   .pipe(size({
  //     title: "libs-critical.css"
  //   }))
  //   .pipe(purgecss(setting.purgecss))
  //   .pipe(cleanCss(setting.cleanCss))
  //   .pipe(rename(setting.rename))
  //   .pipe(size({
  //     title: "libs-critical.min.css"
  //   }))
  //   .pipe(dest(route.scss.dest), { sourcemaps: setting.isDev });




  //   src(route.scss.srcLibsAsync, { sourcemaps: setting.isDev })
  //   .pipe(plumber(
  //     notify.onError({
  //     title: "SCSSLibsAsync",
  //     message: "Error: <%= error.message %>"
  //     })
  //   ))
  //   .pipe(sass.sync(setting.sass))
  //   .pipe(dest(route.scss.dest), { sourcemaps: setting.isDev })
  //   .pipe(size({
  //     title: "libs-async.css"
  //   }))
  //   .pipe(purgecss(setting.purgecss))
  //   .pipe(cleanCss(setting.cleanCss))
  //   .pipe(rename(setting.rename))
  //   .pipe(size({
  //     title: "libs-async.min.css"
  //   }))
  //   .pipe(dest(route.scss.dest), { sourcemaps: setting.isDev });





    src(route.style.srcCritical, { sourcemaps: setting.isDev })
    .pipe(plumber(
      notify.onError({
      title: "SCSS-Critical",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sassGlob())
    .pipe(sass.sync(setting.sass))
    .pipe(replace(/@img\//g, '../img/'))
    .pipe(autoprefixer(setting.autoprefixer))
    .pipe(gulpif(setting.isProd, group()))
    .pipe(dest(route.style.dest), { sourcemaps: setting.isDev })
    .pipe(gulpif(setting.isProd, size({
      title: "style-critical.css"
    })))
    .pipe(gulpif(setting.isProd, cleanCss(setting.cleanCss)))
    .pipe(rename(setting.rename))
    .pipe(gulpif(setting.isProd, size({
      title: "style-critical.min.css"
    })))
    .pipe(dest(route.style.dest, { sourcemaps: setting.isDev }))





  return src(route.style.srcAsync, { sourcemaps: setting.isDev })
    .pipe(plumber(
      notify.onError({
      title: "SCSS-Async",
      message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sassGlob())
    .pipe(sass.sync(setting.sass))
    .pipe(replace(/@img\//g, '../img/'))
    .pipe(autoprefixer(setting.autoprefixer))
    .pipe(gulpif(setting.isProd, group()))
    .pipe(dest(route.style.dest), { sourcemaps: setting.isDev })
    .pipe(gulpif(setting.isProd, size({
      title: "style-async.css"
    })))
    .pipe(gulpif(setting.isProd, cleanCss(setting.cleanCss)))
    .pipe(rename(setting.rename))
    .pipe(gulpif(setting.isProd, size({
      title: "style-async.min.css"
    })))
    .pipe(dest(route.style.dest, { sourcemaps: setting.isDev }))
    .pipe(browserSync.stream());
}


module.exports = stylesTask;





// const stylesTask = () => {
//   src(route.scss.srcLibs, { sourcemaps: setting.isDev })
//     .pipe(plumber(
//       notify.onError({
//       title: "SCSSLibs",
//       message: "Error: <%= error.message %>"
//       })
//     ))
//     .pipe(sass.sync(setting.sass))
//     .pipe(dest(route.scss.dest), { sourcemaps: setting.isDev })
//     .pipe(size({
//       title: "libs.css"
//     }))
//     .pipe(purgecss(setting.purgecss))
//     .pipe(cleanCss(setting.cleanCss))
//     .pipe(rename(setting.rename))
//     .pipe(size({
//       title: "libs.min.css"
//     }))
//     .pipe(dest(route.scss.dest), { sourcemaps: setting.isDev });
//   return src(route.scss.src, { sourcemaps: setting.isDev })
//     .pipe(plumber(
//       notify.onError({
//       title: "SCSS",
//       message: "Error: <%= error.message %>"
//       })
//     ))
//     .pipe(sassGlob())
//     .pipe(sass.sync(setting.sass))
//     // .pipe(avifWebpCss())
//     .pipe(replace(/@img\//g, '../img/'))
//     .pipe(autoprefixer(setting.autoprefixer))
//     .pipe(gulpif(setting.isProd, group()))
//     .pipe(dest(route.scss.dest), { sourcemaps: setting.isDev })
//     .pipe(gulpif(setting.isProd, size({
//       title: "style.css"
//     })))
//     .pipe(gulpif(setting.isProd, cleanCss(setting.cleanCss)))
//     .pipe(rename(setting.rename))
//     .pipe(gulpif(setting.isProd, size({
//       title: "style.min.css"
//     })))
//     .pipe(dest(route.scss.dest, { sourcemaps: setting.isDev }))
//     .pipe(browserSync.stream());
// }
