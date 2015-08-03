'use strict';

/* Controllers */

angular.module('myApp.ContactsCtrl', [])
    .controller('ContactsCtrl', ['$scope', '$http', '$window', '$rootScope', '$location',
        function($scope, $http, $window, $rootScope, $location) {
        $location.hash('contacts');

		$scope.pageTitle = 'Контакты';
		$scope.ready=true;

        ons.ready(function() {
          console.log("ons.ready");
        });
		
	}]);