'use strict';

/* Controllers */

angular.module('myApp.ProductCriteriaCtrl', [])
    .controller('ProductCriteriaCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', '$timeout',
		'filtersCriteriaCountryProductFactory', 'filtersCriteriaProducerProductFactory',
		'listProductsAfterFilterCriteriesFactory',
        function($scope, $http, $window, $rootScope, $location, $timeout,
				 filtersCriteriaCountryProductFactory, filtersCriteriaProducerProductFactory,
				 listProductsAfterFilterCriteriesFactory) {
            $location.hash('product');
			
			
		$scope.pageTitle = 'Продукт';
		$scope.ready=true;
		$scope.readyListProducts=false;
		//$scope.listProductsAfterFilterCriteriesFactory = countriesFactoryList;
		//$scope.filtersCriteriaCountryProductFactory = filtersCriteriaCountryProductFactory;
		$scope.filtersCriteriaProducerProductFactory = filtersCriteriaProducerProductFactory;
		$scope.moveToProductsListPage = function(){
			navi.pushPage('partials/products-list.html');		
		}
		$scope.saveEditProduct = function(){
			navi.pushPage('partials/products-list.html');
		}
		//var countriesSelected;
		var producerSelected;
		//countriesFactoryList.loadList();
		//filtersCriteriaCountryProductFactory.loadCountryList();
		filtersCriteriaProducerProductFactory.loadProducersList().then(function(){
			//listProductsAfterFilterCriteriesFactory.loadList();
		}, function(){
			$scope.listProducts=[];
		});
		$scope.$on('productsList', function (event, data) {
			$scope.listProducts=data.data;
			$scope.readyListProducts=data.ready;
		});
		/*$scope.$on('filtersCriteriaCountryLists', function (event, data) {
			$scope.ddSelectOptions=[];
			var arr=[];
			console.log('data1', data);
			angular.forEach(data.dataCoutriesList, function(country, index) {
				var oneCountry = {
					"text": country.name,
					"value": country.id
				}
				arr.push(oneCountry);

			});
			for(var i=0;i<arr.length;i++) {
				for(var k=0;k<arr.length;k++) {
					if(k!=i) {
						if(arr[i].text==arr[k].text) arr[k]=''
					}
				}
			}
			for(var j=0;j<arr.length;j++) {
				if(arr[j]=='') continue
				else $scope.ddSelectOptions.push(arr[j])
			}
			if($scope.ddSelectOptions.length>0){
				console.log('$scope.ddSelectOptions', $scope.ddSelectOptions);
				console.log('filtersCriteriaCountryProductFactory.currentProduct.nameProduct', filtersCriteriaCountryProductFactory.currentProduct.nameProduct);
				angular.forEach($scope.ddSelectOptions, function(oneCountry, index) {
					if(oneCountry.text==filtersCriteriaCountryProductFactory.currentProduct.countryProduct){
						$scope.ddSelectSelected={
							"text": oneCountry.text,
							"value": oneCountry.value
						}
						console.log('$scope.ddSelectSelected', $scope.ddSelectSelected);
						countriesSelected = $scope.ddSelectOptions[0].value;
					}
				})
				if($scope.ddSelectSelected==undefined){
					$scope.ddSelectSelected={
						"text": $scope.ddSelectOptions[0].text,
						"value": $scope.ddSelectOptions[0].value
					}
				}
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
				filtersCriteriaCountryProductFactory.countriesSelected=data.value;
				//filtersCriteriaProducerProductFactory.loadProducersList();
				//$scope.updateOtherDataList();
			}
		});*/


		$scope.$on('filtersCriteriaProducerLists', function (event, data) {
			$scope.ddSelectOptions2=[];
			var arr=[];
			console.log('data1', data);
			angular.forEach(data.dataProducersList, function(producer, index) {
				var oneProducer = {
					"text": producer.name,
					"value": producer.id
				}
				arr.push(oneProducer);

			});
			for(var i=0;i<arr.length;i++) {
				for(var k=0;k<arr.length;k++) {
					if(k!=i) {
						if(arr[i].text==arr[k].text) arr[k]=''
					}
				}
			}
			for(var j=0;j<arr.length;j++) {
				if(arr[j]=='') continue
				else $scope.ddSelectOptions2.push(arr[j])
			}
			if($scope.ddSelectOptions2.length>0){
				console.log('$scope.ddSelectOptions2', $scope.ddSelectOptions2);
				console.log('filtersCriteriaProducerProductFactory.currentProduct.producerProduct', filtersCriteriaProducerProductFactory.currentProduct.producerProduct);
				angular.forEach($scope.ddSelectOptions2, function(oneCountry, index) {
				if(oneCountry.text==filtersCriteriaProducerProductFactory.currentProduct.producerProduct){
					$scope.ddSelectSelected2={
						"text": oneCountry.text,
						"value": oneCountry.value
					}
					console.log('$scope.ddSelectSelected', $scope.ddSelectSelected2);
					producerSelected = $scope.ddSelectOptions2[0].value;
				}
				})
				if($scope.ddSelectSelected2==undefined){
					$scope.ddSelectSelected2={
						"text": $scope.ddSelectOptions2[0].text,
						"value": $scope.ddSelectOptions2[0].value
					}
				}
				filtersCriteriaProducerProductFactory.producerSelected=$scope.ddSelectSelected2;
				$scope.producersNotEmpty=true;
				$scope.statusProducers=data.status;
				console.log('producerSelected', producerSelected);
			}
			else{
				$scope.producersNotEmpty=false;
				$scope.statusProducers=data.status;
			}
		});

		$scope.$watchCollection('ddSelectSelected2', function(data){
			filtersCriteriaProducerProductFactory.producerSelected=data;
			listProductsAfterFilterCriteriesFactory.loadList();
		});
		if(document.querySelector('.product-criteria-page .full-screen')!=null){
			$timeout(function(){
				document.querySelector('.product-criteria-page .extra-scroll-block').style.overflowY='scroll';
				document.querySelector('.product-criteria-page .extra-scroll-block').style.height=document.querySelector('.product-criteria-page .page__content').offsetHeight-90+'px';
			}, 200);
		}
		angular.element($window).on("orientationchange", function() {
			if(document.querySelector('.product-criteria-page .scroller-wrapper')!=null){
				$timeout(function(){
					document.querySelector('.product-criteria-page .extra-scroll-block').style.height=document.querySelector('.product-criteria-page .page__content').offsetHeight-90+'px';
				}, 500);
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