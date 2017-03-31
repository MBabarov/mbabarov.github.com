'use strict';

angular.module('myApp.filtersCriteriaCountryProductFactory', []).
    factory('filtersCriteriaCountryProductFactory', ['$window', '$http', '$rootScope', '$sce', '$timeout',
        function(win, $http, $rootScope, $sce, $timeout) {
          var criteria = {
              'loadCountryList': function(){
                  return loadCountryList()
              },
              dataCoutriesList:[],
              status: {},
              currentProduct:null,
              countriesSelected: null,
              ready: false
          };
          function loadCountryList(){
              criteria.ready=false;
              $rootScope.$broadcast('filtersCriteriaCountryLists', criteria);
              return $http.get('js/json/producers.json')
              .success(function(data, status, headers, config) {
                  $timeout(function(){
                      criteria.dataCoutriesList=[];
                      criteria.dataCoutriesList.push({"name": "---", "id":0});
                      angular.forEach(data.data, function(oneProduct, index) {
                          if(oneProduct.product==criteria.currentProduct.nameProduct){
                              var oneElem={"name": oneProduct.country, "id": oneProduct.id}
                              criteria.dataCoutriesList.push(oneElem);
                          }
                      })
                      criteria.ready = true;
                      criteria.status.description='';
                      $rootScope.$broadcast('filtersCriteriaCountryLists', criteria);
                  }, 1000);
              })
              .error(function(data, status, headers, config){
                if (data.status.statusMessage != 'OK'){
                    criteria.ready = true;
                    criteria.data = [];
                    criteria.status.description=$sce.trustAsHtml(data.status.statusMessage);
                    $rootScope.$broadcast('filtersCriteriaCountryLists', criteria);
                }
              })
          }
          return criteria;
     }])