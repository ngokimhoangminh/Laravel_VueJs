(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/Authentication/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/Authentication/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/admin/services/auth_service.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Register',
  data: function data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    };
  },
  created: function created() {},
  mounted: function mounted() {
    document.querySelector('body').style.backgroundColor = '#343a40';
  },
  methods: {
    register: function () {
      var _register = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["register"](this.user);

              case 3:
                this.flashMessage.success({
                  message: 'Đăng ký thành thành công!',
                  time: 4000
                });
                this.error = {};
                this.$router.push('/');
                _context.next = 19;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 13 : _context.t1 === 500 ? 15 : 17;
                break;

              case 13:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 19);

              case 15:
                this.flashMessage.error({
                  message: _context.t0.response.data.message,
                  time: 4000
                });
                return _context.abrupt("break", 19);

              case 17:
                this.flashMessage.error({
                  message: 'Some error occurred, Please try agian!',
                  time: 4000
                });
                return _context.abrupt("break", 19);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function register() {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/Authentication/Register.vue?vue&type=template&id=b50d25c2&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/admin/components/Authentication/Register.vue?vue&type=template&id=b50d25c2& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "layoutAuthentication" } }, [
    _c("div", { attrs: { id: "layoutAuthentication_content" } }, [
      _c("main", [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-lg-7" }, [
              _c(
                "div",
                { staticClass: "card shadow-lg border-0 rounded-lg mt-5" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.register.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row mb-3" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-floating mb-3 mb-md-0" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.user.name,
                                      expression: "user.name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "name",
                                    type: "text",
                                    placeholder: "Enter your first name"
                                  },
                                  domProps: { value: _vm.user.name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.user,
                                        "name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("Enter full name")
                                ]),
                                _vm._v(" "),
                                _vm.errors.name
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [_vm._v(_vm._s(_vm.errors.name[0]))]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("div", { staticClass: "form-floating" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.email,
                                    expression: "user.email"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  id: "email",
                                  type: "email",
                                  placeholder: "name@example.com"
                                },
                                domProps: { value: _vm.user.email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "email" } }, [
                                _vm._v("Email address")
                              ]),
                              _vm._v(" "),
                              _vm.errors.email
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v(_vm._s(_vm.errors.email[0]))]
                                  )
                                : _vm._e()
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row mb-3" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-floating mb-3 mb-md-0" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.user.password,
                                      expression: "user.password"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "password",
                                    type: "password",
                                    placeholder: "Create a password"
                                  },
                                  domProps: { value: _vm.user.password },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.user,
                                        "password",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "password" } }, [
                                  _vm._v("Password")
                                ]),
                                _vm._v(" "),
                                _vm.errors.password
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [_vm._v(_vm._s(_vm.errors.password[0]))]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-floating mb-3 mb-md-0" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.user.password_confirmation,
                                      expression: "user.password_confirmation"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "password_confirm",
                                    type: "password",
                                    placeholder: "Confirm password"
                                  },
                                  domProps: {
                                    value: _vm.user.password_confirmation
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.user,
                                        "password_confirmation",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  { attrs: { for: "password_confirm" } },
                                  [_vm._v("Confirm Password")]
                                ),
                                _vm._v(" "),
                                _vm.errors.password_confirmation
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.password_confirmation[0]
                                          )
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(1)
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-footer text-center py-3" }, [
                    _c(
                      "div",
                      { staticClass: "small" },
                      [
                        _c(
                          "router-link",
                          { attrs: { to: { name: "login" } } },
                          [_vm._v("Have an account? Go to login")]
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(2)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "text-center font-weight-light my-4" }, [
        _vm._v("Đăng Ký Tài Khoản")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-4 mb-0" }, [
      _c("div", { staticClass: "d-grid" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-block",
            attrs: { type: "submit" }
          },
          [_vm._v("Đăng Ký")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "layoutAuthentication_footer" } }, [
      _c("footer", { staticClass: "py-4 bg-light mt-auto" }, [
        _c("div", { staticClass: "container-fluid px-4" }, [
          _c(
            "div",
            {
              staticClass:
                "d-flex align-items-center justify-content-between small"
            },
            [
              _c("div", { staticClass: "text-muted" }, [
                _vm._v("Copyright © Your Website 2021")
              ]),
              _vm._v(" "),
              _c("div", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Privacy Policy")]),
                _vm._v(
                  "\n                           ·\n                           "
                ),
                _c("a", { attrs: { href: "#" } }, [
                  _vm._v("Terms & Conditions")
                ])
              ])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/admin/components/Authentication/Register.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/admin/components/Authentication/Register.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_b50d25c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=b50d25c2& */ "./resources/js/admin/components/Authentication/Register.vue?vue&type=template&id=b50d25c2&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/admin/components/Authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_b50d25c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_b50d25c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/admin/components/Authentication/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/admin/components/Authentication/Register.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/admin/components/Authentication/Register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/Authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/admin/components/Authentication/Register.vue?vue&type=template&id=b50d25c2&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/admin/components/Authentication/Register.vue?vue&type=template&id=b50d25c2& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_b50d25c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=b50d25c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/admin/components/Authentication/Register.vue?vue&type=template&id=b50d25c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_b50d25c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_b50d25c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);