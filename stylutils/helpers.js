/* globals process */
module.exports = function () {
  return function (stylus) {
    stylus.define('_encodeURIComponent', function (val) {
      return encodeURIComponent(val.string);
    });
    stylus.define('_decodeURIComponent', function (val) {
      return decodeURIComponent(val.string);
    });
    stylus.define('_upperCase', function (val) {
      return val.string.toUpperCase();
    });
    stylus.define('_lowerCase', function (val) {
      return val.string.toLowerCase();
    });
    stylus.define('_getEnv', function (key) {
      return process.env[key.string];
    });
    stylus.define('_isDevMode', function () {
      return process.env.NODE_ENV !== 'production';
    });
    stylus.define('_fileChecksum', function (filePath) {
      try {
				const callerPath = stylus.evaluator.paths.slice(-1)[0];
				const filePathFull = callerPath + '/' + filePath.string;
        return require('md5-file').sync(filePathFull);
      } catch (error) {
        console.error('Can\'t do `_fileChecksum` for "' + filePath.string + '"\n - - - -');
        return '';
      }
    });
  };
};
