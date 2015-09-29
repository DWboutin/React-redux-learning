//http://egorsmirnov.me/2015/05/25/browserify-babelify-and-es6.html
var gulp = require("gulp");
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  return browserify({entries: './src/client/app.js', extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch('./src/client/*.js', ['build']);
  var server = require('./index');
});

gulp.task('default', ['watch']);