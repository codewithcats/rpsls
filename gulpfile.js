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

gulp.task('core-spec', function() {
  return jsBundle({
    index: 'specs/rpsls/index.js',
    output: {
      file: 'core-spec.js',
      dir: 'specs/bundles/'
    }
  });
});
