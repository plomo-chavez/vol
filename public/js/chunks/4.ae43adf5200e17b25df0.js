(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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