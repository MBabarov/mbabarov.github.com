'use strict';

/* Controllers */

angular.module('myApp.MainMenuCtrl', [])
    .controller('MainMenuCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', 'authorizationService', 
        function($scope, $http, $window, $rootScope, $location, authorizationService) {
            $location.hash('main-menu');
			
			
		$scope.pageTitle = 'Где дешевле?';
		$scope.ready=true;
		$scope.mainList=[ 
			{'title': 'Войти', 'url': 'partials/account.html', 'authorization': true}, 
			{'title': 'Быстрый старт (без регистрации)', 'url': 'partials/location.html', 'authorization': false}, 
			{'title': 'Акции и специальные предложения', 'url': 'partials/sale.html'}
		];
		$scope.moveToPage = function($currentScope){
			console.log('navi', $scope.navi);
			console.log('$currentScope', $currentScope.oneElementList.url);
			authorizationService.data=$currentScope.oneElementList.authorization;
			navi.pushPage($currentScope.oneElementList.url);
		}
		//$rootScope.mainPage=navi.pages[0];
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