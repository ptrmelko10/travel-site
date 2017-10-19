var gulp = require('gulp');

// Include Plugins
var watch = require('gulp-watch');

// CSS Plugins
var postCSS = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var CSSvars = require('postcss-simple-vars');
var nestedCSS = require('postcss-nested');
var importCSS = require('postcss-import');

// gulp default task
gulp.task('default', function() {
  console.log("Hooray -- you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here");
});

// CSS Post-processing
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  //  .pipe(postCSS([nestedCSS, CSSvars, autoprefixer, importCSS]))
    .pipe(postCSS([importCSS, CSSvars, nestedCSS, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

// gulp-watch async tasks
gulp.task('watch', function () {
  watch('./app/index.html',function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
