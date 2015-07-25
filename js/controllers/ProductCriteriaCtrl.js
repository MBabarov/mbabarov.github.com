'use strict';

/* Controllers */

angular.module('myApp.ProductCriteriaCtrl', [])
    .controller('ProductCriteriaCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', 'filtersCriteriaProductFactory', 'countriesFactoryList',
        function($scope, $http, $window, $rootScope, $location, filtersCriteriaProductFactory, countriesFactoryList) {
            $location.hash('product');
			
			
		$scope.pageTitle = 'Продукт';
		$scope.ready=true;
		$scope.countriesFactoryList = countriesFactoryList;
		$scope.filtersCriteriaProductFactory = filtersCriteriaProductFactory;
			console.log('$scope.filtersCriteriaProductFactory ', $scope.filtersCriteriaProductFactory)
		$scope.moveToProductsListPage = function(){
			navi.pushPage('partials/products-list.html');		
		}

		var countriesSelected;
		//countriesFactoryList.loadList();
			filtersCriteriaProductFactory.loadCountryList();
		$scope.$on('criteriaLists', function (event, data) {
			$scope.ddSelectOptions=[];
			console.log('data1', data);
			angular.forEach(data.dataCoutriesList, function(country, index) {
				console.log('country', country);
				var oneCountry = {
					"text": country.name,
					"value": country.id
				}
				$scope.ddSelectOptions.push(oneCountry);
			});

			if($scope.ddSelectOptions.length>0){
				$scope.ddSelectSelected={
					"text": $scope.ddSelectOptions[0].text,
					"value": $scope.ddSelectOptions[0].value
				}
				countriesSelected = $scope.ddSelectOptions[0].value;
				$scope.countriesNotEmpty=true;
				$scope.statusCountries=data.status;
			}
			else{
				$scope.countriesNotEmpty=false;
				$scope.statusCountries=data.status;
			}
		});

		$scope.$watchCollection('ddSelectSelected', function(data){
			if (countriesSelected) {
				countriesSelected=data.value;
				filtersCriteriaProductFactory.selected=data.value;
				//$scope.updateOtherDataList();
			}
		});

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