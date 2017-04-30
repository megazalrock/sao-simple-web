import gulp from 'gulp';
import eslint from 'gulp-eslint';
import plumber from 'gulp-plumber';
import config from '../config';
import Util from './Util';

export const doEslint = () => gulp.src([`${config.jsSourceDir}/**/*.js`])
  .pipe(plumber({
    errorHandler() {
      Util.notify('ESlint Error');
      this.emit('end');
    },
  }))
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());

export const doScssLint = () => {};

gulp.task('lint:eslint', doEslint);
gulp.task('lint:scsslint', doScssLint);

gulp.task('lint', ['lint:eslint']);
