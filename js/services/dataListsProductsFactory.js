'use strict';

angular.module('myApp.dataListsProductsFactory', []).
    factory('dataListsProductsFactory', ['$window', '$http', '$sce', '$rootScope',
        function($window, $http, $sce, $rootScope) {
		var dataListsProducts= {
			data: [
                {
                    'titleList': 'Ежедневный',
                    'listProducts':[
                        {
                            'id': 1,
                            'typeProduct': 'Молочка',
                            'nameProduct': 'Молоко',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Простоквашино',
                            'boxingProduct': '1л',
                            'amountProduct': '1'
                        },
                        {
                            'id': 2,
                            'typeProduct': 'Хлебо-булочные',
                            'nameProduct': 'Батон',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Дафи',
                            'boxingProduct': '600гр',
                            'amountProduct': '1'
                        },
                        {
                            'id': 3,
                            'typeProduct': 'Молочка',
                            'nameProduct': 'Сметана',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Простоквашино',
                            'boxingProduct': '250гр',
                            'amountProduct': '1'
                        },
                        {
                            'id': 4,
                            'typeProduct': 'Птица',
                            'nameProduct': 'Филе куринное',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Наша ряба',
                            'boxingProduct': '1кг',
                            'amountProduct': '1'
                        },
                        {
                            'id': 5,
                            'typeProduct': 'Вода',
                            'nameProduct': 'Минералка',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Моршинская',
                            'kindProduct': 'Слабогазированная',
                            'boxingProduct': '1.5 л',
                            'amountProduct': '1'
                        }
                    ]
                },
                {
                    'titleList': 'Еженедельный',
                    'listProducts':[
                        {
                            'id': 6,
                            'typeProduct': 'Колбаса',
                            'nameProduct': 'Сервелат',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Наталка',
                            'kindProduct': 'Сервилат',
                            'boxingProduct': '1кг',
                            'amountProduct': '1'
                        },
                        {
                            'id': 2,
                            'typeProduct': 'Хлебо-булочные',
                            'nameProduct': 'Батон',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Дафи',
                            'boxingProduct': '600гр',
                            'amountProduct': '1'
                        },
                        {
                            'id': 7,
                            'typeProduct': 'Вино',
                            'nameProduct': 'Томянка',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Томянка',
                            'kindProduct1': 'Белое',
                            'kindProduct2': 'Полусладкое',
                            'boxingProduct': '1л',
                            'amountProduct': '1'
                        },
                        {
                            'id': 8,
                            'typeProduct': 'Крупы',
                            'nameProduct': 'Греча',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Геракл',
                            'boxingProduct': '1кг',
                            'amountProduct': '1'
                        },
                        {
                            'id': 5,
                            'typeProduct': 'Вода',
                            'nameProduct': 'Минералка',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Моршинская',
                            'kindProduct': 'Слабогазированная',
                            'boxingProduct': '1.5 л',
                            'amountProduct': '1'
                        }
                    ]
                },
                {
                    'titleList': 'Химия',
                    'listProducts':[
                        {
                            'id': 9,
                            'typeProduct': 'Порошок',
                            'nameProduct': 'Ariel',
                            'countryProduct': 'Украина',
                            'producerProduct1': 'Procter&Gambel',
                            'kindProduct': 'Для цветного',
                            'boxingProduct': '3кг',
                            'amountProduct': '1'
                        },
                        {
                            'id': 10,
                            'typeProduct': 'Зубная паста',
                            'nameProduct': 'Colgate',
                            'countryProduct': 'Украина',
                            'producerProduct1': 'Procter&Gambel',
                            'kindProduct': 'Мятная',
                            'boxingProduct': '200гр',
                            'amountProduct': '1'
                        },
                        {
                            'id': 11,
                            'typeProduct': 'Личная гигиена',
                            'nameProduct': 'Мыло',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Dave',
                            'kindProduct1': 'Ванильное',
                            'boxingProduct': '75гр',
                            'amountProduct': '1'
                        }
                    ]
                },
                {
                    'titleList': 'Выезд за город',
                    'listProducts':[
                        {
                            'id': 12,
                            'typeProduct': 'Водка',
                            'nameProduct': 'Хортица',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Хортица',
                            'boxingProduct': '1л',
                            'amountProduct': '1'
                        },
                        {
                            'id': 13,
                            'typeProduct': 'Рыба',
                            'nameProduct': 'Сельдь',
                            'countryProduct': 'Украина',
                            'producerProduct': 'Айсберг',
                            'boxingProduct': '600гр',
                            'amountProduct': '1'
                        }
                    ]
                }
            ]
        }
      return dataListsProducts;
    }])