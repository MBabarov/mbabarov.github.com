'use strict';

angular.module('myApp.listSalesFactory', []).
    factory('listSalesFactory', ['$window', '$http', '$rootScope', '$sce', '$timeout',
        function(win, $http, $rootScope, $sce, $timeout) {
          var sales = {
              data: [],
              'loadList': function(){
                  return loadList()
              },
              shopsList: [
                {'title': 'Все', 'id': 0},
                {'title': 'АТБ', 'id': 1},
                {'title': 'Сильпо', 'id': 2},
                {'title': 'Варус', 'id': 3}
              ],
              status: {},
              selected: null,
              ready: false
          };
          function loadList(){
              sales.ready=false;
              $rootScope.$broadcast('salesListAction', sales);
              return $http.get('js/json/salesList.json')
              .success(function(data, status, headers, config) {
                  $timeout(function(){
                      sales.data=data.data;
                      sales.ready = true;
                      $rootScope.$broadcast('salesListAction', sales);
                  }, 1000);
              })
              .error(function(data, status, headers, config){
                if (data.status.statusMessage != 'OK'){
                    sales.ready = true;
                    sales.data = [];
                    sales.status.description=$sce.trustAsHtml(data.status.statusMessage);
                    $rootScope.$broadcast('salesListAction', sales);
                }
              })
          }
          return sales;
     }])