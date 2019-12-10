/* globals process */
module.exports = function () {
  return function (style) {
    style.define('_encodeURIComponent', function (val) {
      return encodeURIComponent(val.string);
    });
    style.define('_decodeURIComponent', function (val) {
      return decodeURIComponent(val.string);
    });
    style.define('_upperCase', function (val) {
      return val.string.toUpperCase();
    });
    style.define('_lowerCase', function (val) {
      return val.string.toLowerCase();
    });
    style.define('_getEnv', function (key) {
      return process.env[key.string];
    });
    style.define('_isDevMode', function () {
      return process.env.NODE_ENV !== 'production';
    });
  };
};
