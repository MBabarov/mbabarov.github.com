'use strict';

/* Controllers */

angular.module('myApp.CooperationCtrl', [])
    .controller('CooperationCtrl', ['$scope', '$http', '$window', '$rootScope', '$location',
        function($scope, $http, $window, $rootScope, $location) {
            $location.hash('cooperation');
			
			
		$scope.pageTitle = 'Сотрудничество';
		$scope.ready=true;
		

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