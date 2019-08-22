webpackJsonp([10],{

/***/ 1085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_country_picker__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {ActivateCustomerPage} from '../activate-customer/activate-customer';
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, countryPicker, user, alertCtrl, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.countryPicker = countryPicker;
        this.user = user;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.countries = [];
        this.account = {
            email: "fintech" + new Date().getTime().toString().trim() + "@gmail.com",
            password: "Fintech01",
            country: "MX",
            commercialagreement: false,
            privacypolity: false,
            legalage: false
        };
        this.checkedbtn = true;
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
        this.translateService.get('SIGNUP_ALERT_TITLE').subscribe(function (value) {
            _this.nameAlertTitle = value;
        });
        this.translateService.get('SIGNUP_ALERT_TEXT_1').subscribe(function (value) {
            _this.nameAlertText1 = value;
        });
        this.translateService.get('SIGNUP_ALERT_TEXT_NO').subscribe(function (value) {
            _this.nameAlertTextDeny = value;
        });
        this.translateService.get('SIGNUP_ALERT_TEXT_YES').subscribe(function (value) {
            _this.nameAlertTextConfirm = value;
        });
    }
    SignupPage.prototype.ngOnInit = function () {
        var _this = this;
        this.countryPicker.getCountries().subscribe(function (countries) {
            return _this.countries = countries;
        }); // store it in countries
    };
    SignupPage.prototype.goToTermsAndConditions = function () {
        this.navCtrl.push('PoliticasPrivacidadPage');
    };
    SignupPage.prototype.goToCommercialAgreement = function () {
        this.navCtrl.push('TerminosCondicionesPage');
    };
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.nameAlertTitle,
            message: this.nameAlertText1,
            buttons: [
                {
                    text: this.nameAlertTextDeny,
                    role: 'cancel',
                    handler: function () {
                        console.log('Edit clicked');
                    }
                },
                {
                    text: this.nameAlertTextConfirm,
                    handler: function () {
                        console.log('CONFIRMAR clicked');
                        console.log('trying to open signup page');
                        // Attempt to create the user in through our User service
                        _this.user.create(_this.account).subscribe(function (resp) {
                            _this.navCtrl.push('customer-kyc');
                            var toast = _this.toastCtrl.create({
                                message: "Please complete the KYC in order to proceed",
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                        }, function (err) {
                            //this.navCtrl.push('ActivateCustomerPage');
                            // Unable to sign up
                            var toast = _this.toastCtrl.create({
                                message: _this.signupErrorString,
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage.prototype.updateSingUpButton = function (event) {
        console.log('updateSingUpButton new state:', event);
        if (event.checked) {
            if (this.account.commercialagreement == true && this.account.legalage == true && this.account.privacypolity == true) {
                this.checkedbtn = false;
                console.log("checkedbtn value", this.checkedbtn);
            }
        }
        else {
            this.checkedbtn = true;
        }
    };
    SignupPage.prototype.prepareCountryImageWithLabelSelector = function () {
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
    SignupPage.prototype.setCountryImageWithLabel = function (image) {
        console.log('Selected image with label is', this.account.country);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form (submit)="doSignup()">\n\n    <ion-list>\n\n<!--\n\n      <ion-row class="imagewithlabelselect image_{{imagewithlabel}}">\n\n          <ion-item>\n\n            <ion-label floating>{{ \'COUNTRY\' | translate }}</ion-label>\n\n            <ion-select (click)="prepareImageWithLabelSelector()" (ionChange)="setImageWithLabel(this.imagewithlabel)" [(ngModel)]="imagewithlabel" name="country">\n\n              <ion-option *ngFor="let optionimage of images" [value]="optionimage">{{optionimage}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n      </ion-row>\n\n-->\n\n      <ion-row class="imagewithlabelselect image_{{ account.country }}">\n\n          <ion-item>\n\n              <ion-label floating>{{ \'COUNTRY\' | translate }}</ion-label>\n\n              <ion-select [(ngModel)]="account.country" (click)="prepareCountryImageWithLabelSelector()" (ionChange)="setCountryImageWithLabel(this.imagewithlabel)" name="country">\n\n                <ion-option *ngFor="let country of countries" [value]="country.cca2" >{{ country.cca2 }} - {{ country.name.common }}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n      </ion-row>\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{ \'EMAIL\' | translate }}</ion-label>\n\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{ \'PASSWORD\' | translate }}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-item text-wrap>\n\n        <ion-row>\n\n           <ion-col col-1 no-padding no-margin>\n\n             <ion-item no-padding no-margin no-lines>\n\n              <ion-checkbox [(ngModel)]="account.commercialagreement" name="commercialagreement" (ionChange)="updateSingUpButton($event)"></ion-checkbox>\n\n             </ion-item>\n\n           </ion-col>\n\n           <ion-col col-10 no-padding no-margin align-self-start>\n\n             <ion-item no-padding no-margin no-lines (click)="goToCommercialAgreement()">\n\n              <u>{{ \'SIGNUP_CHECKBOX_COMMERCIAL_AGREMENT\' | translate }}</u>\n\n             </ion-item>\n\n           </ion-col>\n\n         </ion-row>\n\n       </ion-item>\n\n\n\n      <ion-item text-wrap>\n\n        <ion-row>\n\n           <ion-col col-1 no-padding no-margin>\n\n             <ion-item no-padding no-margin no-lines>\n\n              <ion-checkbox [(ngModel)]="account.privacypolity" name="privacypolity" (ionChange)="updateSingUpButton($event)"></ion-checkbox>\n\n             </ion-item>\n\n           </ion-col>\n\n           <ion-col col-10 no-padding no-margin align-self-start>\n\n             <ion-item no-padding no-margin no-lines (click)="goToTermsAndConditions()">\n\n              <u>{{ \'SIGNUP_CHECKBOX_PRIVACY_POLICY\' | translate }}</u>\n\n             </ion-item>\n\n           </ion-col>\n\n         </ion-row>\n\n       </ion-item>\n\n     \n\n      <ion-item text-wrap>\n\n        <ion-row>\n\n           <ion-col col-1 no-padding no-margin>\n\n             <ion-item no-padding no-margin no-lines>\n\n              <ion-checkbox [(ngModel)]="account.legalage" name="legalage" (ionChange)="updateSingUpButton($event)"></ion-checkbox>\n\n             </ion-item>\n\n           </ion-col>\n\n           <ion-col col-10 no-padding no-margin align-self-start>\n\n             <ion-item no-padding no-margin no-lines >\n\n              {{ \'SIGNUP_CHECKBOX_LEGAL_AGE\' | translate }}\n\n             </ion-item>\n\n           </ion-col>\n\n         </ion-row>\n\n       </ion-item>\n\n      \n\n      <div padding>\n\n        <button ion-button color="primary" block [disabled]="checkedbtn" name="continue">{{ \'SIGNUP_BUTTON\' | translate }}</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n\n\n  \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_country_picker__["b" /* CountryPickerService */],
            __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(1085);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ })

});
//# sourceMappingURL=10.js.map