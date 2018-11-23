module.exports = function() {
    return function(style) {
        style.define('_encodeURIComponent', function(val) {
            return encodeURIComponent(val.string);
        });
        style.define('_decodeURIComponent', function(val) {
            return decodeURIComponent(val.string);
        });
        style.define('_upperCase', function(val) {
            return val.string.toUpperCase();
        });
        style.define('_lowerCase', function(val) {
            return val.string.toLowerCase();
        });
    };
};
