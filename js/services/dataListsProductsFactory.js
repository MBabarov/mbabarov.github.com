'use strict';

angular.module('myApp.dataListsProductsFactory', []).
    factory('dataListsProductsFactory', ['$window', '$http', '$sce', '$rootScope', '$timeout',
        function($window, $http, $sce, $rootScope, $timeout) {
            var dataListsProducts = {
                'loadProductsList': function(){
                    return loadProductsList()
                },
                status: {},
                data:[],
                ready: false
            };
            function loadProductsList(){
                dataListsProducts.ready=false;
                $rootScope.$broadcast('productsListsAction', dataListsProducts);
                return $http.get('js/json/productsList.json')
                    .success(function(data, status, headers, config) {
                        $timeout(function(){
                            dataListsProducts.data=data.data;
                            dataListsProducts.ready = true;
                            dataListsProducts.status.description='';
                            $rootScope.$broadcast('productsListsAction', dataListsProducts);
                        }, 1000);
                    })
                    .error(function(data, status, headers, config){
                        if (data.status.statusMessage != 'OK'){
                            dataListsProducts.ready = true;
                            dataListsProducts.data = [];
                            dataListsProducts.status.description=$sce.trustAsHtml(data.status.statusMessage);
                            $rootScope.$broadcast('productsListsAction', dataListsProducts);
                        }
                    })
            }
            return dataListsProducts;
    }])