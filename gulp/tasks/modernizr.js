// Include Gulp
var gulp = require('gulp');

// Modernizr Plugins
var modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  return gulp.src('./app/assets/styles/**/*.{css,js}')
    .pipe(modernizr({
      "options": ["setClasses"]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'));
});
