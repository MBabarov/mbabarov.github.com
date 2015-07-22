'use strict';

angular.module('myApp.authorizationService', []).
    factory('authorizationService', ['$window', '$http', '$sce', '$rootScope',
        function($window, $http, $sce, $rootScope) {
		var authorizationData = {
			data: null,
        }
      return authorizationData;
    }])