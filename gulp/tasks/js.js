const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const browsersync = require('browser-sync');
const config = require('../config');

const bundler = browserify({debug: true});
bundler.add(config.js.entries);
bundler.transform('babelify', {
  presets: ['es2015', 'stage-2', 'react']
});
bundler.plugin('minifyify', {
  output: './dist/app.js.map'
});

module.exports = () => {
  bundler.bundle()
    .pipe(plumber())
    .pipe(source('app.min.js'))
    .pipe(gulp.dest(config.js.dest))
    .pipe(browsersync.stream());
};
