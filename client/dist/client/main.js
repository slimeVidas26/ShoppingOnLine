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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Why you should by in our store (write here few words with picture)\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"  col-md-4 box form-group\">\n            <div class=\"inner\">\n                <div class=\"col-md-12\">\n                   \n                    <manage-products *ngIf=\"selectedProduct\" [product]=\"selectedProduct\"  > \n                    </manage-products>                  \n                    \n                  </div>\n              </div>\n         \n        </div>\n    \n        <!-- <div\n        class=\" col-md-4 box form-group\"\n        [ngStyle]=\"style\"\n        mwlResizable\n        [validateResize]=\"validate\"\n        [resizeEdges]=\"{bottom: true, right: true, top: true, left: true}\"\n        [enableGhostResize]=\"true\"\n        [resizeSnapGrid]=\"{left: 50, right: 50}\"\n        (resizeEnd)=\"onResizeEnd($event)\">\n        <img\n          src=\"http://i.imgur.com/eqzz2dl.gif\"\n          class=\"resize-handle\"\n          mwlResizeHandle\n          [resizeEdges]=\"{bottom: true, right: true}\">\n          <div class=\"inner\">\n                <div class=\"col-md-12\">\n                   \n                  <cart></cart>\n                  \n                    \n                  </div>\n              </div>\n      </div> -->\n        <div class=\"  col-md-8 box form-group\">\n                <div class=\"row\">\n                        <div class=\"inner\">\n                                <div class=\"col-md-12\">\n                                  <!-- <categories [parentData] = \"categories\"></categories> -->\n        <categories (selectCategory) = \"onSelectCategory($event)\" [categories] = \"categories\"></categories>\n    \n                                  </div>\n                              </div>\n                </div>\n    \n    \n    \n                \n            <div class=\"row row-product\">\n                    <div class=\"inner\">\n                            <div class=\"col-md-12\">\n         <products *ngIf =\"selectedCategory\"  [category] = \"selectedCategory\" ></products>\n                              </div>\n                          </div>\n            </div>\n            <div class=\"row row-product\">\n                <div class=\"inner\">\n                        <div class=\"col-md-12\">\n         <products (selectProduct)=\"onSelectProduct($event)\" [products] = \"products\" ></products>\n                          </div>\n                      </div>\n        </div>\n            \n         \n        </div>\n        \n      </div>\n      \n    \n    "

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = /** @class */ (function () {
    function AdminComponent(_categoryService, _productsService, route) {
        this._categoryService = _categoryService;
        this._productsService = _productsService;
        this.route = route;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (resCategoryData) { return _this.categories = resCategoryData; });
        console.log(this.categories);
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this._productsService.getproductsByCategory({ id: _this.id })
                .subscribe(function (resProductsData) { return _this.products = resProductsData; });
            console.log('pro', _this.products);
        });
        this._productsService.getProducts()
            .subscribe(function (resProductsData) { return _this.products = resProductsData; });
        console.log(this.products);
    };
    AdminComponent.prototype.onSelectCategory = function (category) {
        // this.selectedCategory = category;
        this.selectedCategory = category;
        //this.selectedProduct = this.products
    };
    AdminComponent.prototype.onSelectProduct = function (product) {
        // this.selectedCategory = category;
        this.selectedProduct = product;
        //this.selectedProduct = this.products
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AdminComponent);
    return AdminComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'signin', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"] },
    { path: 'order', component: _order_order_component__WEBPACK_IMPORTED_MODULE_5__["OrderComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'shop/category/:id', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"] },
    { path: 'admin/category/:id', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'shop/product/:id', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ".container{\r\n    background-color:white;\r\n    max-width: 1317px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<navbar></navbar>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n  <!-- <home></home> -->\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "./node_modules/ng-bootstrap-form-validation/esm5/ng-bootstrap-form-validation.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _formdata_upload_formdata_upload_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./formdata-upload/formdata-upload.component */ "./src/app/formdata-upload/formdata-upload.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _infos_infos_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./infos/infos.component */ "./src/app/infos/infos.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/shipping/shipping.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./manage-products/manage-products.component */ "./src/app/manage-products/manage-products.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _select_modal_select_modal_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./select-modal/select-modal.component */ "./src/app/select-modal/select-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { UserService } from './user.service';



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"],
                _infos_infos_component__WEBPACK_IMPORTED_MODULE_19__["InfosComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_20__["SignInComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_21__["ShopComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_22__["CartComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_23__["ProductsComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_24__["OrderComponent"],
                _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_25__["ShippingComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_26__["AdminComponent"],
                _manage_products_manage_products_component__WEBPACK_IMPORTED_MODULE_27__["ManageProductsComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_28__["CategoriesComponent"],
                _select_modal_select_modal_component__WEBPACK_IMPORTED_MODULE_29__["SelectModalComponent"],
                _select_modal_select_modal_component__WEBPACK_IMPORTED_MODULE_29__["NgbdModalContent"],
                _formdata_upload_formdata_upload_component__WEBPACK_IMPORTED_MODULE_16__["FormdataUploadComponent"],
            ],
            //  entryComponents: [NgbdModalContent],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_5__["NgBootstrapFormValidationModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_6__["ResizableModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptorService"],
                    multi: true
                }, Location, _cart_service__WEBPACK_IMPORTED_MODULE_11__["CartService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(api, router) {
        this.api = api;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log('guarded route:', next.routeConfig.path);
        console.log('route data:', next.data);
        console.log('user level:', this.api.role);
        if (next.data) {
            if (next.data.minLevelAllowed) {
                if (this.api.role < next.data.minLevelAllowed) {
                    this.router.navigate(['/login']);
                }
            }
            else if (next.data.onlyNotLogged) {
                if (this.api.role != 0) {
                    this.router.navigate(['/']);
                }
            }
            else if (next.data.redirectAdmin && this.api.role == "admin") {
                this.router.navigate([next.data.redirectAdmin]);
            }
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import 'rxjs/add/operator/map' ;
// import 'rxjs/add/operator/catch';


//import {of} from 'rxjs/observable/of';
var CartService = /** @class */ (function () {
    function CartService(_http) {
        this._http = _http;
        // private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
        //private itemsInCart: Product[] = [];
        this._endpointCartService = "http://localhost:3000/shopping/api/cart-detail";
        //private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ProductsCart = [];
        this.CartState = this.cartSubject.asObservable();
        //this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
    }
    // public getItems(): Observable<Product[]> {
    //   return this.itemsInCartSubject;
    // }
    CartService.prototype.addProduct = function (_product) {
        console.log('in service');
        this.ProductsCart.push(_product);
        this.cartSubject.next({ products: this.ProductsCart });
        this.getCartProducts();
    };
    // removeProduct(id:any = null) {
    //   let call = this._endpointCartService;
    //   if(id) {
    //     call += `/${id}`; 
    //   }
    //   return this._http.delete< any >(this._endpointCartService);
    // }
    // public addToCart(item: Product) {
    //   // this.itemsInCartSubject.next([...this.itemsInCart, item]);
    // }
    // getCarProducts(params) : Observable <any> {
    //   let call = `${this._endpointCartService}/5b8acd30d1bfe441b830934d`;
    //   return this._http.get< any >(call);
    // }
    CartService.prototype.getCartProducts = function (id) {
        if (id === void 0) { id = null; }
        var call = this._endpointCartService; // default GET /users
        if (id) {
            call += "/" + id; // have user id GET /users/:id
        }
        return this._http.get(call);
    };
    CartService.prototype.addProdToCart = function (params) {
        return this._http.post(this._endpointCartService + "/add", params);
        //getProducts()
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-to-top{\r\n    float:right;\r\n    text-decoration: underline;\r\n    cursor:pointer\r\n}\r\n\r\n.cartImg{\r\n    width : 4rem;\r\n}\r\n\r\n.table td, .table th {\r\n     padding:0; \r\n     vertical-align: middle; \r\n    border-top: 1px solid #dee2e6;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"row start\">\n    <div class=\"col-md-12\">\n   <span>My Cart</span>\n   <a routerLink=\"/shop\" routerLinkActive=\"active\" class=\"back-to-top\">back to shop</a>\n\n   <hr>\n    </div>\n    </div>\n    <div class=\"row\">\n    <div class=\"col-md-12\">\n      <!-- <ul>\n        <li>Cart item : product name ,  quantity , price , picture</li>\n        <li>Cart item : product name ,  quantity , price , picture</li>\n\n        <li>Cart item : product name ,  quantity , price , picture</li>\n\n      </ul> -->\n    \n      <table class=\"table table-hover\">\n          <thead>\n            <!-- <tr *ngIf=\"productsBis.length > 0\"> -->\n                <tr>\n                  \n              <th scope=\"col\">Picture</th>\n              <th scope=\"col\">product name</th>\n              <th scope=\"col\">quantity</th>\n              <th scope=\"col\">price</th>\n            </tr>\n          </thead>\n          <tbody>\n           \n            \n            <tr *ngFor=\"let product of productsCart ;let i = index\"  class=\"table-primary\">\n              <!-- <th scope=\"row\">Primary</th> -->\n\n              <td> <img class=\"cartImg\" [src]= \" 'http://localhost:3000/'+product.picture\"></td>\n              <td>{{product.product_name}}</td>\n              <td>{{product.quantity}}</td>\n              <td>{{product.price}}</td>\n              <td><button (click)=\"removeProduct(product)\" class=\"btn btn-xs btn-danger\">X</button></td>\n            </tr>\n          </tbody>\n        </table> \n      <!-- <p style=\"color:red\">No changes permitted here</p> -->\n     <!-- <div class=\"alert alert-dismissible alert-danger\"> -->\n          <div class=\"alert alert-dismissible alert-danger\">\n\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n          <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\" data-uid=\"uid89735\">No changes permitted here</a> \n        </div>\n\n      <!-- <p>total :{{getTotalAmount()}}</p> -->\n      <tr class=\"warning\">\n        <td><h4></h4></td>\n        <!-- <td><h4>Total Items: {{totalQuantity}}</h4></td> -->\n        <td><h4>Total: ${{total}}</h4></td>\n        <td><button routerLink=\"/order\" routerLinkActive=\"active\" class=\"btn btn-md btn-success\">Checkout</button></td>\n      </tr>\n     \n      <!-- <a (click) = \"addNewOrder()\" routerLink=\"/order\" routerLinkActive=\"active\">order</a> -->\n    \n    </div>\n    </div>\n\n    <!-- //<p>You have {{shoppingCartItems.length}} items in your bag</p> -->\n\n     \n     \n    \n    \n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartComponent = /** @class */ (function () {
    // public shoppingCartItems$: Observable<Product[]> = of([]);
    // public shoppingCartItems: Product[] = [];
    function CartComponent(_cartService, _productsService, _router, _orderService, _userService, activatedRoute) {
        this._cartService = _cartService;
        this._productsService = _productsService;
        this._router = _router;
        this._orderService = _orderService;
        this._userService = _userService;
        this.activatedRoute = activatedRoute;
        this.loaded = true;
        this.notice = "Loading...";
        this.logged = null;
        this.logged = this._userService.logged;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.loaderService.show();
        this.currentCart = this.logged.user.cart;
        console.log('currentCar', this.currentCart);
        this._cartService.getCartProducts(this.currentCart)
            .subscribe(function (resProductsData) { return _this.productsCart = resProductsData.product; });
        console.log(this.productsCart);
        //   this.activatedRoute.queryParams.subscribe(params => {
        //     let shop = params['shop'];
        //     console.log(shop); // Print the parameter to the console. 
        // });
        this.subscription = this
            ._cartService
            .CartState
            .subscribe(function (state) {
            _this.productsCart = state.products;
            console.log("zis", _this.productsCart);
        });
        // this._productsService.getProducts()
        // .subscribe(resProductsData=>this.productsBis = resProductsData);
        // console.log(this.productsBis);
    };
    CartComponent.prototype.removeProduct = function (product) {
        alert('produc to remove');
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    // getTotalAmount(){
    //   this._cartService.getCartProducts(this.currentCart)
    //   .subscribe(resProductsData=>this.total = resProductsData.total_amount);
    //   console.log(this.total);
    //   return this.total || 0;
    // }
    CartComponent.prototype.addNewOrder = function () {
        // this.createParams.city =this.tmp.city.trim(); 
        // this.createParams.adress =this.tmp.adress.trim(); 
        // this.createParams.first_name =this.tmp.first_name.trim(); 
        // this.createParams.last_name =this.tmp.last_name.trim(); 
        // console.log('params',this.createParams)
        //  if(this.createParams.city!=''&& this.createParams.adress !='' &&
        //   this.createParams.first_name !='' && this.createParams.last_name !='' ) {
        this._orderService.createOrder(this.createParams).subscribe(function (result) {
            console.log(result);
        }, function (error) {
            alert('error!');
        }),
            this._router.navigate(['order']);
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"],
            _products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"row\">\n       <ul class=\"nav\">\n        \n        <li (click) = \"onSelect(category)\"  *ngFor = \"let category of categories\" class=\"nav-item\">\n          <a  class=\"nav-link active\">{{category.category_name}}</a>\n        </li>\n         <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n       \n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n        </li> -->\n        \n         \n      </ul>\n</div> \n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(router, route, _userService) {
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this.selectCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.logged = null;
        this.logged = this._userService.logged;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent.prototype.onSelect = function (cat) {
        if (this.logged.user.role == "Admin") {
            this.router.navigate(['/admin/category', cat._id]);
        }
        else {
            this.router.navigate(['/shop/category', cat._id]);
        }
        this.selectCategory.emit(cat);
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")],
            inputs: ['categories'],
            outputs: ['selectCategory']
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/category.service.ts":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = /** @class */ (function () {
    function CategoryService(_http) {
        this._http = _http;
        this._endpointCategories = "http://localhost:3000/shopping/api/categories";
    }
    CategoryService.prototype.getCategories = function (params) {
        if (params === void 0) { params = null; }
        var call = this._endpointCategories;
        if (params) {
            if (params.pid) {
                call += "/" + params.pid; // have categories id GET /categories/:id
            }
        }
        return this._http.get(call);
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/city.ts":
/*!*************************!*\
  !*** ./src/app/city.ts ***!
  \*************************/
/*! exports provided: City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
var City = /** @class */ (function () {
    function City(id, name) {
        this.id = id;
        this.name = name;
    }
    return City;
}());



/***/ }),

/***/ "./src/app/formdata-upload/formdata-upload.component.html":
/*!****************************************************************!*\
  !*** ./src/app/formdata-upload/formdata-upload.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Bob\" formControlName=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"avatar\">Picture</label>\n    <input type=\"file\" id=\"picture\" (change)=\"onFileChange($event)\" #fileInput>\n    <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n  </div>\n  <button type=\"submit\" [disabled]=\"form.invalid || loading\" class=\"btn btn-success\">Submit <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i></button>\n</form>\n"

/***/ }),

/***/ "./src/app/formdata-upload/formdata-upload.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/formdata-upload/formdata-upload.component.ts ***!
  \**************************************************************/
/*! exports provided: FormdataUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormdataUploadComponent", function() { return FormdataUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormdataUploadComponent = /** @class */ (function () {
    function FormdataUploadComponent(fb) {
        this.fb = fb;
        this.loading = false;
        this.createForm();
    }
    FormdataUploadComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            avatar: null
        });
    };
    FormdataUploadComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.form.get('picture').setValue(file);
        }
    };
    FormdataUploadComponent.prototype.prepareSave = function () {
        var input = new FormData();
        input.append('name', this.form.get('name').value);
        input.append('picture', this.form.get('picture').value);
        return input;
    };
    FormdataUploadComponent.prototype.onSubmit = function () {
        var _this = this;
        var formModel = this.prepareSave();
        this.loading = true;
        // this.http.post('apiUrl', formModel)
        setTimeout(function () {
            alert('done!');
            _this.loading = false;
        }, 1000);
    };
    FormdataUploadComponent.prototype.clearFile = function () {
        this.form.get('avatar').setValue(null);
        this.fileInput.nativeElement.value = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FormdataUploadComponent.prototype, "fileInput", void 0);
    FormdataUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'formdata-upload',
            template: __webpack_require__(/*! ./formdata-upload.component.html */ "./src/app/formdata-upload/formdata-upload.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormdataUploadComponent);
    return FormdataUploadComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .login{\r\n   \r\n    background-color: yellowgreen;\r\n}\r\n.about{\r\n  \r\n    background-color: rosybrown;\r\n}\r\n.infos{\r\n  \r\n    background-color:grey;\r\n} */\r\n\r\n/* .box {\r\n   \r\n    padding: 0 5px 0 10px;\r\n} */\r\n\r\n.box .inner {\r\n    background-color  : skyblue;\r\n    height:auto;\r\n    min-height: 520px;\r\n    padding : 15px;\r\n    margin-top: 15px;\r\n    border-radius:5px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\" login col-md-4 box form-group\">\n      <div class=\"inner\">\n         <login></login>\n        </div>\n   \n  </div>\n  <div class=\" about col-md-4 box form-group\">\n      <div class=\"inner\">\n          <about></about>\n         </div>\n   \n  </div>\n  <div class=\"infos col-md-4 box form-group\">\n      <div class=\"inner\">\n          <infos></infos>\n         </div>\n   \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/infos/infos.component.css":
/*!*******************************************!*\
  !*** ./src/app/infos/infos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width:50%;\r\n}\r\n.infos-1 , .infos-2 , .infos-3 , .infos-4 {\r\nmargin-bottom: 20px;\r\n}\r\n.card{\r\n    color:yellow;\r\n}\r\n.infos-1  img , .list-group  , .card{ display:block; margin:auto; }\r\n.list-group {\r\n     \r\nmargin-bottom:10px;\r\n }\r\n/* .start{\r\n     height:auto\r\n } */"

/***/ }),

/***/ "./src/app/infos/infos.component.html":
/*!********************************************!*\
  !*** ./src/app/infos/infos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class=\" infos-1 col-md-12\"><img src=\"assets/Mix2.jpg\" alt=\"\"></div>\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n    Available products in our store - number\n    <span class=\"badge badge-primary badge-pill\">14</span>\n  </li>\n  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n    Number of orders submitted in our store\n    <span class=\"badge badge-primary badge-pill\">2</span>\n  </li>\n</ul>\n\n\n<div class=\"card text-white bg-primary mb-3\" style=\"max-width: 20rem;\">\n  <div class=\"card-header\">Notification</div>\n  <div class=\"card-body\">\n   \n    <p class=\"card-text\">you have open cart from [date]/\n      your last purchase was on [date]/</p>\n      <h4 class=\"card-title\">Welcome [name]</h4>\n  </div>\n</div>\n\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/infos/infos.component.ts":
/*!******************************************!*\
  !*** ./src/app/infos/infos.component.ts ***!
  \******************************************/
/*! exports provided: InfosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfosComponent", function() { return InfosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfosComponent = /** @class */ (function () {
    function InfosComponent() {
    }
    InfosComponent.prototype.ngOnInit = function () {
    };
    InfosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'infos',
            template: __webpack_require__(/*! ./infos.component.html */ "./src/app/infos/infos.component.html"),
            styles: [__webpack_require__(/*! ./infos.component.css */ "./src/app/infos/infos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfosComponent);
    return InfosComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start{\r\n    margin-bottom: 70px\r\n}\r\n.form-control{\r\n    width : 60%\r\n}\r\ninput  {\r\n     display:block; margin:auto;\r\n     }\r\n.sign {\r\n    text-decoration: underline;\r\n    font-weight:bold\r\n}\r\nbutton {\r\n    margin-left : 30%;\r\n    margin-right : 10px\r\n}\r\nlegend {\r\nmargin-left : 20%;\r\nfont-size: 1rem;\r\nfont-weight:bold\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row start\">\n<div class=\"col-md-12\">\n   \n     \n      <div class=\"card text-white bg-success mb-3\">\n        <div class=\"card-header\">Start shopping / resume shopping</div>\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Success card title</h4>\n          <p class=\"card-text\">Available only for logged in users - secure it.</p>\n        </div>\n      </div>\n    \n    \n\n</div>\n</div>\n<div class=\"row\">\n<div class=\"col-md-12\">\n \n  <form [formGroup]=\"formGroup\" (validSubmit)=\"doLogin()\">\n        <fieldset>\n          <legend>  Registered?</legend>\n          <!-- <div class=\"form-group row\">\n            <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" readonly=\"\" class=\"form-control-plaintext\" id=\"staticEmail\" value=\"email@example.com\">\n            </div> -->\n          <!-- </div> -->\n       \n          <div class=\"form-group\">\n              <label class=\"control-label\">Email</label>\n        <input [(ngModel)]=\"username\" type=\"text\" class=\"form-control\" formControlName=\"Email\" placeholder=\"User name\">\n            <!-- <label for=\"exampleInputEmail1\">Email address</label> -->\n            <!-- <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"User name\"> -->\n          </div>\n          <div class=\"form-group\">\n              <label class=\"control-label\">Password</label>\n              <input  [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" formControlName=\"Password\" placeholder=\"Password\">\n            <!-- <label for=\"exampleInputPassword1\">Password</label> -->\n            <!-- <input [(ngModel)]=\"tmp.password\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\"> -->\n          </div>\n         \n         \n        \n        \n          <!-- <a routerLink=\"/shop\" routerLinkActive=\"active\"> -->\n            <!-- <button type=\"submit\" class=\"btn btn-primary\">Login</button>  -->\n            <button class=\"btn btn-primary pull-right\" type=\"submit\">Login</button>\n                   <!-- </a> -->\n                   <a class=\"sign\" routerLink=\"/signin\" routerLinkActive=\"active\">Sign up</a>\n         \n        </fieldset>\n      </form>\n\n\n  \n</div>\n</div>\n \n \n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)
            ])
        });
    };
    LoginComponent.prototype.doLogin = function () {
        console.log(this.formGroup);
        if (this.username && this.password) {
            //this.loginmsg.text = 'Logging, please wait...';
            this._userService.login(this.username, this.password);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/manage-products/manage-products.component.css":
/*!***************************************************************!*\
  !*** ./src/app/manage-products/manage-products.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit {\r\n    margin-top:35px;\r\n    margin-bottom:35px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/manage-products/manage-products.component.html":
/*!****************************************************************!*\
  !*** ./src/app/manage-products/manage-products.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <!-- <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\"    class=\"form-control\" id=\"name\" placeholder=\"Bob\" formControlName=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"avatar\">Avatar</label>\n    <input type=\"file\"    id=\"avatar\" (change)=\"onFileChange($event)\" #fileInput >\n    <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n  </div>\n  <button type=\"submit\" [disabled]=\"form.invalid || loading\" class=\"btn btn-success\">Submit <i class=\"fa fa-spinner fa-spin fa-fw\" *ngIf=\"loading\"></i></button>\n</form> -->\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"row start\">\n  <!-- <div class=\"col-md-12\">\n   product111    <i class=\"fas fa-plus\"></i>\n   <hr>\n    </div> -->\n  <div class=\"list-group edit col-md-12\">\n\n    <span>product222</span> <span><i (click)=\"openAddForm()\" class=\"fas fa-plus\"></i></span>\n    <span><i (click)=\"openEditForm()\" class=\"fas fa-pencil-alt\"></i></span>\n\n  </div>\n\n\n  \n\n  <div *ngIf=\"isAddForm\">\n    you can add products\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"createNewProduct()\">\n        <!-- <div class=\"form-group\">\n            <label for=\"city\">City</label>\n        <select [(ngModel)]=\"tmp.city\" class=\"custom-select\" formControlName=\"city\"> -->\n            <!-- <option value=''>-- SELECT CITY-- </option> -->\n          <!-- <option *ngFor=\"let city of cities\" value= {{city.id}}>\n            {{city.name}}\n          </option>\n        </select>\n      </div> -->\n        <!-- <form> -->\n            <!-- <div class=\"form-group\">\n                <select  [(ngModel)]=\"tmp.city\" class=\"custom-select\">\n                  <option selected=\"\">City</option>\n                  <option value=\"1\">Ashdod</option>\n                  <option value=\"2\">Jerusalem</option>\n                  <option value=\"3\">Haifa</option>\n                </select>\n              </div> -->\n              <!-- <div class=\"form-group\">\n                <label for=\"city\">City</label>\n                <input  [(ngModel)]=\"tmp.city\"  type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Street\" required>\n              </div> -->\n           \n            <div class=\"form-group\">\n              <label for=\"product_name\">Product name</label>\n              <input  [(ngModel)]=\"product_name\" name=\"product_name\"  type=\"text\" class=\"form-control\" formControlName=\"productName\" placeholder=\"Product name\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"_id\">ProductId</label>\n                <input  [(ngModel)]=\"_id\"  type=\"text\" name=\"_id\" class=\"form-control\" formControlName=\"productId\" placeholder=\"Product id\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"price\">Price</label>\n                <input  [(ngModel)]=\"price\"  type=\"text\" name=\"price\" class=\"form-control\" formControlName=\"price\" placeholder=\"Price\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"picture\">Picture</label>\n                <!-- <input  [(ngModel)]=\"tmp.picture\"  type=\"text\" class=\"form-control\" formControlName=\"picture\" placeholder=\"Picture\"> -->\n                <!-- <input [(ngModel)]=\"tmp.picture\" type=\"file\"  class=\"form-control\" formControlName=\"picture\" (change)=\"onFileChange($event)\" #fileInput> -->\n                <!-- <input type=\"file\" [(ngModel)]=\"picture\" id=\"picture\" class=\"form-control\" formControlName=\"picture\" (change)=\"onFileChange($event)\" #fileInput> -->\n                <input type=\"file\"    name=\"picture\" (change)=\"onFileChange($event)\" #fileInput >\n\n            </div>\n            \n                <div class=\"form-group\">\n                    <select [(ngModel)]=\"category\" name=\"_category\"  class=\"custom-select\" formControlName=\"category\">\n                        <!-- <option value=''>-- SELECT CATEGORY-- </option> -->\n                      <option *ngFor=\"let category of categories\" value= {{category._id}}>\n                        {{category.category_name}}\n                      </option>\n                    </select>\n              </div>\n              \n           \n                <button class=\"btn btn-primary pull-right\" [disabled]=\"!formGroup.valid\" type=\"submit\">Add Product</button>\n      \n           </form>\n  </div>\n  <div *ngIf=\"isEditForm\">\n    you can edit products\n   \n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"createNewProduct()\">\n        <!-- <div class=\"form-group\">\n            <label for=\"city\">City</label>\n        <select [(ngModel)]=\"tmp.city\" class=\"custom-select\" formControlName=\"city\"> -->\n            <!-- <option value=''>-- SELECT CITY-- </option> -->\n          <!-- <option *ngFor=\"let city of cities\" value= {{city.id}}>\n            {{city.name}}\n          </option>\n        </select>\n      </div> -->\n        <!-- <form> -->\n            <!-- <div class=\"form-group\">\n                <select  [(ngModel)]=\"tmp.city\" class=\"custom-select\">\n                  <option selected=\"\">City</option>\n                  <option value=\"1\">Ashdod</option>\n                  <option value=\"2\">Jerusalem</option>\n                  <option value=\"3\">Haifa</option>\n                </select>\n              </div> -->\n              <!-- <div class=\"form-group\">\n                <label for=\"city\">City</label>\n                <input  [(ngModel)]=\"tmp.city\"  type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Street\" required>\n              </div> -->\n           \n            <div class=\"form-group\">\n              <label for=\"product_name\">Product name</label>\n              <input  [(ngModel)]=\"product.product_name\" name=\"product_name\"  type=\"text\" class=\"form-control\" formControlName=\"productName\" placeholder=\"Product name\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"_id\">ProductId</label>\n                <input  [(ngModel)]=\"product._id\"  type=\"text\" name=\"_id\" class=\"form-control\" formControlName=\"productId\" placeholder=\"Product id\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"price\">Price</label>\n                <input  [(ngModel)]=\"product.price\"  type=\"text\" name=\"price\" class=\"form-control\" formControlName=\"price\" placeholder=\"Price\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"picture\">Picture</label>\n                <!-- <input  [(ngModel)]=\"tmp.picture\"  type=\"text\" class=\"form-control\" formControlName=\"picture\" placeholder=\"Picture\"> -->\n                <!-- <input [(ngModel)]=\"tmp.picture\" type=\"file\"  class=\"form-control\" formControlName=\"picture\" (change)=\"onFileChange($event)\" #fileInput> -->\n                <!-- <input type=\"file\" [(ngModel)]=\"picture\" id=\"picture\" class=\"form-control\" formControlName=\"picture\" (change)=\"onFileChange($event)\" #fileInput> -->\n                <input type=\"file\"    name=\"picture\" ngModel (change)=\"onFileChange($event)\" formControlName=\"picture\" #fileInput >\n    \n            </div>\n            \n                <div class=\"form-group\">\n                    <select [(ngModel)]=\"product.category\" name=\"_category\"  class=\"custom-select\" formControlName=\"category\">\n                      <option *ngFor=\"let category of categories\" [value]= \"category._id\">\n                        {{category.category_name}}\n                      </option>\n                    </select>\n\n                    \n\n                   \n              </div>\n              \n           \n                <button class=\"btn btn-primary pull-right\" [disabled]=\"!formGroup.valid\" type=\"submit\">Update Product</button>\n      \n           </form>\n  </div>\n\n\n\n\n\n\n\n\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <!-- <p>product name : product111</p>\n      <p>product ID : 1</p>\n      <p>product price : 10$</p>\n      <p>picture : editable</p>\n      <p>category : milk and eggs</p> -->\n\n    <!-- <p>\n    <a routerLink=\"/admin\" routerLinkActive=\"active\">\n        <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n      </a>\n</p> -->\n  </div>\n</div>\n\n\n\n<!-- negated variable to achieve \"if not\" -->\n<!-- <div *ngIf=\"!isLoggedIn\">\n    Please login, friend.\n  </div>\n  \n   logic && operator -->\n<!-- <div *ngIf=\"isLoggedIn && !isNewUser\">\n    Welcome back, friend.\n  </div> -->\n\n<!-- logic OR operator -->\n<!-- <div *ngIf=\"isLoggedIn || isNewUser\">\n    Welcome!\n  </div> -->"

/***/ }),

/***/ "./src/app/manage-products/manage-products.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/manage-products/manage-products.component.ts ***!
  \**************************************************************/
/*! exports provided: ManageProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductsComponent", function() { return ManageProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManageProductsComponent = /** @class */ (function () {
    function ManageProductsComponent(_categoryService, _productsService, fb, router) {
        this._categoryService = _categoryService;
        this._productsService = _productsService;
        this.fb = fb;
        this.router = router;
        this.isAddForm = false;
        this.isEditForm = true;
        this.loading = false;
        this.createParams = {};
        this.createForm();
    }
    ManageProductsComponent.prototype.createForm = function () {
        this.formGroup = this.fb.group({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                // Validators.minLength(9),
                // Validators.maxLength(9)
            ]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                // Validators.minLength(9),
                // Validators.maxLength(9)
            ])
        });
    };
    ManageProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (resCategoryData) { return _this.categories = resCategoryData; });
        console.log(this.categories);
        // this.formGroup = new FormGroup({
        //   productName: new FormControl('', [
        //     Validators.required,
        //   ]),
        //   productId: new FormControl('', [
        //     Validators.required
        //   ]),
        //   price: new FormControl('', [
        //     Validators.required
        //   ]),
        //   picture: new FormControl('', [
        //     Validators.required
        //     // Validators.minLength(9),
        //     // Validators.maxLength(9)
        //   ]),
        //   category: new FormControl('', [
        //     Validators.required
        //     // Validators.minLength(9),
        //     // Validators.maxLength(9)
        //   ])
        // });
    };
    ManageProductsComponent.prototype.openAddForm = function () {
        this.isAddForm = true;
        if (this.isEditForm) {
            this.isEditForm = false;
        }
    };
    ManageProductsComponent.prototype.openEditForm = function () {
        this.isEditForm = true;
        if (this.isAddForm) {
            this.isAddForm = false;
        }
    };
    // onFileChange(event) {
    //   if(event.target.files.length > 0) {
    //     let file = event.target.files[0].name;
    //     console.log("event.target.files[0]",file)
    //     //this.formGroup.get('picture').setValue(file);
    //     this.formGroup.get('picture').setValue(file, {emitModelToViewChange: false});
    //   }
    // }
    ManageProductsComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.formGroup.get('picture').setValue(file);
        }
    };
    ManageProductsComponent.prototype.prepareSave = function () {
        var input = new FormData();
        console.log('avant', input);
        input.append('productName', this.formGroup.get('productName').value);
        input.append('productId', this.formGroup.get('productId').value);
        input.append('price', this.formGroup.get('price').value);
        input.append('picture', this.formGroup.get('picture').value);
        input.append('category', this.formGroup.get('category').value);
        console.log('apres', input);
        return input;
    };
    ManageProductsComponent.prototype.createNewProduct = function () {
        var _this = this;
        var formModel = this.prepareSave();
        this.loading = true;
        this._productsService.createProduct(formModel).subscribe(function (result) {
            console.log(result);
        }, function (error) {
            alert('error!');
        });
        //this.http.post('apiUrl', formModel)
        //this.createNewProduct();
        setTimeout(function () {
            //alert('done!');
            _this.router.navigate(['/admin/category/', _this.formGroup.get('category').value]);
            _this.loading = false;
        }, 1000);
    };
    //@Input()product : product;
    ManageProductsComponent.prototype.AddProduct = function (_product) {
        //_product.added = true;
        this._productsService.addProductToList(_product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManageProductsComponent.prototype, "fileInput", void 0);
    ManageProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'manage-products',
            template: __webpack_require__(/*! ./manage-products.component.html */ "./src/app/manage-products/manage-products.component.html"),
            styles: [__webpack_require__(/*! ./manage-products.component.css */ "./src/app/manage-products/manage-products.component.css")],
            inputs: ['product']
        }),
        __metadata("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ManageProductsComponent);
    return ManageProductsComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar  {\r\n    height : 120px;\r\n    background-color: brown;\r\n    width : 100%;\r\n    color:white\r\n    \r\n}\r\n\r\nnav-item li a {\r\n    display:inline-block;\r\n    text-decoration:none;\r\n    padding:0 10px;\r\n    color:#fff;\r\n  }\r\n\r\nnav-item li a:hover {\r\n    background-color:#000;\r\n    color:#fff;\r\n  }\r\n\r\n.glyphicon .glyphicon-search{\r\n    color:white;\r\n    font-size: 100px\r\n}\r\n\r\n.navbar-nav[_ngcontent-c1] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-left: 54%;\r\n    list-style: none;\r\n}\r\n\r\n.nav-item .contact {\r\n    /* width: 100px;\r\n    height: 50px; */\r\n    padding: 10px;\r\n    /* background-color: yellow; */\r\n    border : 1px;\r\n    box-shadow: 3px 3px 3px grey;\r\n}\r\n\r\n/* .nav-item {\r\n    float:right\r\n}  */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <!-- <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\" >\n      My Shop Online\n      <! <img src=\"./assets/img/logo.jpg\"> -->\n    <!-- </a> -->\n   \n        <!-- <a class=\"nav-link\"routerLink=\"/home\" routerLinkActive=\"active\" >Home </a> -->\n     \n    <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Product name\"> -->\n      <!-- <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\"><i class=\"fas fa-search\"></i></button> -->\n      <!-- <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n\n    </form>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n       \n        <li class=\"nav-item\">\n          <a class=\" contact nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" >Contact phone and email</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" >Hello guest/name</a>\n        </li>\n        \n      </ul>\n     \n    </div>\n  </nav> -->\n\n\n\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" routerLink=\"/home\" routerLinkActive=\"active\" >\n      My Shop Online\n      <!-- <img src=\"./assets/img/logo.jpg\"> -->\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n     \n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n        <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\"><i class=\"fas fa-search\"></i></button>\n      </form>\n     <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" data-uid=\"uid88529\">Home <span class=\"sr-only\">(current)</span>Contact phone and email</a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\" contact nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" >Contact phone and email</a>\n        </li> -->\n        <li *ngIf=\"logged.token\" class=\"nav-item\">\n            {{dispUserName()}}\n            <a href=\"#\" (click)=\"doLogout()\">Logout</a>\n          <!-- <li *ngIf=\"logged.token\">{{dispUserName()}} <a href=\"#\" (click)=\"doLogout()\">Logout</a></li> -->\n\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" data-uid=\"uid70156\">About</a>\n        </li> -->\n      </ul>\n       \n    </div>\n  </nav>\n\n\n  \n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_userService) {
        this._userService = _userService;
        this.logged = null;
        this.logged = this._userService.logged;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.doLogout = function () {
        this._userService.doLogout();
        return false;
    };
    NavbarComponent.prototype.dispUserName = function () {
        var u = '';
        if (this.logged.token) {
            u = this.logged.user.username;
            // if(this.logged.user.level ==2) {
            //   u = `~~${u}~~`;
            // }
        }
        return u;
    };
    NavbarComponent.prototype.dispUserId = function () {
        var i = '';
        if (this.logged.token) {
            i = this.logged.user._id;
            // if(this.logged.user.level ==2) {
            //   u = `~~${u}~~`;
            // }
        }
        return i;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/order.service.ts":
/*!**********************************!*\
  !*** ./src/app/order.service.ts ***!
  \**********************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderService = /** @class */ (function () {
    function OrderService(_http) {
        this._http = _http;
        this._endpointOrders = "http://localhost:3000/shopping/api/orders";
    }
    OrderService.prototype.createOrder = function (params) {
        return this._http.post(this._endpointOrders, params);
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"  col-md-6 box form-group\">\n            <div class=\"inner\">\n                <div class=\"col-md-12\">\n                   \n                  <cart></cart>\n                  \n                    \n                  </div>\n              </div>\n         \n        </div>\n        <div class=\"  col-md-6 box form-group\">\n           <shipping></shipping>\n         \n        </div>\n        \n      </div>\n      \n    \n    \n    "

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/product.ts":
/*!****************************!*\
  !*** ./src/app/product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());

// export class Product {
//     constructor(public id:number, public first_name : String,public added : boolean, public last_name : String, public current_location : String, public current_company : String, public total_experience : String, profile_picture : String, current_role : String) {}
//    }


/***/ }),

/***/ "./src/app/products.service.ts":
/*!*************************************!*\
  !*** ./src/app/products.service.ts ***!
  \*************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsService = /** @class */ (function () {
    function ProductsService(_http) {
        this._http = _http;
        this._endpointProducts = "http://localhost:3000/shopping/api/products";
        this.listProductSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.Products = [];
        this.ListProductState = this.listProductSubject.asObservable();
    }
    ProductsService.prototype.getProducts = function () {
        var call = this._endpointProducts;
        return this._http.get(call);
    };
    ProductsService.prototype.getproductsByCategory = function (params) {
        if (params === void 0) { params = null; }
        var call = this._endpointProducts;
        if (params) {
            if (params.id) {
                call += "/" + params.id; // have categories id GET /categories/:id
                console.log(call);
            }
            // else if(params.uid) {
            //   call += `/user/${params.uid}`; // have user id GET /categories/user/:id       
            // }      
        }
        console.log(call);
        return this._http.get(call);
    };
    ProductsService.prototype.getProductById = function (params) {
        var call = this._endpointProducts;
        if (params) {
            call += "/" + params.id;
            return this._http.get(call);
        }
    };
    ProductsService.prototype.createProduct = function (params) {
        this.addProductToList;
        return this._http.post(this._endpointProducts, params);
    };
    // updateProduct(params) { 
    //   this.addProductToList;   
    //   return this._http.put< any >(this._endpointProducts,params);
    // }
    ProductsService.prototype.addProductToList = function (_product) {
        console.log('add product to list');
        this.Products.push(_product);
        this.listProductSubject.next({ products: this.Products });
        this.getProducts();
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary {\r\n                background-color: #E7A331;\r\n                color: #ffffff;\r\n                border: 2px solid #E7A331;\r\n                text-transform: uppercase;\r\n                border-radius: 4px;\r\n            }\r\n            .btn-primary:hover {\r\n                background-color: #d6962c;\r\n                border-color: #d6962c;\r\n                color: #fff;\r\n            }\r\n            /*BOOTSNIP CARD SHOP*/\r\n            /* * {\r\n  font-family: \"Roboto\";\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-decoration: none;\r\n  letter-spacing: 1px;\r\n  box-sizing: border-box;\r\n} */\r\n            /* body {\r\n  background: #f9fafa;\r\n  padding: 20px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n} */\r\n            .block {\r\n  margin: 20px;\r\n  border-radius: 4px;\r\n  width: 27%;\r\n  /* min-height: 430px; */\r\n  background: #fff;\r\n  padding: 23px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 0 2px 55px rgba(0,0,0,0.1);\r\n}\r\n            .top {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  padding-bottom: 10px;\r\n}\r\n            .top ul {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n            .top a {\r\n  color: #9e9e9e;\r\n}\r\n            .top a:hover {\r\n  color: #c7ccdb;\r\n}\r\n            .converse {\r\n  padding: 2px 10px;\r\n  border-radius: 20px;\r\n  text-transform: uppercase;\r\n  font-size: 14px;\r\n}\r\n            .middle {\r\n  margin-bottom: 20px;\r\n}\r\n            .middle img {\r\n  width: 100%;\r\n}\r\n            .bottom {\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          /* flex-grow: 1; */\r\n}\r\n            .heading {\r\n  font-size: 17px;\r\n  text-transform: uppercase;\r\n  margin-bottom: 5px;\r\n  letter-spacing: 0;\r\n}\r\n            .info {\r\n  font-size: 14px;\r\n  color: #969696;\r\n  margin-bottom: 10px;\r\n}\r\n            .style {\r\n  font-size: 16px;\r\n  margin-bottom: 20px;\r\n}\r\n            /* .old-price {\r\n  color: #f00;\r\n  text-decoration: line-through;\r\n} */\r\n            /* .portfolio{\r\n                background:url(./assets/Mix2.jpg) center top no-repeat;\r\n                -moz-background-size: cover;\r\n                -webkit-background-size: cover;\r\n                -o-background-size: cover;\r\n                background-size: cover;\r\n                width: 100%;\r\n                overflow: hidden;\t\r\n            } */\r\n            /* .portfolio_content{\r\n                padding-bottom:120px;\r\n                display:inline-block;\r\n            }\r\n            .portfolio .portfolio_content .head_title h3{\r\n                color:#000000;\r\n            }\r\n            .portfolio .portfolio_content .head_title h4{\r\n                color:#000000;\r\n            }\r\n\r\n            .single_portfolio_text{\r\n                display:inline-block;\r\n                padding: 0 5px 2.5px 5px;\r\n                position:relative;\r\n                overflow:hidden;\r\n\r\n            }\r\n            .single_portfolio_text img{\r\n                width:100%;\r\n            }\r\n\r\n            .single_portfolio_text:hover .portfolio_images_overlay{\r\n                top:5%;\r\n                left: 5%;\r\n            }\r\n\r\n            .portfolio_images_overlay{\r\n                width: 90%;\r\n                height: 90%;\r\n                background: rgba(0, 0, 0, .5);\r\n                padding: 20px;\r\n                margin: 0 auto;\r\n                top:-100%;\r\n                left: 5%;\r\n                position: absolute;\r\n                transition:.6s;\r\n            }\r\n            .portfolio_images_overlay h6{\r\n                text-transform:uppercase;\r\n                color:#fff;\r\n                font-size:2rem;\r\n                line-height:2.575rem;\r\n                font-weight: 500;\r\n                margin-bottom: 1rem;\r\n                margin-top: 1rem;\r\n                cursor:pointer\r\n            }\r\n\r\n            .portfolio_images_overlay p.product_price{\r\n                font-size:2.5725rem;\r\n                color:#fff;\r\n                line-height:3rem;\r\n            }\r\n            .portfolio_images_overlay .btn{\r\n                margin-top: 25px;\r\n            }\r\n\r\n            @media (min-width:769px) and (max-width:991px) {\r\n                .portfolio_images_overlay {\r\n                    padding: 0px;\r\n                }\r\n            }\r\n            @media (max-width:768px) {\r\n                .portfolio_images_overlay{\r\n                    padding: 170px 20px;\r\n                }\r\n            }\r\n            @media (max-width:580px) {\r\n                .portfolio_images_overlay{\r\n                    padding: 100px 20px;\r\n                }\r\n            }\r\n            @media (max-width:480px) {\r\n                .portfolio_images_overlay{\r\n                    padding: 40px 20px;\r\n                }\r\n            }\r\n            @media (max-width:320px) {\r\n                .portfolio_images_overlay{\r\n                    padding: 20px;\r\n                }\r\n            } */\r\n"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isAdmin\" class=\"row\">\n\n  <div  (click)=\"open(content); onSelect(product);\" *ngFor=\"let product of products\" >\n\n    <div class=\"middle\"><img [src]=\" 'http://localhost:3000/'+product.picture\" [alt]=\"product.product_name\" [title]=\"product.product_name\"></div>\n\n    <div class=\"bottom\">\n      <div class=\"price\">{{price}}{{product.price}} </div>\n      <div class=\"heading\"> <a routerLink=\"/shop/product/{{id}}\">{{product.product_name}}</a></div>\n      <div class=\"info\">{{product._category.category_name | json}}</div>\n      <div class=\"style\">{{product._id}}</div>\n    </div>\n\n\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">The product you choose !!</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"item-name\">\n        </div>\n        <div class=\"middle\"><img [src]=\" 'http://localhost:3000/'+product.picture\" [alt]=\"product.product_name\" [title]=\"product.product_name\"></div>\n\n        <div class=\"bottom\">\n          <div class=\"price\"> {{price}}{{product.price}} </div>\n          <div class=\"heading\"> <a routerLink=\"/shop/product/{{id}}\">{{product.product_name}}</a></div>\n          <div class=\"info\">{{product._category.category_name | json}}</div>\n          <div class=\"style\">{{product._id}}</div>\n        </div>\n        <form [formGroup]=\"formGroup\">\n          <div class=\"form-group\">\n            <!-- <label for=\"product._id\">product._id</label> -->\n            <input type=\"text\" [(ngModel)]=\"productId\" class=\"form-control\" formControlName=\"productId\" />\n\n          </div>\n          <div class=\"form-group\">\n            <label for=\"quantity\">Select quantity</label>\n            <!-- <select [(ngModel)]=\"quantity\" class=\"form-control\" formControlName=\"Quantity\">\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n            </select> -->\n            <input type=\"number\" [(ngModel)]=\"quantity\" formControlName=\"Quantity\">\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Save click')\">Close</button> -->\n        <!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addToCart(product)\">Add</button> -->\n\n        <div class=\"product__button-wrap\">\n          <!-- <button  *ngIf=\"product.added\"  (click)=\"RemoveProduct(product)\" class=\"btn btn-primary\">Remove -->\n          <!-- </button> -->\n          <button (click)=\"AddProduct(product);c('Save click')\" class=\"btn btn-primary\">Add to\n            cart\n          </button>\n          <!-- <button (click)=\"addToCart(product)\" class=\"btn btn-sm btn-primary\">Add to Cart</button> -->\n         \n        \n      </div>\n    </div>\n    </ng-template>\n\n    <hr>\n\n  </div>\n</div>\n\n<div *ngIf=\"isAdmin\" class=\"row\">\n  <div  (click)=\" onSelect(product);\" *ngFor=\"let product of products\">\n\n    <div class=\"middle\"><img [src]=\" 'http://localhost:3000/'+product.picture\" [alt]=\"product.product_name\" [title]=\"product.product_name\"></div>\n\n    <div class=\"bottom\">\n      <div class=\"price\">{{price}}{{product.price}} </div>\n      <div class=\"heading\"> <a routerLink=\"/shop/product/{{id}}\">{{product.product_name}}</a></div>\n      <div class=\"info\">{{product._category.category_name | json}}</div>\n      <div class=\"style\">{{product._id}}</div>\n    </div>\n    <hr>\n  </div>\n</div>\n\n<!-- ////////////////////////////////// -->\n\n<!-- <div class=\"row\">\n  <div *ngFor=\"let product of products\">\n      <div class=\"col-xs-4 padding-10\">\n          <mat-card class=\"card-container-phone\">\n              <mat-card-header>\n                  <div md-card-avatar class=\"example-header-image\"></div>\n                  <md-card-title>\n                      <span class=\"badge\">{{product.id}}</span> <strong>{{product.name}}</strong>    \n                  </md-card-title>\n              </mat-card-header>\n\n              <img width=\"220\" height=\"220\" class=\"image-align-center padding-bottom-10\" src={{product.src}} />\n              <mat-card-content>\n              <p>{{product.info}}</p>\n              </mat-card-content>\n              <mat-card-actions>\n                  <div style=\"display: flex\">\n                      <span class=\"padding-right-5\">Quantity: </span>\n                      <input type=\"number\" [(ngModel)]=\"quantity\">\n                  </div>\n                  <h1 class=\"badge\">${{product.price}}</h1>\n                  <button (click)=\"addToCart(product)\" class=\"btn btn-sm btn-primary\">Add to Cart</button>\n                  <button (click)=\"clickedProduct(product)\" class=\"btn btn-sm btn-success\">Details</button>\n              </mat-card-actions>\n          </mat-card>\n      </div>\n\n      <div class=\"col-xs-4\">\n          <div class=\"thumbnail product\">\n              <img width=\"250\" height=\"250\" src={{product.src}} />\n              <span class=\"badge\">{{product.id}}</span> <strong>{{product.name}}</strong>\n              <p>{{product.info}}</p>\n              <h1 class=\"badge\">${{product.price}}</h1>\n              <button (click)=\"addToCart(product)\" class=\"btn btn-sm btn-primary\">Add to Cart</button>\n              <button (click)=\"clickedProduct(product)\" class=\"btn btn-sm btn-success\">Details</button>\n          </div>\n      </div>-->\n  <!-- </div> -->\n<!-- </div> -->\n\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(modalService, fb, _productsService, _cartService, router, route, location, _userService) {
        this.modalService = modalService;
        this.fb = fb;
        this._productsService = _productsService;
        this._cartService = _cartService;
        this.router = router;
        this.route = route;
        this.location = location;
        this._userService = _userService;
        this.selectProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tmp = {};
        this.logged = null;
        this.isAdmin = true;
        this.logged = this._userService.logged;
    }
    ProductsComponent.prototype.onSelect = function (prod) {
        if (this.logged.user.role == "Admin") {
            this.isAdmin = true;
            this.selectProduct.emit(prod);
            //this.router.navigate(['/admin/category' , cat._id]);
            //alert('admin')
        }
        else {
            this.isAdmin = false;
            this.selectProduct.emit(prod);
            this.router.navigate(['/shop/product/', prod._id]);
            console.log("product id", prod._id);
        }
    };
    ProductsComponent.prototype.AddProduct = function (_product) {
        //_product.added = true;
        this._cartService.addProduct(_product);
        var createParams = {
            id: this.productId,
            quantity: this.quantity
        };
        this._cartService.addProdToCart(createParams).subscribe(function (result) {
            console.log('result', result);
            //this.router.navigate(['shop'])
            //this.location.back();
        }, function (error) {
            alert('error!');
        });
    };
    // RemoveProduct(_product : Product) {
    //   //_product.added = false;
    //   this
    //       ._cartService
    //       .removeProduct(_product._id);
    // }
    ProductsComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ProductsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // "_id" : ObjectId("5b6ef2967bee34dd68bfab17"),
    // "product_name" : "product47",
    // "_category" : ObjectId("5b5917e6f413b57c2219e05f"),
    // "price" : 56,
    // "picture" : "uploads/1533997718619.isaac1518151809.jpg",
    // public addToCart(product: Product) {
    //   this.cartService.addToCart(product);
    //   this.router.navigateByUrl('/');
    // }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.loaderService.show();
        this.subscription = this
            ._productsService
            .ListProductState
            .subscribe(function (state) {
            _this.products = state.products;
            console.log(_this.products);
        });
        // this._cartService.getProducts().subscribe(
        //   data => this.Products = data, //Bind to view
        //    err => {
        //        // Log errors if any
        //        console.log(err);
        //    });
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            Quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
            ]),
            productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
            ])
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _product__WEBPACK_IMPORTED_MODULE_2__["Product"])
    ], ProductsComponent.prototype, "product", void 0);
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")],
            inputs: ['category', 'products'],
            outputs: ['selectProduct'],
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/select-modal/select-modal.component.css":
/*!*********************************************************!*\
  !*** ./src/app/select-modal/select-modal.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/select-modal/select-modal.component.html":
/*!**********************************************************!*\
  !*** ./src/app/select-modal/select-modal.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/select-modal/select-modal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/select-modal/select-modal.component.ts ***!
  \********************************************************/
/*! exports provided: NgbdModalContent, SelectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModalComponent", function() { return SelectModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal, _router) {
        this.activeModal = activeModal;
        this._router = _router;
        this.clickevent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NgbdModalContent.prototype.addToCart = function () {
        console.log('selectModalComponent11');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "price", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "clickevent", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Hi selectModalComponent!</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n    <div class=\"heading\">{{name}}</div>\n    <div class=\"info\">{{category | json}}</div>\n    <div class=\"price\">{{price}} </div>\n    <div class=\"style\">{{id}}</div>\n    <form>\n    <div class=\"form-group\">\n    <label for=\"exampleSelect1\">Select quantity</label>\n    <select class=\"form-control\" id=\"exampleSelect1\">\n      <option>1</option>\n      <option>2</option>\n      <option>3</option>\n      <option>4</option>\n      <option>5</option>\n    </select>\n  </div>\n  </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.close('Close click')\">Close</button>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addToCart()\">Add</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var SelectModalComponent = /** @class */ (function () {
    function SelectModalComponent(modalService) {
        this.modalService = modalService;
    }
    SelectModalComponent.prototype.ngOnInit = function () {
    };
    SelectModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-modal',
            template: __webpack_require__(/*! ./select-modal.component.html */ "./src/app/select-modal/select-modal.component.html"),
            styles: [__webpack_require__(/*! ./select-modal.component.css */ "./src/app/select-modal/select-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], SelectModalComponent);
    return SelectModalComponent;
}());



/***/ }),

/***/ "./src/app/shipping/shipping.component.css":
/*!*************************************************!*\
  !*** ./src/app/shipping/shipping.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .far .fa-lock-alt {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 7px;\r\n }\r\n .credit-card {\r\n     position :relative\r\n }"

/***/ }),

/***/ "./src/app/shipping/shipping.component.html":
/*!**************************************************!*\
  !*** ./src/app/shipping/shipping.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner\">\n    <div class=\"col-md-12\">\n      \n        <h4>Order</h4>\n        <hr>\n        shipping details\n        <hr>\n        <form [formGroup]=\"formGroup\" (validSubmit)=\"createOrder()\">\n\n          <div class=\"form-group\">\n            <label for=\"city\">City</label>\n        <select [(ngModel)]=\"tmp.city\" class=\"custom-select\" formControlName=\"city\">\n            <!-- <option value=''>-- SELECT CITY-- </option> -->\n          <option *ngFor=\"let city of cities\" value= {{city.name}}>\n            {{city.name}}\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"adress\">Adress</label>\n        <input  [(ngModel)]=\"tmp.delivery_adress\"  type=\"text\" class=\"form-control\" formControlName=\"deliveryAdress\" id=\"adress\" placeholder=\"Adress\">\n      </div>\n            <div class=\"form-group\">\n                <label for=\"deliveryDate\">Shipping date</label>\n                <div class=\"input-group\">\n                  <input [(ngModel)]=\"tmp.delivery_date\" id=\"deliveryDate\" class=\"form-control\" formControlName=\"deliveryDate\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\">\n                      <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <h4>payments:</h4>\n              <hr>\n              <div class=\" credit-card form-group\">\n                  <label for=\"credit card\">credit card</label>\n                  <i class=\"far fa-lock-alt\"></i>\n                  <input [(ngModel)]=\"tmp.payment_method\"  type=\"text\" class=\"form-control\" formControlName=\"paymentMethod\" id=\"card\"  placeholder=\"credit card\">\n                </div>\n              <!-- <a routerLink=\"#\" routerLinkActive=\"active\">\n                <button type=\"submit\" class=\"btn btn-primary\">Order</button>\n              </a> -->\n            <!-- <a routerLink=\"/sign-in\" routerLinkActive=\"active\">Sign up</a> -->\n            <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!formGroup.valid\" (click)=\"open(content)\">Order</button>\n\n          </form>\n       <!-- <a routerLink=\"#\" routerLinkActive=\"active\">\n          <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Order</button>\n</a> -->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"dateOfBirth\">Date of birth</label>\n          <div class=\"input-group\">\n            <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\">\n                <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n              </button>\n            </div>\n          </div>\n        </div>\n\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Save click')\">Save</button>\n    </div>\n  </ng-template>\n  \n  \n  <hr>\n  \n  <pre>{{closeResult}}</pre>\n      \n        \n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/shipping/shipping.component.ts":
/*!************************************************!*\
  !*** ./src/app/shipping/shipping.component.ts ***!
  \************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../city */ "./src/app/city.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShippingComponent = /** @class */ (function () {
    function ShippingComponent(modalService, _orderService, _userService, _router) {
        this.modalService = modalService;
        this._orderService = _orderService;
        this._userService = _userService;
        this._router = _router;
        this.tmp = {};
        this.createParams = { user: null,
            cart: null,
            total_amount: null,
            delivery_date: null };
        this.logged = null;
        this.cities = [
            new _city__WEBPACK_IMPORTED_MODULE_5__["City"](1, 'Tel-aviv'),
            new _city__WEBPACK_IMPORTED_MODULE_5__["City"](2, 'Jerusalem'),
            new _city__WEBPACK_IMPORTED_MODULE_5__["City"](3, 'Haifa'),
            new _city__WEBPACK_IMPORTED_MODULE_5__["City"](4, 'Hertzelia')
        ];
        this.logged = this._userService.logged;
    }
    ShippingComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ShippingComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // "_id" : ObjectId("5b8ff03ebc02d12d44c90c44"),
    // "city" : "next step",
    // "delivery_adress" : "next step",
    // "delivery_date" : ISODate("2018-09-05T15:01:42.721Z"),
    // "payment_method" : "next step",
    // "_user" : ObjectId("5b6af8af533696dbf49424b6"),
    // "_cart" : ObjectId("5b6ef17a7bee34dd68bfab14"),
    // "total_amount" : ObjectId("5b6af53d79f7c3d0b4cc3375"),
    // "order_date" : ISODate("2018-09-05T15:03:26.758Z"),
    ShippingComponent.prototype.createOrder = function () {
        this.createParams.user = this.logged.user.id;
        this.createParams.cart = this.logged.user.cart;
        //this.createParams.total_amount =this.logged.user.total_amount;
        //this.createParams.order_date =this.logged.user.order_date;
        this.createParams.city = this.tmp.city.trim();
        this.createParams.delivery_adress = this.tmp.delivery_adress.trim();
        this.createParams.delivery_date = JSON.stringify(this.tmp.delivery_date);
        this.createParams.payment_method = this.tmp.payment_method.trim();
        console.log('params', this.createParams);
        //  if(this.createParams.city!=''&& this.createParams.adress !='' &&
        //   this.createParams.first_name !='' && this.createParams.last_name !='' ) {
        this._orderService.createOrder(this.createParams).subscribe(function (result) {
            //this.loadUsers();
            //this.tmp.id = null;
            console.log(result);
        }, function (error) {
            alert('error!');
        }),
            this._router.navigate(['/home']);
        // }
    };
    ShippingComponent.prototype.ngOnInit = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            deliveryAdress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            deliveryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
            paymentMethod: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                // Validators.pattern(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ]),
        });
    };
    ShippingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shipping',
            template: __webpack_require__(/*! ./shipping.component.html */ "./src/app/shipping/shipping.component.html"),
            styles: [__webpack_require__(/*! ./shipping.component.css */ "./src/app/shipping/shipping.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ShippingComponent);
    return ShippingComponent;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .box{ */\r\n    /* resize: both;\r\n    overflow: auto;\r\n    border : 1px solid ; */\r\n    /* } */\r\n    .box {\r\n    position: relative;\r\n    /* top: 200px; */\r\n    /* display: flex; */\r\n    /* align-items: center;\r\n    justify-content: center; */\r\n    /* width: 300px; */\r\n    height: 520px;\r\n    /* background-color: #fd4140; */\r\n    border: solid 1px #121621;\r\n    color: #121621;\r\n    margin: auto;\r\n  }\r\n    .resize-handle {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    right: 10px;\r\n    cursor: se-resize;\r\n  }\r\n    .row-product{\r\n    /* height:520px; */\r\n    overflow:hidden;\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"  col-md-4 box form-group\">\n        <div class=\"inner\">\n            <div class=\"col-md-12\">\n               \n              <cart> </cart>\n              \n                \n              </div>\n          </div>\n     \n    </div>\n\n    <!-- <div\n    class=\" col-md-4 box form-group\"\n    [ngStyle]=\"style\"\n    mwlResizable\n    [validateResize]=\"validate\"\n    [resizeEdges]=\"{bottom: true, right: true, top: true, left: true}\"\n    [enableGhostResize]=\"true\"\n    [resizeSnapGrid]=\"{left: 50, right: 50}\"\n    (resizeEnd)=\"onResizeEnd($event)\">\n    <img\n      src=\"http://i.imgur.com/eqzz2dl.gif\"\n      class=\"resize-handle\"\n      mwlResizeHandle\n      [resizeEdges]=\"{bottom: true, right: true}\">\n      <div class=\"inner\">\n            <div class=\"col-md-12\">\n               \n              <cart></cart>\n              \n                \n              </div>\n          </div>\n  </div> -->\n    <div class=\"  col-md-8 box form-group\">\n            <div class=\"row\">\n                    <div class=\"inner\">\n                            <div class=\"col-md-12\">\n                              <!-- <categories [parentData] = \"categories\"></categories> -->\n    <categories (selectCategory) = \"onSelectCategory($event)\" [categories] = \"categories\"></categories>\n\n                              </div>\n                          </div>\n            </div>\n\n\n\n            \n        <div class=\"row row-product\">\n                <div class=\"inner\">\n                        <div class=\"col-md-12\">\n     <products *ngIf =\"selectedCategory\"  [category] = \"selectedCategory\" ></products>\n                          </div>\n                      </div>\n        </div>\n        <div class=\"row row-product\">\n            <div class=\"inner\">\n                    <div class=\"col-md-12\">\n     <products  [products] = \"products\" ></products>\n                      </div>\n                  </div>\n    </div>\n        \n     \n    </div>\n    \n  </div>\n  \n\n"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products.service */ "./src/app/products.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShopComponent = /** @class */ (function () {
    function ShopComponent(_categoryService, _router, route, _productsService, _cartService) {
        this._categoryService = _categoryService;
        this._router = _router;
        this.route = route;
        this._productsService = _productsService;
        this._cartService = _cartService;
        this.style = {};
    }
    ShopComponent.prototype.validate = function (event) {
        var MIN_DIMENSIONS_PX = 50;
        if (event.rectangle.width &&
            event.rectangle.height &&
            (event.rectangle.width < MIN_DIMENSIONS_PX ||
                event.rectangle.height < MIN_DIMENSIONS_PX)) {
            return false;
        }
        return true;
    };
    ShopComponent.prototype.onResizeEnd = function (event) {
        this.style = {
            position: 'fixed',
            left: event.rectangle.left + "px",
            top: event.rectangle.top + "px",
            width: event.rectangle.width + "px",
            height: event.rectangle.height + "px"
        };
    };
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._categoryService.getCategories()
            .subscribe(function (resCategoryData) { return _this.categories = resCategoryData; });
        console.log(this.categories);
        // this._productsService.getproductsByCategory()
        //  .subscribe(resProductsData=>this.products = resProductsData)
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            _this._productsService.getproductsByCategory({ id: _this.id })
                .subscribe(function (resProductsData) { return _this.products = resProductsData; });
            console.log('pro', _this.products);
        });
        this._productsService.getProducts()
            .subscribe(function (resProductsData) { return _this.products = resProductsData; });
        console.log(this.products);
    };
    ShopComponent.prototype.onSelectCategory = function (category) {
        // this.selectedCategory = category;
        this.selectedCategory = category;
        //this.selectedProduct = this.products
        console.log("category", this.selectedCategory);
        console.log("products", this.products);
    };
    ShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")],
        }),
        __metadata("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"  col-md-6 box form-group\">\n        <div class=\"inner\">\n            <div class=\"col-md-12\">\n                Sign-in user step-1\n                <hr>\n                <form [formGroup]=\"formGroup\" (validSubmit)=\"checkUserStepOne()\">\n                    <div class=\"form-group\">\n                      <label for=\"id\">ID</label>\n                      <input [(ngModel)]=\"tmp.ID\"  type=\"text\" class=\"form-control\" id=\"ID\" formControlName=\"ID\" placeholder=\"Enter your ID\">\n                     \n                    </div>\n                   \n                    <div class=\"form-group\">\n                      <label class=\"control-label\">Email</label>\n                      <input [(ngModel)]=\"tmp.username\" type=\"text\" class=\"form-control\" formControlName=\"Email\">\n                    </div>\n                   \n                      <div class=\"form-group\">\n                        <label class=\"control-label\">Password</label>\n                        <input [(ngModel)]=\"tmp.password\" type=\"password\" class=\"form-control\" formControlName=\"Password\" placeholder=\"Password\">\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"PasswordConfirm\">Password confirm</label>\n                        <input [(ngModel)]=\"tmp.passwordConfirm\"   type=\"password\" class=\"form-control\" formControlName=\"PasswordConfirm\" id=\"PasswordConfirm\" placeholder=\"Password confirm\" required>\n                        <div class=\"invalid-feedback\">Sorry, password do not match. Try another?</div>\n                      </div>\n                      <!-- <a routerLink=\"/home\" routerLinkActive=\"active\"> -->\n                        <!-- <button (click)=\"checkUserStepOne()\" type=\"submit\" class=\"btn btn-primary\">Continue</button> -->\n                      <!-- </a> -->\n                      <!-- <button class=\"btn btn-default\" type=\"button\" (click)=\"onReset()\">Reset</button> -->\n                       <!-- <button class=\"btn btn-primary pull-right\" type=\"submit\">Continue</button> -->\n                       <button class=\"btn btn-primary pull-right\" type=\"submit\" [disabled]=\"!formGroup.valid\">Continue</button>\n                   \n                  \n              \n                  </form>\n              \n              \n                \n              </div>\n          </div>\n     \n    </div>\n    <div class=\"  col-md-6 box form-group\">\n        <div class=\"inner\">\n            <div class=\"col-md-12\">\n                Sign-in user step-2\n                <hr>\n                <form [formGroup]=\"formGroup1\" (validSubmit)=\"createNewUser()\">\n                <div class=\"form-group\">\n                    <label for=\"city\">City</label>\n                <select [(ngModel)]=\"tmp.city\" class=\"custom-select\" formControlName=\"city\">\n                    <!-- <option value=''>-- SELECT CITY-- </option> -->\n                  <option *ngFor=\"let city of cities\" value= {{city.id}}>\n                    {{city.name}}\n                  </option>\n                </select>\n              </div>\n                <!-- <form> -->\n                    <!-- <div class=\"form-group\">\n                        <select  [(ngModel)]=\"tmp.city\" class=\"custom-select\">\n                          <option selected=\"\">City</option>\n                          <option value=\"1\">Ashdod</option>\n                          <option value=\"2\">Jerusalem</option>\n                          <option value=\"3\">Haifa</option>\n                        </select>\n                      </div> -->\n                      <!-- <div class=\"form-group\">\n                        <label for=\"city\">City</label>\n                        <input  [(ngModel)]=\"tmp.city\"  type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Street\" required>\n                      </div> -->\n                   \n                    <div class=\"form-group\">\n                      <label for=\"adress\">Adress</label>\n                      <input  [(ngModel)]=\"tmp.adress\"  type=\"text\" class=\"form-control\" formControlName=\"adress\" id=\"adress\" placeholder=\"Adress\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"firstName\">First name</label>\n                        <input  [(ngModel)]=\"tmp.first_name\"  type=\"text\" class=\"form-control\" formControlName=\"first_name\" id=\"firstName\" aria-describedby=\"emailHelp\" placeholder=\"name\" required>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"lastName\">Last name</label>\n                        <input  [(ngModel)]=\"tmp.last_name\"  type=\"text\" class=\"form-control\" formControlName=\"last_name\" id=\"lastName\" placeholder=\"Last name\" required>\n                      </div>\n                   \n                      <!-- <a routerLink=\"/home\" routerLinkActive=\"active\"> -->\n                        <!-- <button (click)=\"createNewUser()\"  class=\"btn btn-primary\">Submit</button> -->\n                        <button class=\"btn btn-primary pull-right\" [disabled]=\"!formGroup1.valid\" type=\"submit\">Submit</button>\n                        <!-- <button class=\"btn btn-success\"[disabled]=\"!myForm.valid\"> -->\n                      <!-- </a> -->\n                    <!-- <a routerLink=\"/sign-in\" routerLinkActive=\"active\">Sign up</a> -->\n              \n                   </form>\n              \n              \n                \n              </div>\n          </div>\n     \n    </div>\n    \n  </div>\n  \n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../city */ "./src/app/city.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order.service */ "./src/app/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignInComponent = /** @class */ (function () {
    function SignInComponent(_userService, _orderService, _router) {
        this._userService = _userService;
        this._orderService = _orderService;
        this._router = _router;
        this.tmp = {};
        this.createParams = {};
        this.cities = [
            new _city__WEBPACK_IMPORTED_MODULE_2__["City"](1, 'Tel-aviv'),
            new _city__WEBPACK_IMPORTED_MODULE_2__["City"](2, 'Jerusalem'),
            new _city__WEBPACK_IMPORTED_MODULE_2__["City"](3, 'Haifa'),
            new _city__WEBPACK_IMPORTED_MODULE_2__["City"](4, 'Hertzelia')
        ];
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(15)
            ]),
            PasswordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)
            ]),
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(9),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(9)
            ])
        });
        //////
        this.formGroup1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            adress: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
        });
    };
    // onReset() {
    //   this.formGroup.reset();
    // }
    SignInComponent.prototype.checkUserStepOne = function () {
        this.createParams = {
            ID: this.tmp.ID.trim(),
            username: this.tmp.username.trim(),
            password: this.tmp.password.trim(),
            passwordConfirm: this.tmp.passwordConfirm.trim()
        };
        if (this.createParams.password != this.createParams.passwordConfirm) {
            alert('Password do not match');
        }
        else {
            console.log(this.createParams);
            console.log(this.formGroup);
            return this.createParams;
        }
    };
    SignInComponent.prototype.createNewUser = function () {
        this.createParams.city = this.tmp.city.trim();
        this.createParams.adress = this.tmp.adress.trim();
        this.createParams.first_name = this.tmp.first_name.trim();
        this.createParams.last_name = this.tmp.last_name.trim();
        console.log('params', this.createParams);
        //  if(this.createParams.city!=''&& this.createParams.adress !='' &&
        //   this.createParams.first_name !='' && this.createParams.last_name !='' ) {
        this._userService.createUser(this.createParams).subscribe(function (result) {
            //this.loadUsers();
            //this.tmp.id = null;
            console.log(result);
        }, function (error) {
            alert('error!');
        }),
            this._router.navigate(['/home']);
        // }
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// using data from api

var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(api) {
        this.api = api;
    }
    // loading HTTP_INTERCEPTORS and making it plus this interceptor a provider
    // makes sure an http request is intercepted and this function is called
    // right before the request is actually sent to server
    TokenInterceptorService.prototype.intercept = function (req, next) {
        // if service holds a token (not null, user is logged)
        if (this.api.token) {
            // cloning the request 
            var tokenizedHeader = req.clone({
                // adding header with authorization
                setHeaders: {
                    // Adding proper authorization with bearer format to header
                    Authorization: "Bearer " + this.api.token
                }
            });
            // procvide a way to continue with operation
            return next.handle(tokenizedHeader);
        }
        else {
            // no token, continue with the original request 
            return next.handle(req);
        }
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
        // HttpInterceptor is a decorator forcing service to implement intercept function
        ,
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.logged = {
            token: null,
            user: null
        };
        this.loginmsg = {
            text: null
        };
        this._endpointUsers = "http://localhost:3000/shopping/api/users";
        var _sess = localStorage.getItem('_sess');
        if (_sess) {
            this.setLogged(JSON.parse(_sess));
        }
    }
    UserService.prototype.setLogged = function (obj, notice, doStore) {
        if (notice === void 0) { notice = null; }
        if (doStore === void 0) { doStore = false; }
        this.logged.token = obj.token;
        this.logged.user = obj.user;
        this.loginmsg.text = notice;
        if (doStore) {
            localStorage.setItem('_sess', JSON.stringify(obj));
        }
    };
    UserService.prototype.createUser = function (params) {
        return this._http.post(this._endpointUsers, params);
    };
    Object.defineProperty(UserService.prototype, "token", {
        get: function () {
            return this.logged.token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "role", {
        get: function () {
            return this.logged.token ? this.logged.user.role : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "id", {
        get: function () {
            return this.logged.token ? this.logged.user._id : 0;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.doLogout = function () {
        this.setLogged({
            token: null,
            user: null
        }, null, true);
        this._router.navigate(['/']);
    };
    UserService.prototype.login = function (username, password) {
        var _this = this;
        return this._http.post(this._endpointUsers + "/login", {
            username: username,
            password: password
        }).subscribe(function (result) {
            if (result && result.token) {
                _this.setLogged(result, null, true);
                if (_this.logged.user.role == "Admin") {
                    _this._router.navigate(['/admin']);
                }
                else {
                    _this._router.navigate(['/shop']);
                }
                //this._router.navigate(['/admin']);
            }
            else {
                _this.setLogged({
                    token: null,
                    user: null
                }, 'Invalid Login', true);
            }
        }, function (err) {
            _this.setLogged({
                token: null,
                user: null
            }, 'Server Error', true);
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserService);
    return UserService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\meanStackProject\ShoppingOnline\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map