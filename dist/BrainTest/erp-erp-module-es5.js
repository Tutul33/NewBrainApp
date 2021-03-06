function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["erp-erp-module"], {
  /***/
  "./src/app/erp/erp-routing.module.ts": function srcAppErpErpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErpRoutingModule", function () {
      return ErpRoutingModule;
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


    var _erp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./erp.component */
    "./src/app/erp/erp.component.ts");
    /* harmony import */


    var _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/sidebar/sidebar.module */
    "./src/app/shared/sidebar/sidebar.module.ts");
    /* harmony import */


    var _shared_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/topbar/topbar.module */
    "./src/app/shared/topbar/topbar.module.ts");

    var routes = [{
      path: '',
      component: _erp_component__WEBPACK_IMPORTED_MODULE_2__["ErpComponent"]
    }];

    var ErpRoutingModule = function ErpRoutingModule() {
      _classCallCheck(this, ErpRoutingModule);
    };

    ErpRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ErpRoutingModule
    });
    ErpRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ErpRoutingModule_Factory(t) {
        return new (t || ErpRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"], _shared_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_4__["TopbarModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ErpRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"], _shared_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_4__["TopbarModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErpRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"], _shared_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_4__["TopbarModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/erp/erp.component.ts": function srcAppErpErpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErpComponent", function () {
      return ErpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _shared_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/topbar/topbar.component */
    "./src/app/shared/topbar/topbar.component.ts");

    var ErpComponent = /*#__PURE__*/function () {
      function ErpComponent() {
        _classCallCheck(this, ErpComponent);
      }

      _createClass(ErpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErpComponent;
    }();

    ErpComponent.??fac = function ErpComponent_Factory(t) {
      return new (t || ErpComponent)();
    };

    ErpComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ErpComponent,
      selectors: [["app-erp"]],
      decls: 230,
      vars: 0,
      consts: [["id", "wrapper"], ["id", "content-wrapper", 1, "d-flex", "flex-column"], ["id", "content"], [1, "container-fluid"], [1, "d-sm-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "h3", "mb-0", "text-gray-800"], ["href", "#", 1, "d-none", "d-sm-inline-block", "btn", "btn-sm", "btn-primary", "shadow-sm"], [1, "fas", "fa-download", "fa-sm", "text-white-50"], [1, "row"], [1, "col-xl-3", "col-md-6", "mb-4"], [1, "card", "border-left-primary", "shadow", "h-100", "py-2"], [1, "card-body"], [1, "row", "no-gutters", "align-items-center"], [1, "col", "mr-2"], [1, "text-xs", "font-weight-bold", "text-primary", "text-uppercase", "mb-1"], [1, "h5", "mb-0", "font-weight-bold", "text-gray-800"], [1, "col-auto"], [1, "fas", "fa-calendar", "fa-2x", "text-gray-300"], [1, "card", "border-left-success", "shadow", "h-100", "py-2"], [1, "text-xs", "font-weight-bold", "text-success", "text-uppercase", "mb-1"], [1, "fas", "fa-dollar-sign", "fa-2x", "text-gray-300"], [1, "card", "border-left-info", "shadow", "h-100", "py-2"], [1, "text-xs", "font-weight-bold", "text-info", "text-uppercase", "mb-1"], [1, "h5", "mb-0", "mr-3", "font-weight-bold", "text-gray-800"], [1, "col"], [1, "progress", "progress-sm", "mr-2"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "50%"], [1, "fas", "fa-clipboard-list", "fa-2x", "text-gray-300"], [1, "card", "border-left-warning", "shadow", "h-100", "py-2"], [1, "text-xs", "font-weight-bold", "text-warning", "text-uppercase", "mb-1"], [1, "fas", "fa-comments", "fa-2x", "text-gray-300"], [1, "col-xl-8", "col-lg-7"], [1, "card", "shadow", "mb-4"], [1, "card-header", "py-3", "d-flex", "flex-row", "align-items-center", "justify-content-between"], [1, "m-0", "font-weight-bold", "text-primary"], [1, "dropdown", "no-arrow"], ["href", "#", "role", "button", "id", "dropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "fas", "fa-ellipsis-v", "fa-sm", "fa-fw", "text-gray-400"], ["aria-labelledby", "dropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-right", "shadow", "animated--fade-in"], [1, "dropdown-header"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], [1, "chart-area"], ["id", "myAreaChart"], [1, "col-xl-4", "col-lg-5"], [1, "chart-pie", "pt-4", "pb-2"], ["id", "myPieChart"], [1, "mt-4", "text-center", "small"], [1, "mr-2"], [1, "fas", "fa-circle", "text-primary"], [1, "fas", "fa-circle", "text-success"], [1, "fas", "fa-circle", "text-info"], [1, "col-lg-6", "mb-4"], [1, "card-header", "py-3"], [1, "small", "font-weight-bold"], [1, "float-right"], [1, "progress", "mb-4"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "20%"], ["role", "progressbar", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "40%"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "60%"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "80%"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "100%"], [1, "card", "bg-primary", "text-white", "shadow"], [1, "text-white-50", "small"], [1, "card", "bg-success", "text-white", "shadow"], [1, "card", "bg-info", "text-white", "shadow"], [1, "card", "bg-warning", "text-white", "shadow"], [1, "card", "bg-danger", "text-white", "shadow"], [1, "card", "bg-secondary", "text-white", "shadow"], [1, "card", "bg-light", "text-black", "shadow"], [1, "text-black-50", "small"], [1, "card", "bg-dark", "text-white", "shadow"], [1, "text-center"], ["src", "/assets/img/undraw_posting_photo.svg", "alt", "...", 1, "img-fluid", "px-3", "px-sm-4", "mt-3", "mb-4", 2, "width", "25rem"], ["target", "_blank", "rel", "nofollow", "href", "https://undraw.co/"], [1, "mb-0"], [1, "sticky-footer", "bg-white"], [1, "container", "my-auto"], [1, "copyright", "text-center", "my-auto"]],
      template: function ErpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-topbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Generate Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Earnings (Monthly)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "$40,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, " Earnings (Annual)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "$215,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Tasks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "50%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Pending Requests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "18");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h6", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Earnings Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Dropdown Header:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "canvas", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h6", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "Revenue Sources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Dropdown Header:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "canvas", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " Direct ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, " Social ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, " Referral ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h6", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Server Migration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "20%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Sales Tracking ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "40%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Customer Database ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "60%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](139, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Payout Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](143, "80%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "Account Setup ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Complete!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, " Primary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "#4e73df");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, " Success ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "#1cc88a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](166, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](168, " Info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](170, "#36b9cc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](174, " Warning ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](175, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](176, "#f6c23e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](180, " Danger ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "#e74a3b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, " Secondary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "#858796");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](192, " Light ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "#f8f9fc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](197, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](198, " Dark ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "#5a5c69");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](204, "h6", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](205, "Illustrations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](208, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Add some quality, svg illustrations to your project courtesy of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](212, "unDraw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, ", a constantly updated collection of beautiful svg images that you can use completely free and without attribution!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](215, "Browse Illustrations on unDraw \u2192");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "h6", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "Development Approach");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "p", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](224, "Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "footer", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "Copyright \xA9 Your Website 2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _shared_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__["TopbarComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VycC9lcnAuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-erp',
          templateUrl: './erp.component.html',
          styleUrls: ['./erp.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/erp/erp.module.ts": function srcAppErpErpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErpModule", function () {
      return ErpModule;
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


    var _erp_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./erp-routing.module */
    "./src/app/erp/erp-routing.module.ts");
    /* harmony import */


    var _erp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./erp.component */
    "./src/app/erp/erp.component.ts");
    /* harmony import */


    var _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/sidebar/sidebar.module */
    "./src/app/shared/sidebar/sidebar.module.ts");
    /* harmony import */


    var _shared_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/topbar/topbar.module */
    "./src/app/shared/topbar/topbar.module.ts");

    var ErpModule = function ErpModule() {
      _classCallCheck(this, ErpModule);
    };

    ErpModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ErpModule
    });
    ErpModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ErpModule_Factory(t) {
        return new (t || ErpModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _erp_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErpRoutingModule"], _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__["SidebarModule"], _shared_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_5__["TopbarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ErpModule, {
        declarations: [_erp_component__WEBPACK_IMPORTED_MODULE_3__["ErpComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _erp_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErpRoutingModule"], _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__["SidebarModule"], _shared_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_5__["TopbarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_erp_component__WEBPACK_IMPORTED_MODULE_3__["ErpComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _erp_routing_module__WEBPACK_IMPORTED_MODULE_2__["ErpRoutingModule"], _shared_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__["SidebarModule"], _shared_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_5__["TopbarModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.ts": function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.??fac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 93,
      vars: 0,
      consts: [["id", "accordionSidebar", 1, "navbar-nav", "bg-gradient-primary", "sidebar", "sidebar-dark", "accordion"], ["href", "index.html", 1, "sidebar-brand", "d-flex", "align-items-center", "justify-content-center"], [1, "sidebar-brand-icon", "rotate-n-15"], [1, "fas", "fa-laugh-wink"], [1, "sidebar-brand-text", "mx-3"], [1, "sidebar-divider", "my-0"], [1, "nav-item", "active"], ["href", "index.html", 1, "nav-link"], [1, "fas", "fa-fw", "fa-tachometer-alt"], [1, "sidebar-divider"], [1, "sidebar-heading"], [1, "nav-item"], ["href", "#", "data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "true", "aria-controls", "collapseTwo", 1, "nav-link", "collapsed"], [1, "fas", "fa-fw", "fa-cog"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordionSidebar", 1, "collapse"], [1, "bg-white", "py-2", "collapse-inner", "rounded"], [1, "collapse-header"], ["href", "buttons.html", 1, "collapse-item"], ["href", "cards.html", 1, "collapse-item"], ["href", "#", "data-toggle", "collapse", "data-target", "#collapseUtilities", "aria-expanded", "true", "aria-controls", "collapseUtilities", 1, "nav-link", "collapsed"], [1, "fas", "fa-fw", "fa-wrench"], ["id", "collapseUtilities", "aria-labelledby", "headingUtilities", "data-parent", "#accordionSidebar", 1, "collapse"], ["href", "utilities-color.html", 1, "collapse-item"], ["href", "utilities-border.html", 1, "collapse-item"], ["href", "utilities-animation.html", 1, "collapse-item"], ["href", "utilities-other.html", 1, "collapse-item"], ["href", "#", "data-toggle", "collapse", "data-target", "#collapsePages", "aria-expanded", "true", "aria-controls", "collapsePages", 1, "nav-link", "collapsed"], [1, "fas", "fa-fw", "fa-folder"], ["id", "collapsePages", "aria-labelledby", "headingPages", "data-parent", "#accordionSidebar", 1, "collapse"], ["href", "login.html", 1, "collapse-item"], ["href", "register.html", 1, "collapse-item"], ["href", "forgot-password.html", 1, "collapse-item"], [1, "collapse-divider"], ["href", "404.html", 1, "collapse-item"], ["href", "blank.html", 1, "collapse-item"], ["href", "charts.html", 1, "nav-link"], [1, "fas", "fa-fw", "fa-chart-area"], ["href", "tables.html", 1, "nav-link"], [1, "fas", "fa-fw", "fa-table"], [1, "sidebar-divider", "d-none", "d-md-block"], [1, "text-center", "d-none", "d-md-inline"], ["id", "sidebarToggle", 1, "rounded-circle", "border-0"], [1, "sidebar-card", "d-none", "d-lg-flex"], ["src", "/assets/img/undraw_rocket.svg", "alt", "...", 1, "sidebar-card-illustration", "mb-2"], [1, "text-center", "mb-2"], ["href", "https://startbootstrap.com/theme/sb-admin-pro", 1, "btn", "btn-success", "btn-sm"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "SB Admin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "sup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "hr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "hr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Interface ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Components");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Custom Components:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Buttons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Utilities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Custom Utilities:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Colors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Borders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Animations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Other");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "hr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, " Addons ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Pages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Login Screens:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Forgot Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h6", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Other Pages:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "404 Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Blank Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Charts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Tables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "hr", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "p", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "SB Admin Pro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " is packed with premium features, components, and more!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, "Upgrade to Pro!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/sidebar/sidebar.module.ts": function srcAppSharedSidebarSidebarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
      return SidebarModule;
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


    var _sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");

    var SidebarModule = function SidebarModule() {
      _classCallCheck(this, SidebarModule);
    };

    SidebarModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: SidebarModule
    });
    SidebarModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function SidebarModule_Factory(t) {
        return new (t || SidebarModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](SidebarModule, {
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SidebarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
          exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/topbar/topbar.component.ts": function srcAppSharedTopbarTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
      return TopbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TopbarComponent = /*#__PURE__*/function () {
      function TopbarComponent() {
        _classCallCheck(this, TopbarComponent);
      }

      _createClass(TopbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopbarComponent;
    }();

    TopbarComponent.??fac = function TopbarComponent_Factory(t) {
      return new (t || TopbarComponent)();
    };

    TopbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TopbarComponent,
      selectors: [["app-topbar"]],
      decls: 121,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand", "navbar-light", "bg-white", "topbar", "mb-4", "static-top", "shadow"], ["id", "sidebarToggleTop", 1, "btn", "btn-link", "d-md-none", "rounded-circle", "mr-3"], [1, "fa", "fa-bars"], [1, "d-none", "d-sm-inline-block", "form-inline", "mr-auto", "ml-md-3", "my-2", "my-md-0", "mw-100", "navbar-search"], [1, "input-group"], ["type", "text", "placeholder", "Search for...", "aria-label", "Search", "aria-describedby", "basic-addon2", 1, "form-control", "bg-light", "border-0", "small"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary"], [1, "fas", "fa-search", "fa-sm"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "dropdown", "no-arrow", "d-sm-none"], ["href", "#", "id", "searchDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-search", "fa-fw"], ["aria-labelledby", "searchDropdown", 1, "dropdown-menu", "dropdown-menu-right", "p-3", "shadow", "animated--grow-in"], [1, "form-inline", "mr-auto", "w-100", "navbar-search"], [1, "nav-item", "dropdown", "no-arrow", "mx-1"], ["href", "#", "id", "alertsDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-bell", "fa-fw"], [1, "badge", "badge-danger", "badge-counter"], ["aria-labelledby", "alertsDropdown", 1, "dropdown-list", "dropdown-menu", "dropdown-menu-right", "shadow", "animated--grow-in"], [1, "dropdown-header"], ["href", "#", 1, "dropdown-item", "d-flex", "align-items-center"], [1, "mr-3"], [1, "icon-circle", "bg-primary"], [1, "fas", "fa-file-alt", "text-white"], [1, "small", "text-gray-500"], [1, "font-weight-bold"], [1, "icon-circle", "bg-success"], [1, "fas", "fa-donate", "text-white"], [1, "icon-circle", "bg-warning"], [1, "fas", "fa-exclamation-triangle", "text-white"], ["href", "#", 1, "dropdown-item", "text-center", "small", "text-gray-500"], ["href", "#", "id", "messagesDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-envelope", "fa-fw"], ["aria-labelledby", "messagesDropdown", 1, "dropdown-list", "dropdown-menu", "dropdown-menu-right", "shadow", "animated--grow-in"], [1, "dropdown-list-image", "mr-3"], ["src", "/assets/img/undraw_profile_1.svg", "alt", "...", 1, "rounded-circle"], [1, "status-indicator", "bg-success"], [1, "text-truncate"], ["src", "/assets/img/undraw_profile_2.svg", "alt", "...", 1, "rounded-circle"], [1, "status-indicator"], ["src", "/assets/img/undraw_profile_3.svg", "alt", "...", 1, "rounded-circle"], [1, "status-indicator", "bg-warning"], ["src", "https://source.unsplash.com/Mv9hjnEUHR4/60x60", "alt", "...", 1, "rounded-circle"], [1, "topbar-divider", "d-none", "d-sm-block"], [1, "nav-item", "dropdown", "no-arrow"], ["href", "#", "id", "userDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "mr-2", "d-none", "d-lg-inline", "text-gray-600", "small"], ["src", "/assets/img/undraw_profile.svg", 1, "img-profile", "rounded-circle"], ["aria-labelledby", "userDropdown", 1, "dropdown-menu", "dropdown-menu-right", "shadow", "animated--grow-in"], ["href", "#", 1, "dropdown-item"], [1, "fas", "fa-user", "fa-sm", "fa-fw", "mr-2", "text-gray-400"], [1, "fas", "fa-cogs", "fa-sm", "fa-fw", "mr-2", "text-gray-400"], [1, "fas", "fa-list", "fa-sm", "fa-fw", "mr-2", "text-gray-400"], [1, "dropdown-divider"], ["href", "#", "data-toggle", "modal", "data-target", "#logoutModal", 1, "dropdown-item"], [1, "fas", "fa-sign-out-alt", "fa-sm", "fa-fw", "mr-2", "text-gray-400"]],
      template: function TopbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "3+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Alerts Center ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "December 12, 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "A new monthly report is ready to download!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "December 7, 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " $290.29 has been deposited into your account! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "December 2, 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " Spending Alert: We've noticed unusually high spending for your account. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Show All Alerts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h6", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Message Center ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Hi there! I am wondering if you can help me with a problem I've been having.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Emily Fowler \xB7 58m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "I have the photos that you ordered last month, how would you like them sent to you?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Jae Chun \xB7 1d");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Last month's report looks great, I am very happy with the progress so far, keep up the good work!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Morgan Alvarez \xB7 2d");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "Chicken the Dog \xB7 2w");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Read More Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "li", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Douglas McGee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, " Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, " Settings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, " Activity Log ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, " Logout ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topbar',
          templateUrl: './topbar.component.html',
          styleUrls: ['./topbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/topbar/topbar.module.ts": function srcAppSharedTopbarTopbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarModule", function () {
      return TopbarModule;
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


    var _topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./topbar.component */
    "./src/app/shared/topbar/topbar.component.ts");

    var TopbarModule = function TopbarModule() {
      _classCallCheck(this, TopbarModule);
    };

    TopbarModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: TopbarModule
    });
    TopbarModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function TopbarModule_Factory(t) {
        return new (t || TopbarModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](TopbarModule, {
        declarations: [_topbar_component__WEBPACK_IMPORTED_MODULE_2__["TopbarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_topbar_component__WEBPACK_IMPORTED_MODULE_2__["TopbarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TopbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_topbar_component__WEBPACK_IMPORTED_MODULE_2__["TopbarComponent"]],
          exports: [_topbar_component__WEBPACK_IMPORTED_MODULE_2__["TopbarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=erp-erp-module-es5.js.map