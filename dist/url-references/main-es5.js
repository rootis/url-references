function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./references/references.module */
        "./src/app/references/references.module.ts")).then(function (m) {
          return m.ReferencesModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [["role", "main", 1, "content"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".content[_ngcontent-%COMP%] {\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHByb2plY3RzXFxwZXJzb25hbFxcdXJsLXJlZmVyZW5jZXMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudFxuICBhbGlnbi1pdGVtczogY2VudGVyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgd2lkdGg6IDEwMCVcblxuc3ZnI2Nsb3Vkc1xuICBwb3NpdGlvbjogZml4ZWRcbiAgYm90dG9tOiAtMTYwcHhcbiAgbGVmdDogLTIzMHB4XG4gIHotaW5kZXg6IC0xMFxuICB3aWR0aDogMTkyMHB4XG4iLCIuY29udGVudCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5zdmcjY2xvdWRzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IC0xNjBweDtcbiAgbGVmdDogLTIzMHB4O1xuICB6LWluZGV4OiAtMTA7XG4gIHdpZHRoOiAxOTIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _references_references_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./references/references.module */
    "./src/app/references/references.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_fire__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _references_references_module__WEBPACK_IMPORTED_MODULE_8__["ReferencesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _references_references_module__WEBPACK_IMPORTED_MODULE_8__["ReferencesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
          imports: [_angular_fire__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _references_references_module__WEBPACK_IMPORTED_MODULE_8__["ReferencesModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/firebase.service.ts":
  /*!******************************************!*\
    !*** ./src/app/core/firebase.service.ts ***!
    \******************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppCoreFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");

    var FirebaseService =
    /*#__PURE__*/
    function () {
      function FirebaseService(db) {
        _classCallCheck(this, FirebaseService);

        this.db = db;
      }

      _createClass(FirebaseService, [{
        key: "getDocument",
        value: function getDocument(path) {
          return this.db.collection(FirebaseService.COLLECTION_PATH).doc(path);
        }
      }, {
        key: "add",
        value: function add(document, obj) {
          document.update({
            list: firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.arrayUnion(obj)
          });
        }
      }, {
        key: "delete",
        value: function _delete(document, obj) {
          document.update({
            list: firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.arrayRemove(obj)
          });
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService.COLLECTION_PATH = 'reference';

    FirebaseService.ɵfac = function FirebaseService_Factory(t) {
      return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]));
    };

    FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FirebaseService,
      factory: FirebaseService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/references/list/list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/references/list/list.component.ts ***!
    \***************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppReferencesListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _reference_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../reference.service */
    "./src/app/references/reference.service.ts");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../modal/modal.component */
    "./src/app/references/modal/modal.component.ts");
    /* harmony import */


    var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../preview/preview.component */
    "./src/app/references/preview/preview.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _core_firebase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../core/firebase.service */
    "./src/app/core/firebase.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ListComponent_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListComponent_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r19 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", index_r19 + 1, " ");
      }
    }

    function ListComponent_ng_container_8_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r20.title, "");
      }
    }

    function ListComponent_ng_container_8_td_2_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
      }

      if (rf & 2) {
        var element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var column_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", element_r24[column_r20.key], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ListComponent_ng_container_8_td_2_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var column_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", element_r24[column_r20.key], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r24[column_r20.key]);
      }
    }

    function ListComponent_ng_container_8_td_2_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var column_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r20.type === "TEXT" ? element_r24[column_r20.key].substring(0, 50) + " ..." : element_r24[column_r20.key]);
      }
    }

    function ListComponent_ng_container_8_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_ng_container_8_td_2_img_1_Template, 1, 1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_ng_container_8_td_2_a_2_Template, 2, 2, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListComponent_ng_container_8_td_2_span_3_Template, 2, 1, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r20.type === "IMAGE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r20.type === "URL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r20.type !== "IMAGE" && column_r20.type !== "URL");
      }
    }

    function ListComponent_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_ng_container_8_th_1_Template, 2, 1, "th", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_ng_container_8_td_2_Template, 4, 3, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var column_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", column_r20.title);
      }
    }

    function ListComponent_th_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_th_10_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.add();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListComponent_td_11_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_11_button_6_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var element_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.view(element_r37.content);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "list_alt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "View");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ListComponent_td_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListComponent_td_11_button_6_Template, 5, 0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_11_Template_button_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var element_r37 = ctx.$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.edit(element_r37);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_td_11_Template_button_click_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var element_r37 = ctx.$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.delete(element_r37);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.isTextColumn);
      }
    }

    function ListComponent_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    function ListComponent_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
      }
    }

    var _c0 = function _c0() {
      return ["/"];
    };

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(dialog, firebaseService, referenceService, route) {
        var _this = this;

        _classCallCheck(this, ListComponent);

        this.dialog = dialog;
        this.firebaseService = firebaseService;
        this.referenceService = referenceService;
        this.route = route;
        this.code = this.route.snapshot.paramMap.get('code');

        if (referenceService.columns) {
          this.initValues(referenceService.columns, referenceService.resources);
        } else {
          referenceService.document = firebaseService.getDocument(this.code);
        }

        referenceService.document.snapshotChanges().subscribe(function (_ref) {
          var payload = _ref.payload;
          return _this.initValues(payload.get('structure'), payload.get('list'));
        });
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "delete",
        value: function _delete(row) {
          this.firebaseService.delete(this.referenceService.document, row);
        }
      }, {
        key: "add",
        value: function add() {
          this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], {
            width: this.isTextColumn ? '500px' : '350px',
            data: {
              columns: this.columns,
              data: {}
            }
          });
        }
      }, {
        key: "edit",
        value: function edit(row) {
          this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], {
            width: this.isTextColumn ? '500px' : '350px',
            data: {
              columns: this.columns,
              data: row
            }
          });
        }
      }, {
        key: "view",
        value: function view(content) {
          this.dialog.open(_preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"], {
            width: '80%',
            data: {
              content: content
            }
          });
        }
      }, {
        key: "initValues",
        value: function initValues(columns, resources) {
          this.columns = columns;
          this.displayedColumns = ['no'].concat(_toConsumableArray(columns.map(function (c) {
            return c.title;
          })), ['actions']);
          this.resources = resources;
          this.isTextColumn = !!this.columns.find(function (c) {
            return c.type === _reference_service__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].TEXT;
          });
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reference_service__WEBPACK_IMPORTED_MODULE_1__["ReferenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 14,
      vars: 7,
      consts: [[1, "content"], [1, "mat-h1", 3, "routerLink"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "no"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "matColumnDef"], ["alt", "Reference image", 3, "src", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [4, "ngIf"], ["alt", "Reference image", 3, "src"], ["target", "_blank", 3, "href"], ["mat-mini-fab", "", "color", "primary", "aria-label", "Add new URL", 3, "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListComponent_th_6_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListComponent_td_7_Template, 2, 1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ListComponent_ng_container_8_Template, 3, 1, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_th_10_Template, 4, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListComponent_td_11_Template, 17, 2, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListComponent_tr_12_Template, 1, 0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListComponent_tr_13_Template, 1, 0, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.code, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.resources);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
      styles: ["div.content[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 1024px;\n  padding-top: 32px;\n  width: 100%;\n}\ndiv.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  text-align: center;\n  width: 100%;\n}\ndiv.content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ndiv.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\ndiv.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 50px;\n}\ndiv.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  width: 10px;\n}\ndiv.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 150px;\n  max-width: 1500px;\n}\ndiv.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:hover {\n  background-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmZXJlbmNlcy9saXN0L0M6XFxwcm9qZWN0c1xccGVyc29uYWxcXHVybC1yZWZlcmVuY2VzL3NyY1xcYXBwXFxyZWZlcmVuY2VzXFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9yZWZlcmVuY2VzL2xpc3QvbGlzdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ0k7RUFDRSxlQUFBO0FDQ047QURDRTtFQUNFLFdBQUE7QUNDSjtBRENJO0VBQ0UsV0FBQTtBQ0NOO0FEQ0k7RUFDRSxXQUFBO0FDQ047QURFTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0UsMkJBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3JlZmVyZW5jZXMvbGlzdC9saXN0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRlbnRcbiAgbWFyZ2luOiBhdXRvXG4gIG1heC13aWR0aDogMTAyNHB4XG4gIHBhZGRpbmctdG9wOiAzMnB4XG4gIHdpZHRoOiAxMDAlXG5cbiAgZGl2XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHhcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgICB3aWR0aDogMTAwJVxuXG4gICAgaDFcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuXG4gIHRhYmxlXG4gICAgd2lkdGg6IDEwMCVcblxuICAgIHRoOmZpcnN0LWNoaWxkXG4gICAgICB3aWR0aDogNTBweFxuXG4gICAgdGg6bGFzdC1jaGlsZFxuICAgICAgd2lkdGg6IDEwcHhcblxuICAgIHRkXG4gICAgICBpbWdcbiAgICAgICAgbWF4LWhlaWdodDogMTUwcHhcbiAgICAgICAgbWF4LXdpZHRoOiAxNTAwcHhcblxuICAgIC5tYXQtcm93OmhvdmVyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXlcbiIsImRpdi5jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgcGFkZGluZy10b3A6IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuZGl2LmNvbnRlbnQgZGl2IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5kaXYuY29udGVudCBkaXYgaDEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYuY29udGVudCB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuZGl2LmNvbnRlbnQgdGFibGUgdGg6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogNTBweDtcbn1cbmRpdi5jb250ZW50IHRhYmxlIHRoOmxhc3QtY2hpbGQge1xuICB3aWR0aDogMTBweDtcbn1cbmRpdi5jb250ZW50IHRhYmxlIHRkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDE1MDBweDtcbn1cbmRpdi5jb250ZW50IHRhYmxlIC5tYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _core_firebase_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseService"]
        }, {
          type: _reference_service__WEBPACK_IMPORTED_MODULE_1__["ReferenceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/references/main-entry/main-entry.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/references/main-entry/main-entry.component.ts ***!
    \***************************************************************/

  /*! exports provided: MainEntryComponent */

  /***/
  function srcAppReferencesMainEntryMainEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainEntryComponent", function () {
      return MainEntryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../core/firebase.service */
    "./src/app/core/firebase.service.ts");
    /* harmony import */


    var _reference_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../reference.service */
    "./src/app/references/reference.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var MainEntryComponent =
    /*#__PURE__*/
    function () {
      function MainEntryComponent(firebaseService, referenceService, router) {
        _classCallCheck(this, MainEntryComponent);

        this.firebaseService = firebaseService;
        this.referenceService = referenceService;
        this.router = router;
      }

      _createClass(MainEntryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this2 = this;

          var document = this.firebaseService.getDocument(this.code);
          document.snapshotChanges().subscribe(function (result) {
            var structure = result.payload.get('structure');

            if (structure) {
              _this2.referenceService.document = document;
              _this2.referenceService.columns = structure;
              _this2.referenceService.resources = result.payload.get('list');

              _this2.router.navigate(["/".concat(_this2.code)]);
            }
          });
        }
      }]);

      return MainEntryComponent;
    }();

    MainEntryComponent.ɵfac = function MainEntryComponent_Factory(t) {
      return new (t || MainEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reference_service__WEBPACK_IMPORTED_MODULE_2__["ReferenceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    MainEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainEntryComponent,
      selectors: [["app-main-entry"]],
      decls: 5,
      vars: 1,
      consts: [[1, "mat-display-2"], ["matInput", "", 3, "ngModel", "ngModelChange", "keydown.enter"]],
      template: function MainEntryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "#code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainEntryComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.code = $event;
          })("keydown.enter", function MainEntryComponent_Template_input_keydown_enter_4_listener($event) {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.code);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["div[_ngcontent-%COMP%] {\n  text-align: center;\n}\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 40px 0 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmZXJlbmNlcy9tYWluLWVudHJ5L0M6XFxwcm9qZWN0c1xccGVyc29uYWxcXHVybC1yZWZlcmVuY2VzL3NyY1xcYXBwXFxyZWZlcmVuY2VzXFxtYWluLWVudHJ5XFxtYWluLWVudHJ5LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9yZWZlcmVuY2VzL21haW4tZW50cnkvbWFpbi1lbnRyeS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLFNBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcmVmZXJlbmNlcy9tYWluLWVudHJ5L21haW4tZW50cnkuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZcbiAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgaDFcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiA0MHB4IDAgMTVweCAwXG4iLCJkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5kaXYgaDEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDQwcHggMCAxNXB4IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-entry',
          templateUrl: './main-entry.component.html',
          styleUrls: ['./main-entry.component.sass']
        }]
      }], function () {
        return [{
          type: _core_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]
        }, {
          type: _reference_service__WEBPACK_IMPORTED_MODULE_2__["ReferenceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/references/modal/modal.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/references/modal/modal.component.ts ***!
    \*****************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppReferencesModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _core_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../core/firebase.service */
    "./src/app/core/firebase.service.ts");
    /* harmony import */


    var _reference_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../reference.service */
    "./src/app/references/reference.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ModalComponent_mat_form_field_3_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModalComponent_mat_form_field_3_input_1_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.reference[column_r1.key] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", column_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.reference[column_r1.key]);
      }
    }

    function ModalComponent_mat_form_field_3_textarea_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ModalComponent_mat_form_field_3_textarea_2_Template_textarea_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.reference[column_r1.key] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", column_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.reference[column_r1.key]);
      }
    }

    function ModalComponent_mat_form_field_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_mat_form_field_3_input_1_Template, 1, 2, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalComponent_mat_form_field_3_textarea_2_Template, 1, 2, "textarea", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var column_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r1.type !== "TEXT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r1.type === "TEXT");
      }
    }

    var ModalComponent =
    /*#__PURE__*/
    function () {
      function ModalComponent(dialogRef, data, firebaseService, referenceService) {
        _classCallCheck(this, ModalComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.firebaseService = firebaseService;
        this.referenceService = referenceService;
        this.reference = JSON.parse(JSON.stringify(data.data));
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "save",
        value: function save() {
          this.firebaseService.delete(this.referenceService.document, this.data.data);
          this.firebaseService.add(this.referenceService.document, this.reference);
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reference_service__WEBPACK_IMPORTED_MODULE_3__["ReferenceService"]));
    };

    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["app-modal"]],
      decls: 9,
      vars: 2,
      consts: [[1, "mat-h3"], ["mat-dialog-content", ""], ["class", "full-width", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "mat-dialog-close", "click"], [1, "full-width"], ["matInput", "", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], ["matInput", "", 3, "placeholder", "ngModel", "ngModelChange"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_mat_form_field_3_Template, 3, 2, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_5_listener($event) {
            return ctx.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_7_listener($event) {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
        }
      },
      directives: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ndiv.mat-dialog-actions[_ngcontent-%COMP%] {\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmZXJlbmNlcy9tb2RhbC9DOlxccHJvamVjdHNcXHBlcnNvbmFsXFx1cmwtcmVmZXJlbmNlcy9zcmNcXGFwcFxccmVmZXJlbmNlc1xcbW9kYWxcXG1vZGFsLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9yZWZlcmVuY2VzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURBQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxZQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9yZWZlcmVuY2VzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaDNcbiAgdGV4dC1hbGlnbjogY2VudGVyXG5cbi5mdWxsLXdpZHRoXG4gIHdpZHRoOiAxMDAlXG5cbmRpdi5tYXQtZGlhbG9nLWFjdGlvbnNcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgbWFyZ2luOiBhdXRvXG4iLCJoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGl2Lm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal',
          templateUrl: './modal.component.html',
          styleUrls: ['./modal.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _core_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
        }, {
          type: _reference_service__WEBPACK_IMPORTED_MODULE_3__["ReferenceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/references/preview/preview.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/references/preview/preview.component.ts ***!
    \*********************************************************/

  /*! exports provided: PreviewComponent */

  /***/
  function srcAppReferencesPreviewPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewComponent", function () {
      return PreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var PreviewComponent =
    /*#__PURE__*/
    function () {
      function PreviewComponent(dialogRef, data) {
        _classCallCheck(this, PreviewComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
      }

      _createClass(PreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return PreviewComponent;
    }();

    PreviewComponent.ɵfac = function PreviewComponent_Factory(t) {
      return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    PreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreviewComponent,
      selectors: [["app-preview"]],
      decls: 4,
      vars: 1,
      consts: [[3, "innerHTML"]],
      template: function PreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZmVyZW5jZXMvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5zYXNzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preview',
          templateUrl: './preview.component.html',
          styleUrls: ['./preview.component.sass']
        }]
      }], function () {
        return [{
          type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/references/reference.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/references/reference.service.ts ***!
    \*************************************************/

  /*! exports provided: ColumnType, ReferenceService */

  /***/
  function srcAppReferencesReferenceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColumnType", function () {
      return ColumnType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferenceService", function () {
      return ReferenceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ColumnType;

    (function (ColumnType) {
      ColumnType["IMAGE"] = "IMAGE";
      ColumnType["TITLE"] = "TITLE";
      ColumnType["DESCRIPTION"] = "DESCRIPTION";
      ColumnType["TEXT"] = "TEXT";
    })(ColumnType || (ColumnType = {}));

    var ReferenceService = function ReferenceService() {
      _classCallCheck(this, ReferenceService);
    };

    ReferenceService.ɵfac = function ReferenceService_Factory(t) {
      return new (t || ReferenceService)();
    };

    ReferenceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ReferenceService,
      factory: ReferenceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferenceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/references/references-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/references/references-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ReferencesRoutingModule */

  /***/
  function srcAppReferencesReferencesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferencesRoutingModule", function () {
      return ReferencesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/references/list/list.component.ts");
    /* harmony import */


    var _main_entry_main_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-entry/main-entry.component */
    "./src/app/references/main-entry/main-entry.component.ts");

    var routes = [{
      path: '',
      component: _main_entry_main_entry_component__WEBPACK_IMPORTED_MODULE_3__["MainEntryComponent"]
    }, {
      path: ':code',
      component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
    }];

    var ReferencesRoutingModule = function ReferencesRoutingModule() {
      _classCallCheck(this, ReferencesRoutingModule);
    };

    ReferencesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReferencesRoutingModule
    });
    ReferencesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReferencesRoutingModule_Factory(t) {
        return new (t || ReferencesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReferencesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferencesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/references/references.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/references/references.module.ts ***!
    \*************************************************/

  /*! exports provided: ReferencesModule */

  /***/
  function srcAppReferencesReferencesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReferencesModule", function () {
      return ReferencesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/references/list/list.component.ts");
    /* harmony import */


    var _main_entry_main_entry_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main-entry/main-entry.component */
    "./src/app/references/main-entry/main-entry.component.ts");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal/modal.component */
    "./src/app/references/modal/modal.component.ts");
    /* harmony import */


    var _references_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./references-routing.module */
    "./src/app/references/references-routing.module.ts");
    /* harmony import */


    var _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./preview/preview.component */
    "./src/app/references/preview/preview.component.ts");

    var ReferencesModule = function ReferencesModule() {
      _classCallCheck(this, ReferencesModule);
    };

    ReferencesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReferencesModule
    });
    ReferencesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReferencesModule_Factory(t) {
        return new (t || ReferencesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _references_routing_module__WEBPACK_IMPORTED_MODULE_7__["ReferencesRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReferencesModule, {
        declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _main_entry_main_entry_component__WEBPACK_IMPORTED_MODULE_5__["MainEntryComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__["PreviewComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _references_routing_module__WEBPACK_IMPORTED_MODULE_7__["ReferencesRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]],
        exports: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferencesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _main_entry_main_entry_component__WEBPACK_IMPORTED_MODULE_5__["MainEntryComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__["PreviewComponent"]],
          exports: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _references_routing_module__WEBPACK_IMPORTED_MODULE_7__["ReferencesRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"]],
          entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], _preview_preview_component__WEBPACK_IMPORTED_MODULE_8__["PreviewComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: 'AIzaSyCaA735lDbPkkZn5yPvOHeJ7e8nm-JO-t4',
        authDomain: 'url-reference-list.firebaseapp.com',
        databaseURL: 'https://url-reference-list.firebaseio.com',
        projectId: 'url-reference-list',
        storageBucket: 'url-reference-list.appspot.com',
        messagingSenderId: '1027022492637',
        appId: '1:1027022492637:web:2b17bca0659556cce91c34',
        measurementId: 'G-XRV5GJFMNH'
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\projects\personal\url-references\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map