'use strict';

/* Controllers */

angular.module('myApp.LocationCtrl', [])
    .controller('LocationCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', 'authorizationService',
        function($scope, $http, $window, $rootScope, $location, authorizationService) {
            $location.hash('location');
			
			
		$scope.pageTitle = 'О приложении';
		$scope.ready=true;
		
		$scope.moveToLists=function(){
			if(authorizationService.data){
				navi.pushPage('partials/lists.html');
			}
			else{
				navi.pushPage('partials/products-list.html');
			}
		};
			var _map;
			$scope.afterMapInit = function(map){
				console.log('map', map);
				_map = map;
			};
			$scope.del = function(){
				_map.destroy();
			};
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