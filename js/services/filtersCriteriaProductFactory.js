'use strict';

angular.module('myApp.filtersCriteriaProductFactory', []).
    factory('filtersCriteriaProductFactory', ['$window', '$http', '$rootScope', '$sce', '$timeout',
        function(win, $http, $rootScope, $sce, $timeout) {
          var criteria = {
              data: [],
              'loadCountryList': function(){
                  return loadCountryList()
              },
              dataCoutriesList:[],
              status: {},
              currentNameProduct:null,
              selected: null,
              ready: false
          };
          function loadCountryList(){
              criteria.ready=false;
              $rootScope.$broadcast('criteriaLists', criteria);
              return $http.get('js/json/producers.json').
              success(function(data, status, headers, config) {
                  $timeout(function(){
                      criteria.dataCoutriesList=[];
                      criteria.dataCoutriesList.push({"name": "---", "id":0});
                      console.log('data.data', data.data);
                      angular.forEach(data.data, function(oneProduct, index) {

                          if(oneProduct.product==criteria.currentNameProduct){
                              var oneElem={"name": oneProduct.country, "id": oneProduct.id}
                              criteria.dataCoutriesList.push(oneElem);
                          }
                      })
                      criteria.ready = true;
                      console.log('criteria.dataCoutriesList', criteria.dataCoutriesList);
                      criteria.status.description='';
                      $rootScope.$broadcast('criteriaLists', criteria);
                  }, 1000);
              })
              .error(function(data, status, headers, config){
                if (data.status.statusMessage != 'OK'){
                    criteria.ready = true;
                    criteria.data = [];
                    criteria.status.description=$sce.trustAsHtml(data.status.statusMessage);
                    $rootScope.$broadcast('criteriaLists', criteria);
                }
              })
          }
          return criteria;
     }])