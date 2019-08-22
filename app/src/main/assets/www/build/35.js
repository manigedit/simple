webpackJsonp([35],{

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDetailsPage; });
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
 * Generated class for the AccountDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountDetailsPage = /** @class */ (function () {
    function AccountDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.accountDetails = {};
    }
    AccountDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountDetailsPage');
    };
    AccountDetailsPage.prototype.makeDeposit = function () {
        console.log('User clicked deposit button');
    };
    AccountDetailsPage.prototype.makeTransfer = function () {
        console.log('user clicked make transfer page');
    };
    AccountDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account-details',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\account-details\account-details.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <ion-title>\n\n      Saving Account Details\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card padding>\n\n    <div class="style-main">Account balance</div>\n\n    <div class="style-sub">{{ accountDetails.currency.displaySymbol }} {{ accountDetails.accountBalance }}</div>\n\n    <div class="style-main">Account Status</div>\n\n    <div class="style-sub">\n\n      <ion-icon *ngIf="accountDetails.status.value ===\'Active\'" name="checkmark-circle"></ion-icon>\n\n      <ion-icon *ngIf="accountDetails.status.value !=\'Active\'" name="alert"></ion-icon>\n\n      {{ accountDetails.status.value }}\n\n    </div>\n\n    <div class="style-main">Account Number</div>\n\n    <div class="style-sub">{{ accountDetails.accountNo }}</div>\n\n    <div class="style-main">Nominal Interest Rate</div>\n\n    <div class="style-sub">0.00%</div>\n\n    <!--<div class="style-main">Total Deposits</div>\n\n    <div class="style-sub">$ 1,000</div>\n\n    <div class="style-main">Total Withdarawals</div>\n\n    <div class="style-sub">$ 124.00</div>-->\n\n    <div>\n\n      <button (click)="makeDeposit()" ion-button>Deposit</button>\n\n      <button (click)="makeTransfer()" ion-button solid>Make a Transfer</button>\n\n    </div>\n\n  </ion-card>\n\n  <!--<div class="style-header" padding-left>Last Transaction Details</div>\n\n  <ion-card padding>\n\n    <div class="style-main">Last Transaction</div>\n\n    <div class="style-sub">$ 90.00</div>\n\n    <div class="style-main">Made on</div>\n\n    <div class="style-sub">19 Jul 2019</div>\n\n  </ion-card>-->\n\n  <div class="style-header" padding-left>Monitor</div>\n\n  <ion-card>\n\n    <div class="row">\n\n      <div class="col col-50">\n\n        <ion-icon class="style-button" name="swap"></ion-icon>\n\n      </div>\n\n      <div class="col col-50 style-button-text">Transactions</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div class="row">\n\n      <div class="col col-50">\n\n        <ion-icon class="style-button" name="paper"></ion-icon>\n\n      </div>\n\n      <div class="col col-50 style-button-text">Charges</div>\n\n    </div>\n\n  </ion-card>\n\n  <ion-card>\n\n    <div class="row">\n\n      <div class="col col-50">\n\n        <ion-icon class="style-button" name="barcode"></ion-icon>\n\n      </div>\n\n      <div class="col col-50 style-button-text">View QR</div>\n\n    </div>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\account-details\account-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], AccountDetailsPage);
    return AccountDetailsPage;
}());

//# sourceMappingURL=account-details.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailsPageModule", function() { return AccountDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_details__ = __webpack_require__(1056);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountDetailsPageModule = /** @class */ (function () {
    function AccountDetailsPageModule() {
    }
    AccountDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account_details__["a" /* AccountDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account_details__["a" /* AccountDetailsPage */]),
            ],
        })
    ], AccountDetailsPageModule);
    return AccountDetailsPageModule;
}());

//# sourceMappingURL=account-details.module.js.map

/***/ })

});
//# sourceMappingURL=35.js.map