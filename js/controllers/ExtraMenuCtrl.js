'use strict';

/* Controllers */

angular.module('myApp.ExtraMenuCtrl', [])
    .controller('ExtraMenuCtrl', ['$scope', '$http', '$window', '$rootScope', '$location',
        function($scope, $http, $window, $rootScope, $location) {
            $location.hash('extra-menu');
			
			
		$scope.pageTitle = 'Где дешевле?';
		$scope.ready=true;
		$scope.extraList=[
			{
				'title': 'О приложении', 
				'subTitle': 'Информация о приложении', 
				'url': 'partials/about.html'
			},
			{
				'title': 'Сотрудничество',
				'subTitle': '',
				'url': 'partials/cooperation.html'
			},
			{
				'title': 'Контакты',
				'subTitle': 'Как с нами связаться',
				'url': 'partials/contacts.html'
			},
			{
				'title': 'Оценить', 
				'subTitle': 'Оценить приложении', 
				'url': 'partials/estimate.html'
			}
		];
		$scope.moveToPage = function($currentScope){		
			navi.pushPage($currentScope.oneElementList.url);
			menu.toggleMenu();			
		}
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