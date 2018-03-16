var gulp = require('gulp');
var imageMin = require('gulp-imagemin');
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('previewDist',function(){
  browserSync.init({
    notify: false,
    server:{
      baseDir:'dist'
    }
  });
});

gulp.task('delDist',function(){
  return del('./dist');
});
gulp.task('optimizePics',['delDist','icons'], function(){
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imageMin({
      progressive: true,
      interlaced:true,
      multipass:true
    }))
    .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('usemin',['delDist','styles','scripts'],function(){
  return gulp.src('./app/index.html')
  .pipe(usemin({
    css:[function(){return rev()},function(){return cssnano()}],
    js:[function(){return rev()},function(){return uglify()}]
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('build',['delDist','optimizePics','usemin']);
