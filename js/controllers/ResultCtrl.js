'use strict';

/* Controllers */

angular.module('myApp.ResultCtrl', [])
    .controller('ResultCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', '$timeout', 'currentListProductsFactory', 'currentResultListProductsFactory',
        function($scope, $http, $window, $rootScope, $location, $timeout, currentListProductsFactory, currentResultListProductsFactory) {
            $location.hash('result');
			
			
		$scope.pageTitle = 'Результат';
		$scope.ready=true;
		$scope.analyzeByProductReady=true;
		$scope.criteriaList=[
			{'title': 'Лучшая цена за список', 'id': 0},
			{'title': 'Цены в других магазинах', 'id': 1},
			{'title': 'Сравнить цену по товару', 'id': 2},
		];
		$scope.criteriaSelect='Лучшая цена за список';
		currentResultListProductsFactory.analizeList(0);
		$scope.changeCurrentCriteria= function($currentScope){
			$scope.criteriaSelect=$currentScope.criteriaSelect;
			//currentResultListProductsFactory.analizeList();
			angular.forEach($scope.criteriaList, function (oneCriteria, index) {
				if($scope.criteriaSelect==oneCriteria.title){
					currentResultListProductsFactory.analizeList(oneCriteria.id);
				}
			})
		}

		$scope.$on('productsListResultsAction', function (event, data) {
			$scope.result=currentResultListProductsFactory.result;
			$scope.listByProduct=currentResultListProductsFactory.result[0].productsList;
			angular.forEach($scope.listByProduct, function (oneProduct, index) {
				oneProduct.selected=false;
			})

			//$scope.ready=data.ready;
		})

		$scope.showPrice=function($currentScope){
			$scope.analyzeByProductReady=false;
			$scope.resultByProduct=[];
			for(var i=0; i<currentResultListProductsFactory.result.length; i++) {
				$scope.resultByProduct.push({shop: currentResultListProductsFactory.result[i].shop, data: [], total: 0})
			}
			$scope.preResultByProduct=[];
			angular.forEach($scope.listByProduct, function (oneProduct, index) {
				if(oneProduct.selected==true){
					for(var i=0; i<currentResultListProductsFactory.result.length; i++){
						angular.forEach(currentResultListProductsFactory.result[i].productsList, function(one, index2){
							if(one.id==oneProduct.id){
								one.shop=currentResultListProductsFactory.result[i].shop
								$scope.preResultByProduct.push(one)
							}
						})
					}
				}
			})
			$timeout(function(){
				angular.forEach($scope.preResultByProduct, function (oneProduct, index) {
					angular.forEach($scope.resultByProduct, function (one, index) {
						if(oneProduct.shop==one.shop){
							one.data.push(oneProduct);
							one.total=parseFloat(one.total)+oneProduct.price;
							one.total = parseFloat(one.total).toFixed(2);
						}
					})
				})
				$scope.analyzeByProductReady=true;
			}, 1000)
		}
		$scope.moveToProductsListPage=function(){
			navi.popPage();
		}
		$scope.moveToListsPage=function(){
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