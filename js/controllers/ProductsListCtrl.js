﻿'use strict';

/* Controllers */

angular.module('myApp.ProductsListCtrl', [])
    .controller('ProductsListCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', 'ngDialog',
		'filtersCriteriaCountryProductFactory', 'filtersCriteriaProducerProductFactory', 'currentListProductsFactory', 'dataListsProductsFactory',
        function($scope, $http, $window, $rootScope, $location, ngDialog,
				 filtersCriteriaCountryProductFactory, filtersCriteriaProducerProductFactory, currentListProductsFactory, dataListsProductsFactory) {
            $location.hash('products-list');
			
			
		$scope.pageTitle = 'Список продуктов';
		$scope.ready=true;
				/*$scope.list=[
			{'title': 'Ананас'}, 
			{'title': 'Анчоус'}, 
			{'title': 'Банан'}
		];*/
		angular.forEach(dataListsProductsFactory.data, function (oneList, index) {
			if(oneList.titleList==currentListProductsFactory.title){
				$scope.list=oneList.listProducts;
			}
		});
		$scope.deleteOneProduct=function(currentProduct){
			dialogDelete(currentProduct);
		}
		$scope.deleteOneProductAction=function(currentProduct){
			angular.forEach($scope.list, function (oneProduct, index) {
				if(oneProduct.nameProduct==currentProduct){
					$scope.list.splice(index, 1);
				}

			})
		}
		$scope.addProduct = function(){
			navi.pushPage('partials/product-criteria.html');
		}
		$scope.editProduct = function($currentScope){
			filtersCriteriaCountryProductFactory.currentProduct=$currentScope.currentProduct;
			filtersCriteriaProducerProductFactory.currentProduct=$currentScope.currentProduct;
			console.log('filtersCriteriaCountryProductFactory.currentProduct', filtersCriteriaCountryProductFactory.currentProduct);
			navi.pushPage('partials/product-criteria.html');
		};	
		$scope.moveToResultPage = function(){
			currentListProductsFactory.data=$scope.list;
			navi.pushPage('partials/result.html');		
		}
		function dialogDelete (currentProduct) {
			$scope.nameProduct = currentProduct;
			ngDialog.openConfirm({
				template: 'modalDialogDelete',
				className: 'ngdialog-theme-default',
				scope: $scope
			}).then(function (value) {
				$scope.deleteOneProductAction(currentProduct);
			}, function () {

			});
		};
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