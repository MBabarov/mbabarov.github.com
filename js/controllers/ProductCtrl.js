'use strict';

/* Controllers */

angular.module('myApp.ProductCtrl', [])
    .controller('ProductCtrl', ['$scope', '$http', '$window', '$rootScope', '$location',
        function($scope, $http, $window, $rootScope, $location) {
            $location.hash('product');
			
			
		$scope.pageTitle = 'Продукт';
		$scope.ready=true;
		$scope.moveToProductsListPage = function(){		
			navi.pushPage('partials/products-list.html');		
		}
		ons.ready(function() {
		  console.log("ons.ready");

		  //$scope.ons.navigator.on('postPop', function(event) {
		  //  console.log(event);
		  //});

		  //$scope.ons.navigator.on('postPush', function(event) {
		  //  console.log(event);
		  //});
		});
		
	}]);