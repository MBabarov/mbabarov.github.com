'use strict';

/* Controllers */

angular.module('myApp.ResultCtrl', [])
    .controller('ResultCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', 'currentListProductsFactory', 'currentResultListProductsFactory',
        function($scope, $http, $window, $rootScope, $location, currentListProductsFactory, currentResultListProductsFactory) {
            $location.hash('result');
			
			
		$scope.pageTitle = 'Результат';
		$scope.ready=true;
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
			$scope.test=currentResultListProductsFactory.result;
			//$scope.ready=data.ready;
		})
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