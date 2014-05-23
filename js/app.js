'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'views/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'views/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/flot', {templateUrl: 'views/flot.html', controller: 'MainMenuCtrl'});
  $routeProvider.when('/morris', {templateUrl: 'views/morris.html', controller: 'MainMenuCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
