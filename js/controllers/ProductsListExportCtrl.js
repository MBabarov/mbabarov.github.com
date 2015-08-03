'use strict';

/* Controllers */

angular.module('myApp.ProductsListExportCtrl', [])
    .controller('ProductsListExportCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', 'currentListProductsFactory', 'dataListsProductsFactory',
        function($scope, $http, $window, $rootScope, $location, currentListProductsFactory, dataListsProductsFactory) {
            $location.hash('products-list');
			
			
		$scope.pageTitle = 'Список продуктов';
		$scope.ready=false;
		$scope.typeSend=currentListProductsFactory.typeSend;
		$scope.list={};
		dataListsProductsFactory.loadProductsList();
		$scope.$on('productsListsAction', function (event, data) {
			angular.forEach(data.data, function (oneList, index) {
				if(index==0) $scope.list=[];
				if(oneList.titleList==currentListProductsFactory.title){
					$scope.list=oneList.listProducts;
				}
			});
			$scope.ready=data.ready;
		})

		$scope.backToLists = function(){
			navi.popPage();
		};	
		$scope.sendListAndBackToLists = function(){
			navi.popPage();
		}
		ons.ready(function() {
		  console.log("ons.ready");
		});
		
	}]);