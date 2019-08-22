webpackJsonp([11],{

/***/ 1084:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SexPage; });
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
 * Generated class for the SexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SexPage = /** @class */ (function () {
    function SexPage(navCtrl, navParams) {
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
            gender: ""
        };
        this.user = navParams.data;
        console.log("EL USUARIO EN SEX  ES ", this.user);
        this.account.clientId = this.user.clientId;
        this.account.state = this.user.state;
        this.account.country = this.user.country;
        this.account.firstname = this.user.firstname;
        this.account.middlename = this.user.middlename;
        this.account.lastname = this.user.lastname;
    }
    SexPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CountryOfBirthPage');
    };
    SexPage.prototype.select = function (item) {
        //console.log("VALOR EVENTO SELECT ",item);
        this.sex = item;
        console.log("GENERO ", this.sex);
    };
    SexPage.prototype.doActivateCustomerDateOfBirth = function () {
        var gender = "";
        if (this.sex === 'male')
            gender = "15";
        if (this.sex === 'female')
            gender = "53";
        if (this.sex === 'lgbtti')
            gender = "54";
        this.account.gender = gender;
        this.navCtrl.push('DateOfBirthPage', this.account);
    };
    SexPage.prototype.onChange = function (value) {
        this.sex = value;
        if (value) {
            //console.log("LOG DE VALORES");
            //console.log("VALOR ON CHANGE ", value);
            this.checkedbtn = false;
        }
    };
    SexPage.prototype.enableButton = function (event) {
        this.checkedbtn = false;
        //console.log("VISIBLE ",this.checkedbtn);
        //console.log("VALOR EVENTO ",event);
        //let val = event.target.value;    
        //console.log("VALOR ",val);    
    };
    SexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sex',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\sex\sex.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{ \'SEX_TITLE\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>   \n\n    <form (submit)="doActivateCustomerDateOfBirth()">\n\n      <ion-list radio-group name="sex" [(ngModel)]="itemChecked">      \n\n        <ion-item>\n\n            <ion-label text-wrap>{{ \'SEX_MESSAGE\' | translate }}</ion-label>        \n\n        </ion-item>\n\n  \n\n        <div text-center padding>\n\n            <ion-grid>\n\n                <ion-row>\n\n                  <ion-col>\n\n                      <ion-label>{{ \'MALE\' | translate }}</ion-label>        \n\n                      <ion-radio value="male" (ionSelect)="select($event)" (click)="enableButton($event)" ></ion-radio>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                      <ion-label>{{ \'FEMALE\' | translate }}</ion-label>        \n\n                      <ion-radio value="female" (ionSelect)="select($event)" (click)="enableButton($event)"></ion-radio>\n\n                  </ion-col>                \n\n                  <ion-col>\n\n                      <ion-label>{{ \'LGBTTI\' | translate }}</ion-label>        \n\n                      <ion-radio value="lgbtti" (ionSelect)="select($event)" (click)="enableButton($event)"></ion-radio>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>        \n\n        </div>                    \n\n        \n\n        <div padding>\n\n          <button ion-button color="primary" block [disabled]="checkedbtn" name="continue">{{ \'NEXT\' | translate }}</button>        \n\n        </div>\n\n        <div text-center padding>\n\n        <u>{{ \'LATER\' | translate }}</u>\n\n        </div>\n\n  \n\n      </ion-list>\n\n    </form>\n\n  \n\n    \n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\sex\sex.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], SexPage);
    return SexPage;
}());

//# sourceMappingURL=sex.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexPageModule", function() { return SexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sex__ = __webpack_require__(1084);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SexPageModule = /** @class */ (function () {
    function SexPageModule() {
    }
    SexPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sex__["a" /* SexPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sex__["a" /* SexPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], SexPageModule);
    return SexPageModule;
}());

//# sourceMappingURL=sex.module.js.map

/***/ })

});
//# sourceMappingURL=11.js.map