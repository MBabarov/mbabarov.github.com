'use strict';

/* Controllers */

angular.module('myApp.ProductsListExportCtrl', [])
    .controller('ProductsListExportCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', 'currentListProductsFactory', 'dataListsProductsFactory',
        function($scope, $http, $window, $rootScope, $location, currentListProductsFactory, dataListsProductsFactory) {
            $location.hash('products-list');
			
			
		$scope.pageTitle = 'Список продуктов';
		$scope.ready=true;
		$scope.typeSend=currentListProductsFactory.typeSend;
		$scope.list={};
		angular.forEach(dataListsProductsFactory.data, function (oneList, index) {
			if(index==0) $scope.list=oneList.listProducts;
			console.log('currentListProductsFactory', currentListProductsFactory.title);
			console.log('oneList', oneList);
			if(oneList.titleList==currentListProductsFactory.title){
				$scope.list=oneList.listProducts;
				console.log('oneList.listProducts', oneList.listProducts);
			}
		});
		$scope.backToLists = function(){
			navi.popPage();
		};	
		$scope.sendListAndBackToLists = function(){
			navi.popPage();
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