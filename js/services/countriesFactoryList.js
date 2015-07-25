'use strict';

angular.module('myApp.countriesFactoryList', []).
    factory('countriesFactoryList', ['$window', '$http', '$rootScope', '$sce', '$timeout',
        function(win, $http, $rootScope, $sce, $timeout) {
          var countries = {
              data: [],
              'loadList': function(){
                  return loadList()
              },
              status: {},
              selected: null,
              ready: false
          };
          function loadList(){
              countries.ready=false;
              $rootScope.$broadcast('countriesList', countries);
              return $http.get('js/json/countries.json').
              success(function(data, status, headers, config) {
                  $timeout(function(){
                      countries.data = data.data;
                      if (!countries.selected && data.data[0]) {
                          countries.selected = countries.data[countries.data.length-1].id;
                      }
                      countries.ready = true;
                      if(data.data.length==0){
                          countries.status.description=$sce.trustAsHtml('No country records found');
                      }
                      else{
                          countries.status.description=$sce.trustAsHtml('');
                      }
                      $rootScope.$broadcast('countriesList', countries);
                  }, 1000);
              })
              .error(function(data, status, headers, config){
                if (data.status.statusMessage != 'OK'){
                    countries.ready = true;
                    countries.data = [];
                    countries.status.description=$sce.trustAsHtml(data.status.statusMessage);
                    $rootScope.$broadcast('countriesList', countries);
                }
              })
          }
          return countries;
     }])