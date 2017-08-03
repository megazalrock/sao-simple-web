import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixier from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import config from '../../config';
import Util from '../Util';

let hasError = false;

gulp.task(
  'build:css',
  () => gulp.src([`${config.cssSourceDir}/*.scss`])
    .pipe(sourcemaps.init())
    .pipe(plumber({
      errorHandler(err) {
        console.log(err.messageFormatted);
        Util.notify('SCSS Build Error');
        hasError = true;
        this.emit('end');
      },
    }))
    .pipe(sass())
    .pipe(postcss([
      autoprefixier(config.browsers),
    ]))
    .pipe(sourcemaps.write(config.sourceMapDir))
    .pipe(gulp.dest(config.cssDistDir))
    .on('finish', () => {
      if (!hasError) {
        Util.logSuccess('SCSS Build Succeed');
        Util.notify('SCSS Build Succeed');
      }
    })
);
