'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('MainMenuCtrl', ['$scope', function ($scope, $http) {
    $scope.menus =[
    {
        title: "Dashboard",
        action: "#"
    },
    {
        title: "Graphs",
        action: "#",
        menus: [
            {
                title: "Flot Chart",
                action: "#/flot"
            },
            {
                title: "Morris Charts",
                action: "#/morris"
            },
            {
                title: "Inline Charts",
                action: "#/inline-charts"
            }
        ]
    },
    {
        title: "Tables",
        action: "#",
        menus: [
            {
                title: "Normal Tables",
                action: "#/table"
            },
            {
                title: "Data Tables",
                action: "#/datatables"
            }
        ]
    },
    {
        title: "Forms",
        action: "#",
        menus: [
            {
                title: "Smart Form Elements",
                action: "#/form-elements"
            },
            {
                title: "Smart Form Layouts",
                action: "#/form-templates"
            },
            {
                title: "Smart Form Validation",
                action: "#/validation"
            },
            {
                title: "Bootstrap Form Elements",
                action: "#/bootstrap-forms"
            },
            {
                title: "Form Plugins",
                action: "#/plugins"
            },
            {
                title: "Wizards",
                action: "#/wizard"
            },
            {
                title: "Bootstrap Editors",
                action: "#/other-editors"
            },
            {
                title: "Dropzone new",
                action: "#/dropzone"
            }
        ]
    },
    {
        title: "UI Elements",
        action: "#",
        menus: [
            {
                title: "General Elements",
                action: "#/general-elements"
            },
            {
                title: "Buttons",
                action: "#/buttons"
            },
            {
                title: "Icons",
                action: "#",
                menus: [
                    {
                        title: 'Font Awesome',
                        action: 'fa'
                    },
                    {
                        title: 'Glyph Icons',
                        action: 'glyph'
                    }
                ]
            },
            {
                title: "Grid",
                action: "#/grid"
            },
            {
                title: "Tree View",
                action: "#/treeview"
            },
            {
                title: "Nestable Lists",
                action: "#/nestable-list"
            },
            {
                title: "JQuery UI",
                action: "#/jqui"
            }
        ]
    }
    ]
  }])