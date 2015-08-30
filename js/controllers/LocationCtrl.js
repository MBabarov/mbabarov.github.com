'use strict';

/* Controllers */

angular.module('myApp.LocationCtrl', [])
    .controller('LocationCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', 'authorizationService',
        function($scope, $http, $window, $rootScope, $location, authorizationService) {
            $location.hash('location');
			
			
		$scope.pageTitle = 'О приложении';
		$scope.ready=false;
		
		$scope.moveToLists=function(){
			if(authorizationService.data){
				navi.pushPage('partials/lists.html');
			}
			else{
				navi.pushPage('partials/products-list.html');
			}
		};
		var _map;
			var objects, collection;
			$scope.afterInit = function(col){
				$scope.ready=true;
				collection = col;
			};
			$scope.circle = {
				geometry:{
					type:'Circle',
					coordinates:[37.7,55.43],
					radius:10000
				}
			};
			$scope.geoQuerySource = [
				{
					geometry:{
						type: 'Point',
						coordinates: [37.75,55.73]
					}
				},
				{
					geometry:{
						type: 'Point',
						coordinates: [37.45,55.10]
					}
				},
				{
					geometry:{
						type: 'Point',
						coordinates: [37.35,55.25]
					}
				}
			];
			$scope.drag = function(event){
				if(!objects){
					objects = ymaps.geoQuery(collection);
				}
				var circle = event.get('target');
				var objectsInsideCircle = objects.searchInside(circle);
				objectsInsideCircle.setOptions('preset', 'islands#redIcon');
				// Оставшиеся объекты - синими.
				objects.remove(objectsInsideCircle).setOptions('preset', 'islands#blueIcon');
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