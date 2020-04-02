import { paths } from "../../gulpfile.babel";
import gulp from "gulp";
import ghPages from "gulp-gh-pages";

gulp.task('deploy', function() {
  return gulp.src('./docs/**/*')
    .pipe(ghPages());
});
