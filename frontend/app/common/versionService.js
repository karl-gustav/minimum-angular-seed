'use strict';

angular.module('myApp').
    service('version', function () {
        this.getVersion = function () {
            return '0.1';
        };
    });
