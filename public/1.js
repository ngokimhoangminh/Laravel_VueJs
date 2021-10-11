(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/brands/ListComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/brands/ListComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_brands_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/brands_service */ "./resources/js/admin/services/brands_service.js");
/* harmony import */ var _helpers_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/pagination */ "./resources/js/admin/helpers/pagination.js");
/* harmony import */ var _helpers_apiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/apiRequest */ "./resources/js/admin/helpers/apiRequest.js");
/* harmony import */ var _helpers_buildUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/buildUrl */ "./resources/js/admin/helpers/buildUrl.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: '',
      loading: true,
      isloading: false,
      visibleShow: false,
      title: 'Thêm',
      edit: false,
      errors: {},
      brands: [],
      brandData: {
        id: '',
        name: '',
        description: '',
        status: ''
      },
      statusData: [{
        values: 1,
        status: "Hiển Thị"
      }, {
        values: 0,
        status: "Ẩn"
      }],
      numberWithDots: [],
      params: {
        page: 1,
        per_page: 5
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.loadBrand();
  },
  methods: {
    loadBrand: function loadBrand() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object(_helpers_apiRequest__WEBPACK_IMPORTED_MODULE_3__["apiRequest"])('/api/brand/brands' + Object(_helpers_buildUrl__WEBPACK_IMPORTED_MODULE_4__["buildUrl"])(_this.params)).then(function (res) {
                  var m = res;
                  _this.brands = res.data;
                  _this.numberWithDots = Object(_helpers_pagination__WEBPACK_IMPORTED_MODULE_2__["pagination"])(m.current_page, m.last_page);
                })["catch"](function (err) {
                  console.log(err);

                  _this.flashMessage.error({
                    message: 'Some error occurred, Please refresh!',
                    time: 4000
                  });
                })["finally"](function () {
                  _this.loading = false;
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addBrand: function addBrand() {
      this.edit = false;
      this.visibleShow = true;
    },
    editBrand: function editBrand(brand) {
      this.edit = true;
      this.visibleShow = true;
      this.brandData = brand;
    },
    onReset: function onReset() {
      this.brandData.name = "";
      this.brandData.description = "";
      this.brandData.status = "";
      this.errors = "";
    },
    saveBrand: function saveBrand() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var brand, response, _response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.isloading = true;
                brand = _this2.brandData;
                setTimeout(function () {
                  _this2.isloading = false;
                }, 2000);

                if (!(_this2.edit === false)) {
                  _context2.next = 25;
                  break;
                }

                console.log("add");
                _context2.prev = 5;
                _context2.next = 8;
                return _services_brands_service__WEBPACK_IMPORTED_MODULE_1__["createBrand"](brand);

              case 8:
                response = _context2.sent;

                _this2.brands.unshift(response.data);

                _this2.onReset();

                _this2.visibleShow = false;

                _this2.flashMessage.success({
                  message: 'Thêm thương hiệu thành công!',
                  time: 4000
                });

                _context2.next = 23;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](5);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 20 : 21;
                break;

              case 20:
                _this2.errors = _context2.t0.response.data.errors;

              case 21:
                _this2.flashMessage.error({
                  message: 'Some error occurred, Please try agian!',
                  time: 4000
                });

                return _context2.abrupt("break", 23);

              case 23:
                _context2.next = 44;
                break;

              case 25:
                console.log("edit");
                _context2.prev = 26;
                _context2.next = 29;
                return _services_brands_service__WEBPACK_IMPORTED_MODULE_1__["updateBrand"](_this2.brandData.id, brand);

              case 29:
                _response = _context2.sent;

                // this.brands.map(brand =>{
                //     if(brand.id == response.data.id)
                //     {
                //         for(let key in response.data)
                //         {
                //             brand[key]=response.data[key];
                //         }
                //     }
                // }); 
                _this2.loadBrand();

                _this2.flashMessage.success({
                  message: 'Cập nhật thương hiệu thành công!',
                  time: 4000
                });

                _this2.visibleShow = false;

                _this2.onReset();

                _context2.next = 44;
                break;

              case 36:
                _context2.prev = 36;
                _context2.t2 = _context2["catch"](26);
                _context2.t3 = _context2.t2.response.status;
                _context2.next = _context2.t3 === 422 ? 41 : 42;
                break;

              case 41:
                _this2.errors = _context2.t2.response.data.errors;

              case 42:
                _this2.flashMessage.error({
                  message: 'Some error occurred, Please try agian!',
                  time: 4000
                });

                return _context2.abrupt("break", 44);

              case 44:
                setTimeout(function () {
                  _this2.isloading = false;
                }, 2000);

              case 45:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[5, 15], [26, 36]]);
      }))();
    },
    onRemove: function onRemove(brand) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_brands_service__WEBPACK_IMPORTED_MODULE_1__["deleteBrand"](brand.id);

              case 3:
                response = _context3.sent;

                _this3.flashMessage.success({
                  message: response.data.message,
                  time: 4000
                });

                _this3.loadBrand();

                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);

                _this3.flashMessage.error({
                  message: _context3.t0.response.data.message,
                  time: 4000
                });

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 8]]);
      }))();
    },
    unActive: function unActive(id) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log(id);
                _context4.prev = 1;
                formData = new FormData();
                formData.append('brand_id', id);
                _context4.next = 6;
                return _services_brands_service__WEBPACK_IMPORTED_MODULE_1__["unActive"](formData);

              case 6:
                response = _context4.sent;

                _this4.flashMessage.success({
                  message: response.data.message,
                  time: 4000
                });

                _this4.loadBrand();

                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](1);

                _this4.flashMessage.error({
                  message: _context4.t0.response.data.message,
                  time: 4000
                });

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 11]]);
      }))();
    },
    onActive: function onActive(id) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                formData = new FormData();
                formData.append('brand_id', id);
                _context5.next = 5;
                return _services_brands_service__WEBPACK_IMPORTED_MODULE_1__["onActive"](formData);

              case 5:
                response = _context5.sent;

                _this5.flashMessage.success({
                  message: response.data.message,
                  time: 4000
                });

                _this5.loadBrand();

                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);

                _this5.flashMessage.error({
                  message: _context5.t0.response.data.message,
                  time: 4000
                });

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 10]]);
      }))();
    },
    handleCancel: function handleCancel(e) {
      this.visibleShow = false;
      this.onReset();
    },
    prev: function prev() {
      this.loading = true;
      event.preventDefault();
      this.params.page--;
      this.loadBrand();
    },
    next: function next() {
      this.loading = true;
      event.preventDefault();
      this.params.page++;
      this.loadBrand();
    },
    changePerPage: function changePerPage(page) {
      this.loading = true;
      if (page === '...') return false;
      event.preventDefault();
      this.params.page = page;
      this.loadBrand();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/brands/ListComponent.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/brands/ListComponent.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n._vue-flash-msg-body._vue-flash-msg-body_success{\r\n    z-index:3;\r\n    margin-top:67px;\n}\n._vue-flash-msg-body._vue-flash-msg-body_error{\r\n    margin-top:67px;\n}\n._vue-flash-msg-body__text{\r\n    color: #fff;\r\n    font-family: cursive;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/brands/ListComponent.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/brands/ListComponent.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListComponent.vue?vue&type=style&index=0&scope=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/brands/ListComponent.vue?vue&type=style&index=0&scope=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/brands/ListComponent.vue?vue&type=template&id=0ccd5767&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/brands/ListComponent.vue?vue&type=template&id=0ccd5767& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card" },
    [
      _c("div", { staticClass: "card-header" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _vm._v("\n            Thương hiệu\n            ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 text-right" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-success",
                on: {
                  click: function($event) {
                    return _vm.addBrand()
                  }
                }
              },
              [_c("span", { staticClass: "fas fa-plus" }), _vm._v("Thêm")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c(
            "el-table",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: _vm.loading,
                  expression: "loading"
                }
              ],
              staticStyle: { width: "100%" },
              attrs: {
                "element-loading-text": "Loading...",
                "element-loading-spinner": "el-icon-loading",
                "element-loading-background": "rgba(0, 0, 0, 0.8)",
                data: _vm.brands.filter(function(data) {
                  return (
                    !_vm.search ||
                    data.name.toLowerCase().includes(_vm.search.toLowerCase())
                  )
                })
              }
            },
            [
              _c("el-table-column", {
                attrs: { label: "STT", type: "index", width: "50" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Thương hiệu", prop: "name" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Mô tả", prop: "description" }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { label: "Trạng Thái", prop: "status" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        scope.row.status == 1
                          ? _c(
                              "el-button",
                              {
                                attrs: { type: "success" },
                                on: {
                                  click: function($event) {
                                    return _vm.unActive(scope.row.id)
                                  }
                                }
                              },
                              [_vm._v("Hiển Thị")]
                            )
                          : _c(
                              "el-button",
                              {
                                attrs: { type: "danger" },
                                on: {
                                  click: function($event) {
                                    return _vm.onActive(scope.row.id)
                                  }
                                }
                              },
                              [_vm._v("Ẩn")]
                            )
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { fixed: "right", align: "right", width: "240" },
                scopedSlots: _vm._u([
                  {
                    key: "header",
                    fn: function(scope) {
                      return [
                        _c("el-input", {
                          attrs: {
                            size: "mini",
                            placeholder: "Type to search"
                          },
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        })
                      ]
                    }
                  },
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: {
                              size: "mini",
                              icon: "el-icon-edit",
                              "data-toggle": "modal",
                              "data-target": "#exampleModal"
                            },
                            on: {
                              click: function($event) {
                                return _vm.editBrand(scope.row)
                              }
                            }
                          },
                          [_vm._v("Edit")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-popconfirm",
                          {
                            attrs: {
                              placement: "topRight",
                              "ok-text": "Đồng ý",
                              "cancel-text": "Không",
                              title: "Bạn có chắc chắn xóa không ?"
                            },
                            on: {
                              confirm: function($event) {
                                return _vm.onRemove(scope.row)
                              }
                            }
                          },
                          [
                            _c(
                              "el-button",
                              {
                                attrs: {
                                  size: "mini",
                                  type: "danger",
                                  icon: "el-icon-delete-solid"
                                }
                              },
                              [_vm._v("Delete\n                        ")]
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-footer" },
        [
          _c("el-row", { staticClass: "row-bg", attrs: { type: "flex" } }, [
            _c(
              "nav",
              { attrs: { "aria-label": "Page navigation example mt-3" } },
              [
                _c(
                  "ul",
                  { staticClass: "pagination" },
                  [
                    _c("li", { staticClass: "page-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "page-link",
                          attrs: { href: "#", "aria-label": "Previous" },
                          on: {
                            click: function($event) {
                              return _vm.prev()
                            }
                          }
                        },
                        [
                          _c("span", { attrs: { "aria-hidden": "true" } }, [
                            _vm._v("«")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.numberWithDots, function(n, index) {
                      return _c(
                        "li",
                        {
                          key: index,
                          staticClass: "page-item",
                          class: [_vm.params.page === n ? "active" : ""]
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "page-link",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.changePerPage(n)
                                }
                              }
                            },
                            [_vm._v(_vm._s(n))]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("li", { staticClass: "page-item" }, [
                      _c(
                        "a",
                        {
                          staticClass: "page-link",
                          attrs: { href: "#", "aria-label": "Next" },
                          on: {
                            click: function($event) {
                              return _vm.next()
                            }
                          }
                        },
                        [
                          _c("span", { attrs: { "aria-hidden": "true" } }, [
                            _vm._v("»")
                          ])
                        ]
                      )
                    ])
                  ],
                  2
                )
              ]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-modal",
        {
          attrs: { title: "Title", "on-ok": "handleOk" },
          model: {
            value: _vm.visibleShow,
            callback: function($$v) {
              _vm.visibleShow = $$v
            },
            expression: "visibleShow"
          }
        },
        [
          _c(
            "template",
            { slot: "footer" },
            [
              _c("a-button", { key: "back", on: { click: _vm.handleCancel } }, [
                _vm._v("\n                Trở lại\n            ")
              ]),
              _vm._v(" "),
              _c(
                "a-button",
                {
                  key: "submit",
                  attrs: { type: "primary", loading: _vm.isloading },
                  on: { click: _vm.saveBrand }
                },
                [_vm._v("\n                Lưu\n            ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form",
            {
              ref: "brandData",
              attrs: { model: _vm.brandData, "label-width": "120px" }
            },
            [
              _c("el-table-column", {
                attrs: { id: "myTable", type: "index", width: "50" }
              }),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Thương hiệu" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.brandData.name,
                      callback: function($$v) {
                        _vm.$set(_vm.brandData, "name", $$v)
                      },
                      expression: "brandData.name"
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c(
                        "div",
                        {
                          staticClass: "invalid-feedback",
                          staticStyle: { display: "block" }
                        },
                        [_vm._v(_vm._s(_vm.errors.name[0]))]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Mô tả" } },
                [
                  _c("el-input", {
                    attrs: { type: "textarea" },
                    model: {
                      value: _vm.brandData.description,
                      callback: function($$v) {
                        _vm.$set(_vm.brandData, "description", $$v)
                      },
                      expression: "brandData.description"
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.description
                    ? _c(
                        "div",
                        {
                          staticClass: "invalid-feedback",
                          staticStyle: { display: "block" }
                        },
                        [_vm._v(_vm._s(_vm.errors.description[0]))]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Trạng Thái" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "Chọn trạng thái..." },
                      model: {
                        value: _vm.brandData.status,
                        callback: function($$v) {
                          _vm.$set(_vm.brandData, "status", $$v)
                        },
                        expression: "brandData.status"
                      }
                    },
                    _vm._l(_vm.statusData, function(staData, index) {
                      return _c("el-option", {
                        key: index,
                        attrs: { label: staData.status, value: staData.values }
                      })
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _vm.errors.status
                    ? _c(
                        "div",
                        {
                          staticClass: "invalid-feedback",
                          staticStyle: { display: "block" }
                        },
                        [_vm._v(_vm._s(_vm.errors.status[0]))]
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/components/brands/ListComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/admin/components/brands/ListComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListComponent_vue_vue_type_template_id_0ccd5767___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListComponent.vue?vue&type=template&id=0ccd5767& */ "./resources/js/admin/components/brands/ListComponent.vue?vue&type=template&id=0ccd5767&");
/* harmony import */ var _ListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListComponent.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/brands/ListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ListComponent_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListComponent.vue?vue&type=style&index=0&scope=true&lang=css& */ "./resources/js/admin/components/brands/ListComponent.vue?vue&type=style&index=0&scope=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListComponent_vue_vue_type_template_id_0ccd5767___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListComponent_vue_vue_type_template_id_0ccd5767___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/brands/ListComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/brands/ListComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/admin/components/brands/ListComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/brands/ListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/brands/ListComponent.vue?vue&type=style&index=0&scope=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/admin/components/brands/ListComponent.vue?vue&type=style&index=0&scope=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListComponent.vue?vue&type=style&index=0&scope=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/brands/ListComponent.vue?vue&type=style&index=0&scope=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_style_index_0_scope_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/admin/components/brands/ListComponent.vue?vue&type=template&id=0ccd5767&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/admin/components/brands/ListComponent.vue?vue&type=template&id=0ccd5767& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_template_id_0ccd5767___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListComponent.vue?vue&type=template&id=0ccd5767& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/brands/ListComponent.vue?vue&type=template&id=0ccd5767&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_template_id_0ccd5767___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListComponent_vue_vue_type_template_id_0ccd5767___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/admin/services/brands_service.js":
/*!*******************************************************!*\
  !*** ./resources/js/admin/services/brands_service.js ***!
  \*******************************************************/
/*! exports provided: createBrand, loadeBrand, deleteBrand, updateBrand, unActive, onActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrand", function() { return createBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadeBrand", function() { return loadeBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBrand", function() { return deleteBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBrand", function() { return updateBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unActive", function() { return unActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onActive", function() { return onActive; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/admin/services/http_service.js");

function createBrand(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/brand/brands', data);
}
function loadeBrand() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/brand/brands');
}
function deleteBrand(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/brand/brands/".concat(id));
}
function updateBrand(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().put("/brand/brands/".concat(id), data);
}
function unActive(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/brand/unactive', id);
}
function onActive(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/brand/active', id);
}

/***/ })

}]);