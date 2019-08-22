webpackJsonp([26],{

/***/ 1068:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerKycPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerKycPage = /** @class */ (function () {
    function CustomerKycPage(navCtrl, navParams, camera, transfer, file, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.kycDetails = {};
    }
    CustomerKycPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerKycPage');
    };
    CustomerKycPage.prototype.submitKyc = function () {
        console.log("Submit button clicked");
        console.log(this.kycDetails);
        this.navCtrl.push('activate-customer');
    };
    CustomerKycPage.prototype.takePhoto = function (type) {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (type == 'id') {
                _this.idPic = 'data:image/jpeg;base64,' + imageData;
            }
            if (type == 'selfie') {
                _this.userPic = 'data:image/jpeg;base64,' + imageData;
            }
        }, function (err) {
            console.log('Error', err);
        });
    };
    CustomerKycPage.prototype.getImage = function (type) {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (type == 'id') {
                _this.idPic = 'data:image/jpeg;base64,' + imageData;
            }
            if (type == 'selfie') {
                _this.userPic = 'data:image/jpeg;base64,' + imageData;
            }
        }, function (err) {
            console.log('Error ', err);
        });
    };
    CustomerKycPage.prototype.uploadImage = function () {
        /*let loader = this.loadingCtrl.create({
          content: "Uploading..."
        });
        loader.present();
    
        const fileTransfer: FileTransferObject = this.transfer.create();
    
        var id = 'userId';
    
        let options: FileUploadOptions = {
          fileKey: 'photo',
          fileName: "myImage_" + id + ".jpg",
          chunkedMode: false,
          httpMethod: 'post',
          mimeType: "image/jpeg",
          headers: {}
        }
        fileTransfer.upload(this.userPic, '', options)
          .then((data) => {
            alert("Success");
            loader.dismiss();
          }, (err) => {
            console.log(err);
            alert("Error");
            loader.dismiss();
          });
      }*/
    };
    CustomerKycPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-customer-kyc',template:/*ion-inline-start:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\customer-kyc\customer-kyc.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>CustomerKyc</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="row">\n\n    <div class="col col-50">\n\n      <ion-item>\n\n        <ion-label floating>First Name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="kycDetails.firstName" name="firstname"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <div class="col col50">\n\n      <ion-item>\n\n        <ion-label floating>Last Name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="kycDetails.lastName" name="lastname"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n  </div>\n\n\n\n  <ion-item padding-left>\n\n    <ion-label>Gender</ion-label>\n\n    <ion-select [(ngModel)]="kycDetails.gender">\n\n      <ion-option value="male">Male</ion-option>\n\n      <ion-option value="female">Female</ion-option>\n\n      <ion-option value="other">Other</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Date of Birth</ion-label>\n\n    <ion-datetime displayFormat="DD-MM-YYYY" placeholder="Select Date" [(ngModel)]="kycDetails.dob"></ion-datetime>\n\n  </ion-item>\n\n\n\n\n\n  <ion-card padding="">\n\n    <label>Photo ID Card</label>\n\n    <div class="row">\n\n      <div class="col col-50">\n\n    <button ion-button (click)="takePhoto(\'id\')" full color="primary">Take Photo</button>\n\n    <button ion-button (click)="getImage(\'id\')" full color="secondary">Gallery</button>\n\n    </div>\n\n    <div class="col col-50" margin>\n\n      <img src="{{ idPic }}">\n\n    </div>\n\n    </div>\n\n  </ion-card>\n\n\n\n  <ion-card padding>\n\n    <label>Your Selfie</label>\n\n    <div class="row">\n\n      <div class="col col-50">\n\n      <button ion-button (click)="takePhoto(\'selfie\')" full color="primary">Take Photo</button>\n\n      <button ion-button (click)="getImage(\'selfie\')" full color="secondary">Gallery</button>\n\n    </div>\n\n    <div class="col col-50" margin>\n\n      <img src="{{ userPic }}">\n\n    </div>\n\n    </div>\n\n  </ion-card>\n\n\n\n  <button align-items-center (click)="submitKyc()" ion-button>Submit</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\HP PRO\Documents\fiinwallet\app\src\pages\customer-kyc\customer-kyc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], CustomerKycPage);
    return CustomerKycPage;
}());

//# sourceMappingURL=customer-kyc.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerKycPageModule", function() { return CustomerKycPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_kyc__ = __webpack_require__(1068);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerKycPageModule = /** @class */ (function () {
    function CustomerKycPageModule() {
    }
    CustomerKycPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__customer_kyc__["a" /* CustomerKycPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__customer_kyc__["a" /* CustomerKycPage */]),
            ],
        })
    ], CustomerKycPageModule);
    return CustomerKycPageModule;
}());

//# sourceMappingURL=customer-kyc.module.js.map

/***/ })

});
//# sourceMappingURL=26.js.map