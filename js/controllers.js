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
        icon:"home",
        action: "#",
        active: false
    },
    {
        title: "Inbox",
        icon:"inbox",
        action: "#",
        active: false
    },
    {
        title: "Graphs",
        icon:"bar-chart-o",
        action: "#",
        active: false,
        submenu: [
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
        icon: "table",
        action: "#",
        active: false,
        submenu: [
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
        icon:"pencil-square-o",
        action: "#",
        id: 4,
        submenu: [
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
        icon: "desktop",
        action: "#",
        active: false,
        submenu: [
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
                subsubmenu: [
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
    },
    {
        title: "6 Level Navigation",
        icon: "folder-open",
        action: "#",
        active: false,
        submenu: [
            {
               title: "2nd Level",
               action: "#/general-elements",
               subsubmenu: [
                    {
                       title: "3ed Level",
                       action: "#/general-elements",
                       subsubsubmenu: [
                            {
                               title: "File",
                               action: "#/general-elements"
                            },
                            {
                               title: "4th Level",
                               action: "#/general-elements"
                            }
                       ]
                    },
                    {
                       title: "Profile",
                       action: "#/general-elements"
                    }
               ]
            },
            {
               title: "Folder",
               action: "#/general-elements",
               subsubmenu: [
                    {
                       title: "3ed Level",
                       action: "#/general-elements",
                       subsubsubmenu: [
                            {
                               title: "File",
                               action: "#/general-elements"
                            },
                            {
                               title: "File",
                               action: "#/general-elements"
                            }
                       ]
                    }
               ]
            }
        ]
    },
    {
        title: "Calendar",
        icon: "calendar",
        action: "#",
        active: false
    },
    {
        title: "Widgets",
        icon: "list-alt",
        action: "#",
        active: false
    },
    {
        title: "Gallery",
        icon: "picture-o",
        action: "#",
        active: false
    },
    {
        title: "Google Map Skins",
        icon: "map-marker",
        action: "#",
        active: false
    },
    {
        title: "Miscellaneous",
        icon: "windows",
        action: "#",
        active: false,
        submenu: [
            {
                title: "Typography",
                action: "#/general-elements"
            },
            {
                title: "Pricing Tables",
                action: "#/general-elements"
            },
            {
                title: "Invoice",
                action: "#/general-elements"
            },
            {
                title: "Login",
                action: "#/general-elements"
            },
            {
                title: "Register",
                action: "#/general-elements"
            },
            {
                title: "Locked Screen",
                action: "#/general-elements"
            },
            {
                title: "Error 404",
                action: "#/general-elements"
            },
            {
                title: "Error 500",
                action: "#/general-elements"
            },
            {
                title: "Blank Page",
                action: "#/general-elements"
            },
            {
                title: "Email Template",
                action: "#/general-elements"
            },
            {
                title: "Search Page",
                action: "#/general-elements"
            },
            {
                title: "CK Editor",
                action: "#/general-elements"
            }
        ]
    },
    {
        title: "Other Pages",
        icon: "file",
        action: "#",
        active: false,
        submenus: [
            {
               title: "Forum Layout",
               action: "#/general-elements"
            },
            {
               title: "Profile",
               action: "#/general-elements"
            },
            {
               title: "Timeline",
               action: "#/general-elements"
            }
        ]
    }
    ];
    $scope.setActive = function () {
        $scope.currentElem=this;

        if(!!$scope.oldElement && $scope.currentElem!=$scope.oldElement){
            $scope.oldElement.menu.active=false;
            $scope.currentElem.menu.active=true;
        }
        else{
            $scope.currentElem.menu.active=true;
        }
        $scope.oldElement=$scope.currentElem;
    }
  }])