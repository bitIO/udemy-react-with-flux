const gulp = require('gulp');
const react = require('gulp-react');
const concat = require('gulp-concat');


gulp.task('default', () => {
  return gulp.src('src/**')
    .pipe(react())
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./'));
});
