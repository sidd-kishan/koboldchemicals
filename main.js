(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<app-body></app-body>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'koboldchemical';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_6__["BodyComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n#hero{\r\n    background-image: url('Company1.jpg');\r\n    background-size: cover;\r\n}\r\n.hero-edit{\r\n    padding: 20% 2%;\r\n}\r\n.fa-transparent{\r\n    color: rgb(76, 84, 92);\r\n}\r\n.clouts{\r\n    position: relative;\r\n}\r\n.clouts::before{\r\n    content: \"\";\r\n  position: absolute;\r\n  top: 0; left: 0;\r\n  width: 100%; height: 100%;\r\n  background-image: url('hero.jpg');\r\n  background-repeat: no-repeat;\r\n  -webkit-filter:blur(25%);\r\n          filter:blur(25%);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHFDQUFnRDtJQUNoRCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU0sRUFBRSxPQUFPO0VBQ2YsV0FBVyxFQUFFLFlBQVk7RUFDekIsaUNBQTRDO0VBQzVDLDRCQUE0QjtFQUM1Qix3QkFBZ0I7VUFBaEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNoZXJve1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9Db21wYW55MS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uaGVyby1lZGl0e1xyXG4gICAgcGFkZGluZzogMjAlIDIlO1xyXG59XHJcbi5mYS10cmFuc3BhcmVudHtcclxuICAgIGNvbG9yOiByZ2IoNzYsIDg0LCA5Mik7XHJcbn1cclxuLmNsb3V0c3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2xvdXRzOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7IGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2hlcm8uanBnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGZpbHRlcjpibHVyKDI1JSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"hero\">\n   <div class=\"container hero-edit\">\n      \n   </div>\n  \n  \n\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n           <h2 class=\"section-heading text-uppercase\">Overview</h2>\n        </div>\n      \n          <div class=\"col-lg-12 text-center\">\n              <h6 class=\"section-subheading text-muted\">\n                  We are a part of Kobold Group, based in UAE. Our role and responsibility induce sourcing & distribution of Basic,\n                  Commodity, Specialty & Petrochemical into diverse industrial sectors such as textiles, polymers, asphalt, detergents,\n                  glass, packaging, etc. throughout ASIA,AFRICA & GCC Region.\n                  Our co-ordination with Global Brands in the Supply sector has availed us the advantage of procuring the best quality\n                  material and delivering it to our client within the prescribed time. All of our efforts are focused on making sure that\n                  our clients are availed with the products they require within time, quality & professional standards.\n              </h6>\n          </div>\n\n                <div class=\"col-md-6 border p-3\">\n                  <div class=\"text-center\">\n                      <span class=\"fa-stack fa-4x\">\n                          <i class=\"fas fa-circle fa-stack-2x text-primary\"></i>\n                          <i class=\"fas fa-binoculars fa-stack-1x fa-inverse\"></i>\n                        </span>\n                        <h4 class=\"service-heading\">Vision</h4>\n                  </div>\n                   \n                    <p class=\"text-muted\">\n                  To be recognised around the industries as a reliable source in procuring & delivering raw materials.\n                    </p>\n                  </div>\n\n                  <div class=\"col-md-6  border p-3\">\n                    <div class=\"text-center\">\n                        <span class=\"fa-stack fa-4x\">\n                            <i class=\"fas fa-circle fa-stack-2x text-primary\"></i>\n                            <i class=\"fas fa-globe-asia fa-stack-1x fa-inverse\"></i>\n                          </span>\n                          <h4 class=\"service-heading\">Mission</h4>\n\n                    </div>\n                      \n                      <p class=\"text-muted\">\n                      To deliver what the client needs ,in time, in accordance to the quality & assurance.\n\n                      </p>\n                    </div>\n        \n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-4 text-center\">\n            <span class=\"fa-stack fa-2x\">\n                <i class=\"fas fa-circle fa-stack-2x fa-transparent\"></i>\n                <i class=\"fas fa-users fa-stack-1x fa-black\"></i>\n              </span>\n              <p class=\"text-muted\"> Cosumer</p>\n        </div>\n        <div class=\"col-md-4 text-center\">\n            <span class=\"fa-stack fa-2x\">\n                <i class=\"fas fa-circle fa-stack-2x fa-transparent\"></i>\n                <i class=\"fas fa-award fa-stack-1x fa-black\"></i>\n              </span>\n              <p class=\"text-muted\"> Copetitor</p>\n        </div>\n        <div class=\"col-md-4 text-center\">\n            <span class=\"fa-stack fa-2x\">\n                <i class=\"fas fa-circle fa-stack-2x fa-transparent\"></i>\n                <i class=\"fas fa-chart-line fa-stack-1x fa-black\"></i>\n              </span>\n              <p class=\"text-muted\"> Market</p>\n        </div>\n      </div>\n      <!-- Clouts -->\n     \n\n</div>\n\n<div class=\"container-fluid clouts\">\n<div class=\"row \">\n      <div class=\"col-lg-12 text-center\">\n          <h2>KOBOLD CHEMICAL CLOUTS</h2>\n      </div>\n    <div class=\"col-lg-12 text-black\">\n      \n      <ul>\n        <li>\n          Strong relation with Government Companies engaging in raw\n            material supply all around the GCC and other regions.\n        </li>\n        <li> <strong>Email Marketing</strong>   : Strong Database of Suppliers as well as\n            Consumers, all accessible by Cloud Engine, extending our reach\n            in the market.</li>\n            <li>\n              <strong>Blogging</strong>   : One of the many ways we share Technical\n                Knowledge about the product to our existing & potential clients.\n            </li>\n            <li>\n                Active on Social Media including Facebook, LinkedIn, Twitter,\n                etc.\n            </li>\n            <li>\n                A very wide & diverse range of products including Basic,\n                Commodity, Specialty & Petrochemical.\n            </li>\n            <li>\n                Product Catalogue\n            </li>\n            <li>\n                Customer Relationship Management CRM\n            </li>\n      </ul>\n    </div>\n  </div>\n</div> \n<div class=\"continer-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <img src=\"../../assets/Company4.jpg\" alt=\"\" class=\"img-alfoot img-fluid\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
        this.images = [1, 2, 3].map(function () { return "https://picsum.photos/900/500?random&t=" + Math.random(); });
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small blue pt-4 bg-dark\">\n\n    <!-- Footer Links -->\n    <div class=\"container-fluid text-center text-md-left\">\n\n      <!-- Grid row -->\n      <div class=\"row\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-6 mt-md-0 mt-3\">\n\n          <!-- Content -->\n          <div class=\"container\">\n              <h5 class=\"text-uppercase text-white\">KOBOLD\n                  CHEMICALS\n                  TRADING</h5>\n\n          </div>\n          <div class=\"container\">\n              <p class=\"text-white\"> <strong>HEAD OFFICE</strong> </p>\n              <p class=\"text-white\">604A,Aspin Commercial Tower,<br>\n                 Sheikh Zayed Road – Dubai. <br>\n                 PO Box 333445 <br>\n                 United Arab Emirates <br>\n                 CONTACT <br>\n                 +971504587718</p>  \n\n          </div>\n          <div class=\"container\">\n              <i class=\"fas fa-envelope fa-inverse\"><p>\n                  <strong>E mail:</strong>info@koboldchemicals.com\n                </p> </i>\n             \n                    \n          </div>\n          \n             \n           \n             \n           \n\n        </div>\n        <!-- Grid column -->\n\n        <hr class=\"clearfix w-100 d-md-none pb-3\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 mb-md-0 mb-3\">\n\n           <!-- Social buttons -->\n      <ul class=\"list-unstyled list-inline text-center\">\n          <li class=\"list-inline-item\">\n              <span class=\"fa-2x\">\n                  <a class=\"btn-floating btn-fb mx-1\">\n                    <i class=\"fab fa-facebook-f fa-inverse\"> </i>\n                  </a>\n            </span>\n          </li>\n          <li class=\"list-inline-item\">\n              <span class=\"fa-2x\">\n                <a class=\"btn-floating btn-tw mx-1\">\n                  <i class=\"fab fa-twitter fa-inverse\"> </i>\n                </a>\n            </span>\n          </li>\n          <li class=\"list-inline-item\">\n              <span class=\"fa-2x\">\n                <a class=\"btn-floating btn-gplus mx-1\">\n                  <i class=\"fab fa-google-plus-g fa-inverse\"> </i>\n                </a>\n              </span>\n          </li>\n          <li class=\"list-inline-item\">\n            <span class=\"fa-2x\">\n                <a class=\"btn-floating btn-li mx-1\">\n                    <i class=\"fab fa-linkedin-in fa-inverse\"> </i>\n                  </a>\n            </span>\n            \n          </li>\n          <li class=\"list-inline-item\">\n            <span class=\"fa-2x\">\n                <a class=\"btn-floating btn-dribbble mx-1\">\n                    <i class=\"fab fa-dribbble fa-inverse\"> </i>\n                  </a>\n            </span>\n           \n          </li>\n        </ul>\n        <!-- Social buttons -->\n\n          </div>\n          <!-- Grid column -->\n\n      </div>\n      <!-- Grid row -->\n\n    </div>\n    <!-- Footer Links -->\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3 text-white\">© 2018 Copyright:\n      <a href=\"https://mdbootstrap.com/education/bootstrap/\"> koboldchemicals.com</a>\n    </div>\n    <!-- Copyright -->\n\n  </footer>\n  <!-- Footer -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-dark navbar-dark\">\n  <a class=\"navbar-brand\" href=\"#\">              \n    <img src=\"../../assets/k.jpeg\" height=\"30\" alt=\"mdb logo\">\n  </a>\n  <ng-template [ngIf]=\"isCollapsed\">\n      \n          <a class=\"navbar-brand text-white-50\" >{{ activeMenu }}</a>\n       \n    </ng-template>\n  <button class=\"navbar-toggler btn-dark\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n    <ul class=\"navbar-nav\">\n      <li [ngClass]=\"{'active': activeMenu === 'home' }\" class=\"nav-item \">\n        <a class=\"nav-link text-black\" href=\"#\" (click)=\"onSelect('Home')\">Home</a>\n      </li>\n      <li [ngClass]=\"{'active': activeMenu === 'Products' }\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"onSelect('Products')\">Products</a>\n      </li>\n      <li [ngClass]=\"{'active': activeMenu === 'about' }\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"onSelect('Contact Us')\">Contact Us</a>\n      </li>\n    </ul>\n  </div>  \n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.pageSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeMenu = 'Home';
        this.isCollapsed = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onSelect = function (optionMenu) {
        this.pageSelected.emit(optionMenu);
        this.activeMenu = optionMenu;
        this.isCollapsed = true;
    };
    HeaderComponent.prototype.onResize = function (event) {
        this.isCollapsed = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "pageSelected", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            host: {
                '(window:resize)': 'onResize($event)'
            },
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\kobold\koboldchemical\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map