'use strict';

angular.module('myApp.listProductsAfterFilterCriteriesFactory', []).
    factory('listProductsAfterFilterCriteriesFactory', ['$window', '$http', '$rootScope', '$sce', '$timeout',
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
              $rootScope.$broadcast('productsList', products);
              return $http.get('js/json/data.json')
              .success(function(data, status, headers, config) {
                  $timeout(function(){
                      products.data=[];
                      angular.forEach(data.data, function(oneProduct, index) {
                          //console.log("oneProduct.producerProduct['Производитель']", oneProduct.producerProduct['Производитель']);
                          if(oneProduct.generalCriteria[1].producerProduct['Производитель']==filtersCriteriaProducerProductFactory.producerSelected.text && oneProduct.nameProduct['Имя продукта']==filtersCriteriaProducerProductFactory.currentProduct.nameProduct){
                              products.data.push(oneProduct)
                          }
                          if('---'==filtersCriteriaProducerProductFactory.producerSelected.text && oneProduct.nameProduct['Имя продукта']==filtersCriteriaProducerProductFactory.currentProduct.nameProduct){
                              products.data.push(oneProduct)
                          }
                      })
                      products.ready = true;
                      $rootScope.$broadcast('productsList', products);
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