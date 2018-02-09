
var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvar = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('html', function(){

});

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvar, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));

});

gulp.task('watch', function(){
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
