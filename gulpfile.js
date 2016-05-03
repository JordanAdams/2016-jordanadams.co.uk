const gulp = require('gulp');
const browsersync = require('browser-sync');
const css = require('./gulp/tasks/css');
const js = require('./gulp/tasks/js');
const images = require('./gulp/tasks/images');
const config = require('./gulp/config');

gulp.task('css', css);
gulp.task('js', js);
gulp.task('images', images);

gulp.task('watch', ['default'], () => {
  browsersync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(config.css.watch, ['css'])
    .on('change', browsersync.reload);

  gulp.watch(config.js.watch, ['js'])
    .on('change', browsersync.reload);

  gulp.watch(config.images.watch, ['images'])
    .on('change', browsersync.reload);
});

gulp.task('default', ['css', 'js', 'images']);
