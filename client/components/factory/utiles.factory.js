'use strict';

(function() {


    angular.module('siteApp')
    .factory('UtilesFactory', UtilesFactory);

    UtilesFactory.$inject = [ ];
    function UtilesFactory() {
        return (function() {
            var service = {
                randId: randId
            }

            return service;

            function randId() {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < 30; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            }
        }())
    }
})();
