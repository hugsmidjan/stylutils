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
				const path = stylus.evaluator.paths.slice(-1)[0];
        const meta = require('fs').statSync(path +'/'+ filePath.string);
        // Currently assumes that filesize is sufficient as a checksum
        // This is quick, but may be changed later
        return meta.size;
      } catch (error) {
        console.error('Can\'t do `_fileChecksum` for "' + filePath.string + '"\n - - - -');
        return '';
      }
    });
  };
};
