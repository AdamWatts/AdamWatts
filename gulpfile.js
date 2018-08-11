
var gulp = require('gulp');
var webstandards = require('gulp-webstandards');


gulp.task('default', function() {
  // place code for your default task here
  console.log('YO');
});

gulp.task('webstandards', function () {
  return gulp.src('YOUR_COMPILED_FILES/**/*')
      .pipe(webstandards());
});
