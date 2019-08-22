webpackJsonp([9],{

/***/ 1329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(175);
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
 * Generated class for the SummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SummaryPage = /** @class */ (function () {
    function SummaryPage(navCtrl, navParams, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.userdata = {};
        this.client = {};
        this.displayName = "";
    }
    SummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SummaryPage');
        this.userdata = this.user.userinfo();
        console.log(this.userdata);
        this.displayName = this.userdata.user.firstname + " " + this.userdata.user.lastname;
    };
    SummaryPage.prototype.viewAccounts = function () {
        this.navCtrl.push('accounts');
        console.log("opening accounts page");
    };
    SummaryPage.prototype.viewBenefeciaries = function () {
        this.navCtrl.push('beneficiaries');
    };
    SummaryPage.prototype.openTransferPage = function () {
        console.log('Transfer page clicked');
    };
    SummaryPage.prototype.viewCharges = function () {
        console.log('Charges Page clicked');
        this.navCtrl.push('saving-charges');
    };
    SummaryPage.prototype.openLoanApply = function () {
        console.log('Opening loan apply page');
        alert('Sorry, You are not eligible currently');
    };
    SummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-summary',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\summary\summary.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <label text-center>Dashboard </label>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <section margin-bottom text-center>\n\n    <ion-icon name="person"></ion-icon>\n\n    <h1 no-margin style="font-size:1.4em">Welcome {{displayName}}</h1>\n\n  </section>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-card (click)="viewAccounts()" padding text-center>\n\n          <ion-icon name="card"></ion-icon>\n\n          <h2>Accounts</h2>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-card padding text-center (click)="openTransferPage()">\n\n          <ion-icon name="swap"></ion-icon>\n\n          <h2>Transfer</h2>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-card padding text-center (click)="viewCharges()">\n\n          <ion-icon name="paper"></ion-icon>\n\n          <h2>Charges</h2>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-card padding text-center (click)="openLoanApply()">\n\n          <ion-icon name="logo-usd"></ion-icon>\n\n          <h2>Apply for Loan</h2>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-card (click)="viewBenefeciaries()"padding text-center>\n\n          <ion-icon name="people" ></ion-icon>\n\n          <h2>Benefeciaries</h2>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-card padding text-center>\n\n          <ion-icon name="clipboard"></ion-icon>\n\n          <h2>Surveys</h2>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\summary\summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* User */]])
    ], SummaryPage);
    return SummaryPage;
}());

//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary__ = __webpack_require__(1329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SummaryPageModule = /** @class */ (function () {
    function SummaryPageModule() {
    }
    SummaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__summary__["a" /* SummaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__summary__["a" /* SummaryPage */]),
            ],
        })
    ], SummaryPageModule);
    return SummaryPageModule;
}());

//# sourceMappingURL=summary.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map