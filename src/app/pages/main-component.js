(function(){
    'use strict';

    var module = angular.module('app');

    function mainCtrl(){

        var model = this;

        // Just for Karam tests
        model.add = function(x, y){
            return x + y;
        }
    }

    module.component('main', {
        templateUrl: "./templates/pages/main.html",
        controllerAs: "model",
        controller: mainCtrl
    });
}());