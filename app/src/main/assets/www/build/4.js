webpackJsonp([4],{

/***/ 1331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
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
 * Generated class for the TransactionsHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransactionsHistoryPage = /** @class */ (function () {
    function TransactionsHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            {
                title: 'January 29 21:30',
                content: 'Compra en Starbucks en establecimiento de la Ciudad de México.',
                icon: 'calendar',
                time: { title: 'Hiciste una compra por $78.00 MXP' }
            },
            {
                title: 'Marzo 02 11:35',
                content: 'Deposito en Ventanilla en sucursal PiiWallet No. 34 "Maravillas" de la Ciudad de México.',
                icon: 'calendar',
                time: { title: 'Hiciste un deposito por $600.00 MXP' }
            },
            {
                title: 'Marzo 04 11:35',
                content: 'Deposito via SPEI con autorizacion "H1234"',
                icon: 'calendar',
                time: { title: 'Recibiste un deposito por $2,000.00 MXP' }
            },
            {
                title: 'Marzo 04 13:40',
                content: 'Compra en Toks en establecimiento de la Ciudad de México.',
                icon: 'calendar',
                time: { title: 'Hiciste una compra por $121.00 MXP' }
            }
        ];
    }
    TransactionsHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionsHistoryPage');
    };
    TransactionsHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-transactions-history',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\transactions-history\transactions-history.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{ \'LIST_TRANSACTIONS_TITLE\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <timeline endIcon="call">\n\n      <timeline-item *ngFor="let item of items">\n\n        <timeline-time [time]="item.time"></timeline-time>\n\n        <ion-icon [name]="item.icon"></ion-icon>\n\n        <ion-card>\n\n          <ion-card-header>\n\n            {{item.title}}\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            {{item.content}}\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </timeline-item>\n\n  \n\n    </timeline>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\transactions-history\transactions-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], TransactionsHistoryPage);
    return TransactionsHistoryPage;
}());

//# sourceMappingURL=transactions-history.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsHistoryPageModule", function() { return TransactionsHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transactions_history__ = __webpack_require__(1331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_timeline_timeline__ = __webpack_require__(993);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TransactionsHistoryPageModule = /** @class */ (function () {
    function TransactionsHistoryPageModule() {
    }
    TransactionsHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transactions_history__["a" /* TransactionsHistoryPage */],
                __WEBPACK_IMPORTED_MODULE_4__components_timeline_timeline__["a" /* TimelineComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_timeline_timeline__["b" /* TimelineItemComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_timeline_timeline__["c" /* TimelineTimeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transactions_history__["a" /* TransactionsHistoryPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], TransactionsHistoryPageModule);
    return TransactionsHistoryPageModule;
}());

//# sourceMappingURL=transactions-history.module.js.map

/***/ }),

/***/ 993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimelineItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TimelineTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.endIcon = "ionic";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('endIcon'),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "endIcon", void 0);
    TimelineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\components\timeline\timeline.html"*/'<div class="timeline">\n\n  <ng-content></ng-content>\n\n\n\n  <timeline-item>\n\n    <ion-icon class="" [name]="endIcon"></ion-icon>\n\n  </timeline-item>\n\n\n\n</div>'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\components\timeline\timeline.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());

var TimelineItemComponent = /** @class */ (function () {
    function TimelineItemComponent() {
    }
    TimelineItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline-item',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineItemComponent);
    return TimelineItemComponent;
}());

var TimelineTimeComponent = /** @class */ (function () {
    function TimelineTimeComponent() {
        this.time = {};
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('time'),
        __metadata("design:type", Object)
    ], TimelineTimeComponent.prototype, "time", void 0);
    TimelineTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'timeline-time',
            template: '<span>{{time.subtitle}}</span> <span>{{time.title}}</span>'
        }),
        __metadata("design:paramtypes", [])
    ], TimelineTimeComponent);
    return TimelineTimeComponent;
}());

//# sourceMappingURL=timeline.js.map

/***/ })

});
//# sourceMappingURL=4.js.map