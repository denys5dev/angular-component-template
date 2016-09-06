(function(){
    'use strict';

    var core = angular.module('app.routes', ['ngComponentRouter', 'wapweb.componentRouterActive']);

    core.value('$routerRootComponent', "myApp")

    core.config(configure);

    configure.$inject = ['$locationProvider'];

    function configure($locationProvider){
        $locationProvider.html5Mode(true);
    }

   
}());