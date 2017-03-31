'use strict';

angular.module('myApp.currentResultListProductsFactory', []).
    factory('currentResultListProductsFactory', ['$window', '$http', '$sce', '$rootScope', '$timeout',
        'currentListProductsFactory',
        function($window, $http, $sce, $rootScope, $timeout, currentListProductsFactory) {
		var dataListsProducts= {
			productsListsAllShops: [],
            listsShop: ['ATB', 'Silpo', 'Varus'],
            listAllProducts: [],
            'loadListAllProducts': function(){
                return loadListAllProducts();
            },
            'analizeList': function(id){
                return analizeList(id);
            },
            result: null
        }
        function loadListAllProducts(){
            return $http.get('js/json/data.json')
                .success(function(data, status, headers, config) {
                    dataListsProducts.listAllProducts = data.data;
                }).error(function(data, status, headers, config){
                    dataListsProducts.listAllProducts = [];
                })
        }
        function analizeList(id) {
            function clone(obj){
                var temp={};
                for(var key in obj){
                    (function(e) {
                        temp[key] = e;
                    })(obj[key]);

                }
                return temp;
            };
            dataListsProducts.result={};
            dataListsProducts.loadListAllProducts().then(function(data){
                dataListsProducts.productsListsAllShops=[];
                var minObj;
                for(var i=0;  i<dataListsProducts.listsShop.length; i++) {
                    dataListsProducts.productsListsAllShops.push({'shop': dataListsProducts.listsShop[i], 'productsList': [], 'total': 0});
                }
                angular.forEach(currentListProductsFactory.data, function (oneProduct, index) {
                    angular.forEach(dataListsProducts.listAllProducts, function (oneProductWithPrice, index) {
                        if(oneProduct.id==oneProductWithPrice.id){
                            for(var key in oneProductWithPrice.priceAndShop){
                                for(var i=0;  i<dataListsProducts.productsListsAllShops.length; i++) {
                                    if (dataListsProducts.productsListsAllShops[i].shop == key) {
                                        var oneProductPrice=clone(oneProduct);
                                        oneProductPrice.selected=false;
                                        oneProductPrice.price=oneProductWithPrice.priceAndShop[key];
                                        dataListsProducts.productsListsAllShops[i].productsList.push(oneProductPrice);
                                        dataListsProducts.productsListsAllShops[i].total=parseFloat(dataListsProducts.productsListsAllShops[i].total)+oneProductPrice.price;
                                        console.log('total', dataListsProducts.productsListsAllShops[i].total);
                                        dataListsProducts.productsListsAllShops[i].total =  parseFloat(dataListsProducts.productsListsAllShops[i].total).toFixed(2);
                                        if(i==0){
                                            minObj=dataListsProducts.productsListsAllShops[i].total
                                        }
                                        if(minObj>dataListsProducts.productsListsAllShops[i].total){
                                            minObj = dataListsProducts.productsListsAllShops[i].total;
                                        }
                                    }
                                }
                            }
                        }
                    })
                })
                if(id==0){
                    for(var i=0;  i<dataListsProducts.productsListsAllShops.length; i++) {
                        if(dataListsProducts.productsListsAllShops[i].total==minObj){
                            dataListsProducts.result=[];
                            dataListsProducts.result.push(dataListsProducts.productsListsAllShops[i]);
                        }
                    }
                }
                if(id==1){
                    dataListsProducts.result=dataListsProducts.productsListsAllShops;
                }
                if(id==2){
                    dataListsProducts.result=dataListsProducts.productsListsAllShops;
                }
                console.log('minObj', minObj);
                console.log('dataListsProducts.result', dataListsProducts.result);

                $rootScope.$broadcast('productsListResultsAction', dataListsProducts);
                console.log(' dataListsProducts.productsListsAllShops',  dataListsProducts.productsListsAllShops);
            })

            /*angular.forEach(currentListProductsFactory.data, function (oneProduct, index) {
                console.log('dataListsProducts.data', dataListsProducts.data);
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
                        /!*min = oneProductWithPrice[0];
                        max = min;
                        for (i = 1; i < myArray.length; ++i) {
                            if (myArray[i] > max) max = myArray[i];
                            if (myArray[i] < min) min = myArray[i];
                        }*!/
                    }
                })
            })*/
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