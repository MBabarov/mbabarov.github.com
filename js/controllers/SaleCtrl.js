'use strict';

/* Controllers */

angular.module('myApp.SaleCtrl', [])
    .controller('SaleCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', '$timeout',
        function($scope, $http, $window, $rootScope, $location, $timeout) {

        $location.hash('about');

		$scope.pageTitle = 'Акции и специальные предложения';
		$scope.ready=true;

        $scope.shopsList=[
            {'title': 'Все', 'id': 0},
            {'title': 'ATB', 'id': 1},
            {'title': 'Silpo', 'id': 2},
            {'title': 'Varus', 'id': 3}
        ];
        $scope.saleList=[
            {
                'title': 'Sale 1',
                'shop': 'ATB',
                'url': 'img/sale-1.png'
            },
            {
                'title': 'Sale 2',
                'shop': 'ATB',
                'url': 'img/sale-2.png'
            },{
                'title': 'Sale 3',
                'shop': 'ATB',
                'url': 'img/sale-3.png'
            },{
                'title': 'Sale 4',
                'shop': 'ATB',
                'url': 'img/sale-4.png'
            },{
                'title': 'Sale 5',
                'shop': 'ATB',
                'url': 'img/sale-5.png'
            },
            {
                'title': 'Sale 6',
                'shop': 'Silpo',
                'url': 'img/sale-6.png'
            },
            {
                'title': 'Sale 7',
                'shop': 'Silpo',
                'url': 'img/sale-7.png'
            },{
                'title': 'Sale 8',
                'shop': 'Silpo',
                'url': 'img/sale-8.png'
            },{
                'title': 'Sale 9',
                'shop': 'Silpo',
                'url': 'img/sale-9.png'
            },{
                'title': 'Sale 10',
                'shop': 'Silpo',
                'url': 'img/sale-10.png'
            },
            {
                'title': 'Sale 11',
                'shop': 'Varus',
                'url': 'img/sale-11.png'
            },
            {
                'title': 'Sale 12',
                'shop': 'Varus',
                'url': 'img/sale-12.png'
            },{
                'title': 'Sale 13',
                'shop': 'Varus',
                'url': 'img/sale-13.png'
            },{
                'title': 'Sale 14',
                'shop': 'Varus',
                'url': 'img/sale-14.png'
            },{
                'title': 'Sale 15',
                'shop': 'Varus',
                'url': 'img/sale-15.png'
            }
        ];

        $scope.shopsSelect='Все';
        $scope.filterList=$scope.saleList;
        $scope.changeCurrentShop= function($currentScope){
            $scope.filterList=[];
            $scope.shopsSelect=$currentScope.shopsSelect;
            angular.forEach($currentScope.saleList, function (oneShop, index) {
                console.log('oneShop.shopsList',  oneShop.shopsList);
                if($scope.shopsSelect==$scope.shopsList[0].title){
                    $scope.filterList=$scope.saleList;
                }
                if($scope.shopsSelect==oneShop.shop){
                    $scope.filterList.push(oneShop);
                }
            });
        }
            if(document.querySelector('.sale-page .full-screen')!=null){
                $timeout(function(){
                    document.querySelector('.sale-page .extra-scroll-block').style.overflowY='scroll';
                    console.log('height', document.querySelector('.sale-page .page__content').offsetHeight)
                    console.log('height', document.querySelector('.sale-page .extra-scroll-block').style.height)
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

          //$scope.ons.navigator.on('postPop', function(event) {
          //  console.log(event);
          //});

          //$scope.ons.navigator.on('postPush', function(event) {
          //  console.log(event);
          //});
        });
		
	}]);