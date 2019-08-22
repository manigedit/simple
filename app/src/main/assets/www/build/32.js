webpackJsonp([32],{

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiariesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_self_service_self_service__ = __webpack_require__(405);
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
 * Generated class for the BeneficiariesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeneficiariesPage = /** @class */ (function () {
    function BeneficiariesPage(navCtrl, navParams, user, loadingCtrl, self) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = user;
        this.loadingCtrl = loadingCtrl;
        this.self = self;
    }
    BeneficiariesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BeneficiariesPage');
        this.fetchBeneficiaries();
    };
    BeneficiariesPage.prototype.addBeneficiary = function () {
        console.log('Adding new beneficiary');
        this.navCtrl.push('new-beneficiary');
    };
    BeneficiariesPage.prototype.fetchBeneficiaries = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        this.self.getTptBeneficiary({ "key": this.user.userinfo().authentication.base64EncodedAuthenticationKey })
            .subscribe(function () {
            _this.beneficiaries = _this.self.listBeneficiaries();
            loader.dismiss();
            console.log('Inside the promise');
        }, function (err) {
            loader.dismiss();
            alert('Error occured');
        });
        console.log("this page benefeciaries", this.beneficiaries);
    };
    BeneficiariesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-beneficiaries',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\beneficiaries\beneficiaries.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Beneficiaries</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list *ngFor="let x of beneficiaries">\n\n    <ion-card padding="5%" padding-left="10%">\n\n      <ion-label>{{ x.name }}</ion-label>\n\n      <ion-card-title>{{ x.accountNumber }}</ion-card-title>\n\n      {{ x.clientName }}\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <button (click)="addBeneficiary()" class="button-float" fab fab-bottom fab-right>\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\beneficiaries\beneficiaries.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_self_service_self_service__["a" /* SelfServiceProvider */]])
    ], BeneficiariesPage);
    return BeneficiariesPage;
}());

//# sourceMappingURL=beneficiaries.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiariesPageModule", function() { return BeneficiariesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beneficiaries__ = __webpack_require__(1061);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BeneficiariesPageModule = /** @class */ (function () {
    function BeneficiariesPageModule() {
    }
    BeneficiariesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__beneficiaries__["a" /* BeneficiariesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__beneficiaries__["a" /* BeneficiariesPage */]),
            ],
        })
    ], BeneficiariesPageModule);
    return BeneficiariesPageModule;
}());

//# sourceMappingURL=beneficiaries.module.js.map

/***/ })

});
//# sourceMappingURL=32.js.map