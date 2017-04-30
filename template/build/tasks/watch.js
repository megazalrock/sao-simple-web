
import gulp from 'gulp';
import runSequence from 'run-sequence';
import config from '../config';
import './subtask/buildJs';

gulp.task('watchScss', () => gulp.watch(`${config.cssSourceDir}/**/*.scss`, ['build:css']));

gulp.task('watch', () => runSequence(
  'clean',
  ['build:js', 'build:css'],
  ['watchify', 'watchScss']
));
