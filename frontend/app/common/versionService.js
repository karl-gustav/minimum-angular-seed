'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp').
    service('version', function () {
        this.getVersion = function () {
            return '0.1';
        }
    });
