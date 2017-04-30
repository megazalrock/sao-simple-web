import gulp from 'gulp';
import runSequence from 'run-sequence';
import './subtask/buildJs';
import './subtask/buildCss';
import Util from './Util';

gulp.task('build', () => runSequence(
  //'lint',
  'clean',
  ['build:js', 'build:css'],
  'minify',
  () => {
    Util.notify('Build Complete');
    Util.logSuccess('Build Complete');
  }
));

// for gulp 4.0
/*
gulp.task(
  'build',
  gulp.series(
    'lint',
    'clean',
    gulp.parallel('build:js', 'build:css'),
    'minify',
    done => {
      Util.notify('build complete');
      done();
    }
  )
);*/
