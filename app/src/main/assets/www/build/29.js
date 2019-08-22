webpackJsonp([29],{

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CellPhoneNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_country_picker__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CellPhoneNumberPage = /** @class */ (function () {
    function CellPhoneNumberPage(navCtrl, countryPicker, user, navParams, formBuilder, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.countryPicker = countryPicker;
        this.user = user;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.countries = [];
        this.checkedbtn = true;
        this.accountData = {
            countryofbirthIsMexico: false,
            state: "",
            country: "",
            clientId: "",
            firstname: "",
            middlename: "",
            lastname: "",
            gender: "",
            dateofbirth: "",
            occupation: "",
            cellphone: ""
        };
        this.account = {
            country: "MX"
        };
        this.userData = navParams.data;
        console.log("EL USUARIO EN DATE OF BIRTH  ES ", this.userData);
        this.accountData.clientId = this.userData.clientId;
        this.accountData.state = this.userData.state;
        this.accountData.country = this.userData.country;
        this.accountData.firstname = this.userData.firstname;
        this.accountData.middlename = this.userData.middlename;
        this.accountData.lastname = this.userData.lastname;
        this.accountData.dateofbirth = this.userData.dateofbirth;
        this.accountData.gender = this.userData.gender;
        this.accountData.occupation = this.userData.occupation;
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
        /*  this.slideOneForm = formBuilder.group({
          phonenumber: ['', Validators.compose([Validators.maxLength(60), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
        });
        */
    }
    CellPhoneNumberPage.prototype.ngOnInit = function () {
        var _this = this;
        this.countryPicker.getCountries().subscribe(function (countries) {
            return _this.countries = countries;
        }); // store it in countries
    };
    CellPhoneNumberPage.prototype.onTextInput = function (ev) {
        //let val = ev.target.value;    
        //console.log("VALOR ",val);
        this.checkedbtn = false;
        /*if(!this.slideOneForm.valid){
          console.log("NO VALIDA");
          this.checkedbtn = true;
        }
        else {
          console.log("VALIDA");
          this.checkedbtn = false;
            console.log("success!")
            //this.navCtrl.push('SexPage');
        } */
    };
    CellPhoneNumberPage.prototype.doActivateAccountLevel1 = function () {
        var _this = this;
        // Attempt to login in through our User service
        //this.phonenumber = this.account.country + this.phonenumber;
        this.accountData.cellphone = this.phonenumber;
        this.user.activateLevel1(this.accountData).subscribe(function (resp) {
            console.log("EXITO");
            console.log("RESPUESTA ", resp);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5____["b" /* MainPage */]);
        }, function (err) {
            console.log("ERROR");
            //this.navCtrl.push(MainPage);
            // Unable to sign up
            var toast = _this.toastCtrl.create({
                message: _this.signupErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    CellPhoneNumberPage.prototype.prepareCountryImageWithLabelSelector = function () {
        var _this = this;
        setTimeout(function () {
            var buttonElements = document.querySelectorAll('div.alert-radio-group button');
            if (!buttonElements.length) {
                _this.prepareCountryImageWithLabelSelector();
            }
            else {
                for (var index = 0; index < buttonElements.length; index++) {
                    var buttonElement = buttonElements[index];
                    var optionLabelElement = buttonElement.querySelector('.alert-radio-label');
                    //let image = optionLabelElement.innerHTML.trim().substr(0,2);
                    //console.log("IMAGEN ",image);
                    var totalWords = optionLabelElement.innerHTML.trim();
                    var firstWord = totalWords.replace(/ .*/, '');
                    //console.log("CODIGO ISO ",firstWord);
                    buttonElement.classList.add('imagewithlabelselect', 'image_' + firstWord);
                }
            }
        }, 100);
    };
    CellPhoneNumberPage.prototype.setCountryImageWithLabel = function (image) {
        console.log('Selected image with label is', this.account.country);
    };
    CellPhoneNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cell-phone-number',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\cell-phone-number\cell-phone-number.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{ \'CELL_PHONE_NUMBER_TITLE\' | translate }}</ion-title>\n\n    </ion-navbar>  \n\n</ion-header>\n\n  \n\n  \n\n<ion-content>\n\n    <form (submit)="doActivateAccountLevel1()" >\n\n      <ion-list>  \n\n\n\n        <ion-item>\n\n            {{ \'CELL_PHONE_NUMBER_MESSAGE\' | translate }}\n\n        </ion-item>\n\n          \n\n\n\n        <div text-center padding>\n\n            <ion-grid>\n\n                <ion-row>\n\n                  <ion-col>\n\n                      <ion-row class="imagewithlabelselect image_{{ account.country }}">\n\n                          <ion-item>\n\n                              <ion-label floating>{{ \'COUNTRY\' | translate }}</ion-label>\n\n                              <ion-select [(ngModel)]="account.country" (click)="prepareCountryImageWithLabelSelector()" (ionChange)="setCountryImageWithLabel(this.imagewithlabel)" name="country">\n\n                                <ion-option *ngFor="let country of countries" [value]="country.cca2" >{{ country.cca2 }} - {{ country.name.common }}</ion-option>\n\n                              </ion-select>\n\n                            </ion-item>\n\n                      </ion-row>\n\n                  </ion-col>                  \n\n                </ion-row>\n\n              </ion-grid>        \n\n        </div> \n\n\n\n        <ion-item>\n\n          <ion-label floating>{{ \'CELL_PHONE_NUMBER_LABEL\' | translate }}</ion-label>\n\n          <ion-input type="tel"[(ngModel)]="phonenumber" name="phonenumber" name="phonenumber" maxlength=“10” (input)="onTextInput($event)"></ion-input>\n\n        </ion-item>              \n\n        \n\n        <div padding>\n\n          <button ion-button color="primary" block [disabled]="checkedbtn" name="continue">{{ \'ACTIVATE_BUTTON\' | translate }}</button>\n\n        </div>\n\n  \n\n      </ion-list>\n\n    </form>\n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\cell-phone-number\cell-phone-number.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_country_picker__["b" /* CountryPickerService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], CellPhoneNumberPage);
    return CellPhoneNumberPage;
}());

//# sourceMappingURL=cell-phone-number.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CellPhoneNumberPageModule", function() { return CellPhoneNumberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cell_phone_number__ = __webpack_require__(1065);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CellPhoneNumberPageModule = /** @class */ (function () {
    function CellPhoneNumberPageModule() {
    }
    CellPhoneNumberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cell_phone_number__["a" /* CellPhoneNumberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cell_phone_number__["a" /* CellPhoneNumberPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], CellPhoneNumberPageModule);
    return CellPhoneNumberPageModule;
}());

//# sourceMappingURL=cell-phone-number.module.js.map

/***/ })

});
//# sourceMappingURL=29.js.map