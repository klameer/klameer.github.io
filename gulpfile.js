/*
* NPM Package Requirements
*/

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "."
        }
    });
});

gulp.task('serve', function() {

    browserSync.init({
        server: "."
    });
    gulp.watch("*.*").on('change', browserSync.reload);
});
