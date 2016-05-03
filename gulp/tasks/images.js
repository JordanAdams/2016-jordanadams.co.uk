const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const browsersync = require('browser-sync');
const config = require('../config');

module.exports = () => {
  return gulp.src(config.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(config.images.dest))
    .pipe(browsersync.stream());
};
