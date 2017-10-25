// Include Gulp
var gulp = require('gulp');

// Watch Plugins
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

// gulp-watch async tasks
gulp.task('watch', function () {

  browserSync.init({
    //notify: false,
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/index.html',function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

//  watch('./app/assets/styles/**/*.css', function() {
//    gulp.start('icons');
//  });

});

// CSS Inject for browserSync
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
