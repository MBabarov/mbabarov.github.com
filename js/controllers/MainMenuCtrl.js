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
			authorizationService.data=$currentScope.oneElementList.authorization;
			navi.pushPage($currentScope.oneElementList.url);
		}
		ons.ready(function() {
		  console.log("ons.ready");
		});
		
	}]);