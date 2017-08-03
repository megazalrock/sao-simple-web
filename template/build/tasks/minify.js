import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cleanCss from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import pump from 'pump';
import config from '../config';

gulp.task('uglify', (cb) => {
  pump([
    gulp.src(`${config.jsDistDir}/**/*.js`),
    sourcemaps.init({ loadMaps: true }),
    uglify(),
    sourcemaps.write(config.sourceMapDir),
    gulp.dest(config.jsDistDir),
  ], cb);
});

gulp.task('cleanCss', (cb) => {
  pump([
    gulp.src(`${config.cssDistDir}/**/*.css`),
    sourcemaps.init({ loadMaps: true }),
    cleanCss(),
    sourcemaps.write(config.sourceMapDir),
    gulp.dest(config.cssDistDir),
  ], cb);
});

gulp.task('minify', ['uglify', 'cleanCss']);
