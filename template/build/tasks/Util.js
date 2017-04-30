import notifier from 'node-notifier';
import path from 'path';
import { log, colors } from 'gulp-util';

export default class Utils {
  static notify(message, title = 'gulp') {
    notifier.notify({
      title,
      message,
    });
  }

  static getProjectPath(pathString) {
    return pathString.replace(path.resolve(`${__dirname}/../../`), '');
  }

  static logError(title, error) {
    log(colors.red(title), `${error.loc.line}:${error.loc.column}`, this.getProjectPath(error.filename));
  }

  static logSuccess(title) {
    log(colors.green(title));
  }
}
