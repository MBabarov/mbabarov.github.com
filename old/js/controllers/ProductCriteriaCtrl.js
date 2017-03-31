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
		$scope.filtersCriteriaProducerProductFactory = filtersCriteriaProducerProductFactory;
		$scope.moveToProductsListPage = function(){
			navi.pushPage('partials/products-list.html');		
		}
		$scope.saveEditProduct = function(){
			navi.pushPage('partials/products-list.html');
		}

		var producerSelected;

		filtersCriteriaProducerProductFactory.loadProducersList().then(function(){
		}, function(){
			$scope.listProducts=[];
		});
		$scope.$on('productsList', function (event, data) {
			$scope.listProducts=data.data;
			$scope.readyListProducts=data.ready;
		});

		$scope.$on('filtersCriteriaProducerLists', function (event, data) {
			$scope.ddSelectOptions=[];
			var arr=[];
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
				else $scope.ddSelectOptions.push(arr[j])
			}
			if($scope.ddSelectOptions.length>0){
				angular.forEach($scope.ddSelectOptions, function(oneCountry, index) {
				if(oneCountry.text==filtersCriteriaProducerProductFactory.currentProduct.producerProduct){
					$scope.ddSelectSelected={
						"text": oneCountry.text,
						"value": oneCountry.value
					}
					console.log('$scope.ddSelectSelected', $scope.ddSelectSelected);
					producerSelected = $scope.ddSelectOptions[0].value;
				}
				})
				if($scope.ddSelectSelected==undefined){
					$scope.ddSelectSelected={
						"text": $scope.ddSelectOptions[0].text,
						"value": $scope.ddSelectOptions[0].value
					}
				}
				filtersCriteriaProducerProductFactory.producerSelected=$scope.ddSelectSelected;
				$scope.producersNotEmpty=true;
				$scope.statusProducers=data.status;
				console.log('producerSelected', producerSelected);
			}
			else{
				$scope.producersNotEmpty=false;
				$scope.statusProducers=data.status;
			}
		});
		$scope.$watchCollection('ddSelectSelected', function(data){
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
		});
		
	}]);