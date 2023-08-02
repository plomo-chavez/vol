(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_barcode_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-barcode-reader */ "./node_modules/vue-barcode-reader/src/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ScannerCode",
  components: {
    StreamBarcodeReader: vue_barcode_reader__WEBPACK_IMPORTED_MODULE_0__["StreamBarcodeReader"]
  },
  data: function data() {
    return {
      loading: true,
      text: "",
      id: null
    };
  },
  beforeMount: function beforeMount() {
    this.loading = true;
  },
  props: {
    msg: String,
    openScann: {
      type: Boolean,
      "default": false
    },
    isModal: {
      type: Boolean,
      "default": false
    }
  },
  // http://sccrm.mx/c.php?t=DbyMvZc91nqhFNKLqA3wwphBk&a=42403
  watch: {
    openScann: function openScann(value) {
      if (value) {
        this.showModal();
      } else {
        this.hideModal();
      }
    },
    text: function text(value) {
      if (value != '') {
        this.$emit('changeText', this.text);
      }
    }
  },
  methods: {
    onDecode: function onDecode(a, b, c) {
      var _this = this;
      console.log(a, b, c);
      this.text = a;
      if (this.id) clearTimeout(this.id);
      this.id = setTimeout(function () {
        if (_this.text === a) {
          _this.text = "";
        }
      }, 5000);
    },
    onLoaded: function onLoaded() {
      this.loading = false;
    },
    showModal: function showModal() {
      this.$refs['my-modal'].show();
    },
    hideModal: function hideModal() {
      this.$refs['my-modal'].hide();
    },
    toggleModal: function toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/horas/formPorGuardia.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/horas/formPorGuardia.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var vue_onoff_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-onoff-toggle */ "./node_modules/vue-onoff-toggle/dist/vue-onoff-toggle.esm.js");
/* harmony import */ var _currentComponents_ScannerCode_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @currentComponents/ScannerCode.vue */ "./resources/js/src/views/currentComponents/ScannerCode.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'formPorGuardia',
  components: {
    Scann: _currentComponents_ScannerCode_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardSubTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BFormCheckboxGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckboxGroup"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    OnoffToggle: vue_onoff_toggle__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      guardia: null,
      codigo: null,
      voluntarios: null,
      openScann: false,
      hadScann: false,
      checked: true
    };
  },
  props: {},
  watch: {},
  computed: {},
  beforeMount: function beforeMount() {
    this.init();
  },
  mounted: function mounted() {},
  created: function created() {},
  methods: {
    handleOpenScann: function handleOpenScann() {
      var _this = this;
      this.hadScann = true;
      setTimeout(function () {
        _this.openScann = true;
      }, 3);
    },
    handleChangeCodigo: function handleChangeCodigo(codigo) {
      var _this2 = this;
      this.hadScann = false;
      setTimeout(function () {
        _this2.openScann = false;
      }, 3);
      this.codigo = codigo;
      this.addPersonal();
    },
    init: function init() {
      var _this3 = this;
      this.loading();
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_1__["default"].getUltimaGuardiaHoras({
        usuario_id: this.userData.id
      }).then(function (response) {
        _this3.loading(false);
        var data = response.data.data;
        _this3.guardia = data.length != 1 ? null : data[0];
        _this3.voluntarios = _this3.guardia.voluntarios;
      })["catch"](function (error) {
        _this3.loading(false);
        console.log(error);
      });
    },
    handleOpenGuardia: function handleOpenGuardia() {
      var payload = {
        payload: {
          usuario_id: this.userData.id,
          accion: 1
        }
      };
      this.peticion(payload);
    },
    handleCerrarGuardia: function handleCerrarGuardia() {
      var payload = {
        payload: {
          guardia_id: this.guardia.id,
          accion: 7
        }
      };
      this.peticion(payload);
    },
    addPersonal: function addPersonal() {
      var payload = {
        payload: {
          usuario_id: this.userData.id,
          guardia_id: this.guardia.id,
          codigo: this.codigo,
          accion: 5
        }
      };
      this.peticion(payload);
    },
    handleClosePersonal: function handleClosePersonal(data) {
      console.log(data);
      var payload = {
        payload: {
          registroGuardiaVoluntario: data.id,
          accion: 6
        }
      };
      this.peticion(payload);
    },
    peticion: function peticion(payload) {
      var _this4 = this;
      this.loading();
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_1__["default"].administrarGuardiaHoras(payload).then(function (response) {
        _this4.loading(false);
        console.log(payload);
        switch (payload.payload.accion) {
          case 1:
            _this4.init();
            break;
          case 5:
          case 6:
          case 7:
            _this4.messageConfirm({
              message: response.data.message,
              title: 'Información del sistema',
              icon: response.data.result ? 'success' : 'error',
              showCancelButton: false,
              confirmButtonText: 'Okay',
              cancelButtonText: 'No, cancelar',
              cancelFunction: null,
              messageCancel: false,
              confirmFunction: function confirmFunction() {
                _this4.init();
              }
            });
            break;
          default:
            break;
        }
      })["catch"](function (error) {
        _this4.loading(false);
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=template&id=d734279e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=template&id=d734279e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
    _vm.isModal ? "b-modal" : "b-card",
    {
      ref: "my-modal",
      tag: "component",
      attrs: {
        "hide-footer": "",
        "ok-only": "",
        "no-close-on-backdrop": "",
        title: "Modal escaner",
      },
    },
    [
      _vm.loading
        ? _c(
            "h3",
            {
              staticClass:
                "col-12 m-0 p-0 font-weight-bolder text-primary text-center",
            },
            [_vm._v("Cargando camara!!....")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("StreamBarcodeReader", {
        ref: "scann",
        on: {
          decode: function (a, b, c) {
            return _vm.onDecode(a, b, c)
          },
          loaded: function () {
            return _vm.onLoaded()
          },
        },
      }),
      _vm._v("\n  Input Value: " + _vm._s(_vm.text || "Nothing") + "\n"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/horas/formPorGuardia.vue?vue&type=template&id=59fe672a&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/horas/formPorGuardia.vue?vue&type=template&id=59fe672a& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.guardia == null
      ? _c("div", { staticClass: " " }, [
          _c(
            "h3",
            { staticClass: " font-weight-bolder class-12 text-center" },
            [_vm._v("No hay un turno abierto.")]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-12 p-0 m-0 d-flex flex-wrap" },
            [
              _c(
                "b-button",
                {
                  staticClass: "mx-auto",
                  attrs: { size: "sm", variant: "relief-secondary" },
                  on: { click: _vm.handleOpenGuardia },
                },
                [_vm._v("Abrir guardia")]
              ),
            ],
            1
          ),
        ])
      : _c(
          "div",
          { staticClass: "col-12 p-0 m-0" },
          [
            _c(
              "b-card",
              { staticClass: "col-6 mx-auto p-1 mb-2" },
              [
                _vm.hadScann
                  ? _c("Scann", {
                      attrs: { openScann: _vm.openScann, isModal: true },
                      on: { changeText: _vm.handleChangeCodigo },
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 p-0 m-0 mb-2" }, [
                  _c(
                    "div",
                    { staticClass: "col-12 p-0 m-0 d-flex flex-wrap" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "text-right mr-1 font-weight-bolder ww-100",
                        },
                        [_vm._v("Inicio:")]
                      ),
                      _vm._v(
                        _vm._s(_vm.formatoFechaYMD(_vm.guardia.inicio, true))
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 p-0 m-0 d-flex flex-wrap" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "text-right mr-1 font-weight-bolder ww-100",
                        },
                        [_vm._v("Delegación:")]
                      ),
                      _vm._v(_vm._s(_vm.guardia.delegacion.nombre)),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 p-0 m-0 d-flex flex-wrap" },
                    [
                      _c(
                        "label",
                        {
                          staticClass:
                            "text-right mr-1 font-weight-bolder ww-100",
                        },
                        [_vm._v("Verificador:")]
                      ),
                      _vm._v(
                        _vm._s(
                          _vm.guardia.verificador.nombre +
                            " " +
                            _vm.guardia.verificador.primerApellido +
                            " " +
                            _vm.guardia.verificador.segundoApellido
                        )
                      ),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-flex w-100 justify-content-between" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { size: "sm", variant: "relief-secondary" },
                        on: { click: _vm.handleOpenScann },
                      },
                      [_vm._v("Agregar personal")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        attrs: { size: "sm", variant: "relief-danger" },
                        on: { click: _vm.handleCerrarGuardia },
                      },
                      [_vm._v("Cerrar guardia")]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-12 mx-auto m-0 p-0 d-flex flex-wrap" },
              [
                _c("h4", { staticClass: "col-12 mb-1 font-weight-bolder " }, [
                  _vm._v("Voluntarios registrados:"),
                ]),
                _vm._v(" "),
                _vm._l(_vm.voluntarios, function (item, index) {
                  return _c(
                    "div",
                    { staticClass: "ww-300 p-2" },
                    [
                      _c("b-card", { staticClass: " p-1" }, [
                        _c("div", {}, [
                          _c(
                            "p",
                            { staticClass: " m-0 p-0 font-weight-bolder " },
                            [_vm._v(_vm._s(item.voluntario.numeroAsociado))]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: " m-0 p-0 font-weight-bolder " },
                            [_vm._v(_vm._s(item.voluntario.nombre))]
                          ),
                          _vm._v(" "),
                          _c("small", [
                            _c(
                              "p",
                              {
                                staticClass:
                                  " m-0 p-0 text-sm font-weight-bolder ",
                              },
                              [_vm._v("Hora de entrada:")]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("small", [
                            _c("p", { staticClass: " m-0 p-0 text-sm" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.formatoFechaYMD(item.fechaInicio, true)
                                )
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("small", [
                            _c(
                              "p",
                              {
                                staticClass:
                                  " m-0 p-0 text-sm font-weight-bolder ",
                              },
                              [_vm._v("Hora de salida:")]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("small", [
                            _c("p", { staticClass: " m-0 p-0 text-sm" }, [
                              _vm._v(
                                _vm._s(_vm.formatoFechaYMD(item.fechaFin, true))
                              ),
                            ]),
                          ]),
                        ]),
                        _vm._v(" "),
                        item.fechaFin == null
                          ? _c(
                              "div",
                              { staticClass: "col-12 p-0 m-0 mt-1" },
                              [
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "mx-auto",
                                    attrs: {
                                      size: "sm",
                                      block: "",
                                      variant: "relief-danger",
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.handleClosePersonal(item)
                                      },
                                    },
                                  },
                                  [_vm._v("Checar salida")]
                                ),
                              ],
                              1
                            )
                          : _vm._e(),
                      ]),
                    ],
                    1
                  )
                }),
              ],
              2
            ),
          ],
          1
        ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/currentComponents/ScannerCode.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/ScannerCode.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScannerCode_vue_vue_type_template_id_d734279e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScannerCode.vue?vue&type=template&id=d734279e&scoped=true& */ "./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=template&id=d734279e&scoped=true&");
/* harmony import */ var _ScannerCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScannerCode.vue?vue&type=script&lang=js& */ "./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ScannerCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScannerCode_vue_vue_type_template_id_d734279e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScannerCode_vue_vue_type_template_id_d734279e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d734279e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/currentComponents/ScannerCode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScannerCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScannerCode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScannerCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=template&id=d734279e&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=template&id=d734279e&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScannerCode_vue_vue_type_template_id_d734279e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScannerCode.vue?vue&type=template&id=d734279e&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/ScannerCode.vue?vue&type=template&id=d734279e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScannerCode_vue_vue_type_template_id_d734279e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScannerCode_vue_vue_type_template_id_d734279e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/horas/formPorGuardia.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/horas/formPorGuardia.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formPorGuardia_vue_vue_type_template_id_59fe672a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formPorGuardia.vue?vue&type=template&id=59fe672a& */ "./resources/js/src/views/horas/formPorGuardia.vue?vue&type=template&id=59fe672a&");
/* harmony import */ var _formPorGuardia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formPorGuardia.vue?vue&type=script&lang=js& */ "./resources/js/src/views/horas/formPorGuardia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formPorGuardia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formPorGuardia_vue_vue_type_template_id_59fe672a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formPorGuardia_vue_vue_type_template_id_59fe672a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/horas/formPorGuardia.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/horas/formPorGuardia.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/horas/formPorGuardia.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPorGuardia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formPorGuardia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/horas/formPorGuardia.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formPorGuardia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/horas/formPorGuardia.vue?vue&type=template&id=59fe672a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/horas/formPorGuardia.vue?vue&type=template&id=59fe672a& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formPorGuardia_vue_vue_type_template_id_59fe672a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formPorGuardia.vue?vue&type=template&id=59fe672a& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/horas/formPorGuardia.vue?vue&type=template&id=59fe672a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formPorGuardia_vue_vue_type_template_id_59fe672a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formPorGuardia_vue_vue_type_template_id_59fe672a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);