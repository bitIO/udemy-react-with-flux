const gulp = require('gulp');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const watchify = require('watchify');
const reactify = require('reactify');

gulp.task('default', () => {
  const bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true,
  }));

  function build(file) {
    if (file) {
      gutil.log(`Recompiling ${file}`);
    }
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  }

  build();
  bundler.on('update', build);
});
