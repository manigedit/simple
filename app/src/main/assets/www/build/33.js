webpackJsonp([33],{

/***/ 1060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplySavingsAcPage; });
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



var ApplySavingsAcPage = /** @class */ (function () {
    function ApplySavingsAcPage(navCtrl, navParams, user) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.today = Date.now();
        this.clientDetails = user.userinfo();
    }
    ApplySavingsAcPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplySavingsAcPage');
        this.clientName = this.clientDetails.user.firstname + ' ' + this.clientDetails.user.lastname;
    };
    ApplySavingsAcPage.prototype.submitApplication = function () {
        console.log("Submitting account application");
    };
    ApplySavingsAcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apply-savings-ac',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\apply-savings-ac\apply-savings-ac.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>ApplySavingsAc</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card padding>\n\n    <div class="row"><div class="col col-50">Client Name</div><div class="col col-50">{{ clientName }}</div></div>\n\n    <div class="row"><div class="col col-50">Submission Date</div><div class="col col-50">{{ today | date: \'dd/MM/yyyy\' }}</div></div>\n\n  </ion-card>\n\n  <div padding>Select product Id</div>\n\n  <ion-item>\n\n    <ion-label>Account Type</ion-label>\n\n    <ion-select>\n\n      <ion-option value="vol-savings">Voluntary Savings</ion-option>\n\n      <ion-option value="fiinwallet">FIINWALLET</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <button (click)="submitApplication()" ion-button round solid> Submit </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\apply-savings-ac\apply-savings-ac.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* User */]])
    ], ApplySavingsAcPage);
    return ApplySavingsAcPage;
}());

//# sourceMappingURL=apply-savings-ac.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplySavingsAcPageModule", function() { return ApplySavingsAcPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_savings_ac__ = __webpack_require__(1060);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplySavingsAcPageModule = /** @class */ (function () {
    function ApplySavingsAcPageModule() {
    }
    ApplySavingsAcPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apply_savings_ac__["a" /* ApplySavingsAcPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apply_savings_ac__["a" /* ApplySavingsAcPage */]),
            ],
        })
    ], ApplySavingsAcPageModule);
    return ApplySavingsAcPageModule;
}());

//# sourceMappingURL=apply-savings-ac.module.js.map

/***/ })

});
//# sourceMappingURL=33.js.map