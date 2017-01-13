'use strict';

describe('Controller: MainController', function() {

    // load the controller's module
    beforeEach(module('siteApp'));
    //beforeEach(module('stateMock'));

    var scope;
    var MainController;
    var state;
    var $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, $state) {
        scope = $rootScope.$new();
        state = $state;
        MainController = $controller('MainController', {
            $scope: scope
        });
    }));

    it('should attach a list of things to the controller', function() {
        MainController.itemName = 'new item';
        MainController.addItem();
        expect(MainController.itemName).toBe('');
        expect(MainController.list.length).toEqual(1);
    });
    it('Random Id should be valid', function() {
        expect(MainController.randomId.length).toEqual(30);
    })
});
