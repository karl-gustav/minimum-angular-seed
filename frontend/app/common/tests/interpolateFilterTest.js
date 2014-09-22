'use strict';

/* jasmine specs for filters go here */

describe('filter', function () {
    beforeEach(function () {
        module('myApp');

        module(function ($provide) {
            $provide.value('version', {getVersion: function () {
                return 'TEST_VER';
            }});
        });
    });

    describe('interpolate', function () {
        it('should replace VERSION', inject(function (interpolateFilter) {
            expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
        }));
    });
});
