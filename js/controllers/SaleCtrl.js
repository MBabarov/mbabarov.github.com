'use strict';

/* Controllers */

angular.module('myApp.SaleCtrl', [])
    .controller('SaleCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', '$timeout', 'listSalesFactory',
        function($scope, $http, $window, $rootScope, $location, $timeout, listSalesFactory) {

        $location.hash('about');

		$scope.pageTitle = 'Акции и специальные предложения';
		$scope.ready=false;

        listSalesFactory.loadList();
        $scope.$on('salesListAction', function (event, data) {
            $scope.saleList=data.data;
            $scope.ready=data.ready;
            $scope.shopsSelect='Все';
            if($scope.saleList.length!=0){
                $scope.filterList=$scope.saleList;
                $scope.changeCurrentShop= function($currentScope){
                    $scope.filterList=[];
                    $scope.shopsSelect=$currentScope.shopsSelect;
                    angular.forEach($currentScope.saleList, function (oneShop, index) {
                        if($scope.shopsSelect==listSalesFactory.shopsList[0].title){
                            $scope.filterList=$scope.saleList;
                        }
                        if($scope.shopsSelect==oneShop.shop){
                            $scope.filterList.push(oneShop);
                        }
                    });
                }
            }
        });

        $scope.shopsList=listSalesFactory.shopsList;


        if(document.querySelector('.sale-page .full-screen')!=null){
            $timeout(function(){
                document.querySelector('.sale-page .extra-scroll-block').style.overflowY='scroll';
                document.querySelector('.sale-page .extra-scroll-block').style.height=document.querySelector('.sale-page .page__content').offsetHeight-70+'px';
            }, 200);
        }
        angular.element($window).on("orientationchange", function() {
            if(document.querySelector('.sale-page .scroller-wrapper')!=null){
                $timeout(function(){
                    document.querySelector('.sale-page .extra-scroll-block').style.height=document.querySelector('.sale-page .page__content').offsetHeight-70+'px';
                }, 500);
            }
        });
        ons.ready(function() {
            console.log("ons.ready");
        });
		
	}]);