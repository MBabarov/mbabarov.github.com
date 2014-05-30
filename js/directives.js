'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }])
   /* .directive('ngWatchParentTree', function(){
            return {
                restrict: 'E',
                scope: {
                    val: '='
                },
                link: function(scope, element, attrs) {
                    scope.$watch('val', function(newValue, oldValue) {
                        if (newValue)
                            console.log("I see a data change!");
                    }, true);
                }
            }
        })*/
