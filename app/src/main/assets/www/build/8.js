webpackJsonp([8],{

/***/ 1328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3____ = __webpack_require__(400);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translateService = translateService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3____["c" /* Tab1Root */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3____["d" /* Tab2Root */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3____["e" /* Tab3Root */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3____["f" /* Tab4Root */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3____["g" /* Tab5Root */];
        this.tab1Title = " ";
        this.tab2Title = " ";
        this.tab3Title = " ";
        this.tab4Title = " ";
        this.tab5Title = " ";
        this.user = navParams.get('user');
        //console.log("EL USUARIO EN TABS ES ", this.user); 
        translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE', 'TAB4_TITLE', 'TAB5_TITLE']).subscribe(function (values) {
            _this.tab1Title = values['TAB1_TITLE'];
            _this.tab2Title = values['TAB2_TITLE'];
            _this.tab3Title = values['TAB3_TITLE'];
            _this.tab4Title = values['TAB4_TITLE'];
            _this.tab5Title = values['TAB5_TITLE'];
        });
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\tabs\tabs.html"*/'<ion-tabs color="secondary-light" [selectedIndex]="2">\n\n    <ion-tab [root]="tab1Root" [tabTitle]="tab1Title" tabIcon="swap" [rootParams]="user"></ion-tab>\n\n    <ion-tab [root]="tab2Root" [tabTitle]="tab2Title" tabIcon="arrow-round-down" [rootParams]="user"></ion-tab>\n\n    <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" tabIcon="home" [rootParams]="user"></ion-tab>\n\n    <ion-tab [root]="tab4Root" [tabTitle]="tab4Title" tabIcon="arrow-round-up" [rootParams]="user"></ion-tab>\n\n    <ion-tab [root]="tab5Root" [tabTitle]="tab5Title" tabIcon="custom-wallet" [rootParams]="user"></ion-tab>\n\n  <!--\n\n  <ion-tab [root]="tab1Root" [tabTitle]="tab1Title" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" [tabTitle]="tab2Title" tabIcon="search"></ion-tab>\n\n  <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" tabIcon="cog"></ion-tab>\n\n  -->\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs__ = __webpack_require__(1328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ })

});
//# sourceMappingURL=8.js.map