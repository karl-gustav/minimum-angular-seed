'use strict';

describe('The appVersion directive', function () {
    beforeEach(function () {
        module('myApp');

        module(function ($provide) {
            $provide.value('version', {getVersion: function () {
                return '0.1';
            }});
        });
    });

    it('should print current version', inject(function ($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('0.1');
    }));
});
