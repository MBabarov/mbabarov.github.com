'use strict';

angular.module('myApp.filtersCriteriaProducerProductFactory', []).
    factory('filtersCriteriaProducerProductFactory', ['$window', '$http', '$rootScope', '$sce', '$timeout',
        function(win, $http, $rootScope, $sce, $timeout) {
          var criteria = {
              'loadProducersList': function(){
                  return loadProducersList()
              },
              dataProducersList:[],
              status: {},
              currentProduct:null,
              producerSelected: null,
              ready: false
          };
          function loadProducersList(){
              criteria.ready=false;
              $rootScope.$broadcast('filtersCriteriaProducerLists', criteria);
              return $http.get('js/json/producers.json')
              .success(function(data, status, headers, config) {
                  $timeout(function(){
                      criteria.dataProducersList=[];
                      criteria.dataProducersList.push({"name": "---", "id":0});
                      angular.forEach(data.data, function(oneProduct, index) {
                          if(oneProduct.product==criteria.currentProduct.nameProduct){
                              var oneElem={"name": oneProduct.name, "id": oneProduct.id}
                              criteria.dataProducersList.push(oneElem);
                          }
                      })
                      criteria.ready = true;
                      criteria.status.description='';
                      $rootScope.$broadcast('filtersCriteriaProducerLists', criteria);
                  }, 1000);
              })
              .error(function(data, status, headers, config){
                if (data.status.statusMessage != 'OK'){
                    criteria.ready = true;
                    criteria.data = [];
                    criteria.status.description=$sce.trustAsHtml(data.status.statusMessage);
                    $rootScope.$broadcast('filtersCriteriaProducerLists', criteria);
                }
              })
          }
          return criteria;
     }])