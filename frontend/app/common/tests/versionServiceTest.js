'use strict';

/* jasmine specs for services go here */

describe('The version service', function () {
    beforeEach(module('myApp'));

    describe('should have a getVersion() method and that', function () {
        it('should exist', inject(function (version) {
            expect(typeof version.getVersion).toBe('function');
        }));

        it('should return current version', inject(function (version) {
            expect(version.getVersion()).toEqual('0.1');
        }));
    });
});
