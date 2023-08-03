(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/Registro.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/out/Registro.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/layouts/components/Logo.vue */ "./resources/js/src/@core/layouts/components/Logo.vue");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var _core_mixins_ui_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/mixins/ui/forms */ "./resources/js/src/@core/mixins/ui/forms.js");
/* harmony import */ var _RegistroCompleto_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RegistroCompleto.vue */ "./resources/js/src/views/out/RegistroCompleto.vue");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var _auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/auth/jwt/useJwt */ "./resources/js/src/auth/jwt/useJwt.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable global-require */











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VuexyLogo: _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    RegistroCompleto: _RegistroCompleto_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BRow"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BImg"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCol"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BLink"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BForm"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCardText"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCardTitle"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormCheckbox"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormInput"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BInputGroupAppend"],
    // validations
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"],
    FormFactory: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_core_mixins_ui_forms__WEBPACK_IMPORTED_MODULE_8__["togglePasswordVisibility"], _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_4__["default"]],
  data: function data() {
    return {
      formSchema: [{
        classContainer: 'col-12',
        type: 'input-text',
        name: 'nombre',
        value: 'nombre',
        label: 'Nombre:',
        placeholder: 'Campo requerido',
        rules: 'required'
      }, {
        classContainer: 'col-12',
        type: 'input-text',
        name: 'apellido paterno',
        value: 'primerApellido',
        label: 'Apellido paterno:',
        placeholder: 'Campo requerido',
        rules: 'required'
      }, {
        classContainer: 'col-12',
        type: 'input-text',
        name: 'apellido materno',
        value: 'segundoApellido',
        label: 'Apellido materno:',
        placeholder: 'Campo opcional'
      }, {
        classContainer: 'col-12',
        type: 'input-text',
        name: 'curp',
        value: 'curp',
        label: 'CURP:',
        placeholder: 'Introduce un titulo',
        rules: 'required'
      }, {
        classContainer: 'col-12',
        type: 'input-asociado',
        value: 'numeroAsociado',
        name: 'numero de asosciado',
        label: 'Numero de asociado:',
        placeholder: 'Campo opcional'
      }, {
        classContainer: 'col-12',
        type: 'email',
        name: 'correo electronico',
        value: 'correo',
        label: 'Correo electronico:',
        placeholder: 'Introduce un correo electronico valido',
        rules: 'required|email'
      }],
      status: false,
      activeRow: null,
      codeExterno: null,
      sideImg: __webpack_require__(/*! @/assets/images/pages/register-v2.svg */ "./resources/js/src/assets/images/pages/register-v2.svg")
    };
  },
  beforeMount: function beforeMount() {
    var code = this.$route.query.code;
    if (typeof code != 'undefined') {
      this.codeExterno = code;
    }
  },
  computed: {
    imgUrl: function imgUrl() {
      if (_store_index__WEBPACK_IMPORTED_MODULE_10__["default"].state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = __webpack_require__(/*! @/assets/images/pages/register-v2-dark.svg */ "./resources/js/src/assets/images/pages/register-v2-dark.svg");
        return this.sideImg;
      }
      return this.sideImg;
    }
  },
  methods: {
    onSubmit: function onSubmit() {
      this.$refs.formRegistro.validationForm();
    },
    onCancelar: function onCancelar() {
      this.$router.push('/login');
    },
    save: function save(data) {
      var _this = this;
      if (this.status) {
        this.loading();
        _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_5__["default"].registroOut({
          data: data
        }).then(function (response) {
          _this.loading(false);
          _this.messageConfirm({
            message: response.data.message,
            title: 'Información del sistema',
            icon: response.data.result ? 'success' : 'error',
            showCancelButton: false,
            confirmButtonText: 'Okay',
            cancelButtonText: 'No, cancelar',
            cancelFunction: null,
            messageCancel: false,
            confirmFunction: function confirmFunction() {
              response.data.result ? _this.onCancelar() : null;
            }
          });
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        this.messageSweet({
          message: 'Requiere aceptar los terminos y condiciones para continuar.',
          icon: 'error'
        });
      }
    }
  }
});
/* eslint-disable global-require */

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/RegistroCompleto.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/out/RegistroCompleto.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var _views_voluntarios_detallesVoluntario_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/voluntarios/detallesVoluntario.vue */ "./resources/js/src/views/voluntarios/detallesVoluntario.vue");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/layouts/components/Logo.vue */ "./resources/js/src/@core/layouts/components/Logo.vue");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var _core_mixins_ui_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/mixins/ui/forms */ "./resources/js/src/@core/mixins/ui/forms.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store/index */ "./resources/js/src/store/index.js");
/* harmony import */ var _auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/auth/jwt/useJwt */ "./resources/js/src/auth/jwt/useJwt.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable global-require */











/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VuexyLogo: _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BRow"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BImg"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BCol"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BLink"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BForm"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BCardText"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BCardTitle"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BFormCheckbox"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BFormInput"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BInputGroupAppend"],
    // validations
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_3__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_3__["ValidationObserver"],
    FormFactory: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    detallesVoluntario: _views_voluntarios_detallesVoluntario_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_5__["default"]],
  data: function data() {
    return {
      code: '',
      voluntario_id: null
    };
  },
  beforeMount: function beforeMount() {
    if (this.codeExterno != null) {
      this.code = this.codeExterno;
      this.getRegistro();
    }
  },
  computed: {},
  props: {
    codeExterno: {
      type: String,
      "default": false
    }
  },
  methods: {
    resetForm: function resetForm() {
      this.$router.push('/login');
    },
    getRegistro: function getRegistro() {
      var _this = this;
      this.loading();
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_6__["default"].validCode({
        code: this.code
      }).then(function (response) {
        _this.loading(false);
        _this.voluntario_id = response.data.data;
      })["catch"](function (error) {
        _this.loading(false);
        console.log(error);
      });
    }
  }
});
/* eslint-disable global-require */

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/formDatosVoluntario.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/voluntarios/formDatosVoluntario.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vue_barcode_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-barcode-reader */ "./node_modules/vue-barcode-reader/src/index.js");
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _apis_useGeneratePDF__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apis/useGeneratePDF */ "./resources/js/src/apis/useGeneratePDF.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCard"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCardSubTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCardBody"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BModal"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BButton"]
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      dataForm: {},
      viewForm: true,
      formSchemaFormVoluntario: [{
        classContainer: 'col-lg-3  col-md-4 col-12',
        type: 'input-asociado',
        name: 'numeroAsociado',
        value: 'numeroAsociado',
        label: 'Numero de asociado',
        placeholder: 'Introduce un numero de asociado',
        disabled: true
      }, {
        classContainer: 'col-lg-3  col-md-4 col-12',
        type: 'input-text',
        name: 'numeroInterno',
        value: 'numeroInterno',
        label: 'Numero Interno',
        placeholder: 'Introduce un numero de interno',
        disabled: true
      }, {
        classContainer: 'col-lg-6 col-4',
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
      }, {
        classContainer: ' ww-180 ',
        type: 'flat-pickr',
        value: 'fechaNacimiento',
        label: 'Fecha de nacimiento',
        name: 'fecha de nacimiento',
        rules: 'required'
      }, {
        classContainer: ' ww-150 ',
        classElement: 'text-right',
        type: 'input-text',
        name: 'edad',
        value: 'edad',
        label: 'Edad:',
        sufijoText: ' años',
        disabled: true
      }, {
        classContainer: 'col-lg-6   col-md-6   col-12',
        type: 'input-text',
        name: 'lugar de nacimiento',
        value: 'lugarNacimiento',
        label: 'Lugar de nacimiento:'
      }, {
        classContainer: 'col-lg-3   col-md-4   col-12',
        type: 'input-select',
        name: 'nacionalidad',
        value: 'nacionalidad',
        label: 'Nacionalidad:',
        catalogo: 'nacionalidad'
      }, {
        classContainer: 'col-lg-3   col-md-4   col-12',
        type: 'input-select',
        name: 'sexo',
        value: 'sexo',
        label: 'Sexo',
        catalogo: 'sexo'
      }, {
        classContainer: 'col-lg-3   col-md-4   col-12',
        type: 'input-select',
        name: 'estado civil',
        value: 'estadoCivil',
        label: 'Estado civil',
        catalogo: 'estadoCivil'
      }, {
        classContainer: 'col-lg-4   col-md-6   col-12',
        type: 'input-select',
        name: 'tipo de sangre',
        value: 'tipoSangre',
        label: 'Tipo de sangre:',
        catalogo: 'tiposSangre'
      }, {
        classContainer: 'col-lg-4   col-md-6   col-12',
        type: 'input-text',
        name: 'capacidades diferentes',
        value: 'capacidadesDiferentes',
        label: 'Capacidades diferentes:'
      }, {
        classContainer: 'col-lg-4   col-md-6   col-12',
        type: 'input-text',
        name: 'enfermedades',
        value: 'enfermedades',
        label: 'Enfermedades:'
      }, {
        classContainer: 'col-lg-4   col-md-6   col-12',
        type: 'input-text',
        name: 'alergias',
        value: 'alergias',
        label: 'Alergias:'
      }, {
        classContainer: ' col-12',
        type: 'titulo-seccion',
        label: 'Sección de voluntariado'
      }, {
        classContainer: 'col-lg-3 col-md-6 col-12',
        type: 'flat-pickr',
        value: 'fechaIngresoCR',
        label: 'Fecha de ingreso a CR',
        name: 'fecha de ingreso a CR',
        rules: 'required'
      }, {
        classContainer: 'col-lg-3 col-md-6 col-12',
        type: 'flat-pickr',
        value: 'fechaIngresoArea',
        label: 'Fecha de ingreso al area',
        name: 'fecha de ingreso al area',
        rules: 'required'
      }, {
        classContainer: 'col-lg-3   col-md-6   col-12',
        type: 'input-select',
        name: 'delegación',
        value: 'delegacion',
        label: 'Delegación',
        catalogo: 'DelegacionesXTipoCoordinador',
        rules: 'required'
      }, {
        classContainer: 'col-lg-3   col-md-6   col-12',
        type: 'input-select',
        name: 'area',
        value: 'area',
        label: 'Area:',
        rules: 'required',
        catalogo: [],
        disabled: true
      }, {
        classContainer: 'col-12',
        type: 'text-area',
        name: 'comentarios',
        value: 'comentarios',
        label: 'Comentarios:'
      }]
    };
  },
  props: {
    data: {
      type: Object,
      "default": {}
    },
    isRegistro: {
      type: Boolean,
      "default": false
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
  watch: {
    data: {
      handler: function handler(nuevoValor, antiguoValor) {
        this.init();
      },
      deep: true,
      // Opcional: indica si se debe realizar una observación profunda (deep watch)
      immediate: true // Opcional: indica si se debe ejecutar el watcher inmediatamente después de su definición
    }
  },

  computed: {},
  created: function created() {},
  beforeMount: function beforeMount() {},
  methods: {
    init: function init() {
      this.dataForm = this.copyObject(this.data);
      if (this.dataForm.delegacion != null) {
        this.formSchemaFormVoluntario[22].disabled = false;
        if (this.dataForm.delegacion.areas != null) {
          this.formSchemaFormVoluntario[22].catalogo = this.formatoToCatalogo(this.dataForm.delegacion.areas);
        }
      }
      this.dataForm.edad = this.dataForm.edad > 0 ? this.dataForm.edad : 0;
    },
    handleCancel: function handleCancel() {
      this.$emit('handleCancelar');
    },
    handleSubmitFormVoluntario: function handleSubmitFormVoluntario(info) {
      var _payload$nacionalidad, _payload$nacionalidad2, _payload$sexo$value, _payload$sexo, _payload$tipoSangre$v, _payload$tipoSangre, _payload$estadoCivil$, _payload$estadoCivil, _payload$delegacion$v, _payload$delegacion, _payload$area$value, _payload$area, _this$userData$id, _this$userData;
      var payload = Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, info);
      payload.accion = typeof this.data.id == 'undefined' ? 1 : 2;
      if (typeof this.data.id != 'undefined') {
        payload.id = this.data.id;
      }
      payload.nacionalidad = (_payload$nacionalidad = (_payload$nacionalidad2 = payload.nacionalidad) === null || _payload$nacionalidad2 === void 0 ? void 0 : _payload$nacionalidad2.value) !== null && _payload$nacionalidad !== void 0 ? _payload$nacionalidad : null;
      payload.sexo = (_payload$sexo$value = (_payload$sexo = payload.sexo) === null || _payload$sexo === void 0 ? void 0 : _payload$sexo.value) !== null && _payload$sexo$value !== void 0 ? _payload$sexo$value : null;
      payload.tipoSangre = (_payload$tipoSangre$v = (_payload$tipoSangre = payload.tipoSangre) === null || _payload$tipoSangre === void 0 ? void 0 : _payload$tipoSangre.value) !== null && _payload$tipoSangre$v !== void 0 ? _payload$tipoSangre$v : null;
      payload.estadoCivil = (_payload$estadoCivil$ = (_payload$estadoCivil = payload.estadoCivil) === null || _payload$estadoCivil === void 0 ? void 0 : _payload$estadoCivil.value) !== null && _payload$estadoCivil$ !== void 0 ? _payload$estadoCivil$ : null;
      payload.delegacion_id = (_payload$delegacion$v = (_payload$delegacion = payload.delegacion) === null || _payload$delegacion === void 0 ? void 0 : _payload$delegacion.value) !== null && _payload$delegacion$v !== void 0 ? _payload$delegacion$v : null;
      payload.area_id = (_payload$area$value = (_payload$area = payload.area) === null || _payload$area === void 0 ? void 0 : _payload$area.value) !== null && _payload$area$value !== void 0 ? _payload$area$value : null;
      payload.userID = (_this$userData$id = (_this$userData = this.userData) === null || _this$userData === void 0 ? void 0 : _this$userData.id) !== null && _this$userData$id !== void 0 ? _this$userData$id : null;
      this.peticionAdministrar(payload);
    },
    onSubmitFormVoluntario: function onSubmitFormVoluntario() {
      this.$refs.formVoluntario.validationForm();
    },
    changeForm: function changeForm(data) {
      var _data$delegacion$valu, _data$delegacion, _this$dataForm$delega, _this$dataForm$delega2, _data$fechaNacimiento, _this$dataForm$fechaN, _this$dataForm;
      var hayModificaciones = false;
      var tmpDelegacion = (_data$delegacion$valu = (_data$delegacion = data.delegacion) === null || _data$delegacion === void 0 ? void 0 : _data$delegacion.value) !== null && _data$delegacion$valu !== void 0 ? _data$delegacion$valu : null;
      if (tmpDelegacion != ((_this$dataForm$delega = (_this$dataForm$delega2 = this.dataForm.delegacion) === null || _this$dataForm$delega2 === void 0 ? void 0 : _this$dataForm$delega2.value) !== null && _this$dataForm$delega !== void 0 ? _this$dataForm$delega : null)) {
        if (tmpDelegacion != null) {
          this.formSchemaFormVoluntario[22].disabled = false;
          this.formSchemaFormVoluntario[22].catalogo = this.formatoToCatalogo(data['delegacion'].areas);
          hayModificaciones = true;
        } else {
          this.formSchemaFormVoluntario[22].disabled = true;
          this.formSchemaFormVoluntario[22].catalogo = [];
          hayModificaciones = true;
        }
      }
      if (((_data$fechaNacimiento = data === null || data === void 0 ? void 0 : data.fechaNacimiento) !== null && _data$fechaNacimiento !== void 0 ? _data$fechaNacimiento : null) != ((_this$dataForm$fechaN = (_this$dataForm = this.dataForm) === null || _this$dataForm === void 0 ? void 0 : _this$dataForm.fechaNacimiento) !== null && _this$dataForm$fechaN !== void 0 ? _this$dataForm$fechaN : null)) {
        var fechaActual = new Date();
        var fecha = new Date(data.fechaNacimiento);
        var diferenciaMilisegundos = fechaActual - fecha;
        var aniosDiferencia = diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365.25);
        var diferencia = Math.floor(aniosDiferencia);
        data.edad = diferencia < 0 ? 0 : Math.floor(aniosDiferencia);
        hayModificaciones = true;
      }
      if (hayModificaciones) {
        this.dataForm = this.copyObject(data);
        // this.viewForm = false;
        // setTimeout(() => { this.viewForm = true; }, 1);
      }
    },
    peticionAdministrar: function peticionAdministrar(payload) {
      var _this = this;
      console.log(payload);
      this.loading();
      if (this.isRegistro) {
        payload['codeEmail'] = null;
        _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_3__["default"].adminVoluntarioOut({
          'payload': payload
        }).then(function (response) {
          _this.loading(false);
          _this.messageSweet({
            message: response.data.message,
            icon: response.data.result ? 'success' : 'error'
          });
        })["catch"](function (error) {
          _this.loading(false);
          console.log(error);
        });
      } else {
        _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_3__["default"].administrarVoluntarios({
          'payload': payload
        }).then(function (response) {
          _this.loading(false);
          _this.messageSweet({
            message: response.data.message,
            icon: response.data.result ? 'success' : 'error'
          });
        })["catch"](function (error) {
          _this.loading(false);
          console.log(error);
        });
      }
    },
    handleExportFichaRegistro: function handleExportFichaRegistro() {
      var _this2 = this;
      var payload = {
        voluntario_id: this.data.id,
        type: 'fichaRegistro'
      };
      this.loading();
      _apis_useGeneratePDF__WEBPACK_IMPORTED_MODULE_6__["default"].generatePDFVoluntarios(payload).then(function (response) {
        _this2.loading(false);
        _this2.descargarPDF(response, _this2.data.id, 'fichaRegistro');
      })["catch"](function (error) {
        _this2.loading(false);
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @currentComponents/VistaUno.vue */ "./resources/js/src/views/currentComponents/VistaUno.vue");

//
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
  name: 'tabHorasVoluntarias',
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_2__["default"]],
  components: {
    VistaUno: _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      data: [],
      columnas: [{
        type: 'text',
        key: 'actividad',
        label: 'Actividad',
        sortable: true
      }, {
        type: 'fecha',
        key: 'fecha',
        label: 'Fecha de la actividad',
        sortable: true
      }, {
        type: 'text',
        key: 'numeroHoras',
        label: 'Numero de horas',
        sortable: true
      }, {
        type: 'fechaTime',
        key: 'created_at',
        label: 'Fecha de registro',
        sortable: true
      }]
    };
  },
  props: {
    voluntario_id: {
      type: Number,
      "default": null
    }
  },
  watch: {},
  computed: {},
  created: function created() {},
  beforeMount: function beforeMount() {
    var _this = this;
    if (this.voluntario_id != null) {
      this.loading();
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_1__["default"].getHorasVoluntarias({
        'payload': {
          voluntario_id: this.voluntario_id
        }
      }).then(function (response) {
        _this.loading(false);
        _this.data = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.unshift.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.unshift.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var setArrayLength = __webpack_require__(/*! ../internals/array-set-length */ "./node_modules/core-js/internals/array-set-length.js");
var deletePropertyOrThrow = __webpack_require__(/*! ../internals/delete-property-or-throw */ "./node_modules/core-js/internals/delete-property-or-throw.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");

// IE8-
var INCORRECT_RESULT = [].unshift(0) !== 1;

// V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
var SILENT_ON_NON_WRITABLE_LENGTH = !function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).unshift();
  } catch (error) {
    return error instanceof TypeError;
  }
}();

// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
$({ target: 'Array', proto: true, arity: 1, forced: INCORRECT_RESULT || SILENT_ON_NON_WRITABLE_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  unshift: function unshift(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    if (argCount) {
      doesNotExceedSafeInteger(len + argCount);
      var k = len;
      while (k--) {
        var to = k + argCount;
        if (k in O) O[to] = O[k];
        else deletePropertyOrThrow(O, to);
      }
      for (var j = 0; j < argCount; j++) {
        O[j] = arguments[j];
      }
    } return setArrayLength(O, len + argCount);
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/Registro.vue?vue&type=style&index=0&id=285cec04&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/out/Registro.vue?vue&type=style&index=0&id=285cec04&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".auth-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  min-height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n}\n.auth-wrapper .auth-inner {\n  width: 100%;\n  position: relative;\n}\n.auth-wrapper.auth-v1 {\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.auth-wrapper.auth-v1 .auth-inner:before {\n  width: 244px;\n  height: 243px;\n  content: \" \";\n  position: absolute;\n  top: -54px;\n}\n[dir] .auth-wrapper.auth-v1 .auth-inner:before {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADzCAMAAACG9Mt0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA9KADAAQAAAABAAAA8wAAAADhQHfUAAAAyVBMVEUAAAD///+AgP+AgP9mZv+AgNWAgP9tbf9gYP+AgP9xcf9mZv+AZuaAgP9dXf90dOhiYv92dv9mZu5mZv93d+53d/9paf94afCAcfFrXvJra/9mZvJzZvJzc/JoaP96b/Rqav91aupsYvV2bOt2bPVxaPZ7cfZqavZyau1waPd4aO9xafBxafh4afB1bfh4avFuZ/F2afJzZvJzZ/N0aPN0bvN3bPR0ae5yZ/R3be93bfR1au9zafBxbPVzavV0a/F0a/ZyafFwaPKZm3nTAAAAQ3RSTlMAAQIEBQYGBwgICQoKCgsLDQ0PDw8PERESExMUFBQWFxgYGhoaGxsdHSAgIiIiIyQlJygqLCwtLi8vLzAzNDU3Nzg7h9vbHgAAA9RJREFUeNrt3ftS2kAUx/Fc1gSyWsErtuJdRDQiiteolb7/QzUoTm07k4AzObuu3/MCez45yWbzT36eZ6b8erO1e1B97baadd+zocJWmg0HaXe/+uqmg2GWtkLT5Lle1m9LdhG2+1lvzuiUO1knEF81yFc1N+35m15kZOGodz1vyLx+v2Lseq/erxtZd/NuweCTtfiwaWLOD5FnsqI7+VnP3y8afnEs3Es/1+H1qvETwuq18B7e6VlwLup1ZM8kWWQBOsrmHL7GVtxvYRZYgQ4ywae61ffsqH5Lbq20bQm6ncp9P2ehJegwE/u+rl95ttSwLrVSc2ANetAU28dSa9Cp2E623bUG3d2VWmn/wBq0XCugQYMGLdVKoOJaoiuok1NdXSW1WAUfRPtRUllflaJf5ZE/O9pXVbZUPTov5c+IDqvtRwStdTgLutoxy6GnGfYb2o+1I2gd+1OiqzfLocvVE7TSDqG1mgodaqfQZbvZC9rXjqG1X45WzqFVKVpk0LLo4lGP0ZGD6KgMnTiITkrQgXYQrYNitHISrYrRsZPouBhdcxJdK0YnTqKTYrR2Eq1BgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRoh9DH59ag86ACoSYOL61B55EUQk1s3VqDzsNHhJpYe7QGncfMSHUxaliCHgcKSXVxeWQJehwdJdXF4dAS9DgkTKqLxuibFeiXODixNi7OrEC/BP+JtbE0WrYA/RrxKNfH2YUF6NegSbk+Gk87xtErN6EsWm88fzeMXpwE9EruLns/l42io4dJFLPo2/Po1w+D6IW7t9Bt2SPx3vOOMfS7eHVZtN54ulg2go56138Ct4XRunE2Ovsmjg46WeddUoUWr6WL0fCoIYgO2/2s91fstDZQjcPL0ePt5flpdXUwqW46uMrS1j95JNpQrW0dHp9UV/uT2m416/8HVGg3qzhpBjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KC/FDpx0pwUo2tOomvF6NhJdFyMVk6iVTE6cBIdeF9vJyvZx/I/AzuIjsrQvoNovwzt4FamSs0Ojrp80PmvoB0zh940pb7azf1yg7t0LIt978uppzbnalfucDW92ZndLPRmKweGPduYJ+zoM5/Dk+gD5NdvLhXXPp88qcUqmEH5G5JZRs6cuxwIAAAAAElFTkSuQmCC\");\n}\n[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:before {\n  left: -46px;\n}\n[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:before {\n  right: -46px;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:before {\n    display: none;\n}\n}\n.auth-wrapper.auth-v1 .auth-inner:after {\n  width: 272px;\n  height: 272px;\n  content: \" \";\n  position: absolute;\n  bottom: -55px;\n  z-index: -1;\n}\n[dir] .auth-wrapper.auth-v1 .auth-inner:after {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAMAAABP1NsnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEKADAAQAAAABAAABEAAAAAAQWxS2AAAAwFBMVEUAAAD///+AgICAgP9VVaqqVf+qqv+AgL+AgP9mZsxmZv+ZZv+AgNWAgP9tbdttbf+Sbf+AYN+AgN+AgP9xceNmZv+AZuaAZv90dOh0dP9qav+AauqAav+AgP92dv9tbf+Abe2Abf93Zu53d+6AcO94afCAcfF5a+R5a/JzZuaAZvKAc/J5bed5bfOAaPN6b/R1auqAavR6ZvV6cPV2bOuAbPV7aPZ2be2AbfZ7au17avZ3Zu53b+57a+97a/d4aO9J6CoeAAAAQHRSTlMAAQICAwMDBAQFBQUGBgcHBwgICAkKCgoLCwwMDAwNDg4ODw8QERITExQUFBUVFhcYGBkZGhobHBwdHR4eHx8gJ5uMWwAAA/FJREFUeNrt2G1XEkEYxvHZNk2xHGzdbKFl0cTwgdSkCKzu7/+t4pw6sAjtjIueE/f8r3fMO35nZnbuy5gVGcvfzJe0rnTfGI+MggGJRUZnbpPIhJKt88nU53JnFULvyISY6KAv8vPj0vr2rYwiE2Z2B9J+uNYcyyQxwWZvaeGH3G4bMjsvI/kcwTC/V+7kLoahlITzQojP3ZFgsJCh7IJQzpX0QFj4uMiY18eDMZ9bZCF9OQahnK6cm/Y7js0sh/LF3Auv1PlQd3MxbdXYIQspV44EEEAAAWTNDAYYkKdJbNMsLzYueZbaZ2iM46RVbHBaiZ9Js+nHEdli42N9XuSen5hGp1CQTuOJQDRsD99N4gMSpYWapNH6IJo83CIeILZQFesEaber79NCWRoukOpNEnW0gXQqD81w6ACxhbrYde7VuFCYeA2QRCNIsgZISyNIqz6IyhPjOjNVIFYniK3dmKU6QdLaJUimEySrDZLrBMlrgxRKU7sxCw/EMe0CAggggADySJCqxixIkKpNEh6IozELD8RxjQACCCCAAPJIkKrGLEgQXqqAAEJjxrQLCCCAAEJjRmNGY8a0CwgggABCYwYIfQgggNCYMe0CAggggNCY0ZjRmDHtAgIIIIAAQmNGHwIIIDRmTLuAAAIIIDRmNGY0Zky7gAACCCCA0JjRhwACCI0Z0y4ggAACCI0ZjRmNGdMuIIAAAgggNGb0IYAAQmPGtAsIIIAAQmNGY0ZjxrQLCCCAAAIIjRl9CCCA0Jgx7QICCCCA0JjRmNGYMe0CAggggABCY0YfAgggNGZMu4AAAgggNGY0ZjRmTLuAAAIIIIDQmNGHAAIIjRnTLiCAAAIIjRmNGY0ZIEy7gAACCCA0ZvQhgABCY8a0CwgggABCY0ZjBgiNGdMuIIAAAgiN2f/Sh+Q6PfLaIJlOkKw2SKoTJK3dmFmdILb2tBvrBIlrg5iWRo+WqQ+SaARJ1gCJAzsxThCN16p1vNurGjNjoo42j07kAHFskoY2kEbl33U0ZgoPjXW+Rl0gkarnahqtDaJKxMPDDWIiNafGenh4gExvVhXfmk7Da6L1AVGxSby2h6MxK79Zk42ea1pJbJ48sU2zDezQ8iy1z6BBwoyjMQsvXp8YQAAhgADilRfyy+wf8WqZZUfGZihvgZiB3FybC+kCUU5XLkAo50C+gbBQdUzkAIVyejIAYfFTI1solHP2HgNCnHn5AYNy4jvpoVB6fVzL91cwzLJ9Lfd7S0jhehxO5H5/yePr1W6gHonI7fJ5ORSR/n6Q2yQanq763zuXU5LJZRKiyD/W9/pjkdPZz0/yJ8fqVyry+qQZDMjJKoDfy8bRVhHhQTwAAAAASUVORK5CYII=\");\n}\n[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:after {\n  right: -75px;\n}\n[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:after {\n  left: -75px;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:after {\n    display: none;\n}\n}\n.auth-wrapper.auth-v2 {\n  align-items: flex-start;\n}\n.auth-wrapper.auth-v2 .auth-inner {\n  height: 100vh;\n  overflow-y: auto;\n  height: calc(var(--vh, 1vh) * 100);\n}\n.auth-wrapper.auth-v2 .brand-logo {\n  position: absolute;\n  top: 2rem;\n  z-index: 1;\n}\n[dir] .auth-wrapper.auth-v2 .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .auth-wrapper.auth-v2 .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .auth-wrapper.auth-v2 .brand-logo {\n  right: 2rem;\n}\n.auth-wrapper.auth-v1 .auth-inner {\n  max-width: 400px;\n}\n.auth-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n}\n[dir] .auth-wrapper .brand-logo {\n  margin: 1rem 0 2rem 0;\n}\n.auth-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n[dir] .auth-wrapper .auth-footer-btn .btn {\n  padding: 0.6rem !important;\n}\n[dir=ltr] .auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-right: 1rem;\n}\n[dir=rtl] .auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-left: 1rem;\n}\n@media (min-width: 1200px) {\n.auth-wrapper.auth-v2 .auth-card {\n    width: 400px;\n}\n}\n[dir] .auth-wrapper .auth-bg {\n  background-color: #fff;\n}\n[dir] .dark-layout .auth-wrapper .auth-bg {\n  background-color: #283046;\n}\n@media (max-height: 625px) {\n[dir] .dark-layout .auth-wrapper .auth-inner {\n    background-color: #283046;\n}\n[dir] .auth-wrapper .auth-bg {\n    padding-top: 3rem;\n}\n[dir] .auth-wrapper .auth-inner {\n    background-color: #fff;\n    padding-bottom: 1rem;\n}\n.auth-wrapper.auth-v2 .brand-logo {\n    width: 100%;\n    display: flex;\n    justify-content: unset;\n    position: relative;\n}\n[dir=ltr] .auth-wrapper.auth-v2 .brand-logo {\n    left: 0;\n    padding-left: 1.5rem;\n}\n[dir=rtl] .auth-wrapper.auth-v2 .brand-logo {\n    right: 0;\n    padding-right: 1.5rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/RegistroCompleto.vue?vue&type=style&index=0&id=100eefe1&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/out/RegistroCompleto.vue?vue&type=style&index=0&id=100eefe1&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".auth-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  min-height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n}\n.auth-wrapper .auth-inner {\n  width: 100%;\n  position: relative;\n}\n.auth-wrapper.auth-v1 {\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.auth-wrapper.auth-v1 .auth-inner:before {\n  width: 244px;\n  height: 243px;\n  content: \" \";\n  position: absolute;\n  top: -54px;\n}\n[dir] .auth-wrapper.auth-v1 .auth-inner:before {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADzCAMAAACG9Mt0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA9KADAAQAAAABAAAA8wAAAADhQHfUAAAAyVBMVEUAAAD///+AgP+AgP9mZv+AgNWAgP9tbf9gYP+AgP9xcf9mZv+AZuaAgP9dXf90dOhiYv92dv9mZu5mZv93d+53d/9paf94afCAcfFrXvJra/9mZvJzZvJzc/JoaP96b/Rqav91aupsYvV2bOt2bPVxaPZ7cfZqavZyau1waPd4aO9xafBxafh4afB1bfh4avFuZ/F2afJzZvJzZ/N0aPN0bvN3bPR0ae5yZ/R3be93bfR1au9zafBxbPVzavV0a/F0a/ZyafFwaPKZm3nTAAAAQ3RSTlMAAQIEBQYGBwgICQoKCgsLDQ0PDw8PERESExMUFBQWFxgYGhoaGxsdHSAgIiIiIyQlJygqLCwtLi8vLzAzNDU3Nzg7h9vbHgAAA9RJREFUeNrt3ftS2kAUx/Fc1gSyWsErtuJdRDQiiteolb7/QzUoTm07k4AzObuu3/MCez45yWbzT36eZ6b8erO1e1B97baadd+zocJWmg0HaXe/+uqmg2GWtkLT5Lle1m9LdhG2+1lvzuiUO1knEF81yFc1N+35m15kZOGodz1vyLx+v2Lseq/erxtZd/NuweCTtfiwaWLOD5FnsqI7+VnP3y8afnEs3Es/1+H1qvETwuq18B7e6VlwLup1ZM8kWWQBOsrmHL7GVtxvYRZYgQ4ywae61ffsqH5Lbq20bQm6ncp9P2ehJegwE/u+rl95ttSwLrVSc2ANetAU28dSa9Cp2E623bUG3d2VWmn/wBq0XCugQYMGLdVKoOJaoiuok1NdXSW1WAUfRPtRUllflaJf5ZE/O9pXVbZUPTov5c+IDqvtRwStdTgLutoxy6GnGfYb2o+1I2gd+1OiqzfLocvVE7TSDqG1mgodaqfQZbvZC9rXjqG1X45WzqFVKVpk0LLo4lGP0ZGD6KgMnTiITkrQgXYQrYNitHISrYrRsZPouBhdcxJdK0YnTqKTYrR2Eq1BgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRoh9DH59ag86ACoSYOL61B55EUQk1s3VqDzsNHhJpYe7QGncfMSHUxaliCHgcKSXVxeWQJehwdJdXF4dAS9DgkTKqLxuibFeiXODixNi7OrEC/BP+JtbE0WrYA/RrxKNfH2YUF6NegSbk+Gk87xtErN6EsWm88fzeMXpwE9EruLns/l42io4dJFLPo2/Po1w+D6IW7t9Bt2SPx3vOOMfS7eHVZtN54ulg2go56138Ct4XRunE2Ovsmjg46WeddUoUWr6WL0fCoIYgO2/2s91fstDZQjcPL0ePt5flpdXUwqW46uMrS1j95JNpQrW0dHp9UV/uT2m416/8HVGg3qzhpBjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KC/FDpx0pwUo2tOomvF6NhJdFyMVk6iVTE6cBIdeF9vJyvZx/I/AzuIjsrQvoNovwzt4FamSs0Ojrp80PmvoB0zh940pb7azf1yg7t0LIt978uppzbnalfucDW92ZndLPRmKweGPduYJ+zoM5/Dk+gD5NdvLhXXPp88qcUqmEH5G5JZRs6cuxwIAAAAAElFTkSuQmCC\");\n}\n[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:before {\n  left: -46px;\n}\n[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:before {\n  right: -46px;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:before {\n    display: none;\n}\n}\n.auth-wrapper.auth-v1 .auth-inner:after {\n  width: 272px;\n  height: 272px;\n  content: \" \";\n  position: absolute;\n  bottom: -55px;\n  z-index: -1;\n}\n[dir] .auth-wrapper.auth-v1 .auth-inner:after {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAMAAABP1NsnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEKADAAQAAAABAAABEAAAAAAQWxS2AAAAwFBMVEUAAAD///+AgICAgP9VVaqqVf+qqv+AgL+AgP9mZsxmZv+ZZv+AgNWAgP9tbdttbf+Sbf+AYN+AgN+AgP9xceNmZv+AZuaAZv90dOh0dP9qav+AauqAav+AgP92dv9tbf+Abe2Abf93Zu53d+6AcO94afCAcfF5a+R5a/JzZuaAZvKAc/J5bed5bfOAaPN6b/R1auqAavR6ZvV6cPV2bOuAbPV7aPZ2be2AbfZ7au17avZ3Zu53b+57a+97a/d4aO9J6CoeAAAAQHRSTlMAAQICAwMDBAQFBQUGBgcHBwgICAkKCgoLCwwMDAwNDg4ODw8QERITExQUFBUVFhcYGBkZGhobHBwdHR4eHx8gJ5uMWwAAA/FJREFUeNrt2G1XEkEYxvHZNk2xHGzdbKFl0cTwgdSkCKzu7/+t4pw6sAjtjIueE/f8r3fMO35nZnbuy5gVGcvfzJe0rnTfGI+MggGJRUZnbpPIhJKt88nU53JnFULvyISY6KAv8vPj0vr2rYwiE2Z2B9J+uNYcyyQxwWZvaeGH3G4bMjsvI/kcwTC/V+7kLoahlITzQojP3ZFgsJCh7IJQzpX0QFj4uMiY18eDMZ9bZCF9OQahnK6cm/Y7js0sh/LF3Auv1PlQd3MxbdXYIQspV44EEEAAAWTNDAYYkKdJbNMsLzYueZbaZ2iM46RVbHBaiZ9Js+nHEdli42N9XuSen5hGp1CQTuOJQDRsD99N4gMSpYWapNH6IJo83CIeILZQFesEaber79NCWRoukOpNEnW0gXQqD81w6ACxhbrYde7VuFCYeA2QRCNIsgZISyNIqz6IyhPjOjNVIFYniK3dmKU6QdLaJUimEySrDZLrBMlrgxRKU7sxCw/EMe0CAggggADySJCqxixIkKpNEh6IozELD8RxjQACCCCAAPJIkKrGLEgQXqqAAEJjxrQLCCCAAEJjRmNGY8a0CwgggABCYwYIfQgggNCYMe0CAggggNCY0ZjRmDHtAgIIIIAAQmNGHwIIIDRmTLuAAAIIIDRmNGY0Zky7gAACCCCA0JjRhwACCI0Z0y4ggAACCI0ZjRmNGdMuIIAAAgggNGb0IYAAQmPGtAsIIIAAQmNGY0ZjxrQLCCCAAAIIjRl9CCCA0Jgx7QICCCCA0JjRmNGYMe0CAggggABCY0YfAgggNGZMu4AAAgggNGY0ZjRmTLuAAAIIIIDQmNGHAAIIjRnTLiCAAAIIjRmNGY0ZIEy7gAACCCA0ZvQhgABCY8a0CwgggABCY0ZjBgiNGdMuIIAAAgiN2f/Sh+Q6PfLaIJlOkKw2SKoTJK3dmFmdILb2tBvrBIlrg5iWRo+WqQ+SaARJ1gCJAzsxThCN16p1vNurGjNjoo42j07kAHFskoY2kEbl33U0ZgoPjXW+Rl0gkarnahqtDaJKxMPDDWIiNafGenh4gExvVhXfmk7Da6L1AVGxSby2h6MxK79Zk42ea1pJbJ48sU2zDezQ8iy1z6BBwoyjMQsvXp8YQAAhgADilRfyy+wf8WqZZUfGZihvgZiB3FybC+kCUU5XLkAo50C+gbBQdUzkAIVyejIAYfFTI1solHP2HgNCnHn5AYNy4jvpoVB6fVzL91cwzLJ9Lfd7S0jhehxO5H5/yePr1W6gHonI7fJ5ORSR/n6Q2yQanq763zuXU5LJZRKiyD/W9/pjkdPZz0/yJ8fqVyry+qQZDMjJKoDfy8bRVhHhQTwAAAAASUVORK5CYII=\");\n}\n[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:after {\n  right: -75px;\n}\n[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:after {\n  left: -75px;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:after {\n    display: none;\n}\n}\n.auth-wrapper.auth-v2 {\n  align-items: flex-start;\n}\n.auth-wrapper.auth-v2 .auth-inner {\n  height: 100vh;\n  overflow-y: auto;\n  height: calc(var(--vh, 1vh) * 100);\n}\n.auth-wrapper.auth-v2 .brand-logo {\n  position: absolute;\n  top: 2rem;\n  z-index: 1;\n}\n[dir] .auth-wrapper.auth-v2 .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .auth-wrapper.auth-v2 .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .auth-wrapper.auth-v2 .brand-logo {\n  right: 2rem;\n}\n.auth-wrapper.auth-v1 .auth-inner {\n  max-width: 400px;\n}\n.auth-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n}\n[dir] .auth-wrapper .brand-logo {\n  margin: 1rem 0 2rem 0;\n}\n.auth-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n[dir] .auth-wrapper .auth-footer-btn .btn {\n  padding: 0.6rem !important;\n}\n[dir=ltr] .auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-right: 1rem;\n}\n[dir=rtl] .auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-left: 1rem;\n}\n@media (min-width: 1200px) {\n.auth-wrapper.auth-v2 .auth-card {\n    width: 400px;\n}\n}\n[dir] .auth-wrapper .auth-bg {\n  background-color: #fff;\n}\n[dir] .dark-layout .auth-wrapper .auth-bg {\n  background-color: #283046;\n}\n@media (max-height: 625px) {\n[dir] .dark-layout .auth-wrapper .auth-inner {\n    background-color: #283046;\n}\n[dir] .auth-wrapper .auth-bg {\n    padding-top: 3rem;\n}\n[dir] .auth-wrapper .auth-inner {\n    background-color: #fff;\n    padding-bottom: 1rem;\n}\n.auth-wrapper.auth-v2 .brand-logo {\n    width: 100%;\n    display: flex;\n    justify-content: unset;\n    position: relative;\n}\n[dir=ltr] .auth-wrapper.auth-v2 .brand-logo {\n    left: 0;\n    padding-left: 1.5rem;\n}\n[dir=rtl] .auth-wrapper.auth-v2 .brand-logo {\n    right: 0;\n    padding-right: 1.5rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    "svg",
    {
      attrs: {
        viewBox: "0 0 139 95",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        height: "24",
      },
    },
    [
      _c(
        "defs",
        [
          _c(
            "linearGradient",
            {
              attrs: {
                id: "linearGradient-1",
                x1: "100%",
                y1: "10.5120544%",
                x2: "50%",
                y2: "89.4879456%",
              },
            },
            [
              _c("stop", { attrs: { "stop-color": "#000000", offset: "0%" } }),
              _vm._v(" "),
              _c("stop", {
                attrs: { "stop-color": "#FFFFFF", offset: "100%" },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "linearGradient",
            {
              attrs: {
                id: "linearGradient-2",
                x1: "64.0437835%",
                y1: "46.3276743%",
                x2: "37.373316%",
                y2: "100%",
              },
            },
            [
              _c("stop", {
                attrs: {
                  "stop-color": "#EEEEEE",
                  "stop-opacity": "0",
                  offset: "0%",
                },
              }),
              _vm._v(" "),
              _c("stop", {
                attrs: { "stop-color": "#FFFFFF", offset: "100%" },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "g",
        {
          attrs: {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd",
          },
        },
        [
          _c(
            "g",
            {
              attrs: {
                id: "Artboard",
                transform: "translate(-400.000000, -178.000000)",
              },
            },
            [
              _c(
                "g",
                {
                  attrs: {
                    id: "Group",
                    transform: "translate(400.000000, 178.000000)",
                  },
                },
                [
                  _c("path", {
                    staticClass: "text-primary",
                    staticStyle: { fill: "currentColor" },
                    attrs: {
                      id: "Path",
                      d: "M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",
                    },
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      id: "Path1",
                      d: "M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",
                      fill: "url(#linearGradient-1)",
                      opacity: "0.2",
                    },
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-2",
                      fill: "#000000",
                      opacity: "0.049999997",
                      points:
                        "69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325",
                    },
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-21",
                      fill: "#000000",
                      opacity: "0.099999994",
                      points:
                        "69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338",
                    },
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-3",
                      fill: "url(#linearGradient-2)",
                      opacity: "0.099999994",
                      points:
                        "101.428699 0 83.0667527 94.1480575 130.378721 47.0740288",
                    },
                  }),
                ]
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/Registro.vue?vue&type=template&id=285cec04&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/out/Registro.vue?vue&type=template&id=285cec04& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      _vm.codeExterno == null
        ? _c(
            "div",
            { staticClass: "auth-wrapper auth-v2" },
            [
              _c(
                "b-row",
                { staticClass: "auth-inner m-0" },
                [
                  _c(
                    "b-link",
                    { staticClass: "brand-logo" },
                    [
                      _c("vuexy-logo"),
                      _vm._v(" "),
                      _c(
                        "h2",
                        { staticClass: "brand-text text-primary ml-1" },
                        [_vm._v("\n          Vuexy\n        ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "d-none d-lg-flex align-items-center p-5",
                      attrs: { lg: "8" },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "w-100 d-lg-flex align-items-center justify-content-center px-5",
                        },
                        [
                          _c("b-img", {
                            attrs: {
                              fluid: "",
                              src: _vm.imgUrl,
                              alt: "Register V2",
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass:
                        "d-flex align-items-center auth-bg px-2 p-lg-5",
                      attrs: { lg: "4" },
                    },
                    [
                      _c(
                        "b-col",
                        {
                          staticClass: "px-xl-2 mx-auto",
                          attrs: { sm: "8", md: "6", lg: "12" },
                        },
                        [
                          _c("b-card-title", { staticClass: "mb-1" }, [
                            _vm._v(
                              "\n          La aventura esta por comenzar. 🚀\n          "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("b-card-text", { staticClass: "mb-2" }, [
                            _vm._v(
                              "\n            Toda tu información dentro de la información a la palma de tu mano.\n          "
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c(
                                "h2",
                                { staticClass: "brand-text text-primary ml-1" },
                                [
                                  _vm._v(
                                    "\n              Registro de nuevo voluntario\n            "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("FormFactory", {
                                ref: "formRegistro",
                                staticClass: "col-11 mx-auto",
                                attrs: {
                                  data: _vm.activeRow,
                                  btnsAccion: false,
                                  schema: _vm.formSchema,
                                },
                                on: { formExport: _vm.save },
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    " col-12 d-flex flex-wrap justify-content-end mb-1",
                                },
                                [
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "b-form-group",
                                        [
                                          _c(
                                            "b-form-checkbox",
                                            {
                                              attrs: {
                                                id: "register-privacy-policy",
                                                name: "checkbox-1",
                                              },
                                              model: {
                                                value: _vm.status,
                                                callback: function ($$v) {
                                                  _vm.status = $$v
                                                },
                                                expression: "status",
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                    Acepto los\n                    "
                                              ),
                                              _c("b-link", [
                                                _vm._v(
                                                  "terminos y condiciones"
                                                ),
                                              ]),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    " col-12 d-flex flex-wrap justify-content-between",
                                },
                                [
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            size: "sm",
                                            variant: "relief-secondary",
                                          },
                                          on: { click: _vm.onCancelar },
                                        },
                                        [_vm._v("Cancelar")]
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            size: "sm",
                                            variant: "relief-primary",
                                          },
                                          on: { click: _vm.onSubmit },
                                        },
                                        [_vm._v("Registrar información")]
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
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _c("RegistroCompleto", { attrs: { codeExterno: _vm.codeExterno } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/RegistroCompleto.vue?vue&type=template&id=100eefe1&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/out/RegistroCompleto.vue?vue&type=template&id=100eefe1& ***!
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
  return _c("div", { staticClass: "mt-4" }, [
    _vm.voluntario_id == null
      ? _c("div", { staticClass: "col-10 mx-auto" }, [
          _c(
            "h3",
            {
              staticClass: "col-12 text-center font-weight-bolder text-primary",
            },
            [_vm._v("El codigo es invalido")]
          ),
          _vm._v(" "),
          _c("h5", { staticClass: "col-12 text-center font-weight-bolder" }, [
            _vm._v(
              "Valida la información con tu coordinador o soporte del sistema"
            ),
          ]),
        ])
      : _c(
          "div",
          { staticClass: "col-10 mx-auto" },
          [
            _c("detallesVoluntario", {
              attrs: { voluntario_id: _vm.voluntario_id, isRegistro: true },
              on: { handleAtras: _vm.resetForm },
            }),
          ],
          1
        ),
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/formDatosVoluntario.vue?vue&type=template&id=424666e1&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/voluntarios/formDatosVoluntario.vue?vue&type=template&id=424666e1& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
          _vm.viewForm
            ? _c("FormFactory", {
                ref: "formVoluntario",
                staticClass: "col-12 mx-auto",
                attrs: {
                  btnsAccion: false,
                  formLive: true,
                  data: _vm.dataForm,
                  schema: _vm.formSchemaFormVoluntario,
                },
                on: {
                  exportLive: _vm.changeForm,
                  formExport: _vm.handleSubmitFormVoluntario,
                },
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: " col-12 d-flex flex-wrap justify-content-between" },
            [
              _c(
                "div",
                [
                  !_vm.isRegistro
                    ? _c(
                        "b-button",
                        {
                          attrs: { size: "sm", variant: "relief-primary" },
                          on: { click: _vm.handleExportFichaRegistro },
                        },
                        [_vm._v("Generar ficha de registro")]
                      )
                    : _vm._e(),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                [
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

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue?vue&type=template&id=5befd476&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue?vue&type=template&id=5befd476& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    [_c("VistaUno", { attrs: { data: _vm.data, columnas: _vm.columnas } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/Registro.vue?vue&type=style&index=0&id=285cec04&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/out/Registro.vue?vue&type=style&index=0&id=285cec04&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Registro.vue?vue&type=style&index=0&id=285cec04&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/Registro.vue?vue&type=style&index=0&id=285cec04&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/RegistroCompleto.vue?vue&type=style&index=0&id=100eefe1&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/out/RegistroCompleto.vue?vue&type=style&index=0&id=100eefe1&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistroCompleto.vue?vue&type=style&index=0&id=100eefe1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/RegistroCompleto.vue?vue&type=style&index=0&id=100eefe1&lang=scss&");

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

/***/ "./resources/js/src/@core/layouts/components/Logo.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/Logo.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=46f77075& */ "./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/Logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Logo.vue?vue&type=template&id=46f77075& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/mixins/ui/forms.js":
/*!***************************************************!*\
  !*** ./resources/js/src/@core/mixins/ui/forms.js ***!
  \***************************************************/
/*! exports provided: togglePasswordVisibility, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePasswordVisibility", function() { return togglePasswordVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
// We haven't added icon's computed property because it makes this mixin coupled with UI
var togglePasswordVisibility = {
  data: function data() {
    return {
      passwordFieldType: 'password'
    };
  },
  methods: {
    togglePasswordVisibility: function togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    }
  }
};
var _ = null;

/***/ }),

/***/ "./resources/js/src/apis/config/generatePDF/apisGeneratePDF.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/apis/config/generatePDF/apisGeneratePDF.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return apiPeticiones; });
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apisGeneratePDFConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apisGeneratePDFConfig */ "./resources/js/src/apis/config/generatePDF/apisGeneratePDFConfig.js");






var apiPeticiones = /*#__PURE__*/function () {
  // Will be used by this service for making API calls

  // apisConfig <= Will be used by this service

  function apiPeticiones(axiosIns, jwtOverrideConfig) {
    Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, apiPeticiones);
    Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "axiosIns", null);
    Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apisConfig", Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _apisGeneratePDFConfig__WEBPACK_IMPORTED_MODULE_5__["default"]));
    this.axiosIns = axiosIns;
    this.apisConfig = Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.apisConfig), jwtOverrideConfig);
  }
  Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(apiPeticiones, [{
    key: "generatePDFVoluntarios",
    value: function generatePDFVoluntarios() {
      var _this$axiosIns;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_this$axiosIns = this.axiosIns).post.apply(_this$axiosIns, [this.apisConfig.apiGeneratePDFVoluntarios].concat(args, [{
        responseType: 'blob'
      }]));
    }
  }]);
  return apiPeticiones;
}();


/***/ }),

/***/ "./resources/js/src/apis/config/generatePDF/apisGeneratePDFConfig.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/apis/config/generatePDF/apisGeneratePDFConfig.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Endpoints
  apiGeneratePDFVoluntarios: '/api/generate/voluntarios'
});

/***/ }),

/***/ "./resources/js/src/apis/config/generatePDF/useGeneratePDF.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/apis/config/generatePDF/useGeneratePDF.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGeneratePDF; });
/* harmony import */ var _apisGeneratePDF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apisGeneratePDF */ "./resources/js/src/apis/config/generatePDF/apisGeneratePDF.js");

function useGeneratePDF(axiosIns, overrideConfig) {
  var generatePDF = new _apisGeneratePDF__WEBPACK_IMPORTED_MODULE_0__["default"](axiosIns, overrideConfig);
  return {
    generatePDF: generatePDF
  };
}

/***/ }),

/***/ "./resources/js/src/apis/useGeneratePDF.js":
/*!*************************************************!*\
  !*** ./resources/js/src/apis/useGeneratePDF.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_generatePDF_useGeneratePDF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/generatePDF/useGeneratePDF */ "./resources/js/src/apis/config/generatePDF/useGeneratePDF.js");
/* harmony import */ var _apis_component_axiosCurrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/component/axiosCurrent */ "./resources/js/src/apis/component/axiosCurrent.js");


var _useGeneratePDF = Object(_config_generatePDF_useGeneratePDF__WEBPACK_IMPORTED_MODULE_0__["default"])(_apis_component_axiosCurrent__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
  generatePDF = _useGeneratePDF.generatePDF;
/* harmony default export */ __webpack_exports__["default"] = (generatePDF);

/***/ }),

/***/ "./resources/js/src/assets/images/pages/register-v2-dark.svg":
/*!*******************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/register-v2-dark.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/pages/register-v2-dark.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/register-v2.svg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/register-v2.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/pages/register-v2.svg";

/***/ }),

/***/ "./resources/js/src/views/out/Registro.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/out/Registro.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registro_vue_vue_type_template_id_285cec04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registro.vue?vue&type=template&id=285cec04& */ "./resources/js/src/views/out/Registro.vue?vue&type=template&id=285cec04&");
/* harmony import */ var _Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registro.vue?vue&type=script&lang=js& */ "./resources/js/src/views/out/Registro.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registro_vue_vue_type_style_index_0_id_285cec04_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registro.vue?vue&type=style&index=0&id=285cec04&lang=scss& */ "./resources/js/src/views/out/Registro.vue?vue&type=style&index=0&id=285cec04&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registro_vue_vue_type_template_id_285cec04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registro_vue_vue_type_template_id_285cec04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/out/Registro.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/out/Registro.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/out/Registro.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Registro.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/Registro.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/out/Registro.vue?vue&type=style&index=0&id=285cec04&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/out/Registro.vue?vue&type=style&index=0&id=285cec04&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_285cec04_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Registro.vue?vue&type=style&index=0&id=285cec04&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/Registro.vue?vue&type=style&index=0&id=285cec04&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_285cec04_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_285cec04_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_285cec04_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_285cec04_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/out/Registro.vue?vue&type=template&id=285cec04&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/out/Registro.vue?vue&type=template&id=285cec04& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_285cec04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Registro.vue?vue&type=template&id=285cec04& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/Registro.vue?vue&type=template&id=285cec04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_285cec04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_285cec04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/out/RegistroCompleto.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/out/RegistroCompleto.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistroCompleto_vue_vue_type_template_id_100eefe1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistroCompleto.vue?vue&type=template&id=100eefe1& */ "./resources/js/src/views/out/RegistroCompleto.vue?vue&type=template&id=100eefe1&");
/* harmony import */ var _RegistroCompleto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistroCompleto.vue?vue&type=script&lang=js& */ "./resources/js/src/views/out/RegistroCompleto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegistroCompleto_vue_vue_type_style_index_0_id_100eefe1_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegistroCompleto.vue?vue&type=style&index=0&id=100eefe1&lang=scss& */ "./resources/js/src/views/out/RegistroCompleto.vue?vue&type=style&index=0&id=100eefe1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegistroCompleto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistroCompleto_vue_vue_type_template_id_100eefe1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistroCompleto_vue_vue_type_template_id_100eefe1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/out/RegistroCompleto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/out/RegistroCompleto.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/out/RegistroCompleto.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroCompleto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistroCompleto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/RegistroCompleto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroCompleto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/out/RegistroCompleto.vue?vue&type=style&index=0&id=100eefe1&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/out/RegistroCompleto.vue?vue&type=style&index=0&id=100eefe1&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroCompleto_vue_vue_type_style_index_0_id_100eefe1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistroCompleto.vue?vue&type=style&index=0&id=100eefe1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/RegistroCompleto.vue?vue&type=style&index=0&id=100eefe1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroCompleto_vue_vue_type_style_index_0_id_100eefe1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroCompleto_vue_vue_type_style_index_0_id_100eefe1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroCompleto_vue_vue_type_style_index_0_id_100eefe1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroCompleto_vue_vue_type_style_index_0_id_100eefe1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/out/RegistroCompleto.vue?vue&type=template&id=100eefe1&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/out/RegistroCompleto.vue?vue&type=template&id=100eefe1& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroCompleto_vue_vue_type_template_id_100eefe1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistroCompleto.vue?vue&type=template&id=100eefe1& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/out/RegistroCompleto.vue?vue&type=template&id=100eefe1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroCompleto_vue_vue_type_template_id_100eefe1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistroCompleto_vue_vue_type_template_id_100eefe1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/src/views/voluntarios/formDatosVoluntario.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/voluntarios/formDatosVoluntario.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formDatosVoluntario_vue_vue_type_template_id_424666e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formDatosVoluntario.vue?vue&type=template&id=424666e1& */ "./resources/js/src/views/voluntarios/formDatosVoluntario.vue?vue&type=template&id=424666e1&");
/* harmony import */ var _formDatosVoluntario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formDatosVoluntario.vue?vue&type=script&lang=js& */ "./resources/js/src/views/voluntarios/formDatosVoluntario.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _formDatosVoluntario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formDatosVoluntario_vue_vue_type_template_id_424666e1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formDatosVoluntario_vue_vue_type_template_id_424666e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/voluntarios/formDatosVoluntario.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/voluntarios/formDatosVoluntario.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/voluntarios/formDatosVoluntario.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formDatosVoluntario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formDatosVoluntario.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/formDatosVoluntario.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formDatosVoluntario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/voluntarios/formDatosVoluntario.vue?vue&type=template&id=424666e1&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/voluntarios/formDatosVoluntario.vue?vue&type=template&id=424666e1& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formDatosVoluntario_vue_vue_type_template_id_424666e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./formDatosVoluntario.vue?vue&type=template&id=424666e1& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/formDatosVoluntario.vue?vue&type=template&id=424666e1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formDatosVoluntario_vue_vue_type_template_id_424666e1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formDatosVoluntario_vue_vue_type_template_id_424666e1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabHorasVoluntarias_vue_vue_type_template_id_5befd476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabHorasVoluntarias.vue?vue&type=template&id=5befd476& */ "./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue?vue&type=template&id=5befd476&");
/* harmony import */ var _tabHorasVoluntarias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabHorasVoluntarias.vue?vue&type=script&lang=js& */ "./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tabHorasVoluntarias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabHorasVoluntarias_vue_vue_type_template_id_5befd476___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabHorasVoluntarias_vue_vue_type_template_id_5befd476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/voluntarios/tabHorasVoluntarias.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabHorasVoluntarias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tabHorasVoluntarias.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabHorasVoluntarias_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue?vue&type=template&id=5befd476&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue?vue&type=template&id=5befd476& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabHorasVoluntarias_vue_vue_type_template_id_5befd476___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tabHorasVoluntarias.vue?vue&type=template&id=5befd476& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/voluntarios/tabHorasVoluntarias.vue?vue&type=template&id=5befd476&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabHorasVoluntarias_vue_vue_type_template_id_5befd476___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabHorasVoluntarias_vue_vue_type_template_id_5befd476___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);