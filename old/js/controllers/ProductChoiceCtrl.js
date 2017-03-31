'use strict';

/* Controllers */

angular.module('myApp.ProductChoiceCtrl', [])
    .controller('ProductChoiceCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', '$timeout',
		'listProductsForChoiceFactory', 'filtersCriteriaProducerProductFactory',
        function($scope, $http, $window, $rootScope, $location, $timeout,
				 listProductsForChoiceFactory, filtersCriteriaProducerProductFactory) {

		$location.hash('product-choice');
			
		$scope.pageTitle = 'Выбор продукта';
		$scope.ready=false;
		$scope.query={data:[]};
		
		$scope.moveToProductsListPage = function(){
			navi.pushPage('partials/products-list.html');		
		}
		$scope.saveEditProduct = function($currentScope){
			$scope.currentProduct= {
				"nameProduct": $currentScope.currentProduct.name
			}
			$scope.query.data=[];
			filtersCriteriaProducerProductFactory.currentProduct=$scope.currentProduct;
			navi.pushPage('partials/product-criteria.html');
		}
		$scope.clearNameFilter = function(){
			$scope.query.data=[];
		}
		listProductsForChoiceFactory.loadList();
		$scope.$on('productsChoiceList', function (event, data) {
			$scope.listProducts=data.data;
			$scope.readyListProducts=data.ready;
		});
		
		if(document.querySelector('.product-choice-page .full-screen')!=null){
			$timeout(function(){
				document.querySelector('.product-choice-page .extra-scroll-block').style.overflowY='scroll';
				document.querySelector('.product-choice-page .extra-scroll-block').style.height=document.querySelector('.product-choice-page .page__content').offsetHeight-110+'px';
			}, 200);
		}
		angular.element($window).on("orientationchange", function() {
			if(document.querySelector('.product-criteria-page .scroller-wrapper')!=null){
				$timeout(function(){
					document.querySelector('.product-choice-page .extra-scroll-block').style.height=document.querySelector('.product-choice-page .page__content').offsetHeight-110+'px';
				}, 500);
			}
		});
		ons.ready(function() {
		  console.log("ons.ready");
		});
		
	}]);