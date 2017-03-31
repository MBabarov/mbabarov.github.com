'use strict';

/* Controllers */

angular.module('myApp.AccountCtrl', [])
    .controller('AccountCtrl', ['$scope', '$http', '$window', '$rootScope', '$location',
        function($scope, $http, $window, $rootScope, $location) {
        $location.hash('extra-menu');
			
			
		$scope.pageTitle = 'Где дешевле?';
		$scope.ready=true;
		$scope.authorization=function(){
			navi.pushPage('partials/location.html');
		};
		$scope.loginTemplate=true;
		$scope.changePassTemplate=false;
		$scope.createAccountTemplate=false;
		$scope.changePass=function(){
			$scope.loginTemplate=false;
			$scope.changePassTemplate=true;
		};
		$scope.createAccount=function(){
			$scope.loginTemplate=false;
			$scope.createAccountTemplate=true;
		};
		$scope.newPass=function(){
			$scope.loginTemplate=true;
			$scope.changePassTemplate=false;
		};
		$scope.backToAuthorization=function(){
			$scope.loginTemplate=true;
			$scope.changePassTemplate=false;
			$scope.createAccountTemplate=false;
		};
		$scope.sentDataNewAccount=function(){
			$scope.loginTemplate=true;
			$scope.changePassTemplate=false;
			$scope.createAccountTemplate=false;
		};

		$scope.enterAccount=function(){
			
		};
    	ons.ready(function() {
      		console.log("ons.ready");
 		});
		
	}]);