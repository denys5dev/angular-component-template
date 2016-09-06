(function(){
    'use strict';

    var module = angular.module('app');
    
    function aboutCtrl($http){
        
        var model = this;
        
        model.$onInit = function(){

            var gitHubLink = 'https://api.github.com';

            $http.get(gitHubLink + '/repos/denys5dev/angular-component-template').then(function(res){

                model.user = res.data;

            });
        }

    }

    module.component('about', {
        templateUrl: "./templates/pages/about.html",
        controllerAs: 'model',
        controller: ['$http', aboutCtrl]
    });
}());