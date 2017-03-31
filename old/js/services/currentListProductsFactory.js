'use strict';

angular.module('myApp.currentListProductsFactory', []).
    factory('currentListProductsFactory', ['$window', '$http', '$sce', '$rootScope',
        function($window, $http, $sce, $rootScope) {
		var currentListProducts= {
			data: null,
        }
      return currentListProducts;
    }])