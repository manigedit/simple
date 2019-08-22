webpackJsonp([34],{

/***/ 1062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(174);
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
 * Generated class for the ActivateCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivateCustomerPage = /** @class */ (function () {
    function ActivateCustomerPage(navCtrl, toastCtrl, user, navParams, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.navParams = navParams;
        this.translateService = translateService;
        this.account = {
            requestId: "",
            authenticationToken: ""
        };
        this.checkedbtn = true;
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
    }
    ActivateCustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivateCustomerPage');
    };
    ActivateCustomerPage.prototype.onTextInputRequestId = function (ev) {
        var val = ev.target.value;
        //console.log("VALOR ",val);
        this.account.requestId = val;
        if (this.account.authenticationToken.length > 1) {
            this.checkedbtn = false;
        }
        else {
            this.checkedbtn = true;
        }
    };
    ActivateCustomerPage.prototype.onTextInputAuthenticationToken = function (ev) {
        var val = ev.target.value;
        //console.log("VALOR ",val);
        this.account.authenticationToken = val;
        if (this.account.requestId.length > 1) {
            this.checkedbtn = false;
        }
        else {
            this.checkedbtn = true;
        }
    };
    ActivateCustomerPage.prototype.doActivateCustomer = function () {
        var _this = this;
        // Attempt to login in through our User service
        //console.log("SE ENVIAN ",this.account);
        this.user.activate(this.account).subscribe(function (resp) {
            _this.navCtrl.push('LoginPage');
        }, function (err) {
            //this.navCtrl.push('LoginPage');
            // Unable to activate
            var toast = _this.toastCtrl.create({
                message: _this.signupErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    ActivateCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-activate-customer',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\activate-customer\activate-customer.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ \'ACTIVATE_CUSTOMER_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>  \n\n</ion-header>\n\n\n\n<ion-content>\n\n  <br>\n\n  <br>\n\n  <form (submit)="doActivateCustomer()" >\n\n    <ion-list>  \n\n      \n\n      <ion-item>\n\n          <ion-label >{{ \'ACTIVATE_CUSTOMER_LABEL\' | translate }}</ion-label>\n\n      </ion-item>\n\n\n\n      <ion-row>            \n\n          <ion-col col-6>\n\n            <ion-item>                              \n\n              <ion-label floating>{{ \'ACTIVATE_CUSTOMER_LABEL_CODE1\' | translate }}</ion-label>\n\n              <ion-input type="tel"[(ngModel)]="requestid" name="requestid" name="requestid" minlength="22" maxlength="10" (input)="onTextInputRequestId($event)"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <ion-item class="padding-left-2px">              \n\n              <ion-label floating>{{ \'ACTIVATE_CUSTOMER_LABEL_CODE2\' | translate }}</ion-label>\n\n              <ion-input type="tel"[(ngModel)]="authenticationtoken" name="authenticationtoken" name="authenticationtoken" minlength="2" maxlength="10" (input)="onTextInputAuthenticationToken($event)"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-item>\n\n        <small>{{ \'ACTIVATE_CUSTOMER_MESSAGE\' | translate }}</small>\n\n      </ion-item>\n\n\n\n      <div padding>\n\n        <button ion-button color="primary" block [disabled]="checkedbtn" name="continue">{{ \'ACTIVATE_BUTTON\' | translate }}</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\activate-customer\activate-customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], ActivateCustomerPage);
    return ActivateCustomerPage;
}());

//# sourceMappingURL=activate-customer.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateCustomerPageModule", function() { return ActivateCustomerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activate_customer__ = __webpack_require__(1062);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ActivateCustomerPageModule = /** @class */ (function () {
    function ActivateCustomerPageModule() {
    }
    ActivateCustomerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activate_customer__["a" /* ActivateCustomerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activate_customer__["a" /* ActivateCustomerPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], ActivateCustomerPageModule);
    return ActivateCustomerPageModule;
}());

//# sourceMappingURL=activate-customer.module.js.map

/***/ })

});
//# sourceMappingURL=34.js.map