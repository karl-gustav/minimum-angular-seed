'use strict';

module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'frontend/app/vendor/angular/angular.js',
            'frontend/app/vendor/angular/angular-*.js',
            'frontend/app/vendor/angular/angular-mocks.js',
            'frontend/app/main.js',
            'frontend/app/**/*.js'
        ],

        exclude: [
        ],

        reporters: ['progress'],

        // web server port
        port: 9876,

        colors: true,

        // possible values: config.LOG_DISABLE||config.LOG_ERROR||config.LOG_WARN||config.LOG_INFO||config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
