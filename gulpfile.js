//http://egorsmirnov.me/2015/05/25/browserify-babelify-and-es6.html
//http://jpsierens.com/tutorial-livereload-nodemon-gulp/
var gulp = require("gulp");
var express = require('express');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

var APP_PORT = 3000;

function startServer() {
  livereload.listen();
  // configure nodemon
  nodemon({
    // the script to run the app
    script: './index.js',
    ext: 'js'
  }).on('restart', function(){
    // when the app has restarted, run livereload.
    gulp.src('./index.js')
      .pipe(livereload())
      .pipe(notify('Reloading page, please wait...'));
  })
}

gulp.task('build', function () {
  return browserify({entries: './src/client/app.js', extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./src/public'));
});

gulp.task('watch', function () {
  gulp.watch('./src/client/*.js', ['build']);
});

gulp.task('default', ['watch'], function() {
  startServer();
});