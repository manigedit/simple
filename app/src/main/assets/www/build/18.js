webpackJsonp([18],{

/***/ 1077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OccupationPage; });
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
 * Generated class for the OccupationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OccupationPage = /** @class */ (function () {
    function OccupationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkedbtn = true;
        this.account = {
            countryofbirthIsMexico: false,
            state: "",
            country: "",
            clientId: "",
            firstname: "",
            middlename: "",
            lastname: "",
            gender: "",
            dateofbirth: "",
            occupation: ""
        };
        this.user = navParams.data;
        console.log("EL USUARIO EN DATE OF BIRTH  ES ", this.user);
        this.account.clientId = this.user.clientId;
        this.account.state = this.user.state;
        this.account.country = this.user.country;
        this.account.firstname = this.user.firstname;
        this.account.middlename = this.user.middlename;
        this.account.lastname = this.user.lastname;
        this.account.dateofbirth = this.user.dateofbirth;
        this.account.gender = this.user.gender;
    }
    OccupationPage.prototype.select = function (item) {
        //console.log("VALOR EVENTO SELECT ",item);
        this.occupation = item;
        console.log("Occupation ", this.occupation);
        this.checkedbtn = false;
    };
    OccupationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OccupationPage');
    };
    OccupationPage.prototype.doActivateCustomerMobilePhone = function () {
        var occupation = "";
        if (this.occupation === 'wageearner')
            occupation = "55";
        if (this.occupation === 'publicservant')
            occupation = "56";
        if (this.occupation === 'enterpreneur')
            occupation = "57";
        if (this.occupation === 'independent')
            occupation = "58";
        if (this.occupation === 'association')
            occupation = "59";
        if (this.occupation === 'student')
            occupation = "60";
        if (this.occupation === 'other')
            occupation = "61";
        console.log("Occupation ", occupation);
        this.account.occupation = occupation;
        this.navCtrl.push('CellPhoneNumberPage', this.account);
    };
    OccupationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-occupation',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\occupation\occupation.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{ \'OCUPPATION_TITLE\' | translate }}</ion-title>\n\n    </ion-navbar>  \n\n  </ion-header>\n\n  <ion-content>      \n\n  \n\n   \n\n    <form (submit)="doActivateCustomerMobilePhone()" >\n\n        <ion-list radio-group name="occupation">\n\n\n\n            <ion-list-header>\n\n                {{ \'OCUPPATION_LABEL\' | translate }}\n\n            </ion-list-header>\n\n            <ion-item>\n\n                <ion-label><small>{{ \'OCUPPATION_MESSAGE\' | translate }}</small></ion-label>        \n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>{{ \'OCUPPATION_1\' | translate }}</ion-label>\n\n              <ion-radio value="wageearner" (ionSelect)="select($event)"></ion-radio>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n              <ion-label>{{ \'OCUPPATION_2\' | translate }}</ion-label>\n\n              <ion-radio value="publicservant" (ionSelect)="select($event)"></ion-radio>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n              <ion-label>{{ \'OCUPPATION_3\' | translate }}</ion-label>\n\n              <ion-radio value="enterpreneur" (ionSelect)="select($event)"></ion-radio>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n              <ion-label>{{ \'OCUPPATION_4\' | translate }}</ion-label>\n\n              <ion-radio value="independent" (ionSelect)="select($event)"></ion-radio>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n              <ion-label>{{ \'OCUPPATION_5\' | translate }}</ion-label>\n\n              <ion-radio value="association" (ionSelect)="select($event)"></ion-radio>\n\n            </ion-item>          \n\n          \n\n            <ion-item>\n\n              <ion-label>{{ \'OCUPPATION_6\' | translate }}</ion-label>\n\n              <ion-radio value="student" (ionSelect)="select($event)"></ion-radio>\n\n            </ion-item>          \n\n\n\n            <ion-item>\n\n              <ion-label>{{ \'OCUPPATION_7\' | translate }}</ion-label>\n\n              <ion-radio value="other" (ionSelect)="select($event)"></ion-radio>\n\n            </ion-item>          \n\n\n\n        <div padding>\n\n          <button ion-button color="primary" block [disabled]="checkedbtn" name="continue">{{ \'NEXT\' | translate }}</button>        \n\n        </div>\n\n        <div text-center padding>\n\n        <u>{{ \'LATER\' | translate }}</u>\n\n        </div>  \n\n      </ion-list>\n\n    </form>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\occupation\occupation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], OccupationPage);
    return OccupationPage;
}());

//# sourceMappingURL=occupation.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OccupationPageModule", function() { return OccupationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__occupation__ = __webpack_require__(1077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OccupationPageModule = /** @class */ (function () {
    function OccupationPageModule() {
    }
    OccupationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__occupation__["a" /* OccupationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__occupation__["a" /* OccupationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], OccupationPageModule);
    return OccupationPageModule;
}());

//# sourceMappingURL=occupation.module.js.map

/***/ })

});
//# sourceMappingURL=18.js.map