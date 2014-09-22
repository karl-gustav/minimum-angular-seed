'use strict';

angular.module('myApp').
    filter('interpolate', ['version', function (version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version.getVersion());
        };
    }]);
