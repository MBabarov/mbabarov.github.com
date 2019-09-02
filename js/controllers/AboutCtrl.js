'use strict';

/* Controllers */

angular.module('myApp.AboutCtrl', [])
    .controller('AboutCtrl', ['$scope', '$http', '$window', '$rootScope', '$location',
        function($scope, $http, $window, $rootScope, $location) {
        $location.hash('about');

		$scope.pageTitle = 'О приложении';
		$scope.ready=true;

        ons.ready(function() {
          console.log("ons.ready");
        });
	}]);