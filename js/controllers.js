'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('TreeCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/json/tree.json').success(function(data){
        $scope.tree = data;
    });

    $scope.changeActive = function ($event) {
        $scope.currentElem=this;
        //console.log(this);
        if(this.submenu.active==true){
            this.submenu.active=false;
        }
        else{
            this.submenu.active=true
        }
        $event.stopPropagation();

    }
        /*$scope.$watch($scope.tree, function(){
           $scope.tree.submenu.each(i.active){

            }
        });*/
  }])
