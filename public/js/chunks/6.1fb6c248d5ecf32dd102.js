(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/detallesVoluntario.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/voluntarios/detallesVoluntario.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _views_voluntarios_formDatosVoluntario_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/voluntarios/formDatosVoluntario.vue */ "./resources/js/src/views/voluntarios/formDatosVoluntario.vue");
/* harmony import */ var _views_voluntarios_tabHorasVoluntarias_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/voluntarios/tabHorasVoluntarias.vue */ "./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'detallesVoluntario',
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_7__["default"]],
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCard"],
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTab"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BButton"],
    formDatosVoluntario: _views_voluntarios_formDatosVoluntario_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    tabHoras: _views_voluntarios_tabHorasVoluntarias_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      voluntario: null
    };
  },
  props: {
    voluntario_id: {
      type: Number,
      "default": null
    },
    isRegistro: {
      type: Boolean,
      "default": false
    }
  },
  watch: {},
  computed: {},
  created: function created() {},
  beforeMount: function beforeMount() {
    var _this = this;
    if (this.voluntario_id != null) {
      this.loading();
      if (this.isRegistro) {
        _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_6__["default"].getVoluntarioOut({
          'payload': {
            id: this.voluntario_id
          }
        }).then(function (response) {
          _this.loading(false);
          if (response.data.data != null) {
            var tmp = _this.copyObject(response.data.data);
            if (tmp.delegacion != null) {
              tmp.delegacion = {
                'value': tmp.delegacion.id,
                'label': tmp.delegacion.nombre,
                'areas': tmp.delegacion.areas
              };
              var tmpAreas = [];
              tmp.delegacion.areas.map(function (item, index) {
                tmpAreas.push(item.area);
              });
              tmp.delegacion.areas = tmpAreas;
            }
            tmp.nacionalidad = tmp.nacionalidad != null ? {
              value: tmp.nacionalidad,
              label: tmp.nacionalidad
            } : null;
            tmp.tipoSangre = tmp.tipoSangre != null ? {
              value: tmp.tipoSangre,
              label: tmp.tipoSangre
            } : null;
            tmp.sexo = tmp.sexo != null ? {
              value: tmp.sexo,
              label: tmp.sexo
            } : null;
            tmp.estadoCivil = tmp.estadoCivil != null ? {
              value: tmp.estadoCivil,
              label: tmp.estadoCivil
            } : null;
            tmp.area = tmp.area != null ? {
              label: tmp.area.nombre,
              value: tmp.area.id
            } : null;
            _this.voluntario = tmp;
          }
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_6__["default"].getVoluntario({
          'payload': {
            id: this.voluntario_id
          }
        }).then(function (response) {
          _this.loading(false);
          if (response.data.data != null) {
            var tmp = _this.copyObject(response.data.data);
            if (tmp.delegacion != null) {
              tmp.delegacion = {
                'value': tmp.delegacion.id,
                'label': tmp.delegacion.nombre,
                'areas': tmp.delegacion.areas
              };
              var tmpAreas = [];
              tmp.delegacion.areas.map(function (item, index) {
                tmpAreas.push(item.area);
              });
              tmp.delegacion.areas = tmpAreas;
            }
            tmp.nacionalidad = tmp.nacionalidad != null ? {
              value: tmp.nacionalidad,
              label: tmp.nacionalidad
            } : null;
            tmp.tipoSangre = tmp.tipoSangre != null ? {
              value: tmp.tipoSangre,
              label: tmp.tipoSangre
            } : null;
            tmp.sexo = tmp.sexo != null ? {
              value: tmp.sexo,
              label: tmp.sexo
            } : null;
            tmp.estadoCivil = tmp.estadoCivil != null ? {
              value: tmp.estadoCivil,
              label: tmp.estadoCivil
            } : null;
            tmp.area = tmp.area != null ? {
              label: tmp.area.nombre,
              value: tmp.area.id
            } : null;
            _this.voluntario = tmp;
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/detallesVoluntario.vue?vue&type=template&id=2a3a1fe0&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/voluntarios/detallesVoluntario.vue?vue&type=template&id=2a3a1fe0& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        {
          staticClass: " col-12 d-flex flex-wrap justify-content-between mb-2",
        },
        [
          _c(
            "div",
            [
              _c(
                "b-button",
                {
                  attrs: { size: "sm", variant: "outline-danger" },
                  on: {
                    click: function () {
                      _vm.$emit("handleAtras")
                    },
                  },
                },
                [_vm._v("Atrás")]
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("div"),
        ]
      ),
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "col-12 p-2" },
        [
          _vm.voluntario != null
            ? _c(
                "b-tabs",
                { attrs: { "content-class": "pt-1", fill: "" } },
                [
                  _c(
                    "b-tab",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "title",
                            fn: function () {
                              return [
                                _c("feather-icon", {
                                  attrs: { icon: "ToolIcon" },
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-block" },
                                  [_vm._v("Información del voluntario")]
                                ),
                              ]
                            },
                            proxy: true,
                          },
                        ],
                        null,
                        false,
                        3982236923
                      ),
                    },
                    [
                      _vm._v(" "),
                      _c("formDatosVoluntario", {
                        attrs: {
                          withCard: "",
                          isRegistro: _vm.isRegistro,
                          data: _vm.voluntario,
                          btnCancel: false,
                          exportActions: "",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tab",
                    {
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "title",
                            fn: function () {
                              return [
                                _c("feather-icon", {
                                  attrs: { icon: "ToolIcon" },
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-block" },
                                  [_vm._v("Información personal")]
                                ),
                              ]
                            },
                            proxy: true,
                          },
                        ],
                        null,
                        false,
                        23429025
                      ),
                    },
                    [
                      _vm._v(" "),
                      _c("h3", { staticClass: "col-12 text-center" }, [
                        _vm._v("Proximamente"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  !_vm.isRegistro
                    ? _c(
                        "b-tab",
                        {
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "title",
                                fn: function () {
                                  return [
                                    _c("feather-icon", {
                                      attrs: { icon: "ToolIcon" },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "d-none d-sm-block" },
                                      [_vm._v("Horas voluntarias")]
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            false,
                            1555103691
                          ),
                        },
                        [
                          _vm._v(" "),
                          _c("tabHoras", {
                            attrs: { voluntario_id: _vm.voluntario_id },
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.isRegistro
                    ? _c(
                        "b-tab",
                        {
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "title",
                                fn: function () {
                                  return [
                                    _c("feather-icon", {
                                      attrs: { icon: "ToolIcon" },
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "d-none d-sm-block" },
                                      [_vm._v("Expediente")]
                                    ),
                                  ]
                                },
                                proxy: true,
                              },
                            ],
                            null,
                            false,
                            3436221377
                          ),
                        },
                        [
                          _vm._v(" "),
                          _c("h3", { staticClass: "col-12 text-center" }, [
                            _vm._v("Proximamente"),
                          ]),
                        ]
                      )
                    : _vm._e(),
                ],
                1
              )
            : _c("h1", { staticClass: "col-12 text-center" }, [
                _vm._v(" No se encontró el voluntario."),
              ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/voluntarios/detallesVoluntario.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/voluntarios/detallesVoluntario.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detallesVoluntario_vue_vue_type_template_id_2a3a1fe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detallesVoluntario.vue?vue&type=template&id=2a3a1fe0& */ "./resources/js/src/views/voluntarios/detallesVoluntario.vue?vue&type=template&id=2a3a1fe0&");
/* harmony import */ var _detallesVoluntario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detallesVoluntario.vue?vue&type=script&lang=js& */ "./resources/js/src/views/voluntarios/detallesVoluntario.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detallesVoluntario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detallesVoluntario_vue_vue_type_template_id_2a3a1fe0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detallesVoluntario_vue_vue_type_template_id_2a3a1fe0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/voluntarios/detallesVoluntario.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/voluntarios/detallesVoluntario.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/voluntarios/detallesVoluntario.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesVoluntario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detallesVoluntario.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/detallesVoluntario.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesVoluntario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/voluntarios/detallesVoluntario.vue?vue&type=template&id=2a3a1fe0&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/voluntarios/detallesVoluntario.vue?vue&type=template&id=2a3a1fe0& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesVoluntario_vue_vue_type_template_id_2a3a1fe0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detallesVoluntario.vue?vue&type=template&id=2a3a1fe0& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/detallesVoluntario.vue?vue&type=template&id=2a3a1fe0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesVoluntario_vue_vue_type_template_id_2a3a1fe0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detallesVoluntario_vue_vue_type_template_id_2a3a1fe0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);