webpackJsonp([36],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://fiinwallet-gsoc.firebaseapp.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(259);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(448);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(449);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account-details/account-details.module": [
		757,
		35
	],
	"../pages/accounts/accounts.module": [
		758,
		3
	],
	"../pages/activate-customer/activate-customer.module": [
		761,
		34
	],
	"../pages/apply-savings-ac/apply-savings-ac.module": [
		759,
		33
	],
	"../pages/beneficiaries/beneficiaries.module": [
		760,
		32
	],
	"../pages/card-management/card-management.module": [
		763,
		31
	],
	"../pages/cards/cards.module": [
		762,
		30
	],
	"../pages/cell-phone-number/cell-phone-number.module": [
		764,
		29
	],
	"../pages/content/content.module": [
		765,
		28
	],
	"../pages/country-of-birth/country-of-birth.module": [
		766,
		27
	],
	"../pages/customer-kyc/customer-kyc.module": [
		767,
		26
	],
	"../pages/dashboard/dashboard.module": [
		792,
		1
	],
	"../pages/date-of-birth/date-of-birth.module": [
		768,
		2
	],
	"../pages/item-create/item-create.module": [
		769,
		25
	],
	"../pages/item-detail/item-detail.module": [
		771,
		24
	],
	"../pages/list-master/list-master.module": [
		770,
		23
	],
	"../pages/login/login.module": [
		772,
		22
	],
	"../pages/menu/menu.module": [
		774,
		21
	],
	"../pages/name/name.module": [
		773,
		20
	],
	"../pages/new-beneficiary/new-beneficiary.module": [
		775,
		19
	],
	"../pages/occupation/occupation.module": [
		776,
		18
	],
	"../pages/politicas-privacidad/politicas-privacidad.module": [
		777,
		17
	],
	"../pages/receive-assets/receive-assets.module": [
		779,
		16
	],
	"../pages/saving-charges/saving-charges.module": [
		778,
		15
	],
	"../pages/search/search.module": [
		780,
		14
	],
	"../pages/send-assets/send-assets.module": [
		782,
		13
	],
	"../pages/settings/settings.module": [
		781,
		12
	],
	"../pages/sex/sex.module": [
		783,
		11
	],
	"../pages/signup/signup.module": [
		784,
		10
	],
	"../pages/statement-account/statement-account.module": [
		785,
		0
	],
	"../pages/summary/summary.module": [
		787,
		9
	],
	"../pages/tabs/tabs.module": [
		786,
		8
	],
	"../pages/terminos-condiciones/terminos-condiciones.module": [
		788,
		7
	],
	"../pages/transactions-history/transactions-history.module": [
		789,
		4
	],
	"../pages/tutorial/tutorial.module": [
		790,
		6
	],
	"../pages/welcome/welcome.module": [
		791,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 258;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_currencies__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var COINAMOUNT = null;
var BATCHSIZE = 60;
var ApiService = /** @class */ (function () {
    function ApiService(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.coinList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.indexStart = 0;
        this.currencyList = {};
        this.pricePromises = [];
        this.isLoading = false;
        this.coinHistoryPriceList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.coinHistoryPriceListJS = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.storedCurrency = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](__WEBPACK_IMPORTED_MODULE_4__classes_currencies__["a" /* currencies */].find(function (item) { return item.code === 'USD'; }));
        this.storage.get('currency').then(function (currency) {
            if (currency) {
                _this.storedCurrency.next(currency);
            }
        });
        this.storedCurrency.subscribe(function (item) {
            _this.currentCurrency = item;
        });
    }
    ApiService_1 = ApiService;
    // TODO Do something when the api is down
    ApiService.renderPriceHistory = function (historyData) {
        return historyData.map(function (minuteObject) {
            return {
                name: minuteObject.time,
                value: minuteObject.close
            };
        });
    };
    ApiService.renderPriceHistoryChartJSLabel = function (historyData) {
        return historyData.map(function (minuteObject) {
            return minuteObject.time;
        });
    };
    ApiService.renderPriceHistoryChartJSValue = function (historyData) {
        return historyData.map(function (minuteObject) {
            return minuteObject.close;
        });
    };
    ApiService.getCurrencieCodes = function () {
        return __WEBPACK_IMPORTED_MODULE_4__classes_currencies__["a" /* currencies */].map(function (item) { return item.code; }).join();
    };
    ApiService.prototype.saveCurrency = function (currency) {
        this.storage.set('currency', currency);
        this.storedCurrency.next(currency);
        this.getCoinList();
    };
    ApiService.prototype.callCoinList = function () {
        return this.http.get('https://min-api.cryptocompare.com/data/all/coinlist');
    };
    ApiService.prototype.callPriceList = function (coins) {
        return this.http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + coins + "&tsyms=" + this.currentCurrency.code + "&e=CCCAGG"); // TODO: fix currency to dynamic
    };
    ApiService.prototype.getPriceHistoryHour = function (coin) {
        var code = coin.code;
        var url = this.http.get("https://min-api.cryptocompare.com/data/histominute?fsym=" + code + "&tsym=" + this.currentCurrency.code + "&limit=60&aggregate=1&e=CCCAGG");
        this.getPriceDataChartJS(url, coin);
    };
    ApiService.prototype.getPriceHistoryDay = function (coin) {
        var code = coin.code;
        var url = this.http.get("https://min-api.cryptocompare.com/data/histominute?fsym=" + code + "&tsym=" + this.currentCurrency.code + "&limit=1440&aggregate=30&e=CCCAGG");
        this.getPriceDataChartJS(url, coin);
    };
    ApiService.prototype.getPriceHistoryWeek = function (coin) {
        var code = coin.code;
        var url = this.http.get("https://min-api.cryptocompare.com/data/histohour?fsym=" + code + "&tsym=" + this.currentCurrency.code + "&limit=168&aggregate=1&e=CCCAGG");
        this.getPriceDataChartJS(url, coin);
    };
    ApiService.prototype.getPriceHistoryMonth = function (coin) {
        var code = coin.code;
        var url = this.http.get("https://min-api.cryptocompare.com/data/histoday?fsym=" + code + "&tsym=" + this.currentCurrency.code + "&limit=30&aggregate=1&e=CCCAGG");
        this.getPriceDataChartJS(url, coin);
    };
    ApiService.prototype.getPriceHistoryYear = function (coin) {
        var code = coin.code;
        var url = this.http.get("https://min-api.cryptocompare.com/data/histoday?fsym=" + code + "&tsym=" + this.currentCurrency.code + "&limit=365&aggregate=1&e=CCCAGG");
        this.getPriceDataChartJS(url, coin);
    };
    ApiService.prototype.getPriceHistoryAll = function (coin) {
        var code = coin.code;
        var url = this.http.get("https://min-api.cryptocompare.com/data/histoday?fsym=" + code + "&tsym=" + this.currentCurrency.code + "&aggregate=1&e=CCCAGG&allData=true");
        this.getPriceDataChartJS(url, coin);
    };
    ApiService.prototype.getCoinList = function () {
        var _this = this;
        if (!this.refresher) {
            this.isLoading = true;
        }
        this.callCoinList().subscribe(function (data) {
            var coinMarketCoinList = data;
            var baseImageUrl = coinMarketCoinList['BaseImageUrl'];
            var coinListJson = coinMarketCoinList['Data'];
            var listOfCoinProperties = Object.keys(coinListJson).filter(function (coin) { return !(coin.indexOf('*') > -1); });
            if (COINAMOUNT) {
                listOfCoinProperties.length = COINAMOUNT;
            }
            _this.getPricesPerBatchSize(listOfCoinProperties, BATCHSIZE);
            _this.prepareCoinList(listOfCoinProperties, coinListJson, baseImageUrl);
        }, function (err) { return console.error(err); }, function () { return console.log('done loading coins'); });
    };
    ApiService.prototype.prepareCoinList = function (listOfCoinProperties, coinListJson, baseImageUrl) {
        var _this = this;
        Promise.all(this.pricePromises).then(function () {
            var coinList = listOfCoinProperties.filter(function (coin) {
                return _this.checkForEmptyCoins(coinListJson, coin);
            }).map(function (coin) {
                return _this.mapToCoin(coinListJson, coin, baseImageUrl);
            }).filter(function (coin) {
                return !!coin.marketcap && !!coin.change;
            });
            _this.isLoading = false;
            _this.indexStart = 0;
            if (_this.refresher) {
                _this.refresher.complete();
                _this.refresher = null;
            }
            _this.coinList.next(coinList);
            _this.updateWallets(coinList);
        }, function (err) { return console.error(err); });
    };
    ApiService.prototype.updateWallets = function (coinList) {
        var _this = this;
        this.storage.get('wallets').then(function (wallets) {
            if (wallets && wallets.length > 0) {
                wallets.forEach(function (wallet) {
                    wallet.coins.forEach(function (walletItem) {
                        walletItem.coin = coinList.find(function (coin) {
                            return coin.name === walletItem.coin.name;
                        });
                    });
                });
                _this.storage.set('wallets', wallets);
            }
        });
    };
    ApiService.prototype.mapToCoin = function (coinListJson, coin, baseImageUrl) {
        var coinObject = coinListJson[coin];
        var currencies = this.mapCurrencies(coin);
        return Object.assign({
            name: coinObject['CoinName'],
            code: coinObject['Symbol'],
            imageUrl: baseImageUrl + coinObject['ImageUrl'],
            order: coinObject['SortOrder'],
        }, currencies[this.currentCurrency.code]);
    };
    ApiService.prototype.checkForEmptyCoins = function (coinListJson, coin) {
        var coinObject = coinListJson[coin];
        var hasName = coinObject.hasOwnProperty('CoinName') && !!coinObject['CoinName'];
        var hasUrl = coinObject.hasOwnProperty('Url') && !!coinObject['Url'];
        var hasImage = coinObject.hasOwnProperty('ImageUrl') && !!coinObject['ImageUrl'];
        var hasPrice = this.currencyList[coin] && !!this.currencyList[coin][this.currentCurrency.code];
        var notSponsored = coinObject.hasOwnProperty('Sponsored') && !coinObject['Sponsored'];
        return hasName && hasUrl && hasImage && hasPrice && notSponsored;
    };
    ApiService.prototype.getPricesPerBatchSize = function (listOfCoinProperties, batchSize) {
        var _this = this;
        var range = this.indexStart + batchSize;
        var shortCoinNames = listOfCoinProperties.slice(this.indexStart, range);
        var priceList = this.callPriceList(shortCoinNames.join()).toPromise();
        this.pricePromises.push(new Promise(function (resolve, reject) {
            priceList.then(function (data) {
                Object.assign(_this.currencyList, data['RAW']);
                resolve();
            });
        }));
        this.indexStart += batchSize + 1;
        if (range < listOfCoinProperties.length) {
            this.getPricesPerBatchSize(listOfCoinProperties, batchSize);
        }
    };
    ApiService.prototype.mapCurrencies = function (coin) {
        if (this.currencyList[coin]) {
            var currencies_1 = this.currencyList[coin];
            for (var currency in currencies_1) {
                if (currencies_1.hasOwnProperty(currency)) {
                    currencies_1[currency] = {
                        currency: this.currentCurrency,
                        price: currencies_1[currency]['PRICE'],
                        priceLastUpdated: currencies_1[currency]['LASTUPDATE'],
                        change: currencies_1[currency]['CHANGEPCT24HOUR'],
                        marketcap: currencies_1[currency]['MKTCAP'],
                    };
                }
            }
            return currencies_1;
        }
    };
    ApiService.prototype.refreshCoinList = function (refresher) {
        var _this = this;
        this.refresher = refresher;
        setTimeout(function () { return _this.getCoinList(); }, 500);
    };
    ApiService.prototype.getPriceData = function (url, coin) {
        var _this = this;
        url.subscribe(function (data) {
            var historyData = data['Data'];
            _this.coinHistoryPriceList.next([
                {
                    "name": coin.name,
                    "series": ApiService_1.renderPriceHistory(historyData)
                },
            ]);
        }, function (err) { return console.error(err); }, function () { return console.log('done loading chart'); });
    };
    ApiService.prototype.getPriceDataChartJS = function (url, coin) {
        var _this = this;
        setTimeout(function () {
            url.subscribe(function (data) {
                var historyData = data['Data'];
                _this.coinHistoryPriceListJS.next({
                    labels: ApiService_1.renderPriceHistoryChartJSLabel(historyData),
                    data: ApiService_1.renderPriceHistoryChartJSValue(historyData)
                });
            }, function (err) { return console.error(err); }, function () { return console.log('done loading chart'); });
        }, 500);
    };
    ApiService = ApiService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ApiService);
    return ApiService;
    var ApiService_1;
}());

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Tab4Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Tab5Root; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'TransactionsHistoryPage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'SummaryPage';
var Tab4Root = 'ListMasterPage';
var Tab5Root = 'SettingsPage';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_cryptocompare_utils__ = __webpack_require__(736);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TYPE = __WEBPACK_IMPORTED_MODULE_2__classes_cryptocompare_utils__["a" /* CCC */].STATIC.TYPE['CURRENTAGG'];
var EXCHANGE = 'CCCAGG';
var WebsocketService = /** @class */ (function () {
    function WebsocketService(socket) {
        this.socket = socket;
        this.subscribers = [];
        this.currentPrice = {};
    }
    WebsocketService.prototype.subscribeToSocket = function (subscribers) {
        this.subscribers = subscribers;
        var subscriptions = [];
        this.subscribers.forEach(function (coin) {
            subscriptions.push(TYPE + "~" + EXCHANGE + "~" + coin.code + "~" + coin.currency.code);
        });
        this.socket.emit('SubAdd', { subs: subscriptions });
        return true;
    };
    WebsocketService.prototype.subscribeCoinToSocket = function (coin) {
        this.socket.emit('SubAdd', { subs: [TYPE + "~" + EXCHANGE + "~" + coin.code + "~" + coin.currency.code] });
    };
    WebsocketService.prototype.unsubscribeCoinToSocket = function (coin) {
        this.socket.emit('SubRemove', { subs: [TYPE + "~" + EXCHANGE + "~" + coin.code + "~" + coin.currency.code] });
    };
    WebsocketService.prototype.stopWatchEvent = function () {
        this.watchEventSubscription.unsubscribe();
    };
    WebsocketService.prototype.watchEvent = function (callback) {
        var _this = this;
        this.watchEventSubscription = this.socket.fromEvent('m').subscribe(function (message) {
            var messageType = message.substring(0, message.indexOf("~"));
            var res = {};
            if (messageType == __WEBPACK_IMPORTED_MODULE_2__classes_cryptocompare_utils__["a" /* CCC */].STATIC.TYPE.CURRENTAGG) {
                res = __WEBPACK_IMPORTED_MODULE_2__classes_cryptocompare_utils__["a" /* CCC */].CURRENT.unpack(message);
                _this.dataUnpack(res, callback);
            }
        }, function (data) {
            // TODO: Check what to do if there is no subscription data
            console.log('error: ', data);
        });
    };
    WebsocketService.prototype.dataUnpack = function (data, callback) {
        var from = data['FROMSYMBOL'];
        var to = data['TOSYMBOL'];
        var fsym = __WEBPACK_IMPORTED_MODULE_2__classes_cryptocompare_utils__["a" /* CCC */].STATIC.CURRENCY.getSymbol(from);
        var tsym = __WEBPACK_IMPORTED_MODULE_2__classes_cryptocompare_utils__["a" /* CCC */].STATIC.CURRENCY.getSymbol(to);
        var pair = from + to;
        if (!this.currentPrice.hasOwnProperty(pair)) {
            this.currentPrice[pair] = {};
        }
        for (var key in data) {
            this.currentPrice[pair][key] = data[key];
        }
        if (this.currentPrice[pair]['LASTTRADEID']) {
            this.currentPrice[pair]['LASTTRADEID'] = parseInt(this.currentPrice[pair]['LASTTRADEID']).toFixed(0);
        }
        this.currentPrice[pair]['CHANGE24HOUR'] = __WEBPACK_IMPORTED_MODULE_2__classes_cryptocompare_utils__["a" /* CCC */].convertValueToDisplay(tsym, (this.currentPrice[pair]['PRICE'] - this.currentPrice[pair]['OPEN24HOUR']));
        this.currentPrice[pair]['CHANGE24HOURPCT'] = ((this.currentPrice[pair]['PRICE'] - this.currentPrice[pair]['OPEN24HOUR']) / this.currentPrice[pair]['OPEN24HOUR'] * 100).toFixed(2) + "%";
        this.displayData(this.currentPrice[pair], from, tsym, fsym, callback);
    };
    ;
    WebsocketService.prototype.displayData = function (current, from, tsym, fsym, callback) {
        var priceDirection = current.FLAGS;
        // for (let key in current) {
        //   if (key == 'CHANGE24HOURPCT') {
        //     // $('#' + key + '_' + from).text(' (' + current[key] + ')');
        //     console.log(current[key]);
        //   }
        //   // else if (key == 'LASTVOLUMETO' || key == 'VOLUME24HOURTO') {
        //   //   $('#' + key + '_' + from).text(CCC.convertValueToDisplay(tsym, current[key]));
        //   // }
        //   // else if (key == 'LASTVOLUME' || key == 'VOLUME24HOUR' || key == 'OPEN24HOUR' || key == 'OPENHOUR' || key == 'HIGH24HOUR' || key == 'HIGHHOUR' || key == 'LOWHOUR' || key == 'LOW24HOUR') {
        //   //   $('#' + key + '_' + from).text(CCC.convertValueToDisplay(fsym, current[key]));
        //   // }
        //   // else {
        //   //   $('#' + key + '_' + from).text(current[key]);
        //   // }
        // }
        //
        // // $('#PRICE_' + from).removeClass();
        // if (priceDirection & 1) {
        //   console.log('up');
        //   // $('#PRICE_' + from).addClass("up");
        // }
        // else if (priceDirection & 2) {
        //   console.log('down');
        //   // $('#PRICE_' + from).addClass("down");
        // }
        // if (current['PRICE'] > current['OPEN24HOUR']) {
        //   console.log('price up');
        //   // $('#CHANGE24HOURPCT_' + from).removeClass();
        //   // $('#CHANGE24HOURPCT_' + from).addClass("up");
        // }
        // else if (current['PRICE'] < current['OPEN24HOUR']) {
        //   console.log('price down');
        //
        //   // $('#CHANGE24HOURPCT_' + from).removeClass();
        //   // $('#CHANGE24HOURPCT_' + from).addClass("down");
        // }
        var coinCode = current['FROMSYMBOL'];
        var coin = this.subscribers.find(function (item) { return item.code === coinCode; });
        if (coin) {
            var index = this.subscribers.indexOf(coin);
            if (index > -1) {
                for (var key in current) {
                    if (key == 'CHANGE24HOURPCT') {
                        this.subscribers[index].change = Number(current[key].replace('%', ''));
                    }
                    if (key == 'PRICE') {
                        this.subscribers[index].price = Number(current['PRICE']);
                    }
                    if (key == 'LASTUPDATE') {
                        this.subscribers[index].priceLastUpdated = Number(current['LASTUPDATE']);
                    }
                }
            }
            // console.log(coin.name + ' : ' + coin.change);
            // console.log(coin.name + ' : ' + coin.price);
            // console.log(coin.name + ' : ' + coin.priceLastUpdated);
            callback(coin);
        }
    };
    ;
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_socket_io__["Socket"]])
    ], WebsocketService);
    return WebsocketService;
}());

//# sourceMappingURL=websocket.service.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SelfServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SelfServiceProvider = /** @class */ (function () {
    function SelfServiceProvider(api) {
        this.api = api;
    }
    SelfServiceProvider.prototype.getTptBeneficiary = function (userinfo) {
        var _this = this;
        console.log('Trying to get the list of third party beneficiaries');
        var seq = this.api.post('getptbeneficiary', userinfo).share();
        seq.subscribe(function (res) {
            if (res.data) {
                console.log('Fetched the list of beneficiaries from self provider', res.data);
                _this._beneficiaries = res.data;
            }
            else { }
        }, function (err) {
            console.log(' The Error is ', err);
        });
        return seq;
    };
    SelfServiceProvider.prototype.getSAChanges = function (userinfo) {
        var _this = this;
        console.log('Trying to get the list of savings charges');
        var seq = this.api.post('getsacharges', userinfo).share();
        seq.subscribe(function (res) {
            if (res.data) {
                console.log('yepp got the charges on your mark');
                _this._saCharges = res.data;
            }
            else {
            }
        }, function (err) {
            console.log('Error in sa charges call', err);
        });
        return seq;
    };
    SelfServiceProvider.prototype.listBeneficiaries = function () {
        return this._beneficiaries;
    };
    SelfServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], SelfServiceProvider);
    return SelfServiceProvider;
}());

//# sourceMappingURL=self-service.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(412);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner_ngx__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mocks_providers_items__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_country_picker__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_api_service__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_image_loader__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_websocket_service__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng_socket_io__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_self_service_self_service__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// Import your library







var config = { url: 'wss://streamer.cryptocompare.com' };
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_12__providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_17_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_country_picker__["a" /* CountryPickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account-details/account-details.module#AccountDetailsPageModule', name: 'account-details', segment: 'account-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/accounts/accounts.module#AccountsPageModule', name: 'accounts', segment: 'accounts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-savings-ac/apply-savings-ac.module#ApplySavingsAcPageModule', name: 'apply-savings-ac', segment: 'apply-savings-ac', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/beneficiaries/beneficiaries.module#BeneficiariesPageModule', name: 'beneficiaries', segment: 'beneficiaries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activate-customer/activate-customer.module#ActivateCustomerPageModule', name: 'activate-customer', segment: 'activate-customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/card-management/card-management.module#CardManagementPageModule', name: 'CardManagementPage', segment: 'card-management', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cell-phone-number/cell-phone-number.module#CellPhoneNumberPageModule', name: 'CellPhoneNumberPage', segment: 'cell-phone-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/country-of-birth/country-of-birth.module#CountryOfBirthPageModule', name: 'CountryOfBirthPage', segment: 'country-of-birth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer-kyc/customer-kyc.module#CustomerKycPageModule', name: 'customer-kyc', segment: 'customer-kyc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/date-of-birth/date-of-birth.module#DateOfBirthPageModule', name: 'DateOfBirthPage', segment: 'date-of-birth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/name/name.module#NamePageModule', name: 'NamePage', segment: 'name', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-beneficiary/new-beneficiary.module#NewBeneficiaryPageModule', name: 'new-beneficiary', segment: 'new-beneficiary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/occupation/occupation.module#OccupationPageModule', name: 'OccupationPage', segment: 'occupation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/politicas-privacidad/politicas-privacidad.module#PoliticasPrivacidadPageModule', name: 'PoliticasPrivacidadPage', segment: 'politicas-privacidad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saving-charges/saving-charges.module#SavingChargesPageModule', name: 'saving-charges', segment: 'saving-charges', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receive-assets/receive-assets.module#ReceiveAssetsPageModule', name: 'ReceiveAssetsPage', segment: 'receive-assets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/send-assets/send-assets.module#SendAssetsPageModule', name: 'SendAssetsPage', segment: 'send-assets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sex/sex.module#SexPageModule', name: 'SexPage', segment: 'sex', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statement-account/statement-account.module#StatementAccountPageModule', name: 'StatementAccountPage', segment: 'statement-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summary/summary.module#SummaryPageModule', name: 'SummaryPage', segment: 'summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terminos-condiciones/terminos-condiciones.module#TerminosCondicionesPageModule', name: 'TerminosCondicionesPage', segment: 'terminos-condiciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transactions-history/transactions-history.module#TransactionsHistoryPageModule', name: 'TransactionsHistoryPage', segment: 'transactions-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_11__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_16__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_18__services_websocket_service__["a" /* WebsocketService */],
                __WEBPACK_IMPORTED_MODULE_12__providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_20__providers_self_service_self_service__["a" /* SelfServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_barcode_scanner_ngx__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_self_service_self_service__["a" /* SelfServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /*getTptBeneficiary(userinfo: any){
      console.log('Trying to get the list of third party beneficiaries');
      let seq = this.api.post('getptbeneficiary', userinfo).share();
  
  
      seq.subscribe((res: any) => {
        if (res.data) {
          console.log('Fetched the list of beneficiaries', res.data);
          this._beneficiaries = res.data;
        } else {}
      }, err=> {
        console.log(' The Error is ', err);
      });
      return seq;
    }*/
    User.prototype.applySavingsAccount = function (userinfo) {
        var seq = this.api.post('savingsaccounts', userinfo).share();
        seq.subscribe(function (res) {
            if (res.status == 'success') {
                console.log('Okay, your savings account is applied');
            }
            else {
            }
        }, function (err) {
            console.log('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our create endpoint with the data
     * the user entered on the form.
     */
    User.prototype.create = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('create', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            console.log(res.status);
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our activate endpoint with the data
     * the user entered on the form.
     */
    User.prototype.activate = function (accountInfo) {
        var _this = this;
        console.log("SE ENVIA AL API ", accountInfo);
        var seq = this.api.post('activate', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            console.log(res.status);
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
       * Send a POST request to our activate endpoint with the data
       * the user entered on the form.
       */
    User.prototype.activateLevel1 = function (accountInfo) {
        var _this = this;
        console.log("SE ENVIA AL API ", accountInfo);
        var seq = this.api.post('activateLevel1', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            console.log(res.status);
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            console.log(res.status);
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    User.prototype.userinfo = function () {
        return this._user;
    };
    /*listBeneficiaries(){
      return this._beneficiaries;
    }
  */
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return currencies; });
var currencies = [
    {
        name: 'Bitcoin',
        code: 'BTC',
        symbol: 'B'
    },
    {
        name: 'Euro',
        code: 'EUR',
        symbol: '€'
    },
    {
        name: 'US Dollar',
        code: 'USD',
        symbol: '$'
    },
    {
        name: 'Japanese yen',
        code: 'JPY',
        symbol: '¥'
    },
    {
        name: 'British Pound',
        code: 'GBP',
        symbol: '$'
    },
    {
        name: 'Australian Dollar',
        code: 'AUD',
        symbol: 'A$'
    },
    {
        name: 'Canadian Dollar',
        code: 'CAD',
        symbol: 'C$'
    },
    {
        name: 'Swiss Franc',
        code: 'CHF',
        symbol: 'Fr'
    },
    {
        name: 'Chinese Yuan Renminbi',
        code: 'CNY',
        symbol: '元'
    },
    {
        name: 'Swedish Krona',
        code: 'SEK',
        symbol: 'kr'
    },
    {
        name: 'New Zealand Dollar',
        code: 'NZD',
        symbol: 'NZ$'
    },
    {
        name: 'Mexican Peso',
        code: 'MXN',
        symbol: '$'
    },
    {
        name: 'Singapore Dollar',
        code: 'SGD',
        symbol: 'S$'
    },
    {
        name: 'Hong Kong Dollar',
        code: 'HKD',
        symbol: 'HK$'
    },
    {
        name: 'Norwegian Krone',
        code: 'NOK',
        symbol: 'kr'
    },
    {
        name: 'South Korean Won',
        code: 'KRW',
        symbol: '₩'
    },
    {
        name: 'Turkish Lira',
        code: 'TRY',
        symbol: '₺'
    },
    {
        name: 'Russian Ruble',
        code: 'RUB',
        symbol: '₽'
    },
    {
        name: 'Indian Rupee',
        code: 'INR',
        symbol: '₹'
    },
    {
        name: 'Brazilian Real',
        code: 'BRL',
        symbol: 'R$'
    },
    {
        name: 'South African Rand',
        code: 'ZAR',
        symbol: 'R'
    },
];
//# sourceMappingURL=currencies.js.map

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CCC; });
var CCC;
CCC = CCC || {};
CCC.STATIC = CCC.STATIC || {};
CCC.STATIC.TYPE = {
    'TRADE': '0',
    'FEEDNEWS': '1',
    'CURRENT': '2',
    'LOADCOMPLATE': '3',
    'COINPAIRS': '4',
    'CURRENTAGG': '5',
    'TOPLIST': '6',
    'TOPLISTCHANGE': '7',
    'ORDERBOOK': '8',
    'FULLORDERBOOK': '9',
    'ACTIVATION': '10',
    'TRADECATCHUP': '100',
    'NEWSCATCHUP': '101',
    'TRADECATCHUPCOMPLETE': '300',
    'NEWSCATCHUPCOMPLETE': '301'
};
CCC.STATIC.CURRENCY = CCC.STATIC.CURRENCY || {};
CCC.STATIC.CURRENCY.SYMBOL = {
    'BTC': 'Ƀ',
    'LTC': 'Ł',
    'DAO': 'Ð',
    'USD': '$',
    'CNY': '¥',
    'EUR': '€',
    'GBP': '£',
    'JPY': '¥',
    'PLN': 'zł',
    'RUB': '₽',
    'ETH': 'Ξ',
    'GOLD': 'Gold g',
    'INR': '₹',
    'BRL': 'R$'
};
CCC.STATIC.CURRENCY.getSymbol = function (symbol) {
    return CCC.STATIC.CURRENCY.SYMBOL[symbol] || symbol;
};
CCC.STATIC.UTIL = {
    exchangeNameMapping: {
        'CCCAGG': 'CryptoCompare Index',
        'BTCChina': 'BTCC'
    },
    isMobile: function (userAgent) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0, 4)))
            return true;
        return false;
    },
    convertToMB: function (bytes) {
        return (parseInt(bytes, 10) / 1024 / 1024).toFixed(2) + ' MB';
    },
    getNameForExchange: function (exchangeName) {
        if (this.exchangeNameMapping.hasOwnProperty(exchangeName)) {
            return this.exchangeNameMapping[exchangeName];
        }
        return exchangeName;
    },
    noExponents: function (value) {
        var data = String(value).split(/[eE]/);
        if (data.length == 1)
            return data[0];
        var z = '', sign = value < 0 ? '-' : '', str = data[0].replace('.', ''), mag = Number(data[1]) + 1;
        if (mag < 0) {
            z = sign + '0.';
            while (mag++)
                z += '0';
            return z + str.replace(/^\-/, '');
        }
        mag -= str.length;
        while (mag--)
            z += '0';
        return str + z;
    },
    reduceFloatVal: function (value) {
        value = parseFloat(value);
        if (value > 1) {
            value = Math.round(value * 100) / 100;
            return value;
        }
        if (value >= 0.00001000) {
            return parseFloat(value.toPrecision(4));
        }
        if (value >= 0.00000100) {
            return parseFloat(value.toPrecision(3));
        }
        if (value >= 0.00000010) {
            return parseFloat(value.toPrecision(2));
        }
        return parseFloat(value.toPrecision(1));
    },
    reduceReal: function (value) {
        value = parseFloat(value);
        return parseFloat(value.toFixed(8));
    },
    convertCurrentKeyToAll: function (key) {
        var valuesArray = key.split("~");
        valuesArray[0] = CCC.STATIC.TYPE.CURRENTAGG;
        valuesArray[1] = 'CCCAGG';
        return valuesArray.join('~');
    },
    convertCurrentKeyToTrade: function (key) {
        var valuesArray = key.split("~");
        valuesArray[0] = CCC.STATIC.TYPE.TRADE;
        return valuesArray.join('~');
    },
    convertValueToDisplay: function (symbol, value, filterNumberFunctionAngularJS, type, fullNumbers) {
        var prefix = '';
        var valueSign = 1;
        value = parseFloat(value);
        var valueAbs = Math.abs(value);
        var decimalsOnBigNumbers = 2;
        var decimalsOnNormalNumbers = 2;
        var decimalsOnSmallNumbers = 4;
        if (fullNumbers === true) {
            decimalsOnBigNumbers = 2;
            decimalsOnNormalNumbers = 0;
            decimalsOnSmallNumbers = 4;
        }
        if (type == "8decimals") {
            decimalsOnBigNumbers = 4;
            decimalsOnNormalNumbers = 8;
            decimalsOnSmallNumbers = 8;
            if (value < 0.0001 && value >= 0.00001) {
                decimalsOnSmallNumbers = 4;
            }
            if (value < 0.001 && value >= 0.0001) {
                decimalsOnSmallNumbers = 5;
            }
            if (value < 0.01 && value >= 0.001) {
                decimalsOnSmallNumbers = 6;
            }
            if (value < 0.1 && value >= 0.01) {
                decimalsOnSmallNumbers = 7;
            }
        }
        if (symbol != '') {
            prefix = symbol + ' ';
        }
        if (value < 0) {
            valueSign = -1;
        }
        if (value == 0) {
            return prefix + '0';
        }
        if (value < 0.00001000 && value >= 0.00000100 && decimalsOnSmallNumbers > 3) {
            decimalsOnSmallNumbers = 3;
        }
        if (value < 0.00000100 && value >= 0.00000010 && decimalsOnSmallNumbers > 2) {
            decimalsOnSmallNumbers = 2;
        }
        if (value < 0.00000010 && decimalsOnSmallNumbers > 1) {
            decimalsOnSmallNumbers = 1;
        }
        if (type == "short" || type == "8decimals") {
            if (valueAbs > 10000000000) {
                valueAbs = valueAbs / 1000000000;
                return prefix + filterNumberFunctionAngularJS(valueSign * valueAbs, decimalsOnBigNumbers) + ' B';
            }
            if (valueAbs > 10000000) {
                valueAbs = valueAbs / 1000000;
                return prefix + filterNumberFunctionAngularJS(valueSign * valueAbs, decimalsOnBigNumbers) + ' M';
            }
            if (valueAbs > 10000) {
                valueAbs = valueAbs / 1000;
                return prefix + filterNumberFunctionAngularJS(valueSign * valueAbs, decimalsOnBigNumbers) + ' K';
            }
            if (type == "8decimals" && valueAbs >= 100) {
                return prefix + filterNumberFunctionAngularJS(valueSign * valueAbs, decimalsOnBigNumbers);
            }
            if (valueAbs >= 1) {
                return prefix + filterNumberFunctionAngularJS(valueSign * valueAbs, decimalsOnNormalNumbers);
            }
            return prefix + (valueSign * valueAbs).toPrecision(decimalsOnSmallNumbers);
        }
        else {
            if (valueAbs >= 1) {
                return prefix + filterNumberFunctionAngularJS(valueSign * valueAbs, decimalsOnNormalNumbers);
            }
            return prefix + this.noExponents((valueSign * valueAbs).toPrecision(decimalsOnSmallNumbers));
        }
    }
};
CCC.TRADE = CCC.TRADE || {};
/*
trade fields binary values always in the last ~
*/
CCC.TRADE.FLAGS = {
    'SELL': 0x1 // hex for binary 1
    ,
    'BUY': 0x2 // hex for binary 10
    ,
    'UNKNOWN': 0x4 // hex for binary 100
};
CCC.TRADE.FIELDS = {
    'T': 0x0 // hex for binary 0, it is a special case of fields that are always there TYPE
    ,
    'M': 0x0 // hex for binary 0, it is a special case of fields that are always there MARKET
    ,
    'FSYM': 0x0 // hex for binary 0, it is a special case of fields that are always there FROM SYMBOL
    ,
    'TSYM': 0x0 // hex for binary 0, it is a special case of fields that are always there TO SYMBOL
    ,
    'F': 0x0 // hex for binary 0, it is a special case of fields that are always there FLAGS
    ,
    'ID': 0x1 // hex for binary 1                                                       ID
    ,
    'TS': 0x2 // hex for binary 10                                                      TIMESTAMP
    ,
    'Q': 0x4 // hex for binary 100                                                     QUANTITY
    ,
    'P': 0x8 // hex for binary 1000                                                    PRICE
    ,
    'TOTAL': 0x10 // hex for binary 10000                                                   TOTAL
};
CCC.TRADE.DISPLAY = CCC.TRADE.DISPLAY || {};
CCC.TRADE.DISPLAY.FIELDS = {
    'T': { "Show": false },
    'M': { "Show": true, 'Filter': 'Market' },
    'FSYM': { "Show": true, 'Filter': 'CurrencySymbol' },
    'TSYM': { "Show": true, 'Filter': 'CurrencySymbol' },
    'F': { "Show": true, 'Filter': 'TradeFlag' },
    'ID': { "Show": true, 'Filter': 'Text' },
    'TS': { 'Show': true, 'Filter': 'Date', 'Format': 'yyyy MMMM dd HH:mm:ss' },
    'Q': { 'Show': true, 'Filter': 'Number', 'Symbol': 'FSYM' },
    'P': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TSYM' },
    'TOTAL': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TSYM' }
};
CCC.TRADE.pack = function (tradeObject) {
    var mask = 0;
    var packedTrade = '';
    for (var field in tradeObject) {
        packedTrade += '~' + tradeObject[field];
        mask |= this.FIELDS[field];
    }
    return packedTrade.substr(1) + '~' + mask.toString(16);
};
CCC.TRADE.unpack = function (tradeString) {
    var valuesArray = tradeString.split("~");
    var valuesArrayLenght = valuesArray.length;
    var mask = valuesArray[valuesArrayLenght - 1];
    var maskInt = parseInt(mask, 16);
    var unpackedTrade = {};
    var currentField = 0;
    for (var property in this.FIELDS) {
        if (this.FIELDS[property] === 0) {
            unpackedTrade[property] = valuesArray[currentField];
            currentField++;
        }
        else if (maskInt & this.FIELDS[property]) {
            unpackedTrade[property] = valuesArray[currentField];
            currentField++;
        }
    }
    return unpackedTrade;
};
CCC.TRADE.getKey = function (tradeObject) {
    return tradeObject['T'] + '~' + tradeObject['M'] + '~' + tradeObject['FSYM'] + '~' + tradeObject['TSYM'];
};
CCC.CURRENT = CCC.CURRENT || {};
/*
current fields mask values always in the last ~
*/
CCC.CURRENT.FLAGS = {
    'PRICEUP': 0x1 // hex for binary 1
    ,
    'PRICEDOWN': 0x2 // hex for binary 10
    ,
    'PRICEUNCHANGED': 0x4 // hex for binary 100
    ,
    'BIDUP': 0x8 // hex for binary 1000
    ,
    'BIDDOWN': 0x10 // hex for binary 10000
    ,
    'BIDUNCHANGED': 0x20 // hex for binary 100000
    ,
    'OFFERUP': 0x40 // hex for binary 1000000
    ,
    'OFFERDOWN': 0x80 // hex for binary 10000000
    ,
    'OFFERUNCHANGED': 0x100 // hex for binary 100000000
    ,
    'AVGUP': 0x200 // hex for binary 1000000000
    ,
    'AVGDOWN': 0x400 // hex for binary 10000000000
    ,
    'AVGUNCHANGED': 0x800 // hex for binary 100000000000
};
CCC.CURRENT.FIELDS = {
    'TYPE': 0x0 // hex for binary 0, it is a special case of fields that are always there
    ,
    'MARKET': 0x0 // hex for binary 0, it is a special case of fields that are always there
    ,
    'FROMSYMBOL': 0x0 // hex for binary 0, it is a special case of fields that are always there
    ,
    'TOSYMBOL': 0x0 // hex for binary 0, it is a special case of fields that are always there
    ,
    'FLAGS': 0x0 // hex for binary 0, it is a special case of fields that are always there
    ,
    'PRICE': 0x1 // hex for binary 1
    ,
    'BID': 0x2 // hex for binary 10
    ,
    'OFFER': 0x4 // hex for binary 100
    ,
    'LASTUPDATE': 0x8 // hex for binary 1000
    ,
    'AVG': 0x10 // hex for binary 10000
    ,
    'LASTVOLUME': 0x20 // hex for binary 100000
    ,
    'LASTVOLUMETO': 0x40 // hex for binary 1000000
    ,
    'LASTTRADEID': 0x80 // hex for binary 10000000
    ,
    'VOLUMEHOUR': 0x100 // hex for binary 100000000
    ,
    'VOLUMEHOURTO': 0x200 // hex for binary 1000000000
    ,
    'VOLUME24HOUR': 0x400 // hex for binary 10000000000
    ,
    'VOLUME24HOURTO': 0x800 // hex for binary 100000000000
    ,
    'OPENHOUR': 0x1000 // hex for binary 1000000000000
    ,
    'HIGHHOUR': 0x2000 // hex for binary 10000000000000
    ,
    'LOWHOUR': 0x4000 // hex for binary 100000000000000
    ,
    'OPEN24HOUR': 0x8000 // hex for binary 1000000000000000
    ,
    'HIGH24HOUR': 0x10000 // hex for binary 10000000000000000
    ,
    'LOW24HOUR': 0x20000 // hex for binary 100000000000000000
    ,
    'LASTMARKET': 0x40000 // hex for binary 1000000000000000000, this is a special case and will only appear on CCCAGG messages
};
CCC.CURRENT.DISPLAY = CCC.CURRENT.DISPLAY || {};
CCC.CURRENT.DISPLAY.FIELDS = {
    'TYPE': { 'Show': false },
    'MARKET': { 'Show': true, 'Filter': 'Market' },
    'FROMSYMBOL': { 'Show': false },
    'TOSYMBOL': { 'Show': false },
    'FLAGS': { 'Show': false },
    'PRICE': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'BID': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'OFFER': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'LASTUPDATE': { 'Show': true, 'Filter': 'Date', 'Format': 'yyyy MMMM dd HH:mm:ss' },
    'AVG': { 'Show': true, ' Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'LASTVOLUME': { 'Show': true, 'Filter': 'Number', 'Symbol': 'FROMSYMBOL' },
    'LASTVOLUMETO': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'LASTTRADEID': { 'Show': true, 'Filter': 'String' },
    'VOLUMEHOUR': { 'Show': true, 'Filter': 'Number', 'Symbol': 'FROMSYMBOL' },
    'VOLUMEHOURTO': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'VOLUME24HOUR': { 'Show': true, 'Filter': 'Number', 'Symbol': 'FROMSYMBOL' },
    'VOLUME24HOURTO': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'OPENHOUR': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'HIGHHOUR': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'LOWHOUR': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'OPEN24HOUR': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'HIGH24HOUR': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'LOW24HOUR': { 'Show': true, 'Filter': 'Number', 'Symbol': 'TOSYMBOL' },
    'LASTMARKET': { 'Show': true, 'Filter': 'String' }
};
CCC.CURRENT.pack = function (currentObject) {
    var mask = 0;
    var packedCurrent = '';
    for (var property in this.FIELDS) {
        if (currentObject.hasOwnProperty(property)) {
            packedCurrent += '~' + currentObject[property];
            mask |= this.FIELDS[property];
        }
    }
    //removing first character beacsue it is a ~
    return packedCurrent.substr(1) + '~' + mask.toString(16);
};
CCC.CURRENT.unpack = function (value) {
    var valuesArray = value.split("~");
    var valuesArrayLenght = valuesArray.length;
    var mask = valuesArray[valuesArrayLenght - 1];
    var maskInt = parseInt(mask, 16);
    var unpackedCurrent = {};
    var currentField = 0;
    for (var property in this.FIELDS) {
        if (this.FIELDS[property] === 0) {
            unpackedCurrent[property] = valuesArray[currentField];
            currentField++;
        }
        else if (maskInt & this.FIELDS[property]) {
            //i know this is a hack, for cccagg, future code please don't hate me:(, i did this to avoid
            //subscribing to trades as well in order to show the last market
            if (property === 'LASTMARKET') {
                unpackedCurrent[property] = valuesArray[currentField];
            }
            else {
                unpackedCurrent[property] = parseFloat(valuesArray[currentField]);
            }
            currentField++;
        }
    }
    return unpackedCurrent;
};
CCC.CURRENT.getKey = function (currentObject) {
    return currentObject['TYPE'] + '~' + currentObject['MARKET'] + '~' + currentObject['FROMSYMBOL'] + '~' + currentObject['TOSYMBOL'];
};
CCC.CURRENT.getKeyFromStreamerData = function (streamerData) {
    var valuesArray = streamerData.split("~");
    return valuesArray[0] + '~' + valuesArray[1] + '~' + valuesArray[2] + '~' + valuesArray[3];
};
CCC.noExponents = function (value) {
    var data = String(value).split(/[eE]/);
    if (data.length == 1)
        return data[0];
    var z = '', sign = value < 0 ? '-' : '', str = data[0].replace('.', ''), mag = Number(data[1]) + 1;
    if (mag < 0) {
        z = sign + '0.';
        while (mag++)
            z += '0';
        return z + str.replace(/^\-/, '');
    }
    mag -= str.length;
    while (mag--)
        z += '0';
    return str + z;
};
CCC.filterNumberFunctionPolyfill = function (value, decimals) {
    var decimalsDenominator = Math.pow(10, decimals);
    var numberWithCorrectDecimals = Math.round(value * decimalsDenominator) / decimalsDenominator;
    var parts = numberWithCorrectDecimals.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};
CCC.convertValueToDisplay = function (symbol, value, type, fullNumbers) {
    var prefix = '';
    var valueSign = 1;
    value = parseFloat(value);
    var valueAbs = Math.abs(value);
    var decimalsOnBigNumbers = 2;
    var decimalsOnNormalNumbers = 2;
    var decimalsOnSmallNumbers = 4;
    if (fullNumbers === true) {
        decimalsOnBigNumbers = 2;
        decimalsOnNormalNumbers = 0;
        decimalsOnSmallNumbers = 4;
    }
    if (symbol != '') {
        prefix = symbol + ' ';
    }
    if (value < 0) {
        valueSign = -1;
    }
    if (value == 0) {
        return prefix + '0';
    }
    if (value < 0.00001000 && value >= 0.00000100 && decimalsOnSmallNumbers > 3) {
        decimalsOnSmallNumbers = 3;
    }
    if (value < 0.00000100 && value >= 0.00000010 && decimalsOnSmallNumbers > 2) {
        decimalsOnSmallNumbers = 2;
    }
    if (value < 0.00000010 && value >= 0.00000001 && decimalsOnSmallNumbers > 1) {
        decimalsOnSmallNumbers = 1;
    }
    if (type == "short") {
        if (valueAbs > 10000000000) {
            valueAbs = valueAbs / 1000000000;
            return prefix + CCC.filterNumberFunctionPolyfill(valueSign * valueAbs, decimalsOnBigNumbers) + ' B';
        }
        if (valueAbs > 10000000) {
            valueAbs = valueAbs / 1000000;
            return prefix + CCC.filterNumberFunctionPolyfill(valueSign * valueAbs, decimalsOnBigNumbers) + ' M';
        }
        if (valueAbs > 10000) {
            valueAbs = valueAbs / 1000;
            return prefix + CCC.filterNumberFunctionPolyfill(valueSign * valueAbs, decimalsOnBigNumbers) + ' K';
        }
        if (valueAbs >= 1) {
            return prefix + CCC.filterNumberFunctionPolyfill(valueSign * valueAbs, decimalsOnNormalNumbers);
        }
        return prefix + (valueSign * valueAbs).toPrecision(decimalsOnSmallNumbers);
    }
    else {
        if (valueAbs >= 1) {
            return prefix + CCC.filterNumberFunctionPolyfill(valueSign * valueAbs, decimalsOnNormalNumbers);
        }
        return prefix + CCC.noExponents((valueSign * valueAbs).toPrecision(decimalsOnSmallNumbers));
    }
};
//# sourceMappingURL=cryptocompare.utils.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstRunPage */];
        this.pages = [
            { title: 'Tutorial', component: 'TutorialPage' },
            { title: 'Welcome', component: 'WelcomePage' },
            { title: 'Tabs', component: 'TabsPage' },
            { title: 'Cards', component: 'CardsPage' },
            { title: 'Content', component: 'ContentPage' },
            { title: 'Login', component: 'LoginPage' },
            { title: 'Signup', component: 'SignupPage' },
            { title: 'Master Detail', component: 'TransactionsHistoryPage' },
            { title: 'Menu', component: 'MenuPage' },
            { title: 'Settings', component: 'SettingsPage' },
            { title: 'Search', component: 'SearchPage' },
            { title: 'Políticas de Privacidad', component: 'PoliticasPrivacidadPage' },
            { title: 'Términos y Condiciones', component: 'TerminosCondicionesPage' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            // let status bar overlay webview
            _this.statusBar.overlaysWebView(false);
            // set status bar to white
            _this.statusBar.backgroundColorByHexString('#000000');
            _this.splashScreen.hide();
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Pages</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[407]);
//# sourceMappingURL=main.js.map