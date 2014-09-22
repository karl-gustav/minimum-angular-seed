'use strict';

angular.module('myApp').
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/feature1', {
                templateUrl: '/app/feature1/feature1Template.html',
                controller: 'feature1'
            })
            .when('/feature2', {
                templateUrl: '/app/feature2/feature2Template.html',
                controller: 'feature2'
            })
            .otherwise({redirectTo: '/feature1'});
    }]);
