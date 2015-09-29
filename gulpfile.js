'use strict';

var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('build', function() {
  browserify({
    entries: './src/app/main.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./dist/js'));
});


gulp.task('copy', function() {
  gulp.src('src/index.html')
  .pipe(gulp.dest('./dist'));
});


gulp.task('sass', function() {
  gulp.src('src/scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./dist/css'));
});


gulp.task('watch', function(){
  gulp.watch('src/**/*.js', ['build']);
  gulp.watch('src/**/*.html', ['copy']);
  gulp.watch('src/**/*.scss', ['sass']);
})


gulp.task('default', ['copy', 'build', 'sass', 'watch']);
