webpackJsonp([22],{

/***/ 1073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, user, toastCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            username: 'victor.romero@fintecheando.mx',
            password: 'gusana02'
        };
        //Show/Hide password
        this.usernameType = 'password';
        this.usernameIcon = 'eye-off';
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    LoginPage.prototype.hideShowUserName = function () {
        this.usernameType = this.usernameType === 'text' ? 'password' : 'text';
        this.usernameIcon = this.usernameIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.user.login(this.account).subscribe(function (resp) {
            _this.userData = resp;
            //this.user.applySavingsAccount({"clientId":1,"dateFormat":"dd MMMM yyyy","locale":"en","productId":2,"submittedOnDate":"19 July 2019"})
            //.subscribe(res=> this.savingaccounts = resp )
            console.log('here is', _this.userData);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4____["b" /* MainPage */]);
        }, function (err) {
            //TODO: remove after  testing purposes
            //this.navCtrl.push('scan-qr');
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: _this.loginErrorString,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\login\login.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form (submit)="doLogin()">\n\n    <ion-list>\n\n\n\n        <ion-item >\n\n            <div text-center padding>\n\n              <img src="./assets/imgs/giphy.gif" width="55%" height="55%" alt="fintecheando">            \n\n            </div>\n\n        </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n\n        <ion-input name="username"  [(ngModel)]="account.username" [type]="usernameType" clearOnEdit="false"></ion-input>\n\n        <ion-icon item-end [name]="passwordIcon" class="usernameIcon" (click)=\'hideShowUserName()\'></ion-icon>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{ \'PASSWORD\' | translate }}</ion-label>\n\n        <ion-input name="password"  [(ngModel)]="account.password" [type]="passwordType" clearOnEdit="false"></ion-input>\n\n        <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (click)=\'hideShowPassword()\'></ion-icon>\n\n      </ion-item>\n\n\n\n      <!--\n\n      Want to use a Username instead of an Email? Here you go:\n\n\n\n      <ion-item>\n\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n\n      </ion-item>\n\n      \n\n\n\n      <ion-item>\n\n        <ion-label fixed>{{ \'PASSWORD\' | translate }}</ion-label>\n\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n\n      </ion-item>\n\n      -->\n\n\n\n      <div padding>\n\n        <button ion-button color="primary" block>{{ \'LOGIN_BUTTON\' | translate }}</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["d" /* User */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(1073);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ })

});
//# sourceMappingURL=22.js.map