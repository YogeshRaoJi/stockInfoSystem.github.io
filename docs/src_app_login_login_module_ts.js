"use strict";
(self["webpackChunkangular_material_admin"] = self["webpackChunkangular_material_admin"] || []).push([["src_app_login_login_module_ts"],{

/***/ 9636:
/*!*************************************!*\
  !*** ./src/app/lib/http.Service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class HttpService {
    constructor(http) {
        this.http = http;
    }
    get(url) {
        return this.http.get(this.updataUrl(url));
    }
    post(url, body) {
        return this.http.post(this.updataUrl(url), body);
    }
    updataUrl(url) {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.origin + '/' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + '/' + url;
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
HttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 8223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    }
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8223);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);











class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule] }); })();


/***/ }),

/***/ 5180:
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _lib_http_Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/http.Service */ 9636);


class LoginService {
    constructor(http) {
        this.http = http;
    }
    logInFormApi(loginDetail) {
        return this.http.post('user/Authenticate', loginDetail);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_lib_http_Service__WEBPACK_IMPORTED_MODULE_0__.HttpService)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8223:
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login.service */ 5180);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var src_app_Services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/token.storage.service */ 3014);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);












const _c0 = ["loginForm"];
const _c1 = function () { return { "margin-bottom.px": 10 }; };
class LoginComponent {
    constructor(router, _loginService, _snackBar, _tokenService) {
        this.router = router;
        this._loginService = _loginService;
        this._snackBar = _snackBar;
        this._tokenService = _tokenService;
        this.loader = false;
    }
    ngOnInit() {
        this.loginModel = {
            email: "",
            password: ''
        };
    }
    onSubmit(loginForm) {
        this.loader = true;
        this._loginService.logInFormApi(this.loginModel).subscribe(res => {
            if (res.isAuthenticated) {
                // Authenticate user
                this.user = res.applicatonUser;
                this._tokenService.saveUser(this.user);
                this._tokenService.saveToken(res.accessToken);
                this._tokenService.isLoggedin();
                this.loader = false;
                this.router.navigate(['/dashboard']);
            }
            else {
                this.loader = false;
                // user isAuthenticated
                // this._snackBar.open('Cannonball!!', 'Splash', {
                //   duration: 2000,
                //   horizontalPosition: 'end',
                //   verticalPosition: 'top',
                // });
                // localStorage.setItem('isLoggedin', 'false');
            }
        }, 
        // unAuthenticated user logined 
        err => {
            this._snackBar.open(err.error.errors, '', {
                duration: 2000,
                horizontalPosition: 'end',
                verticalPosition: 'top',
                panelClass: ["snackBar-custom-style"]
            });
            this.loader = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_Services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.loginForm = _t.first);
    } }, decls: 22, vars: 5, consts: [[1, "login-page"], [1, "content", "px20"], [1, "login-form", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "text-center"], [1, "app-name"], ["fxLayout", "row"], ["fxFlexFill", ""], [1, "w-100"], ["matInput", "", "placeholder", "Email", "required", "", "id", "email", "name", "email", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "required", "", "placeholder", "Password", "id", "password", "name", "password", 3, "ngModel", "ngModelChange"], ["fxLayout", "row", "fxLayoutAlign", "space-between", "fxLayout.xs", "column", 1, "mt20", "mb20"], ["color", "primary", 3, "ngStyle.xs"], ["href", "javascript:void(0)"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "w-100", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.loginModel.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.loginModel.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-checkbox", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.loginModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.loginModel.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle.xs", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loader);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.FlexFillDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultStyleDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton], styles: [".login-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: relative;\n}\n.login-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  padding-bottom: 10px;\n  font-size: 32px;\n}\n.login-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  padding: 40px;\n  background: #ffffff;\n  max-width: 500px;\n  box-shadow: 0 0 20px #ddd;\n}\n.login-page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill {\n  box-shadow: 0 0 0 30px #ffffff inset;\n  -webkit-box-shadow: 0 0 0 30px #ffffff inset;\n}\n.login-page[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background: #3f51b5;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 50%;\n  right: 0;\n}\n.login-page[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: #ffffff;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUVFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7QUFDSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFDTjtBQUNJO0VBQ0UsYUFBQTtFQUNBLG1CQ25CRTtFRG9CRixnQkFBQTtFQUNBLHlCQUFBO0FBQ047QUFBTTtFQUNFLG9DQUFBO0VBQ0EsNENBQUE7QUFFUjtBQUVFO0VBQ0UsV0FBQTtFQUNBLG1CQy9CWTtFRGdDWixrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFBSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLG1CQ3ZDSTtFRHdDSixrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFBSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvc2Nzcy92YXJpYWJsZXMnO1xuXG4ubG9naW4tcGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmNvbnRlbnQge1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5hcHAtbmFtZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB9XG4gICAgLmxvZ2luLWZvcm0ge1xuICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjZGRkO1xuICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDMwcHggJHdoaXRlIGluc2V0O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDMwcHggJHdoaXRlIGluc2V0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiA1MCU7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cblxuXG5cblxuIiwiJHByaW1hcnktY29sb3I6ICMzZjUxYjU7XG4kd2hpdGU6ICNmZmZmZmY7XG4kbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuIl19 */", ".snackBar-custom-style{\r\n    background-color:red;\r\n    color:white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLFdBQVc7RUFDYiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgOjpuZy1kZWVwIC5zbmFja0Jhci1jdXN0b20tc3R5bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map