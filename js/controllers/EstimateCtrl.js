'use strict';

/* Controllers */

angular.module('myApp.EstimateCtrl', [])
    .controller('EstimateCtrl', ['$scope', '$http', '$window', '$rootScope', '$location',
        function($scope, $http, $window, $rootScope, $location) {
            $location.hash('estimate');
			
			
		$scope.pageTitle = 'Оценка приложения';
		$scope.ready=true;
        $scope.webList=[
            {
                'title': 'Facebook',
                'url': 'http://facebook.com',
                'class': 'facebook'
            },
            {
                'title': 'Вконтакте',
                'url': 'http://vk.com',
                'class': 'vk'
            },
            {
                'title': 'Одноклассники',
                'url': 'http://ok.ru',
                'class': 'odnoclassniki'
            },
            {
                'title': 'Google+',
                'url': 'https://plus.google.com',
                'class': 'google'
            }
        ];

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