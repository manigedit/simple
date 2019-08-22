webpackJsonp([20],{

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(67);
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
 * Generated class for the NamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NamePage = /** @class */ (function () {
    function NamePage(navCtrl, navParams, formBuilder, alertCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.checkedbtn = true;
        this.submitAttempt = false;
        this.name = "";
        this.lastname = "";
        this.secondlastname = "";
        this.account = {
            countryofbirthIsMexico: false,
            state: "",
            country: "",
            clientId: "",
            firstname: "",
            middlename: "",
            lastname: ""
        };
        this.user = navParams.data;
        console.log("EL USUARIO EN NAME  ES ", this.user);
        this.account.clientId = this.user.clientId;
        this.account.state = this.user.state;
        this.account.country = this.user.country;
        this.slideOneForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(60), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            secondlastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.translateService.get('NAME_ALERT_TITLE').subscribe(function (value) {
            _this.nameAlertTitle = value;
        });
        this.translateService.get('NAME_ALERT_TEXT_1').subscribe(function (value) {
            _this.nameAlertText1 = value;
        });
        this.translateService.get('NAME_ALERT_TEXT_2').subscribe(function (value) {
            _this.nameAlertText2 = value;
        });
        this.translateService.get('NAME_ALERT_TEXT_NO').subscribe(function (value) {
            _this.nameAlertTextDeny = value;
        });
        this.translateService.get('NAME_ALERT_TEXT_YES').subscribe(function (value) {
            _this.nameAlertTextConfirm = value;
        });
    }
    NamePage.prototype.onTextInput = function (ev) {
        //let val = ev.target.value;    
        //console.log("VALOR ",val);
        if (!this.slideOneForm.valid) {
            console.log("NO VALIDA");
            this.checkedbtn = true;
        }
        else {
            console.log("VALIDA");
            this.checkedbtn = false;
            console.log("success!");
            //this.navCtrl.push('SexPage');
        }
    };
    NamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NamePage');
    };
    NamePage.prototype.doActivateCustomerSex = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.nameAlertTitle,
            message: this.nameAlertText1 + this.name + ' ' + this.lastname + ' ' + this.secondlastname + this.nameAlertText2,
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
                        _this.account.firstname = _this.name;
                        _this.account.middlename = _this.lastname;
                        _this.account.lastname = _this.secondlastname;
                        _this.navCtrl.push('SexPage', _this.account);
                    }
                }
            ]
        });
        alert.present();
    };
    NamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-name',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\name\name.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{ \'NAME_TITLE\' | translate }}</ion-title>\n\n    </ion-navbar>  \n\n  </ion-header>\n\n  <ion-content>      \n\n  \n\n   <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n    <form (submit)="doActivateCustomerSex()" [formGroup]="slideOneForm">\n\n      <ion-list no-lines>      \n\n        <ion-item>\n\n            <ion-label>{{ \'NAME_MESSAGE\' | translate }}</ion-label>        \n\n        </ion-item>        \n\n        <ion-item>\n\n            <ion-label floating>{{ \'NAME_LABEL_NAME\' | translate }}</ion-label>\n\n            <ion-input [(ngModel)]="name" (ngModelChange)="name = $event.toLocaleUpperCase()" formControlName="name" type="text"  name="name" (input)="onTextInput($event)" [class.invalid]="!slideOneForm.controls.name.valid && (slideOneForm.controls.name.dirty || submitAttempt)"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="!slideOneForm.controls.name.valid  && (slideOneForm.controls.name.dirty || submitAttempt)">\n\n            <p>Please enter a valid name.</p>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>{{ \'NAME_LABEL_LAST_NAME\' | translate }}</ion-label>\n\n            <ion-input [(ngModel)]="lastname" (ngModelChange)="lastname = $event.toLocaleUpperCase()" formControlName="lastname" type="text" name="lastname" (input)="onTextInput($event)" [class.invalid]="!slideOneForm.controls.lastname.valid && (slideOneForm.controls.lastname.dirty || submitAttempt)"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="!slideOneForm.controls.lastname.valid  && (slideOneForm.controls.lastname.dirty || submitAttempt)">\n\n            <p>Please enter a valid lastname.</p>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label floating>{{ \'NAME_LABEL_SECOND_LAST_NAME\' | translate }}</ion-label>\n\n            <ion-input [(ngModel)]="secondlastname" (ngModelChange)="secondlastname = $event.toLocaleUpperCase()" formControlName="secondlastname" type="text"  name="secondlastname" (input)="onTextInput($event)" [class.invalid]="!slideOneForm.controls.secondlastname.valid && (slideOneForm.controls.secondlastname.dirty || submitAttempt)"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngIf="!slideOneForm.controls.secondlastname.valid  && (slideOneForm.controls.secondlastname.dirty || submitAttempt)">\n\n            <p>Please enter a valid second lastname.</p>\n\n        </ion-item>\n\n        <div padding>\n\n          <ion-label floating><small>{{ \'NAME_LABEL_SECOND_LAST_NAME_FIX\' | translate }}</small></ion-label>              \n\n        </div>\n\n        <br>\n\n        <div padding>\n\n          <button ion-button color="primary" block [disabled]="checkedbtn" name="continue">{{ \'NEXT\' | translate }}</button>        \n\n        </div>\n\n        <div text-center padding>\n\n        <u>{{ \'LATER\' | translate }}</u>\n\n        </div>  \n\n      </ion-list>\n\n    </form>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\name\name.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], NamePage);
    return NamePage;
}());

//# sourceMappingURL=name.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamePageModule", function() { return NamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__name__ = __webpack_require__(1074);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NamePageModule = /** @class */ (function () {
    function NamePageModule() {
    }
    NamePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__name__["a" /* NamePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__name__["a" /* NamePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], NamePageModule);
    return NamePageModule;
}());

//# sourceMappingURL=name.module.js.map

/***/ })

});
//# sourceMappingURL=20.js.map