(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_barcode_reader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-barcode-reader */ "./node_modules/vue-barcode-reader/src/index.js");
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _views_voluntarios_formVoluntario_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/views/voluntarios/formVoluntario.vue */ "./resources/js/src/views/voluntarios/formVoluntario.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "HelloWorld",
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_11__["default"]],
  components: {
    formVoluntario: _views_voluntarios_formVoluntario_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    StreamBarcodeReader: vue_barcode_reader__WEBPACK_IMPORTED_MODULE_8__["StreamBarcodeReader"],
    FormFactory: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BCard"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BCardSubTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BCardBody"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BModal"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_13__["BButton"]
  },
  data: function data() {
    return {
      text: "",
      id: null,
      showCam: false,
      showFormHoras: false,
      voluntario: null,
      formSchemaFormVoluntario: [{
        classContainer: 'col-4',
        type: 'input-text',
        name: 'numeroAsociado',
        value: 'numeroAsociado',
        label: 'Numero de asociado',
        rules: 'required',
        disabled: true
      }, {
        classContainer: 'col-8',
        type: 'input-blank'
      }, {
        classContainer: 'col-12 col-md-4',
        type: 'input-text',
        name: 'nombre',
        value: 'nombre',
        label: 'Nombre',
        rules: 'required'
      }, {
        classContainer: 'col-12 col-md-4',
        type: 'input-text',
        name: 'primerApellido',
        value: 'primerApellido',
        label: 'Primer apellido:',
        rules: 'required'
      }, {
        classContainer: 'col-12 col-md-4',
        type: 'input-text',
        name: 'segundoApellido',
        value: 'segundoApellido',
        label: 'Segundo apellido:',
        rules: 'required'
      }, {
        classContainer: 'col-lg-6 col-md-6 col-12',
        type: 'email',
        name: 'correo',
        value: 'correo',
        prefixIcon: 'MailIcon',
        rules: 'required|email',
        label: 'Correo electronico',
        placeholder: 'Introduce un correo electronico'
      }, {
        classContainer: 'col-lg-6 col-md-6 col-12',
        type: 'input-phone',
        name: 'telefono',
        value: 'telefono',
        label: 'Telefono',
        rules: 'required',
        placeholder: 'Introduce un telefono celular'
      }],
      numeroAsociado: null,
      formSchemaFormBusqueda: [{
        classContainer: 'col-12',
        type: 'input-asociado',
        name: 'numeroAsociado',
        value: 'numeroAsociado',
        label: 'Numero de asociado',
        rules: 'required'
      }],
      registroHoras: [{}],
      formSchemaFormHoras: [{
        classContainer: 'col-12',
        type: 'input-text',
        name: 'actividad',
        value: 'actividad',
        label: 'Nombre de la actividad',
        rules: 'required'
      }, {
        classContainer: 'col-md-4 col-12',
        type: 'input-select',
        name: 'coordinacion',
        value: 'coordinacion',
        label: 'Coordinacion',
        rules: 'required',
        catalogo: 'coordinaciones'
      }, {
        classContainer: 'col-md-4 col-12',
        type: 'flat-pickr',
        value: 'fecha',
        label: 'Fecha',
        name: 'fecha',
        rules: 'required'
      }, {
        classContainer: 'col-md-4 col-12',
        type: 'input-number',
        name: 'numeroHoras',
        value: 'numeroHoras',
        label: 'Numero de horas',
        digitos: 2,
        rules: 'required',
        prefix: ''
      }]
    };
  },
  props: {
    msg: String
  },
  methods: {
    onDecode: function onDecode(a, b, c) {
      var _this = this;
      console.log(a, b, c);
      this.numeroAsociado = a;
      this.showCam = false;
      this.handleSubmitFormBusqueda(a);
      if (this.id) clearTimeout(this.id);
      this.id = setTimeout(function () {
        if (_this.numeroAsociado === a) {
          _this.numeroAsociado = "";
        }
      }, 5000);
    },
    onLoaded: function onLoaded() {
      console.log("load");
    },
    copyForm: function copyForm(info, index) {
      this.registroHoras[index - 1] = this.copyObject(info);
    },
    handleCancelFormBusqueda: function handleCancelFormBusqueda() {
      this.$refs.formBusqueda.resetForm();
      this.numeroAsociado = null;
    },
    handleSubmitFormBusqueda: function handleSubmitFormBusqueda(info) {
      var _this2 = this;
      var numero = typeof info == 'string' ? info : info.numeroAsociado;
      if (numero.length == 5) {
        this.loading();
        var filtro = {
          'numeroAsociado': numero
        };
        _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_10__["default"].getVoluntarios({
          'payload': filtro
        }).then(function (response) {
          _this2.loading(false);
          var tmp = _this2.copyObject(response.data.data);
          _this2.voluntario = _this2.copyObject(typeof tmp[0] != 'undefined' ? tmp[0] : filtro);
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        this.messageSweet({
          message: 'Codigo incorrecto, escene el codigo de barras',
          icon: 'error'
        });
      }
    },
    getName: function getName() {
      var _this$voluntario$prim, _this$voluntario, _this$voluntario$segu, _this$voluntario2;
      return this.voluntario.nombre + ((_this$voluntario$prim = (_this$voluntario = this.voluntario) === null || _this$voluntario === void 0 ? void 0 : _this$voluntario.primerApellido) !== null && _this$voluntario$prim !== void 0 ? _this$voluntario$prim : '') + ((_this$voluntario$segu = (_this$voluntario2 = this.voluntario) === null || _this$voluntario2 === void 0 ? void 0 : _this$voluntario2.segundoApellido) !== null && _this$voluntario$segu !== void 0 ? _this$voluntario$segu : '');
    },
    onSubmitFormBusqueda: function onSubmitFormBusqueda() {
      this.$refs.formBusqueda.validationForm();
    },
    handleCancelFormVoluntario: function handleCancelFormVoluntario() {
      this.voluntario = null;
    },
    handleSubmitFormVoluntario: function handleSubmitFormVoluntario(info) {
      var payload = Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, info);
      console.log(this.voluntario);
      payload.accion = typeof this.voluntario.id == 'undefined' ? 1 : 2;
      if (typeof this.voluntario.id != 'undefined') {
        payload.id = this.voluntario.id;
      }
      this.peticionAdministrar(payload);
    },
    onSubmitFormVoluntario: function onSubmitFormVoluntario() {
      this.$refs.formVoluntario.validationForm();
    },
    handleCancelFormHoras: function handleCancelFormHoras() {
      this.showFormHoras = false;
      this.registroHoras = [{}];
    },
    handleSubmitFormHoras: function handleSubmitFormHoras() {
      var _this3 = this;
      var tmp = [];
      this.registroHoras.map(function (item) {
        tmp.push(Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, item), {}, {
          voluntario_id: _this3.voluntario.id,
          coordinacion_id: item.coordinacion.value
        }));
      });
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_10__["default"].administrarHorasVoluntarias({
        'payload': {
          accion: 4,
          data: tmp
        }
      }).then(function (response) {
        _this3.messageSweet({
          message: response.data.message,
          icon: response.data.result ? 'success' : 'error'
        });
        if (response.data.result) {
          _this3.handleCancelFormHoras();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    onSubmitFormHoras: function onSubmitFormHoras() {
      var _this4 = this;
      return Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2() {
        var tmp;
        return Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                tmp = 0;
                _context2.next = 3;
                return Promise.all(_this4.$refs.FormHoras.map( /*#__PURE__*/function () {
                  var _ref = Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(item) {
                    var rs;
                    return Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return item.isValid();
                          case 2:
                            rs = _context.sent;
                            if (rs) {
                              tmp++;
                            }
                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));
                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));
              case 3:
                if (tmp == _this4.registroHoras.length) {
                  _this4.handleSubmitFormHoras();
                }
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    peticionAdministrar: function peticionAdministrar(payload) {
      var _this5 = this;
      this.loading();
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_10__["default"].administrarVoluntarios({
        'payload': payload
      }).then(function (response) {
        _this5.loading(false);
        _this5.messageSweet({
          message: response.data.message,
          icon: response.data.result ? 'success' : 'error'
        });
        if (response.data.result) {
          _this5.handleCancelFormVoluntario();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/formVoluntario.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/voluntarios/formVoluntario.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vue_barcode_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-barcode-reader */ "./node_modules/vue-barcode-reader/src/index.js");
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FormVoluntario",
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_4__["default"]],
  components: {
    StreamBarcodeReader: vue_barcode_reader__WEBPACK_IMPORTED_MODULE_1__["StreamBarcodeReader"],
    FormFactory: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCard"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCardSubTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCardBody"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BModal"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BButton"]
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      userData: _store__WEBPACK_IMPORTED_MODULE_5__["default"].state.app.userData,
      formSchemaFormVoluntario: [{
        classContainer: 'col-4',
        type: 'input-asociado',
        name: 'numeroAsociado',
        value: 'numeroAsociado',
        label: 'Numero de asociado',
        placeholder: 'Introduce un numero de asociado'
      }, {
        classContainer: 'col-8',
        type: 'input-blank'
      }, {
        classContainer: 'col-12 col-md-4',
        type: 'input-text',
        name: 'nombre',
        value: 'nombre',
        label: 'Nombre',
        rules: 'required'
      }, {
        classContainer: 'col-12 col-md-4',
        type: 'input-text',
        name: 'primerApellido',
        value: 'primerApellido',
        label: 'Primer apellido:',
        rules: 'required'
      }, {
        classContainer: 'col-12 col-md-4',
        type: 'input-text',
        name: 'segundoApellido',
        value: 'segundoApellido',
        label: 'Segundo apellido:',
        rules: 'required'
      }, {
        classContainer: 'col-lg-6 col-md-6 col-12',
        type: 'email',
        name: 'correo',
        value: 'correo',
        prefixIcon: 'MailIcon',
        rules: 'required|email',
        label: 'Correo electronico',
        placeholder: 'Introduce un correo electronico'
      }, {
        classContainer: 'col-lg-6 col-md-6 col-12',
        type: 'input-text',
        name: 'curp',
        value: 'curp',
        label: 'CURP',
        rules: 'required'
      }]
    };
  },
  props: {
    data: {
      type: Object,
      "default": {}
    },
    withCard: {
      type: Boolean,
      "default": false
    },
    btnRegistrarHoras: {
      type: Boolean,
      "default": false
    },
    exportActions: {
      type: Boolean,
      "default": false
    },
    btnCancel: {
      type: Boolean,
      "default": true
    }
  },
  watch: {},
  computed: {},
  created: function created() {},
  beforeMount: function beforeMount() {
    console.log('formVoluntario');
  },
  methods: {
    handleCancel: function handleCancel() {
      this.$emit('handleCancelar');
    },
    handleSubmitFormVoluntario: function handleSubmitFormVoluntario(info) {
      if (this.exportActions) {
        this.$emit('handleSubmit', info);
      } else {
        var _this$userData$id;
        var payload = Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, info);
        payload.accion = 1;
        payload.userID = (_this$userData$id = this.userData.id) !== null && _this$userData$id !== void 0 ? _this$userData$id : null;
        this.peticionAdministrar(payload);
      }
    },
    onSubmitFormVoluntario: function onSubmitFormVoluntario() {
      this.$refs.formVoluntario.validationForm();
    },
    peticionAdministrar: function peticionAdministrar(payload) {
      var _this = this;
      this.loading();
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_3__["default"].administrarVoluntarios({
        'payload': payload
      }).then(function (response) {
        _this.loading(false);
        _this.messageSweet({
          message: response.data.message,
          icon: response.data.result ? 'success' : 'error'
        });
        if (response.data.result) {
          _this.handleCancel();
        }
      })["catch"](function (error) {
        _this.loading(false);
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/formVoluntario.vue?vue&type=template&id=2a3b0348&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/voluntarios/formVoluntario.vue?vue&type=template&id=2a3b0348& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
        _vm.withCard ? "b-card" : "div",
        { tag: "component", staticClass: "col-12 p-2" },
        [
          _c("FormFactory", {
            ref: "formVoluntario",
            staticClass: "col-12 mx-auto",
            attrs: {
              btnsAccion: false,
              data: _vm.data,
              schema: _vm.formSchemaFormVoluntario,
            },
            on: { formExport: _vm.handleSubmitFormVoluntario },
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: " col-12 d-flex flex-wrap justify-content-between" },
            [
              _c(
                "div",
                [
                  _vm.btnCancel
                    ? _c(
                        "b-button",
                        {
                          attrs: { size: "sm", variant: "outline-danger" },
                          on: { click: _vm.handleCancel },
                        },
                        [_vm._v("Cancelar")]
                      )
                    : _vm._e(),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  typeof _vm.data.id != "undefined" && _vm.btnRegistrarHoras
                    ? _c(
                        "b-button",
                        {
                          attrs: { size: "sm", variant: "relief-secondary" },
                          on: {
                            click: function () {
                              _vm.$emit("handleShowFormHoras")
                            },
                          },
                        },
                        [_vm._v("Registrar horas voluntarias")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "relief-primary" },
                      on: { click: _vm.onSubmitFormVoluntario },
                    },
                    [_vm._v("Guardar")]
                  ),
                ],
                1
              ),
            ]
          ),
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

/***/ "./resources/js/src/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/src/views/Home.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e85b2cee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e85b2cee&scoped=true& */ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e85b2cee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e85b2cee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e85b2cee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e85b2cee&scoped=true& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/voluntarios/formVoluntario.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/voluntarios/formVoluntario.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formVoluntario_vue_vue_type_template_id_2a3b0348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formVoluntario.vue?vue&type=template&id=2a3b0348& */ "./resources/js/src/views/voluntarios/formVoluntario.vue?vue&type=template&id=2a3b0348&");
/* harmony import */ var _formVoluntario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formVoluntario.vue?vue&type=script&lang=js& */ "./resources/js/src/views/voluntarios/formVoluntario.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formVoluntario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formVoluntario_vue_vue_type_template_id_2a3b0348___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formVoluntario_vue_vue_type_template_id_2a3b0348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/voluntarios/formVoluntario.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/voluntarios/formVoluntario.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/voluntarios/formVoluntario.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formVoluntario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formVoluntario.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/formVoluntario.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formVoluntario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/voluntarios/formVoluntario.vue?vue&type=template&id=2a3b0348&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/voluntarios/formVoluntario.vue?vue&type=template&id=2a3b0348& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formVoluntario_vue_vue_type_template_id_2a3b0348___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formVoluntario.vue?vue&type=template&id=2a3b0348& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/formVoluntario.vue?vue&type=template&id=2a3b0348&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formVoluntario_vue_vue_type_template_id_2a3b0348___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formVoluntario_vue_vue_type_template_id_2a3b0348___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);