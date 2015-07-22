'use strict';

/* Controllers */

angular.module('myApp.ListsCtrl', [])
    .controller('ListsCtrl', ['$scope', '$http', '$window', '$rootScope', '$location', 'ngDialog', 'currentListProductsFactory',
        function($scope, $http, $window, $rootScope, $location, ngDialog, currentListProductsFactory) {
            $location.hash('lists');
			

		$scope.pageTitle = 'Списки продуктов';
		$scope.ready=true;
		$scope.lists=[
            {'title': 'Ежедневный'},
            {'title': 'Еженедельный'},
            {'title': 'Химия'},
            {'title': 'Выезд за город'}
        ];
        $scope.addListProducts=function($currentScope){
            dialog($currentScope);
        }
        $scope.createList=function($currentScope){
            $currentScope.confirm(this);
            $scope.ready=false;
            $scope.lists.push({'title': $currentScope.nameNewList});
            $scope.ready=true;
        }
        $scope.moveToProductPage=function(currentList){
            currentListProductsFactory.title=currentList.title;
            navi.pushPage('partials/products-list.html');
        }
        $scope.deleteOneListProducts=function(currentList){
            dialogDelete(currentList);

        }
        $scope.deleteOneListProductsAction=function(currentList){
            angular.forEach($scope.lists, function (oneList, index) {
                if(oneList.title==currentList.title){
                    $scope.lists.splice(index, 1);
                }

            })

        }
        $scope.moveToExportPage=function(currentList){
            currentListProductsFactory.title=currentList.title;
            currentListProductsFactory.typeSend='export';
            navi.pushPage('partials/products-list-export.html');
        }
        $scope.moveToSentSMSPage=function(currentList){
            currentListProductsFactory.title=currentList.title;
            currentListProductsFactory.typeSend='sms';
            navi.pushPage('partials/products-list-export.html');
        }

            //dialog($currentScope, waited);
            //info($currentScope, null, globalHelpers.clearSpace(data.data.status.statusMessage));
        function dialogDelete (currentList) {
            $scope.nameList = currentList.title;
            ngDialog.openConfirm({
                template: 'modalDialogDelete',
                className: 'ngdialog-theme-default',
                scope: $scope
            }).then(function (value) {
                $scope.deleteOneListProductsAction(currentList);
            }, function () {

            });
        };
        function dialog ($currentScope) {
            ngDialog.openConfirm({
                template: 'modalDialog',
                className: 'ngdialog-theme-default',
                scope: $scope
            });
        };
        function info ($currentScope, callback, info, namespace) {
            var show = true;
            if (namespace) {
                $scope.opened = $scope.opened || {};
                if ($scope.opened[namespace]) {
                    show = false;
                } else {
                    $scope.opened[namespace] = true;
                }
            }
            if (show) {
                $scope.info = info;
                ngDialog.openConfirm({
                    template: 'modalInfo',
                    className: 'ngdialog-theme-default',
                    scope: $scope
                }).then(function () {
                    if (namespace) {
                        $scope.opened[namespace] = false;
                    }
                    if (callback) {
                        callback.call(this);
                    }
                }, function () {

                });
            }
        };
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