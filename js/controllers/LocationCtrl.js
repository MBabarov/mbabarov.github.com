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
		$scope.geoObjects=
		{
			geometry: {
				type: 'Circle',
				coordinates: [37.60,55.76],
				radius: 10000
			},
			properties: {
				balloonContent: "Радиус круга - 10 км",
				hintContent: "Подвинь меня"
			}
		};
		$scope.del = function(){
			_map.destroy();
		};
    ons.ready(function() {
      console.log("ons.ready");
    });
			if($rootScope.ons.slidingMenu){
				$rootScope.ons.slidingMenu.setSwipeable(false);
			}


		}]);