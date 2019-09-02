'use strict';

angular.module('myApp.listProductsForChoiceFactory', []).
    factory('listProductsForChoiceFactory', ['$window', '$http', '$rootScope', '$sce', '$timeout',
        'filtersCriteriaProducerProductFactory',
        function(win, $http, $rootScope, $sce, $timeout,
        filtersCriteriaProducerProductFactory) {
          var products = {
              data: [],
              'loadList': function(){
                  return loadList()
              },
              status: {},
              selectedCountry: null,
              selectedProducer: null,
              ready: false
          };
          function loadList(){
              products.ready=false;
              $rootScope.$broadcast('productsChoiceList', products);
              return $http.get('js/json/productsForChoice.json')
              .success(function(data, status, headers, config) {
                  $timeout(function(){
                      products.data=data.data;
                      products.ready = true;
                      $rootScope.$broadcast('productsChoiceList', products);
                  }, 1000);
              })
              .error(function(data, status, headers, config){
                if (data.status.statusMessage != 'OK'){
                    products.ready = true;
                    products.data = [];
                    products.status.description=$sce.trustAsHtml(data.status.statusMessage);
                    $rootScope.$broadcast('productsList', products);
                }
              })
          }
          return products;
     }])