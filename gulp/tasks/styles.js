// Include Gulp
var gulp = require('gulp');

// CSS Plugins
var postCSS = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var CSSvars = require('postcss-simple-vars');
var nestedCSS = require('postcss-nested');
var importCSS = require('postcss-import');

// CSS Post-processing
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  //  .pipe(postCSS([nestedCSS, CSSvars, autoprefixer, importCSS]))  Order does matter!!!
    .pipe(postCSS([importCSS, CSSvars, nestedCSS, autoprefixer]))
    .on('error', function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
