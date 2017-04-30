import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cleanCss from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import config from '../config';

gulp.task('uglify', () => gulp.src(`${config.jsDistDir}/**/*.js`)
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(uglify({
    preserveComments: 'some',
  }))
  .pipe(sourcemaps.write(config.sourceMapDir))
  .pipe(gulp.dest(config.jsDistDir))
);

gulp.task('cleanCss', () => gulp.src(`${config.cssDistDir}/**/*.css`)
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(cleanCss())
  .pipe(sourcemaps.write(config.sourceMapDir))
  .pipe(gulp.dest(config.cssDistDir))
);

gulp.task('minify', ['uglify', 'cleanCss']);
