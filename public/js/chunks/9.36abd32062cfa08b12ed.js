(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/horas/Horas.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/horas/Horas.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @currentComponents/VistaUno.vue */ "./resources/js/src/views/currentComponents/VistaUno.vue");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _views_voluntarios_formVoluntario_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/voluntarios/formVoluntario.vue */ "./resources/js/src/views/voluntarios/formVoluntario.vue");
/* harmony import */ var _views_horas_formHoras_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/horas/formHoras.vue */ "./resources/js/src/views/horas/formHoras.vue");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    FormFactory: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    VistaUno: _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    formHoras: _views_horas_formHoras_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      config: {
        cellActions: {
          btnEditar: false,
          btnEliminar: false,
          btnView: false,
          btnChangePassword: false
        },
        index: true,
        buscador: true,
        btnNuevo: true,
        btnFiltrar: false,
        btnOtros: null
      },
      userData: JSON.parse(localStorage.getItem('userData')),
      isVerificador: false,
      accion: 1,
      activeRow: null,
      schemaMain: null,
      showForm: false,
      data: [],
      formSchema: [{
        classContainer: 'col-lg-4 col-md-6 col-12',
        type: 'input-select',
        name: 'persona',
        value: 'persona',
        label: 'Persona'
      }, {
        classContainer: 'col-lg-4 col-md-6 col-12',
        type: 'input-select',
        name: 'tipo de usuario',
        value: 'tipoUsuario',
        label: 'Tipo de usuario',
        rules: 'required',
        catalogo: 'tiposUsuario'
      }, {
        classContainer: 'col-lg-4 col-md-6 col-12',
        type: 'text',
        name: 'usuario',
        value: 'usuario',
        label: 'Usuario',
        placeholder: 'Introduce un usuario',
        rules: 'required',
        prefixIcon: 'UserIcon'
      }, {
        classContainer: 'col-lg-4 col-md-6 col-12',
        type: 'password',
        name: 'contraseña',
        value: 'contraseña',
        label: 'Contraseña',
        placeholder: 'Introduce una contraseña',
        rules: 'required',
        // rules       : 'required|min:6|max:12',
        prefixIcon: 'LockIcon'
      }, {
        classContainer: 'col-lg-4 col-md-6 col-12',
        type: 'email',
        name: 'correo',
        value: 'email',
        prefixIcon: 'MailIcon',
        rules: 'required|email',
        label: 'Correo electronico',
        placeholder: 'Introduce un correo electronico'
      }, {
        classContainer: 'col-lg-4 col-md-6 col-12',
        type: 'input-phone',
        name: 'telefono',
        value: 'telefono',
        label: 'Telefono',
        rules: 'required',
        placeholder: 'Introduce un telefono celular'
      }, {
        classContainer: ' col-lg-4 col-md-4 col-sm-12 col-12',
        type: 'input-switch',
        name: 'accesoMovil',
        value: 'accesoMovil',
        label: 'Acceso a la plataforma movil',
        rules: 'required',
        labels: {
          'on': "Si",
          'off': "No"
        }
      }, {
        classContainer: ' col-lg-4 col-md-4 col-sm-12 col-12',
        type: 'input-switch',
        name: 'accesoWeb',
        value: 'accesoWeb',
        label: 'Acceso a la plataforma web',
        rules: 'required',
        labels: {
          'on': "Si",
          'off': "No"
        }
      }, {
        classContainer: ' col-lg-4 col-md-4 col-sm-12 col-12',
        type: 'input-switch',
        name: 'bloqueado',
        value: 'bloqueado',
        label: '¿Esta bloqueado?',
        rules: 'required',
        labels: {
          'on': "Si",
          'off': "No"
        }
      }],
      columnas: [{
        type: 'text',
        key: 'numeroAsociado',
        label: 'Numero de asociado',
        sortable: true
      }, {
        type: 'text',
        key: 'voluntario',
        label: 'Voluntario',
        sortable: true
      }, {
        type: 'text',
        key: 'actividad',
        label: 'Actividad',
        sortable: true
      }, {
        type: 'fechaTime',
        key: 'fecha',
        label: 'Fecha',
        sortable: true
      }, {
        type: 'fechaTime',
        key: 'horaInicio',
        label: 'Hora de inicio',
        sortable: true
      }, {
        type: 'fechaTime',
        key: 'horaFin',
        label: 'Hora de fin',
        sortable: true
      }, {
        type: 'text',
        key: 'numeroHoras',
        label: 'Horas registradas',
        sortable: true
      }]
    };
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_7__["default"]],
  beforeMount: function beforeMount() {
    // this.isVerificador = this.userData.tipoUsuario == 'Verificador Horas Voluntarias';
    this.inicializar();
  },
  methods: {
    inicializar: function inicializar() {
      this.schemaMain = this.copyObject(this.formSchema);
      this.reload();
    },
    reload: function reload() {
      var _this = this;
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_6__["default"].getHorasVoluntarias({}).then(function (response) {
        var data = response.data.data;
        data.forEach(function (element, index) {
          if (element['voluntario'] != null) {
            data[index]['voluntario'] = element.voluntario.nombre + ' ' + element.voluntario.primerApellido + ' ' + element.voluntario.segundoApellido;
            data[index]['numeroAsociado'] = element.voluntario.numeroAsociado;
          }
        });
        _this.data = data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    resetForm: function resetForm() {
      this.accion = 1;
      this.showForm = false;
      this.activeRow = null;
      this.reload();
    },
    save: function save(data) {
      var payload = this.copyObject(data);
      if (this.accion == 2) {
        payload.id = this.activeRow.id;
      }
      payload.accion = this.accion;
      this.peticionAdministrar(payload);
    },
    peticionAdministrar: function peticionAdministrar(payload) {
      var _this2 = this;
      this.loading();
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_6__["default"].administrarVoluntarios({
        'payload': payload
      }).then(function (response) {
        _this2.loading(false);
        _this2.messageSweet({
          message: response.data.message,
          icon: response.data.result ? 'success' : 'error'
        });
        _this2.resetForm();
      })["catch"](function (error) {
        _this2.loading(false);
        console.log(error);
      });
    },
    nuevoRegistro: function nuevoRegistro() {
      var _this3 = this;
      this.schemaMain = this.copyObject(this.formSchema);
      this.activeRow = {};
      setTimeout(function () {
        _this3.showForm = true;
      }, 10);
    },
    editar: function editar(data) {
      this.accion = 2;
      var tmp = this.copyObject(data);
      if (typeof tmp.tipo_usuario != 'undefined') {
        tmp.tipoUsuario = {
          value: tmp.tipoUsuario_id,
          label: tmp.tipo_usuario.nombre
        };
      }
      tmp.accesoMovil = typeof tmp.accesoMovil == 'number' ? tmp.accesoMovil ? true : false : false;
      tmp.accesoWeb = typeof tmp.accesoWeb == 'number' ? tmp.accesoWeb ? true : false : false;
      tmp.bloqueado = typeof tmp.bloqueado == 'number' ? tmp.bloqueado ? true : false : false;
      this.activeRow = this.copyObject(tmp);
      var tmpSchema = this.copyObject(this.formSchema);
      tmpSchema.splice(3, 1);
      this.schemaMain = tmpSchema;
      this.showForm = true;
    },
    onEliminar: function onEliminar(data) {
      var _this4 = this;
      console.log('eliminar');
      this.messageConfirm({
        confirmFunction: function confirmFunction() {
          _this4.peticionAdministrar(Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data), {}, {
            accion: 3
          }));
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/horas/formHoras.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/horas/formHoras.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _views_horas_formPorGuardia_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/horas/formPorGuardia.vue */ "./resources/js/src/views/horas/formPorGuardia.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardSubTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    FormPorGuardia: _views_horas_formPorGuardia_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      tipoRegistro: null
    };
  },
  props: {},
  watch: {},
  computed: {},
  created: function created() {},
  beforeMount: function beforeMount() {},
  methods: {}
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

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/horas/Horas.vue?vue&type=template&id=368e1231&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/horas/Horas.vue?vue&type=template&id=368e1231& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    !_vm.showForm
      ? _c(
          "div",
          [
            _c("VistaUno", {
              attrs: {
                data: _vm.data,
                config: _vm.config,
                showCellActions: !_vm.isVerificador,
                columnas: _vm.columnas,
              },
              on: {
                mdoEditar: _vm.editar,
                mdoEliminar: _vm.onEliminar,
                mtdNuevo: _vm.nuevoRegistro,
                mtdFiltrar: _vm.reload,
              },
            }),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.showForm
      ? _c(
          "div",
          [
            _vm.accion == 1
              ? _c("formHoras", {
                  attrs: { withCard: "", data: {} },
                  on: { handleSubmit: _vm.save, handleCancelar: _vm.resetForm },
                })
              : _vm._e(),
          ],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/horas/formHoras.vue?vue&type=template&id=2a8383ed&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/horas/formHoras.vue?vue&type=template&id=2a8383ed& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    _vm.tipoRegistro == null
      ? _c(
          "div",
          {
            staticClass:
              " col-10 mx-auto d-flex  flex-wrap justify-content-between",
          },
          [
            _c(
              "b-button",
              {
                attrs: { size: "sm", variant: "relief-secondary" },
                on: {
                  click: function () {
                    _vm.tipoRegistro = "porGuardia"
                  },
                },
              },
              [_vm._v("Por Guardia")]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                attrs: { size: "sm", variant: "relief-secondary" },
                on: {
                  click: function () {
                    _vm.tipoRegistro = "porEvento"
                  },
                },
              },
              [_vm._v("Por evento")]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                attrs: { size: "sm", variant: "relief-secondary" },
                on: {
                  click: function () {
                    _vm.tipoRegistro = "porHora"
                  },
                },
              },
              [_vm._v("Por Hora")]
            ),
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.tipoRegistro == "porGuardia"
      ? _c("div", [_c("FormPorGuardia")], 1)
      : _vm._e(),
  ])
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

/***/ "./resources/js/src/views/horas/Horas.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/horas/Horas.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Horas_vue_vue_type_template_id_368e1231___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Horas.vue?vue&type=template&id=368e1231& */ "./resources/js/src/views/horas/Horas.vue?vue&type=template&id=368e1231&");
/* harmony import */ var _Horas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Horas.vue?vue&type=script&lang=js& */ "./resources/js/src/views/horas/Horas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Horas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Horas_vue_vue_type_template_id_368e1231___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Horas_vue_vue_type_template_id_368e1231___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/horas/Horas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/horas/Horas.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/horas/Horas.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Horas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Horas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/horas/Horas.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Horas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/horas/Horas.vue?vue&type=template&id=368e1231&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/horas/Horas.vue?vue&type=template&id=368e1231& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Horas_vue_vue_type_template_id_368e1231___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Horas.vue?vue&type=template&id=368e1231& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/horas/Horas.vue?vue&type=template&id=368e1231&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Horas_vue_vue_type_template_id_368e1231___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Horas_vue_vue_type_template_id_368e1231___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/horas/formHoras.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/horas/formHoras.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formHoras_vue_vue_type_template_id_2a8383ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formHoras.vue?vue&type=template&id=2a8383ed& */ "./resources/js/src/views/horas/formHoras.vue?vue&type=template&id=2a8383ed&");
/* harmony import */ var _formHoras_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formHoras.vue?vue&type=script&lang=js& */ "./resources/js/src/views/horas/formHoras.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formHoras_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formHoras_vue_vue_type_template_id_2a8383ed___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formHoras_vue_vue_type_template_id_2a8383ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/horas/formHoras.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/horas/formHoras.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/horas/formHoras.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formHoras_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formHoras.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/horas/formHoras.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formHoras_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/horas/formHoras.vue?vue&type=template&id=2a8383ed&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/horas/formHoras.vue?vue&type=template&id=2a8383ed& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formHoras_vue_vue_type_template_id_2a8383ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formHoras.vue?vue&type=template&id=2a8383ed& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/horas/formHoras.vue?vue&type=template&id=2a8383ed&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formHoras_vue_vue_type_template_id_2a8383ed___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formHoras_vue_vue_type_template_id_2a8383ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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