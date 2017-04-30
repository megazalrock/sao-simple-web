export default {
  jsDistDir: '<%= docRootDir %>/<%= assetDir %>/js',
  jsDistFileName: 'main.js',
  jsSourceDir: 'src/js',
  cssDistDir: '<%= docRootDir %>/<%= assetDir %>/css',
  cssDistFileName: 'main.css',
  cssSourceDir: 'src/css',
  sourceMapDir: './maps',
  browsers: <%- JSON.stringify(browsers) %>,
};
