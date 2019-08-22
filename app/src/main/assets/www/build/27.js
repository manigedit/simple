webpackJsonp([27],{

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryOfBirthPage; });
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
 * Generated class for the CountryOfBirthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CountryOfBirthPage = /** @class */ (function () {
    function CountryOfBirthPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.checkedbtn = true;
        this.visability = false;
        this.state = "";
        this.country = "";
        this.account = {
            countryofbirthIsMexico: false,
            state: "",
            country: "",
            clientId: ""
        };
        this.user = navParams.get('client');
        console.log("EL USUARIO EN COUNTRY OF BIRTH  ES ", this.user);
    }
    CountryOfBirthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CountryOfBirthPage');
    };
    CountryOfBirthPage.prototype.doActivateCustomerName = function () {
        this.account.clientId = this.user.id;
        var paisCode = "";
        if (this.visability === true) {
            paisCode = "Mexico";
        }
        else {
            paisCode = "Otro";
        }
        this.account.country = paisCode;
        this.account.state = this.state;
        console.log("SE ENVIA A NAME ", this.account);
        this.navCtrl.push('NamePage', this.account);
    };
    CountryOfBirthPage.prototype.onChange = function (value) {
        this.state = value;
        if (value) {
            console.log("LOG DE VALORES");
            console.log("VALOR ", value);
            this.checkedbtn = false;
        }
    };
    CountryOfBirthPage.prototype.enableState = function (event) {
        this.visability = true;
        this.checkedbtn = true;
        console.log("VISIBLE ", this.visability);
        console.log("BOTON VISIBLE ", this.checkedbtn);
    };
    CountryOfBirthPage.prototype.disableState = function () {
        this.visability = false;
        this.state = "";
        console.log("VISIBLE ", this.visability);
        this.checkedbtn = false;
    };
    CountryOfBirthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-country-of-birth',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\country-of-birth\country-of-birth.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ \'ACTIVATE_COUNTRY_OF_BIRTH_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>   \n\n  <form (submit)="doActivateCustomerName()">\n\n    <ion-list radio-group  name="countryofbirthIsMexico">      \n\n      <ion-item>\n\n          <ion-label>{{ \'ACTIVATE_COUNTRY_OF_BIRTH_MESSAGE\' | translate }}</ion-label>        \n\n      </ion-item>\n\n      \n\n      <ion-item >\n\n          <div text-center padding>\n\n            <img src="./assets/imgs/icon-globe-400px.png" width="50%" height="50%" alt="mexico">            \n\n          </div>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n          <ion-label>{{ \'ACTIVATE_COUNTRY_OF_BIRTH_LABEL\' | translate }}</ion-label>        \n\n      </ion-item>\n\n\n\n      <div text-center padding>\n\n          <ion-grid>\n\n              <ion-row>\n\n                <ion-col>\n\n                    <ion-label>{{ \'YES\' | translate }}</ion-label>        \n\n                    <ion-radio value="true" (click)="enableState($event)"></ion-radio>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ion-label>{{ \'NO\' | translate }}</ion-label>        \n\n                    <ion-radio value="false" (click)="disableState()"></ion-radio>\n\n                </ion-col>                \n\n              </ion-row>\n\n            </ion-grid>        \n\n      </div>            \n\n      \n\n      <ion-item *ngIf="visability">\n\n          <ion-label>{{ \'ACTIVATE_COUNTRY_OF_BIRTH_LABEL_STATE\' | translate }}</ion-label>\n\n          <ion-select [(ngModel)]="state" name="state" placeholder="Seleccionar" (ngModelChange)="onChange($event)" >\n\n              <ion-option value="1">Aguascalientes</ion-option>              \n\n              <ion-option value="2">Baja California</ion-option>              \n\n              <ion-option value="3">Baja California Sur</ion-option>              \n\n              <ion-option value="4">Campeche</ion-option>              \n\n              <ion-option value="5">Coahuila de Zaragoza</ion-option>              \n\n              <ion-option value="6">Colima</ion-option>              \n\n              <ion-option value="7">Chiapas</ion-option>              \n\n              <ion-option value="8">Chihuahua</ion-option>              \n\n              <ion-option value="9">Distrito Federal</ion-option>              \n\n              <ion-option value="10">Durango</ion-option>              \n\n              <ion-option value="11">Guanajuato</ion-option>              \n\n              <ion-option value="12">Guerrero</ion-option>              \n\n              <ion-option value="13">Hidalgo</ion-option>              \n\n              <ion-option value="14">Jalisco</ion-option>              \n\n              <ion-option value="15">México</ion-option>              \n\n              <ion-option value="16">Michoacán de Ocampo</ion-option>              \n\n              <ion-option value="17">Morelos</ion-option>              \n\n              <ion-option value="18">Nayarit</ion-option>              \n\n              <ion-option value="19">Nuevo León</ion-option>              \n\n              <ion-option value="20">Oaxaca</ion-option>              \n\n              <ion-option value="21">Puebla</ion-option>              \n\n              <ion-option value="22">Querétaro</ion-option>              \n\n              <ion-option value="23">Quintana Roo</ion-option>              \n\n              <ion-option value="24">San Luis Potosí</ion-option>              \n\n              <ion-option value="25">Sinaloa</ion-option>              \n\n              <ion-option value="26">Sonora</ion-option>              \n\n              <ion-option value="27">Tabasco</ion-option>              \n\n              <ion-option value="28">Tamaulipas</ion-option>              \n\n              <ion-option value="29">Tlaxcala</ion-option>              \n\n              <ion-option value="30">Veracruz de Ignacio de la Llave</ion-option>              \n\n              <ion-option value="31">Yucatán</ion-option>              \n\n              <ion-option value="32">Zacatecas</ion-option>                     \n\n          </ion-select>\n\n      </ion-item>\n\n      \n\n      <div padding>\n\n        <button ion-button color="primary" block [disabled]="checkedbtn" name="continue">{{ \'NEXT\' | translate }}</button>        \n\n      </div>\n\n      <div text-center padding>\n\n      <u>{{ \'LATER\' | translate }}</u>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n\n\n  \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\country-of-birth\country-of-birth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], CountryOfBirthPage);
    return CountryOfBirthPage;
}());

//# sourceMappingURL=country-of-birth.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryOfBirthPageModule", function() { return CountryOfBirthPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__country_of_birth__ = __webpack_require__(1067);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CountryOfBirthPageModule = /** @class */ (function () {
    function CountryOfBirthPageModule() {
    }
    CountryOfBirthPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__country_of_birth__["a" /* CountryOfBirthPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__country_of_birth__["a" /* CountryOfBirthPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CountryOfBirthPageModule);
    return CountryOfBirthPageModule;
}());

//# sourceMappingURL=country-of-birth.module.js.map

/***/ })

});
//# sourceMappingURL=27.js.map