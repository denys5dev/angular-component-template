(function(){
    'use strict';

    var module = angular.module('app');

    module.component('myApp', {
        templateUrl: './templates/pages/root.html',
        $routeConfig: [
            { path: '/', component: "main", name: "Main" },
            { path: '/about', component: "about", name: "About" },
            { path: '/contact', component: "contact", name: "Contact" },
            { path: "/**", redirectTo: ["About"] }
        ]
    })
}());