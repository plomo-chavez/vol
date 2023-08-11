(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/delegaciones/Delegaciones.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/delegaciones/Delegaciones.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FormDelegacion_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormDelegacion.vue */ "./resources/js/src/views/delegaciones/FormDelegacion.vue");
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @currentComponents/VistaUno.vue */ "./resources/js/src/views/currentComponents/VistaUno.vue");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");


//
//
//
//
//
//
//
//
//
//
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
    FormFactory: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    VistaUno: _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FormDelegacion: _FormDelegacion_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      accion: 1,
      activeRow: null,
      schemaMain: null,
      showForm: !false,
      data: [],
      formSchema: [{
        classContainer: 'col-lg-4 col-md-6 col-12',
        type: 'input-text',
        name: 'nombre',
        value: 'nombre',
        label: 'Nombre',
        placeholder: 'Introduce un usuario',
        rules: 'required'
      }],
      columnas: [{
        type: 'text',
        key: 'nombre',
        label: 'Nombre',
        sortable: true
      }]
    };
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_6__["default"]],
  beforeMount: function beforeMount() {
    // this.inicializar()
  },
  methods: {
    inicializar: function inicializar() {
      this.schemaMain = this.copyObject(this.formSchema);
      this.reload();
    },
    reload: function reload() {
      var _this = this;
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_5__["default"].getCoordinaciones({}).then(function (response) {
        _this.data = response.data.data;
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
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_5__["default"].administrarCoordinaciones({
        'payload': payload
      }).then(function (response) {
        _this2.messageSweet({
          message: response.data.message,
          icon: response.data.result ? 'success' : 'error'
        });
        _this2.resetForm();
      })["catch"](function (error) {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/delegaciones/FormDelegacion.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/delegaciones/FormDelegacion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @currentComponents/VistaUno.vue */ "./resources/js/src/views/currentComponents/VistaUno.vue");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
//
//
//
//
//
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
    FormFactory: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VistaUno: _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      accion: 1,
      activeRow: {},
      schemaMain: null,
      showForm: false,
      data: [],
      formSchema: [{
        classContainer: ' col-lg-6 col-md-6 col-sm-12 col-12',
        type: 'input-switch',
        name: 'tipo delegacion',
        value: 'isEstatal',
        label: '¿La coordinacion es estatal?',
        rules: 'required',
        labels: {
          'on': "Si",
          'off': "No"
        }
      }, {
        classContainer: ' col-lg-6 col-md-6 col-sm-12 col-12',
        type: 'input-select',
        name: 'estado',
        value: 'estado',
        label: 'Estado:',
        rules: 'required',
        catalogo: [{
          label: 'Local',
          value: 'Local'
        }, {
          label: 'Estatal',
          value: 'Estatal'
        }]
      }, {
        classContainer: ' col-md-4 col-lg-4 col-12 ',
        type: 'input-text',
        name: 'ciudad',
        value: 'ciudad',
        label: 'Ciudad',
        placeholder: 'Introduce una ciudad',
        rules: 'required'
      }],
      columnas: [{
        type: 'text',
        key: 'nombre',
        label: 'Nombre',
        sortable: true
      }]
    };
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_3__["default"]],
  beforeMount: function beforeMount() {
    // this.inicializar()
  },
  methods: {
    save: function save() {},
    resetForm: function resetForm() {},
    changeForm: function changeForm(data) {
      var hayModificaciones = false;
      console.log('data', data);
      // let tmpDelegacion = (data.delegacion?.value ?? null) ;
      // if(tmpDelegacion != (this.dataForm.delegacion?.value ?? null)){
      //     if (tmpDelegacion != null) {
      //         this.formSchemaFormVoluntario[22].disabled = false;
      //         this.formSchemaFormVoluntario[22].catalogo = this.formatoToCatalogo(data['delegacion'].areas);
      //         hayModificaciones = true;
      //     } else {
      //         this.formSchemaFormVoluntario[22].disabled = true;
      //         this.formSchemaFormVoluntario[22].catalogo = [];
      //         hayModificaciones = true;
      //     }
      // }
      // if((data?.fechaNacimiento ?? null) != (this.dataForm?.fechaNacimiento ?? null)){
      //     var fechaActual = new Date();
      //     var fecha = new Date(data.fechaNacimiento);
      //     var diferenciaMilisegundos = fechaActual - fecha;
      //     var aniosDiferencia = diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365.25);
      //     let diferencia = Math.floor(aniosDiferencia)
      //     data.edad =  diferencia < 0 ? 0 : Math.floor(aniosDiferencia);
      //     hayModificaciones = true;
      // }
      if (hayModificaciones) {
        // this.activeRow = this.copyObject(data)
        // this.viewForm = false;
        // setTimeout(() => { this.viewForm = true; }, 1);
      }
    } // inicializar(){
    //     this.schemaMain = this.copyObject(this.formSchema)
    //     this.reload()
    // },
    // reload () {
    //     peticiones
    //         .getCoordinaciones({})
    //         .then(response => {
    //             this.data = response.data.data
    //         })
    //         .catch(error   => { console.log(error); })
    // },
    // resetForm(){
    //     this.accion = 1;
    //     this.showForm = false
    //     this.activeRow = null
    //     this.reload();
    // },
    // save(data){
    //     let payload = this.copyObject(data);
    //     if (this.accion == 2) {
    //         payload.id = this.activeRow.id
    //     }
    //     payload.accion = this.accion
    //    this.peticionAdministrar(payload)
    // },
    // peticionAdministrar(payload){
    //     peticiones
    //         .administrarCoordinaciones({
    //             'payload' : payload,
    //         })
    //         .then(response => {
    //             this.messageSweet({
    //                 message: response.data.message,
    //                 icon: response.data.result ? 'success' : 'error',
    //             });
    //             this.resetForm();
    //         })
    //         .catch(error   => { console.log(error); })
    // },
    // nuevoRegistro () {
    //     this.schemaMain = this.copyObject(this.formSchema)
    //     this.activeRow = {};
    //     setTimeout(() => { this.showForm = true; }, 10);
    // },
    // editar (data) {
    //     this.accion = 2;
    //     let tmp = this.copyObject(data)
    //     if(typeof tmp.tipo_usuario != 'undefined') {
    //         tmp.tipoUsuario = {value : tmp.tipoUsuario_id, label : tmp.tipo_usuario.nombre}
    //     }
    //     tmp.accesoMovil = typeof tmp.accesoMovil  == 'number' ? (tmp.accesoMovil ? true:false) : false
    //     tmp.accesoWeb = typeof tmp.accesoWeb  == 'number' ? (tmp.accesoWeb ? true:false) : false
    //     tmp.bloqueado = typeof tmp.bloqueado  == 'number' ? (tmp.bloqueado ? true:false) : false
    //     this.activeRow = this.copyObject(tmp)
    //     let tmpSchema = this.copyObject(this.formSchema)
    //     tmpSchema.splice(3,1)
    //     this.schemaMain = tmpSchema
    //     this.showForm = true;
    // },
    // onEliminar(data){
    //     this.messageConfirm({
    //         confirmFunction: () => { this.peticionAdministrar({...data,accion : 3}) }
    //     })
    // }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/delegaciones/Delegaciones.vue?vue&type=template&id=0f546a15&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/delegaciones/Delegaciones.vue?vue&type=template&id=0f546a15& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
              attrs: { data: _vm.data, columnas: _vm.columnas },
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
    _vm.showForm ? _c("div", [_c("FormDelegacion")], 1) : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/delegaciones/FormDelegacion.vue?vue&type=template&id=fbad99ea&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/delegaciones/FormDelegacion.vue?vue&type=template&id=fbad99ea& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
      _c("FormFactory", {
        staticClass: "col-10 mx-auto",
        attrs: {
          withCard: "",
          data: _vm.activeRow,
          schema: _vm.formSchema,
          formLive: true,
        },
        on: {
          formExport: _vm.save,
          exportLive: _vm.changeForm,
          cancelar: _vm.resetForm,
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/delegaciones/Delegaciones.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/delegaciones/Delegaciones.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Delegaciones_vue_vue_type_template_id_0f546a15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Delegaciones.vue?vue&type=template&id=0f546a15& */ "./resources/js/src/views/delegaciones/Delegaciones.vue?vue&type=template&id=0f546a15&");
/* harmony import */ var _Delegaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Delegaciones.vue?vue&type=script&lang=js& */ "./resources/js/src/views/delegaciones/Delegaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Delegaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Delegaciones_vue_vue_type_template_id_0f546a15___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Delegaciones_vue_vue_type_template_id_0f546a15___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/delegaciones/Delegaciones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/delegaciones/Delegaciones.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/delegaciones/Delegaciones.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delegaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Delegaciones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/delegaciones/Delegaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delegaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/delegaciones/Delegaciones.vue?vue&type=template&id=0f546a15&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/delegaciones/Delegaciones.vue?vue&type=template&id=0f546a15& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delegaciones_vue_vue_type_template_id_0f546a15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Delegaciones.vue?vue&type=template&id=0f546a15& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/delegaciones/Delegaciones.vue?vue&type=template&id=0f546a15&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delegaciones_vue_vue_type_template_id_0f546a15___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delegaciones_vue_vue_type_template_id_0f546a15___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/delegaciones/FormDelegacion.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/delegaciones/FormDelegacion.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormDelegacion_vue_vue_type_template_id_fbad99ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormDelegacion.vue?vue&type=template&id=fbad99ea& */ "./resources/js/src/views/delegaciones/FormDelegacion.vue?vue&type=template&id=fbad99ea&");
/* harmony import */ var _FormDelegacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormDelegacion.vue?vue&type=script&lang=js& */ "./resources/js/src/views/delegaciones/FormDelegacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormDelegacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormDelegacion_vue_vue_type_template_id_fbad99ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormDelegacion_vue_vue_type_template_id_fbad99ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/delegaciones/FormDelegacion.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/delegaciones/FormDelegacion.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/delegaciones/FormDelegacion.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDelegacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormDelegacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/delegaciones/FormDelegacion.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDelegacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/delegaciones/FormDelegacion.vue?vue&type=template&id=fbad99ea&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/delegaciones/FormDelegacion.vue?vue&type=template&id=fbad99ea& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDelegacion_vue_vue_type_template_id_fbad99ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormDelegacion.vue?vue&type=template&id=fbad99ea& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/delegaciones/FormDelegacion.vue?vue&type=template&id=fbad99ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDelegacion_vue_vue_type_template_id_fbad99ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormDelegacion_vue_vue_type_template_id_fbad99ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);