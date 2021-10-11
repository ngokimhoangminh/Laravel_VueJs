(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/View/product/ProductDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/View/product/ProductDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product_service */ "./resources/js/client/services/product_service.js");


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
      products: {}
    };
  },
  mounted: function mounted() {
    this.detail_Product();
  },
  created: function created() {},
  methods: {
    detail_Product: function () {
      var _detail_Product = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductDetail"](this.$route.params.id);

              case 3:
                response = _context.sent;
                this.products = response.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred, Please refresh!',
                  time: 4000
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function detail_Product() {
        return _detail_Product.apply(this, arguments);
      }

      return detail_Product;
    }(),
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/View/product/ProductDetail.vue?vue&type=template&id=2b48c32e&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/View/product/ProductDetail.vue?vue&type=template&id=2b48c32e& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "shop-detail-box-main" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-5 col-lg-5 col-md-6" }, [
          _c(
            "div",
            {
              staticClass: "single-product-slider carousel slide",
              attrs: { id: "carousel-example-1", "data-ride": "carousel" }
            },
            [
              _c(
                "div",
                { staticClass: "carousel-inner", attrs: { role: "listbox" } },
                [
                  _c("div", { staticClass: "carousel-item active" }, [
                    _c("img", {
                      staticClass: "d-block w-100",
                      attrs: {
                        src: "assets/admin/uploads/" + _vm.products.image,
                        alt: "First slide"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "carousel-item" }, [
                    _c("img", {
                      staticClass: "d-block w-100",
                      attrs: {
                        src: "assets/admin/uploads/" + _vm.products.image,
                        alt: "Second slide"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "carousel-item" }, [
                    _c("img", {
                      staticClass: "d-block w-100",
                      attrs: {
                        src: "assets/admin/uploads/" + _vm.products.image,
                        alt: "Third slide"
                      }
                    })
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("ol", { staticClass: "carousel-indicators" }, [
                _c(
                  "li",
                  {
                    staticClass: "active",
                    attrs: {
                      "data-target": "#carousel-example-1",
                      "data-slide-to": "0"
                    }
                  },
                  [
                    _c("img", {
                      staticClass: "d-block w-100 img-fluid",
                      attrs: {
                        src: "assets/admin/uploads/" + _vm.products.image,
                        alt: ""
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    attrs: {
                      "data-target": "#carousel-example-1",
                      "data-slide-to": "1"
                    }
                  },
                  [
                    _c("img", {
                      staticClass: "d-block w-100 img-fluid",
                      attrs: {
                        src: "assets/admin/uploads/" + _vm.products.image,
                        alt: ""
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    attrs: {
                      "data-target": "#carousel-example-1",
                      "data-slide-to": "2"
                    }
                  },
                  [
                    _c("img", {
                      staticClass: "d-block w-100 img-fluid",
                      attrs: {
                        src: "assets/admin/uploads/" + _vm.products.image,
                        alt: ""
                      }
                    })
                  ]
                )
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-7 col-lg-7 col-md-6" }, [
          _c("div", { staticClass: "single-product-details" }, [
            _c("h2", [_vm._v(_vm._s(_vm.products.name))]),
            _vm._v(" "),
            _c("h5", [
              _c("del", [
                _vm._v(_vm._s(_vm.formatPrice(_vm.products.price)) + " đ")
              ]),
              _vm._v(_vm._s(_vm.formatPrice(_vm.products.discount)) + " đ")
            ]),
            _vm._v(" "),
            _c("p"),
            _c("h4", [_vm._v("Mô tả ngắn:")]),
            _vm._v(" "),
            _c("p", {
              domProps: { innerHTML: _vm._s(_vm.products.product_des) }
            }),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4)
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(5)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-prev",
        attrs: {
          href: "#carousel-example-1",
          role: "button",
          "data-slide": "prev"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-angle-left",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-next",
        attrs: {
          href: "#carousel-example-1",
          role: "button",
          "data-slide": "next"
        }
      },
      [
        _c("i", {
          staticClass: "fa fa-angle-right",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _c("div", { staticClass: "form-group size-st" }, [
          _c("label", { staticClass: "size-label" }, [_vm._v("Size")]),
          _vm._v(" "),
          _c(
            "select",
            {
              staticClass: "selectpicker show-tick form-control",
              attrs: { id: "basic" }
            },
            [
              _c("option", { attrs: { value: "0" } }, [_vm._v("Size")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "0" } }, [_vm._v("S")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("M")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("L")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("XL")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("XXL")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("3XL")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "1" } }, [_vm._v("4XL")])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("div", { staticClass: "form-group quantity-box" }, [
          _c("label", { staticClass: "control-label" }, [_vm._v("Số lượng")]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { value: "0", min: "0", max: "20", type: "number" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "price-box-bar" }, [
      _c("div", { staticClass: "cart-and-bay-btn" }, [
        _c(
          "a",
          {
            staticClass: "btn hvr-hover",
            attrs: { "data-fancybox-close": "", href: "#" }
          },
          [_vm._v("Mua ngay")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn hvr-hover",
            attrs: { "data-fancybox-close": "", href: "#" }
          },
          [_vm._v("Thêm giỏ hàng")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "add-to-btn" }, [
      _c("div", { staticClass: "add-comp" }, [
        _c("a", { staticClass: "btn hvr-hover", attrs: { href: "#" } }, [
          _c("i", { staticClass: "fas fa-heart" }),
          _vm._v(" Thêm yêu thích")
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "btn hvr-hover", attrs: { href: "#" } }, [
          _c("i", { staticClass: "fas fa-sync-alt" }),
          _vm._v("Đối chiếu")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "share-bar" }, [
        _c("a", { staticClass: "btn hvr-hover", attrs: { href: "#" } }, [
          _c("i", {
            staticClass: "fab fa-facebook",
            attrs: { "aria-hidden": "true" }
          })
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "btn hvr-hover", attrs: { href: "#" } }, [
          _c("i", {
            staticClass: "fab fa-google-plus",
            attrs: { "aria-hidden": "true" }
          })
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "btn hvr-hover", attrs: { href: "#" } }, [
          _c("i", {
            staticClass: "fab fa-twitter",
            attrs: { "aria-hidden": "true" }
          })
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "btn hvr-hover", attrs: { href: "#" } }, [
          _c("i", {
            staticClass: "fab fa-pinterest-p",
            attrs: { "aria-hidden": "true" }
          })
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "btn hvr-hover", attrs: { href: "#" } }, [
          _c("i", {
            staticClass: "fab fa-whatsapp",
            attrs: { "aria-hidden": "true" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row my-5" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "title-all text-center" }, [
          _c("h1", [_vm._v("Sản phẩm liên quan")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim."
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "row featured-products-box owl-theme justify-content-center"
          },
          [
            _c("div", { staticClass: "item" }, [
              _c("div", { staticClass: "products-single fix" }, [
                _c("div", { staticClass: "box-img-hover" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: "assets/client/images/img-pro-01.jpg",
                      alt: "Image"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mask-icon" }, [
                    _c("ul", [
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "tooltip",
                              "data-placement": "right",
                              title: "View"
                            }
                          },
                          [_c("i", { staticClass: "fas fa-eye" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "tooltip",
                              "data-placement": "right",
                              title: "Compare"
                            }
                          },
                          [_c("i", { staticClass: "fas fa-sync-alt" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "tooltip",
                              "data-placement": "right",
                              title: "Add to Wishlist"
                            }
                          },
                          [_c("i", { staticClass: "far fa-heart" })]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "cart", attrs: { href: "#" } }, [
                      _vm._v("Add to Cart")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "why-text" }, [
                  _c("h4", [_vm._v("Lorem ipsum dolor sit amet")]),
                  _vm._v(" "),
                  _c("h5", [_vm._v(" $9.79")])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item" }, [
              _c("div", { staticClass: "products-single fix" }, [
                _c("div", { staticClass: "box-img-hover" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: "assets/client/images/img-pro-02.jpg",
                      alt: "Image"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mask-icon" }, [
                    _c("ul", [
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "tooltip",
                              "data-placement": "right",
                              title: "View"
                            }
                          },
                          [_c("i", { staticClass: "fas fa-eye" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "tooltip",
                              "data-placement": "right",
                              title: "Compare"
                            }
                          },
                          [_c("i", { staticClass: "fas fa-sync-alt" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "tooltip",
                              "data-placement": "right",
                              title: "Add to Wishlist"
                            }
                          },
                          [_c("i", { staticClass: "far fa-heart" })]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "cart", attrs: { href: "#" } }, [
                      _vm._v("Add to Cart")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "why-text" }, [
                  _c("h4", [_vm._v("Lorem ipsum dolor sit amet")]),
                  _vm._v(" "),
                  _c("h5", [_vm._v(" $9.79")])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item" }, [
              _c("div", { staticClass: "products-single fix" }, [
                _c("div", { staticClass: "box-img-hover" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: "assets/client/images/img-pro-03.jpg",
                      alt: "Image"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mask-icon" }, [
                    _c("ul", [
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "tooltip",
                              "data-placement": "right",
                              title: "View"
                            }
                          },
                          [_c("i", { staticClass: "fas fa-eye" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "tooltip",
                              "data-placement": "right",
                              title: "Compare"
                            }
                          },
                          [_c("i", { staticClass: "fas fa-sync-alt" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "tooltip",
                              "data-placement": "right",
                              title: "Add to Wishlist"
                            }
                          },
                          [_c("i", { staticClass: "far fa-heart" })]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "cart", attrs: { href: "#" } }, [
                      _vm._v("Add to Cart")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "why-text" }, [
                  _c("h4", [_vm._v("Lorem ipsum dolor sit amet")]),
                  _vm._v(" "),
                  _c("h5", [_vm._v(" $9.79")])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item" }, [
              _c("div", { staticClass: "products-single fix" }, [
                _c("div", { staticClass: "box-img-hover" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: "assets/client/images/img-pro-04.jpg",
                      alt: "Image"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "mask-icon" }, [
                    _c("ul", [
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "tooltip",
                              "data-placement": "right",
                              title: "View"
                            }
                          },
                          [_c("i", { staticClass: "fas fa-eye" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "tooltip",
                              "data-placement": "right",
                              title: "Compare"
                            }
                          },
                          [_c("i", { staticClass: "fas fa-sync-alt" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "tooltip",
                              "data-placement": "right",
                              title: "Add to Wishlist"
                            }
                          },
                          [_c("i", { staticClass: "far fa-heart" })]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("a", { staticClass: "cart", attrs: { href: "#" } }, [
                      _vm._v("Add to Cart")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "why-text" }, [
                  _c("h4", [_vm._v("Lorem ipsum dolor sit amet")]),
                  _vm._v(" "),
                  _c("h5", [_vm._v(" $9.79")])
                ])
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/View/product/ProductDetail.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/client/components/View/product/ProductDetail.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductDetail_vue_vue_type_template_id_2b48c32e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=template&id=2b48c32e& */ "./resources/js/client/components/View/product/ProductDetail.vue?vue&type=template&id=2b48c32e&");
/* harmony import */ var _ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=script&lang=js& */ "./resources/js/client/components/View/product/ProductDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductDetail_vue_vue_type_template_id_2b48c32e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductDetail_vue_vue_type_template_id_2b48c32e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/View/product/ProductDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/View/product/ProductDetail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/client/components/View/product/ProductDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/View/product/ProductDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/View/product/ProductDetail.vue?vue&type=template&id=2b48c32e&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/client/components/View/product/ProductDetail.vue?vue&type=template&id=2b48c32e& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_2b48c32e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductDetail.vue?vue&type=template&id=2b48c32e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/View/product/ProductDetail.vue?vue&type=template&id=2b48c32e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_2b48c32e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_2b48c32e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/services/http_service.js":
/*!******************************************************!*\
  !*** ./resources/js/client/services/http_service.js ***!
  \******************************************************/
/*! exports provided: http, httpFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFile", function() { return httpFile; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./resources/js/client/store/store.js");


function http() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: _store_store__WEBPACK_IMPORTED_MODULE_1__["default"].state.apiURL // headers:{
    //     Authorization: 'Bearer '+auth.getAccessToken(),
    // }

  });
}
function httpFile() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: _store_store__WEBPACK_IMPORTED_MODULE_1__["default"].state.apiURL,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

/***/ }),

/***/ "./resources/js/client/services/product_service.js":
/*!*********************************************************!*\
  !*** ./resources/js/client/services/product_service.js ***!
  \*********************************************************/
/*! exports provided: ProductDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetail", function() { return ProductDetail; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/client/services/http_service.js");

function ProductDetail(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/product/products/".concat(id));
}

/***/ })

}]);