var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var gulpBabel = require('gulp-babel');
var source = require('vinyl-source-stream');

function jsBundle(options) {
  return browserify(options.index)
    .transform(babelify)
    .bundle()
    .pipe(source(options.output.file))
    .pipe(gulp.dest(options.output.dir));
}
