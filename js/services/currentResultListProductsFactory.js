'use strict';

angular.module('myApp.currentResultListProductsFactory', []).
    factory('currentResultListProductsFactory', ['$window', '$http', '$sce', '$rootScope', 'currentListProductsFactory',
        function($window, $http, $sce, $rootScope, currentListProductsFactory) {
		var dataListsProducts= {
			productsListsAllShops: [],
            listsShop: ['ATB', 'Silpo', 'Varus'],
			data: [
                {
                    'id': 1,
                    'typeProduct': 'Молочка',
                    'nameProduct': 'Молоко',
                    'countryProduct': 'Украина',
                    'producerProduct': 'Простоквашино',
                    'boxingProduct': '1л',
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 10.25,
                        'Silpo': 10.45,
                        'Varus': 10.65,
                    }
                },
                {
                    'id': 2,
                    'typeProduct': 'Хлебо-булочные',
                    'nameProduct': 'Батон',
                    'countryProduct': 'Украина',
                    'producerProduct': 'Дафи',
                    'boxingProduct': '600гр',
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 2.25,
                        'Silpo': 2.45,
                        'Varus': 2.65,
                    }
                },
                {
                    'id': 3,
                    'typeProduct': 'Молочка',
                    'nameProduct': 'Сметана',
                    'countryProduct': 'Украина',
                    'producerProduct': 'Простоквашино',
                    'boxingProduct': '250гр',
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 5.75,
                        'Silpo': 5.45,
                        'Varus': 5.65,
                    }
                },
                {
                    'id': 4,
                    'typeProduct': 'Птица',
                    'nameProduct': 'Филе куринное',
                    'countryProduct': 'Украина',
                    'producerProduct': 'Наша ряба',
                    'boxingProduct': '1кг',
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 20.22,
                        'Silpo': 20.55,
                        'Varus': 20.15,
                    }
                },
                {
                    'id': 5,
                    'typeProduct': 'Вода',
                    'nameProduct': 'Минералка',
                    'countryProduct': 'Украина',
                    'producerProduct': 'Моршинская',
                    'kindProduct': 'Слабогазированная',
                    'boxingProduct': '1.5 л',
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 4.25,
                        'Silpo': 4.35,
                        'Varus': 4.05,
                    }
                },
                {
                    'id': 6,
                    'typeProduct': 'Колбаса',
                    'nameProduct': 'Сервилат',
                    'countryProduct': 'Украина',
                    'producerProduct': 'Наталка',
                    'kindProduct': 'Сервилат',
                    'boxingProduct': '1кг',
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 22.25,
                        'Silpo': 21.45,
                        'Varus': 20.65,
                    }
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
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 16.25,
                        'Silpo': 17.45,
                        'Varus': 18.65,
                    }
                },
                {
                    'id': 8,
                    'typeProduct': 'Крупы',
                    'nameProduct': 'Греча',
                    'countryProduct': 'Украина',
                    'producerProduct': 'Геракл',
                    'boxingProduct': '1кг',
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 11.25,
                        'Silpo': 10.45,
                        'Varus': 10.65,
                    }
                },
                {
                    'id': 9,
                    'typeProduct': 'Порошок',
                    'nameProduct': 'Ariel',
                    'countryProduct': 'Украина',
                    'producerProduct1': 'Procter&Gambel',
                    'kindProduct': 'Для цветного',
                    'boxingProduct': '3кг',
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 101.25,
                        'Silpo': 98.45,
                        'Varus': 100.65,
                    }
                },

                {
                    'id': 10,
                    'typeProduct': 'Зубная паста',
                    'nameProduct': 'Colgate',
                    'countryProduct': 'Украина',
                    'producerProduct1': 'Procter&Gambel',
                    'kindProduct': 'Мятная',
                    'boxingProduct': '200гр',
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 30.35,
                        'Silpo': 30.43,
                        'Varus': 31.00,
                    }
                },
                {
                    'id': 11,
                    'typeProduct': 'Личная гигиена',
                    'nameProduct': 'Мыло',
                    'countryProduct': 'Украина',
                    'producerProduct': 'Dave',
                    'kindProduct1': 'Ванильное',
                    'boxingProduct': '75гр',
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 8.25,
                        'Silpo': 8.45,
                        'Varus': 8.65,
                    }
                },
                {
                    'id': 12,
                    'typeProduct': 'Водка',
                    'nameProduct': 'Хортица',
                    'countryProduct': 'Украина',
                    'producerProduct': 'Хортица',
                    'boxingProduct': '1л',
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 41.25,
                        'Silpo': 45.45,
                        'Varus': 42.65,
                    }
                },
                {
                    'id': 13,
                    'typeProduct': 'Рыба',
                    'nameProduct': 'Сельдь',
                    'countryProduct': 'Украина',
                    'producerProduct': 'Айсберг',
                    'boxingProduct': '600гр',
                    'amountProduct': '1',
                    'priceAndShop':{
                        'ATB': 14.25,
                        'Silpo': 16.45,
                        'Varus': 11.65,
                    }
                }
            ],
            'analizeList': function(){
                return analizeList();
            },
            result: null
        }
        function analizeList() {
            dataListsProducts.result={};
            for(var i=0;  i<dataListsProducts.listsShop.length; i++) {
                dataListsProducts.productsListsAllShops.push({'shop': dataListsProducts.listsShop[i], 'productsList': []});
            }
            angular.forEach(currentListProductsFactory.data, function (oneProduct, index) {
                angular.forEach(dataListsProducts.data, function (oneProductWithPrice, index) {
                    if(oneProduct.id==oneProductWithPrice.id){


                        for(var key in oneProductWithPrice.priceAndShop){
                            for(var i=0;  i<dataListsProducts.productsListsAllShops.length; i++) {

                                if (dataListsProducts.productsListsAllShops[i].shop == key) {
                                    console.log('price'+key, oneProductWithPrice.priceAndShop[key]);
                                    var oneProductPrice=oneProduct;
                                    var price=null;
                                    price=oneProductWithPrice.priceAndShop[key];
                                    oneProductPrice.price = price;
                                    console.log('oneProductPrice', oneProductPrice);
                                    dataListsProducts.productsListsAllShops[i].productsList.push(oneProductPrice);

                                    //dataListsProducts.productsListsAllShops[i].productsList[dataListsProducts.productsListsAllShops[i].productsList.length-1].price=price;
                                    console.log(i, dataListsProducts.productsListsAllShops[0].productsList[0].price);
                                }
                            }
                            console.log('01', dataListsProducts.productsListsAllShops[0].productsList[0].price);
                            console.log('dataListsProducts.productsListsAllShops', dataListsProducts.productsListsAllShops);
                        }
                        //console.log('minPrice', minPrice);
                        /*min = oneProductWithPrice[0];
                        max = min;
                        for (i = 1; i < myArray.length; ++i) {
                            if (myArray[i] > max) max = myArray[i];
                            if (myArray[i] < min) min = myArray[i];
                        }*/
                    }
                })
            })
            /*switch (length) {
                case 1:

                    dataListsProducts.result = {
                        0: {'bg': '#03a9f5', 'font': '#ffffff'}
                    }
                    break
                case 2:
                    dataListsProducts.result = {
                        0: {'bg': '#03a9f5', 'font': '#ffffff'},
                        1: {'bg': '#f44236', 'font': '#ffffff'}
                    }
                    break
                case 3:
                    dataListsProducts.result = {
                        0: {'bg': '#03a9f5', 'font': '#ffffff'},
                        1: {'bg': '#fec107', 'font': '#ffffff'},
                        2: {'bg': '#f44236', 'font': '#ffffff'}
                    }
                    break
                default:
                    dataListsProducts.result = {
                        0: {'bg': '#03a9f5', 'font': '#ffffff'},
                        1: {'bg': '#47ae4b', 'font': '#ffffff'},
                        2: {'bg': '#fec107', 'font': '#ffffff'},
                        3: {'bg': '#673bb7', 'font': '#ffffff'},
                        4: {'bg': '#f44236', 'font': '#ffffff'}
                    }
                    break
            }
            return dataListsProducts.result;*/
        };
        return dataListsProducts;
    }])