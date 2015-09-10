'use strict';

var gulp = require('gulp');
var noprotocol = require('gulp-noprotocol');
var livereload = require('gulp-livereload');

/**
 * Build css file(s) from Sass files and place in the public 'build/css' folder.
 */
gulp.task('css', function() {
   return gulp.src('resources/sass/**/*.{scss,sass}')
     .pipe(noprotocol.css())
     .on('error', noprotocol.notify)
     .pipe(gulp.dest('public/build/css'));
});

/**
 * Build js lib bundle file(s) from js source files and place it in the public 'build/js' folder.
 */
gulp.task('bundle-libs', function() {
   return gulp.src([
      // include the already minified .js files from the vendor map here, such as:
      //'resources/vendor/jquery/dist/jquery.min.js',
      // etc
   ])
   .pipe(noprotocol.bundle('main.bundle.js'))
   .on('error', noprotocol.notify)
   .pipe(gulp.dest('public/build/js'));
});

/**
 * Build js app bundle file(s) from js source files and place it in the public 'build/js' folder.
 */
gulp.task('js', function () {
    return gulp
      .src('resources/js/*.js')
      .pipe(noprotocol.js())
      .on('error', noprotocol.notify)
      .pipe(gulp.dest('public/build/js'));
});

/**
 * Livereload
 */
gulp.task('watch', ['js', 'bundle-libs', 'css'], function() {

   livereload.listen();
   gulp.watch('resources/sass/**/*.{scss,sass}', ['css']);
   gulp.watch(['resources/js/**/*.js'], ['js']);
   gulp.watch(['resources/vendor/**/*.js'], ['bundle-libs']);
   gulp.watch([
     'public/**/*.html',
     'public/**/build/css/*.css',
     'public/**/build/js/*.js',
   ]).on('change', livereload.changed);
});

/**
 * Deploy task
 */
gulp.task('deploy', ['js', 'bundle-libs', 'css']);

/**
 * Development task/watch
 */
gulp.task('default', ['watch']);