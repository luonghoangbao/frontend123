var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('css', function () {
  return gulp.src('./css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./css/'));
});
 
gulp.task('run', gulp.series('sass', 'css'));
 
gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', gulp.series('sass'));
});
 
gulp.task('default', gulp.series('run','watch'));