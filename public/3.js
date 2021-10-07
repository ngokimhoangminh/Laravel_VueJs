(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/View/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/View/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/home_service */ "./resources/js/client/services/home_service.js");


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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      categories: [],
      products: []
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.loadCategory();
    this.loadProduct();
  },
  methods: {
    loadCategory: function () {
      var _loadCategory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, m;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_home_service__WEBPACK_IMPORTED_MODULE_1__["loadeCategory"]();

              case 3:
                response = _context.sent;
                this.categories = response.data.data_total;
                console.log(this.categories);
                m = response.data;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred, Please refresh!',
                  time: 4000
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function loadCategory() {
        return _loadCategory.apply(this, arguments);
      }

      return loadCategory;
    }(),
    loadProduct: function () {
      var _loadProduct = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_home_service__WEBPACK_IMPORTED_MODULE_1__["loadeProduct"]();

              case 3:
                response = _context2.sent;
                this.products = response.data.data_total;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Some error occurred, Please refresh!',
                  time: 4000
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function loadProduct() {
        return _loadProduct.apply(this, arguments);
      }

      return loadProduct;
    }(),
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(0).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/View/Home.vue?vue&type=template&id=a563cdf4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/client/components/View/Home.vue?vue&type=template&id=a563cdf4& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "categories-shop" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.categories, function(category, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass:
                  "col-lg-4 col-md-4 col-sm-12 col-xs-12 shop-cat-box"
              },
              [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "assets/admin/uploads/" + category.image,
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c(
                  "a",
                  { staticClass: "btn hvr-hover", attrs: { href: "#" } },
                  [_vm._v(_vm._s(category.name))]
                )
              ]
            )
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "products-box" }, [
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row special-list" },
          [
            _vm._l(_vm.products, function(product, index) {
              return _c(
                "div",
                {
                  key: index,
                  staticClass: "col-lg-3 col-md-6 special-grid best-seller"
                },
                [
                  _c("div", { staticClass: "products-single fix" }, [
                    _c("div", { staticClass: "box-img-hover" }, [
                      _vm._m(2, true),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          src: "assets/admin/uploads/" + product.image,
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
                                  "data-toggle": "tooltip",
                                  "data-placement": "right",
                                  title: "View"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push(
                                      "/product-detail/" + product.id
                                    )
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-eye" })]
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(3, true),
                          _vm._v(" "),
                          _vm._m(4, true)
                        ]),
                        _vm._v(" "),
                        _c("a", { staticClass: "cart", attrs: { href: "#" } }, [
                          _vm._v("Thêm giỏ hàng")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "why-text" }, [
                      _c("h4", [_vm._v(_vm._s(product.name))]),
                      _vm._v(" "),
                      _c("h5", [
                        _vm._v(
                          _vm._s(_vm.formatPrice(product.discount)) + " VND"
                        )
                      ])
                    ])
                  ])
                ]
              )
            }),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _vm._m(6)
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(7)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "title-all text-center" }, [
          _c("h1", [_vm._v("Sản Phẩm Nổi Bật")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Tuy Shop hiện chủ yếu chỉ bán hàng online nhưng luôn luôn đảm bảo uy tín và chất lượng sản phẩm."
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "special-menu text-center" }, [
          _c("div", { staticClass: "button-group filter-button-group" }, [
            _c(
              "button",
              { staticClass: "active", attrs: { "data-filter": "*" } },
              [_vm._v("Tất Cả")]
            ),
            _vm._v(" "),
            _c("button", { attrs: { "data-filter": ".top-featured" } }, [
              _vm._v("Nội Bật")
            ]),
            _vm._v(" "),
            _c("button", { attrs: { "data-filter": ".best-seller" } }, [
              _vm._v("Giảm Giá")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "type-lb" }, [
      _c("p", { staticClass: "sale" }, [_vm._v("Giảm Giá")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
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
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-3 col-md-6 special-grid top-featured" },
      [
        _c("div", { staticClass: "products-single fix" }, [
          _c("div", { staticClass: "box-img-hover" }, [
            _c("div", { staticClass: "type-lb" }, [
              _c("p", { staticClass: "new" }, [_vm._v("Mới")])
            ]),
            _vm._v(" "),
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
                _vm._v("Thêm giỏ hàng")
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
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-3 col-md-6 special-grid top-featured" },
      [
        _c("div", { staticClass: "products-single fix" }, [
          _c("div", { staticClass: "box-img-hover" }, [
            _c("div", { staticClass: "type-lb" }, [
              _c("p", { staticClass: "sale" }, [_vm._v("Giảm Giá")])
            ]),
            _vm._v(" "),
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
                _vm._v("Thêm giỏ hàng")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "why-text" }, [
            _c("h4", [_vm._v("Lorem ipsum dolor sit amet")]),
            _vm._v(" "),
            _c("h5", [_vm._v(" $10.79")])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "latest-blog" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-12" }, [
            _c("div", { staticClass: "title-all text-center" }, [
              _c("h1", [_vm._v("Blog mới nhất")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim."
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6 col-lg-4 col-xl-4" }, [
            _c("div", { staticClass: "blog-box" }, [
              _c("div", { staticClass: "blog-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: "assets/client/images/blog-img.jpg", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "blog-content" }, [
                _c("div", { staticClass: "title-blog" }, [
                  _c("h3", [_vm._v("Fusce in augue non nisi fringilla")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis."
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "option-blog" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "#",
                          "data-toggle": "tooltip",
                          "data-placement": "right",
                          title: "Likes"
                        }
                      },
                      [_c("i", { staticClass: "far fa-heart" })]
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
                          title: "Views"
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
                          title: "Comments"
                        }
                      },
                      [_c("i", { staticClass: "far fa-comments" })]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-lg-4 col-xl-4" }, [
            _c("div", { staticClass: "blog-box" }, [
              _c("div", { staticClass: "blog-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "assets/client/images/blog-img-01.jpg",
                    alt: ""
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "blog-content" }, [
                _c("div", { staticClass: "title-blog" }, [
                  _c("h3", [_vm._v("Fusce in augue non nisi fringilla")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis."
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "option-blog" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "#",
                          "data-toggle": "tooltip",
                          "data-placement": "right",
                          title: "Likes"
                        }
                      },
                      [_c("i", { staticClass: "far fa-heart" })]
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
                          title: "Views"
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
                          title: "Comments"
                        }
                      },
                      [_c("i", { staticClass: "far fa-comments" })]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6 col-lg-4 col-xl-4" }, [
            _c("div", { staticClass: "blog-box" }, [
              _c("div", { staticClass: "blog-img" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: {
                    src: "assets/client/images/blog-img-02.jpg",
                    alt: ""
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "blog-content" }, [
                _c("div", { staticClass: "title-blog" }, [
                  _c("h3", [_vm._v("Fusce in augue non nisi fringilla")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis."
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "option-blog" }, [
                  _c("li", [
                    _c(
                      "a",
                      {
                        attrs: {
                          href: "#",
                          "data-toggle": "tooltip",
                          "data-placement": "right",
                          title: "Likes"
                        }
                      },
                      [_c("i", { staticClass: "far fa-heart" })]
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
                          title: "Views"
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
                          title: "Comments"
                        }
                      },
                      [_c("i", { staticClass: "far fa-comments" })]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/client/components/View/Home.vue":
/*!******************************************************!*\
  !*** ./resources/js/client/components/View/Home.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_a563cdf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=a563cdf4& */ "./resources/js/client/components/View/Home.vue?vue&type=template&id=a563cdf4&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/client/components/View/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_a563cdf4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_a563cdf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/client/components/View/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/client/components/View/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/client/components/View/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/View/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/client/components/View/Home.vue?vue&type=template&id=a563cdf4&":
/*!*************************************************************************************!*\
  !*** ./resources/js/client/components/View/Home.vue?vue&type=template&id=a563cdf4& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a563cdf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=a563cdf4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/client/components/View/Home.vue?vue&type=template&id=a563cdf4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a563cdf4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a563cdf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/client/services/home_service.js":
/*!******************************************************!*\
  !*** ./resources/js/client/services/home_service.js ***!
  \******************************************************/
/*! exports provided: loadeCategory, loadeProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadeCategory", function() { return loadeCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadeProduct", function() { return loadeProduct; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/client/services/http_service.js");

function loadeCategory() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/category/categories');
}
function loadeProduct() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/product/products');
}

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

/***/ })

}]);