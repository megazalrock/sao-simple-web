import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import config from '../../config';
import Util from '../Util';
import { doEslint } from '../lint';


const borwserifyOption = {
  entries: [`${config.jsSourceDir}/main.js`],
  transform: [babelify],
  cache: true,
  debug: true,
};

const compleJs = (doWatch = false) => {
  let bundler;
  if (doWatch) {
    bundler = watchify(browserify(borwserifyOption));
  } else {
    bundler = browserify(borwserifyOption);
  }

  const rebundle = function () {
    if (doWatch) {
      doEslint();
    }

    return bundler
      .bundle()
      .on('error', err => {
        Util.notify(`${err.loc.line}:${err.loc.column} ${Util.getProjectPath(err.filename)}`, 'JS Compile Error');
        Util.logError('JS Compile Error', err);
      })
      .pipe(source(config.jsDistFileName))
      .pipe(gulp.dest(config.jsDistDir));
  };

  bundler
    .on('update', () => {
      rebundle();
    })
    .on('log', () => {
      Util.notify('JS Comple Succeed');
      Util.logSuccess('JS Comple Succeed');
    });

  return rebundle();
};


gulp.task('build:js', () => compleJs());
gulp.task('watchify', () => compleJs(true));
