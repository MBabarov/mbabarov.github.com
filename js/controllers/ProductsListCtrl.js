'use strict';

/* Controllers */

angular.module('myApp.ProductsListCtrl', [])
    .controller('ProductsListCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', 'ngDialog',
		'filtersCriteriaCountryProductFactory', 'filtersCriteriaProducerProductFactory', 'currentListProductsFactory', 'dataListsProductsFactory',
        function($scope, $http, $window, $rootScope, $location, ngDialog,
				 filtersCriteriaCountryProductFactory, filtersCriteriaProducerProductFactory, currentListProductsFactory, dataListsProductsFactory) {
            $location.hash('products-list');
			
			
		$scope.pageTitle = 'Список продуктов';
		$scope.ready=false;
		$scope.list=[];

		dataListsProductsFactory.loadProductsList();
		$scope.$on('productsListsAction', function (event, data) {
			angular.forEach(data.data, function (oneList, index) {
				if(oneList.titleList==currentListProductsFactory.title){
					$scope.list=oneList.listProducts;
				}
			});
			$scope.ready=data.ready;
		})
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
			navi.pushPage('partials/product-choice.html');
		}
		$scope.editProduct = function($currentScope){
			filtersCriteriaCountryProductFactory.currentProduct=$currentScope.currentProduct;
			filtersCriteriaProducerProductFactory.currentProduct=$currentScope.currentProduct;
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
		});
		
	}]);