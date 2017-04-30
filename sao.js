const path = require('path');
const fs = require('fs');

const DEFAULTS = {
  docRootDir: 'htdocs',
  assetDir: 'assets',
};

module.exports = {
  prompts: {
    name: {
      message: 'プロジェクト名',
      role: 'folder:name',
    },
    siteName: {
      message: 'サイト名',
      role: 'folder:name',
    },
    docRootDir: {
      message: 'ドキュメントルートディレクトリ',
      default: DEFAULTS.docRootDir,
    },
    assetDir: {
      message: 'アセットディレクトリ',
      default: DEFAULTS.assetDir,
    },
    browsers: {
      message: 'autoprefix用の設定',
      type: 'checkbox',
      choices: [
        'IE >= 11',
        'iOS >= 10',
        'Android >= 4.2',
        'last 2 versions',
        '> 2%',
      ],
      default: [
        'last 2 versions',
      ],
    },
  },
  post(context) {
    const { log, answers, folderPath } = context;
    if (answers.docRootDir !== DEFAULTS.docRootDir) {
      fs.renameSync(
        path.join(folderPath, DEFAULTS.docRootDir),
        path.join(folderPath, answers.docRootDir)
      );
    }
    if (answers.assetDir !== DEFAULTS.assetDir) {
      fs.renameSync(
        path.join(folderPath, answers.docRootDir, DEFAULTS.assetDir),
        path.join(folderPath, answers.docRootDir, answers.assetDir)
      );
    }

    log.success('Done !!');
  },
};
