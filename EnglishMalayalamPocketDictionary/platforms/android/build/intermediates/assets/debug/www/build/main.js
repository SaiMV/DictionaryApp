webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(200);
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
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Sai/EnglishMalayalamPocketDictionary/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Dictionary" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Sai/EnglishMalayalamPocketDictionary/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/Sai/EnglishMalayalamPocketDictionary/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Sai/EnglishMalayalamPocketDictionary/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/Sai/EnglishMalayalamPocketDictionary/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Sai/EnglishMalayalamPocketDictionary/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.currentList = [];
        this.items = [];
        this.listA = ['a ', 'aa', 'ab', 'ac', 'ad', "ae", 'af', 'ag', 'ah', 'ai', 'aj', 'ak',
            'al', 'am', 'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay', 'az',
            'A ', 'Aa', 'Ab', 'Ac', 'Ad', "Ae", 'Af', 'Ag', 'Ah', 'Ai', 'Aj', 'Ak',
            'Al', 'Am', 'An', 'Ao', 'Ap', 'Aq', 'Ar', 'As', 'At', 'Au', 'Av', 'Aw', 'Ax', 'Ay', 'Az'];
        this.listB = ['b ', 'ba', 'bb', 'bc', 'bd', "be", 'bf', 'bg', 'bh', 'bi', 'bj', 'bk',
            'bl', 'bm', 'bn', 'bo', 'bp', 'bq', 'br', 'bs', 'bt', 'bu', 'bv', 'bw', 'bx', 'by', 'bz',
            'B ', 'Ba', 'Bb', 'Bc', 'Bd', "Be", 'Bf', 'Bg', 'Bh', 'Bi', 'Bj', 'Bk',
            'Bl', 'Bm', 'Bn', 'Bo', 'Bp', 'Bq', 'Br', 'Bs', 'Bt', 'Bu', 'Bv', 'Bw', 'Bx', 'By', 'Bz'];
        this.listC = ['c ', 'ca', 'cb', 'cc', 'cd', "ce", 'cf', 'cg', 'ch', 'ci', 'cj', 'ck',
            'cl', 'cm', 'cn', 'co', 'cp', 'cq', 'cr', 'cs', 'ct', 'cu', 'cv', 'cw', 'cx', 'cy', 'cz',
            'C ', 'Ca', 'Cb', 'Cc', 'Cd', "Ce", 'Cf', 'Cg', 'Ch', 'Ci', 'Cj', 'Ck',
            'Cl', 'Cm', 'Cn', 'Co', 'Cp', 'Cq', 'Cr', 'Cs', 'Ct', 'Cu', 'Cv', 'Cw', 'Cx', 'Cy', 'Cz'];
        this.listD = ['d ', 'da', 'db', 'dc', 'dd', "de", 'df', 'dg', 'dh', 'di', 'dj', 'dk',
            'dl', 'dm', 'dn', 'do', 'dp', 'dq', 'dr', 'ds', 'dt', 'du', 'dv', 'dw', 'dx', 'dy', 'dz',
            'D ', 'Da', 'Db', 'Dc', 'Dd', "De", 'Df', 'Dg', 'Dh', 'Di', 'Dj', 'Dk',
            'Dl', 'Dm', 'Dn', 'Do', 'Dp', 'Dq', 'Dr', 'Ds', 'Dt', 'Du', 'Dv', 'Dw', 'Dx', 'Dy', 'Dz'];
        this.listE = ['e ', 'ea', 'eb', 'ec', 'ed', "ee", 'ef', 'eg', 'eh', 'ei', 'ej', 'ek',
            'el', 'em', 'en', 'eo', 'ep', 'eq', 'er', 'es', 'et', 'eu', 'ev', 'ew', 'ex', 'ey', 'ez',
            'E ', 'Ea', 'Eb', 'Ec', 'Ed', "Ee", 'Ef', 'Eg', 'Eh', 'Ei', 'Ej', 'Ek',
            'El', 'Em', 'En', 'Eo', 'Ep', 'Eq', 'Er', 'Es', 'Et', 'Eu', 'Ev', 'Ew', 'Ex', 'Ey', 'Ez'];
        this.listF = ['f ', 'fa', 'fb', 'fc', 'fd', "fe", 'ff', 'fg', 'fh', 'fi', 'fj', 'fk',
            'fl', 'fm', 'fn', 'fo', 'fp', 'fq', 'fr', 'fs', 'ft', 'fu', 'fv', 'fw', 'fx', 'fy', 'fz',
            'F ', 'Fa', 'Fb', 'Fc', 'Fd', "Fe", 'Ff', 'Fg', 'Fh', 'Fi', 'Fj', 'Fk',
            'Fl', 'Fm', 'Fn', 'Fo', 'Fp', 'Fq', 'Fr', 'Fs', 'Ft', 'Fu', 'Fv', 'Fw', 'Fx', 'Fy', 'Fz'];
        this.listG = ['g ', 'ga', 'gb', 'gc', 'gd', "ge", 'gf', 'gg', 'gh', 'gi', 'gj', 'gk',
            'gl', 'gm', 'gn', 'go', 'gp', 'gq', 'gr', 'gs', 'gt', 'gu', 'gv', 'gw', 'gx', 'gy', 'gz',
            'G ', 'Ga', 'Gb', 'Gc', 'Gd', "Ge", 'Gf', 'Gg', 'Gh', 'Gi', 'Gj', 'Gk',
            'Gl', 'Gm', 'Gn', 'Go', 'Gp', 'Gq', 'Gr', 'Gs', 'Gt', 'Gu', 'Gv', 'Gw', 'Gx', 'Gy', 'Gz'];
        this.listH = ['h ', 'ha', 'hb', 'hc', 'hd', "he", 'hf', 'hg', 'hh', 'hi', 'hj', 'hk',
            'hl', 'hm', 'hn', 'ho', 'hp', 'hq', 'hr', 'hs', 'ht', 'hu', 'hv', 'hw', 'hx', 'hy', 'hz',
            'H ', 'Ha', 'Hb', 'Hc', 'Hd', "He", 'Hf', 'Hg', 'Hh', 'Hi', 'Hj', 'Hk',
            'Hl', 'Hm', 'Hn', 'Ho', 'Hp', 'Hq', 'Hr', 'Hs', 'Ht', 'Hu', 'Hv', 'Hw', 'Hx', 'Hy', 'Gz'];
        this.http.get('assets/dictionary/a-h/a.json').subscribe(function (data) {
            _this.currentList = data["results"];
            for (var i = 0; i < 50; i++) {
                _this.items.push(_this.currentList[i]);
            }
        });
    }
    HomePage.prototype.makeObjectAndSave = function () {
        var _this = this;
        var letterObj = {};
        this.listH.forEach(function (data) {
            var letterObjArr = [];
            _this.currentList.forEach(function (data2) {
                if (data == data2.english_word.substring(0, 2)) {
                    letterObjArr.push({ engWord: data2.english_word, malWord: data2.malayalam_definition, pos: data2.part_of_speech });
                }
            });
            if (letterObjArr.length != 0) {
                letterObj[data] = letterObjArr;
            }
        });
    };
    HomePage.prototype.doInfinite = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                for (var i = 0; i < 50; i++) {
                    if (_this.items.length <= _this.currentList.length - 1) {
                        if (_this.currentList[_this.items.length + i] != undefined) {
                            _this.items.push(_this.currentList[_this.items.length + i]);
                        }
                    }
                }
                resolve();
            }, 500);
        });
    };
    HomePage.prototype.searchValue = function (event) {
        this.reloadDataOnSearch(event.target.value);
    };
    HomePage.prototype.reloadDataOnSearch = function (value) {
        var _this = this;
        if (value == undefined) {
            return;
        }
        var folderPath = '';
        if (value.substring(0, 1).toUpperCase() == 'A' ||
            value.substring(0, 1).toUpperCase() == 'B' ||
            value.substring(0, 1).toUpperCase() == 'C' ||
            value.substring(0, 1).toUpperCase() == 'D' ||
            value.substring(0, 1).toUpperCase() == 'E' ||
            value.substring(0, 1).toUpperCase() == 'F' ||
            value.substring(0, 1).toUpperCase() == 'G' ||
            value.substring(0, 1).toUpperCase() == 'H') {
            folderPath = 'a-h';
        }
        else if (value.substring(0, 1).toUpperCase() == 'I' ||
            value.substring(0, 1).toUpperCase() == 'J' ||
            value.substring(0, 1).toUpperCase() == 'K' ||
            value.substring(0, 1).toUpperCase() == 'L' ||
            value.substring(0, 1).toUpperCase() == 'M') {
            folderPath = 'i-m';
        }
        else if (value.substring(0, 1).toUpperCase() == 'N' ||
            value.substring(0, 1).toUpperCase() == 'O' ||
            value.substring(0, 1).toUpperCase() == 'P' ||
            value.substring(0, 1).toUpperCase() == 'Q' ||
            value.substring(0, 1).toUpperCase() == 'R') {
            folderPath = 'n-r';
        }
        else if (value.substring(0, 1).toUpperCase() == 'S' ||
            value.substring(0, 1).toUpperCase() == 'T' ||
            value.substring(0, 1).toUpperCase() == 'U' ||
            value.substring(0, 1).toUpperCase() == 'V' ||
            value.substring(0, 1).toUpperCase() == 'W' ||
            value.substring(0, 1).toUpperCase() == 'X' ||
            value.substring(0, 1).toUpperCase() == 'Y' ||
            value.substring(0, 1).toUpperCase() == 'Z') {
            folderPath = 's-z';
        }
        else {
            return;
        }
        this.http.get('/android_asset/www/assets/dictionary/' + folderPath + '/' + value.substring(0, 1).toLowerCase() + '.json').subscribe(function (data) {
            _this.currentList = data["results"]; //["results"]
            if (value.length == 1) {
                _this.items = [];
                for (var i = 0; i < 50; i++) {
                    _this.items.push(_this.currentList[i]);
                }
            }
            // this.makeObjectAndSave()
        });
        if (value.length >= 3) {
            this.currentList = this.currentList.filter(function (data) {
                if (data["english_word"].includes(value)) {
                    return true;
                }
                return false;
            });
            if (this.currentList.length > 50) {
                this.items = [];
                for (var i = 0; i < 50; i++) {
                    this.items.push(this.currentList[i]);
                }
            }
            else {
                this.items = [];
                for (var i1 = 0; i1 < this.currentList.length; i1++) {
                    this.items.push(this.currentList[i1]);
                }
            }
            console.log(this.items);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Sai/EnglishMalayalamPocketDictionary/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-searchbar placeholder="Start searching here" (keyup)="searchValue($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n      <ion-list >\n        <ion-card *ngFor="let item of items;let index = i; ">\n          <ion-card-header no-padding padding-left="10px" padding-right="10px">\n            <ion-card-title >\n              <ion-label color="primary" float-left>{{item.english_word}}</ion-label>\n              <ion-label  float-right>{{item.part_of_speech}}</ion-label>\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <div col-12 style="font-size: 16px">\n              {{item.malayalam_definition}}\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/Sai/EnglishMalayalamPocketDictionary/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Sai/EnglishMalayalamPocketDictionary/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Sai/EnglishMalayalamPocketDictionary/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map