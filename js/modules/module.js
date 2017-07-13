var app = angular.module("myApp", ["ngRoute","MyModuleA","MyModuleB"]);
var moduleA = angular.module("MyModuleA", ["MyModuleB"]);
var moduleB = angular.module("MyModuleB", []);

app.config(function($routeProvider) {
    $routeProvider
    .when("/red", {
        templateUrl : "red.html"
    })
    .when("/green", {
        templateUrl : "green.html"
    })
    .when("/orange", {
        templateUrl : "orange.html"
    });
});


