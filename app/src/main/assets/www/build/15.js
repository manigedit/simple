webpackJsonp([15],{

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavingChargesPage; });
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
 * Generated class for the SavingChargesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SavingChargesPage = /** @class */ (function () {
    function SavingChargesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SavingChargesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SavingChargesPage');
    };
    SavingChargesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-saving-charges',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\saving-charges\saving-charges.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>SavingCharges</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list *ngFor="let x of charges">\n\n    <ion-card padding="5%" padding-left="10%">\n\n      <ion-label>{{ x.name }}</ion-label>\n\n      <ion-card-title>{{ x.cuurency.displaySymbol }}{{ x.amount }}</ion-card-title>\n\n      Amount Outstanding:{{ x.amountOutstanding }}\n\n    </ion-card>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\saving-charges\saving-charges.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], SavingChargesPage);
    return SavingChargesPage;
}());

//# sourceMappingURL=saving-charges.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingChargesPageModule", function() { return SavingChargesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saving_charges__ = __webpack_require__(1079);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SavingChargesPageModule = /** @class */ (function () {
    function SavingChargesPageModule() {
    }
    SavingChargesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__saving_charges__["a" /* SavingChargesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__saving_charges__["a" /* SavingChargesPage */]),
            ],
        })
    ], SavingChargesPageModule);
    return SavingChargesPageModule;
}());

//# sourceMappingURL=saving-charges.module.js.map

/***/ })

});
//# sourceMappingURL=15.js.map