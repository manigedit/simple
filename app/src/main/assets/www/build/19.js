webpackJsonp([19],{

/***/ 1076:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBeneficiaryPage; });
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
 * Generated class for the NewBeneficiaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewBeneficiaryPage = /** @class */ (function () {
    function NewBeneficiaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewBeneficiaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewBeneficiaryPage');
    };
    NewBeneficiaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-beneficiary',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\new-beneficiary\new-beneficiary.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Add Benefeciaries</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card padding>\n\n    <div padding-bottom><h1>Select Mode</h1></div>\n\n    <h2>Add Third Party Beneficiaries for your account by entering manually or scan account QR code.</h2>\n\n    <div class="row">\n\n      <div class="col col-50">\n\n        <ion-card>\n\n          <ion-icon class="style-button" large name="paper"></ion-icon>\n\n          <label class="style-button-text">Add</label>\n\n        </ion-card>\n\n      </div>\n\n      <div class="col col-50">\n\n        <ion-card>\n\n          <ion-icon class="style-button" name="qr-scanner"></ion-icon>\n\n          <label class="style-button-text">Scan QR</label>\n\n        </ion-card>\n\n      </div>\n\n    </div>\n\n\n\n  </ion-card>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\new-beneficiary\new-beneficiary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], NewBeneficiaryPage);
    return NewBeneficiaryPage;
}());

//# sourceMappingURL=new-beneficiary.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBeneficiaryPageModule", function() { return NewBeneficiaryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_beneficiary__ = __webpack_require__(1076);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewBeneficiaryPageModule = /** @class */ (function () {
    function NewBeneficiaryPageModule() {
    }
    NewBeneficiaryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_beneficiary__["a" /* NewBeneficiaryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_beneficiary__["a" /* NewBeneficiaryPage */]),
            ],
        })
    ], NewBeneficiaryPageModule);
    return NewBeneficiaryPageModule;
}());

//# sourceMappingURL=new-beneficiary.module.js.map

/***/ })

});
//# sourceMappingURL=19.js.map