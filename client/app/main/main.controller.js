'use strict';

(function() {


    angular.module('siteApp')
    .controller('MainController', MainController);

    MainController.$inject = ['UtilesFactory' ];
    function MainController(UtilesFactory) {
        var vm =  this;
        vm.list = [];
        vm.itemName = '';
        vm.addItem = addItem;
        vm.randomId = UtilesFactory.randId();
        
        function addItem() {
            if (vm.itemName) {
                vm.list.push(vm.itemName);
                vm.itemName='';
            }
        }
    }
})();
