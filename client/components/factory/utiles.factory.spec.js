'use strict';

(function() {
    describe('UtilesFactory Spec', function() {

        beforeEach(module('siteApp'));

        var factory;

        beforeEach(inject(function(UtilesFactory) {
            factory = UtilesFactory
        }));

        it('Factory test', function(){
            var randomId = factory.randId();
            expect(randomId).toBeDefined();
            expect(randomId.length).toEqual(30);
        });

    });
}());
