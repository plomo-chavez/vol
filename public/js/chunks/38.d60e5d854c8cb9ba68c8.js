(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/configuracion/catalogos/Delegaciones.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/configuracion/catalogos/Delegaciones.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @currentComponents/VistaUno.vue */ "./resources/js/src/views/currentComponents/VistaUno.vue");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FormFactory: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VistaUno: _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      accion: 1,
      activeRow: null,
      schemaMain: null,
      showForm: false,
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
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_5__["default"]],
  beforeMount: function beforeMount() {
    this.inicializar();
  },
  methods: {
    inicializar: function inicializar() {
      this.schemaMain = this.copyObject(this.formSchema);
      this.reload();
    },
    reload: function reload() {
      var _this = this;
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_4__["default"].getCoordinaciones({}).then(function (response) {
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
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_4__["default"].administrarCoordinaciones({
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

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/configuracion/catalogos/Delegaciones.vue?vue&type=template&id=189b766b&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/configuracion/catalogos/Delegaciones.vue?vue&type=template&id=189b766b& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
    _vm.showForm
      ? _c(
          "div",
          [
            _c("FormFactory", {
              staticClass: "col-10 mx-auto",
              attrs: {
                withCard: "",
                data: _vm.activeRow,
                schema: _vm.schemaMain,
              },
              on: { formExport: _vm.save, cancelar: _vm.resetForm },
            }),
          ],
          1
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/configuracion/catalogos/Delegaciones.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/configuracion/catalogos/Delegaciones.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Delegaciones_vue_vue_type_template_id_189b766b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Delegaciones.vue?vue&type=template&id=189b766b& */ "./resources/js/src/views/configuracion/catalogos/Delegaciones.vue?vue&type=template&id=189b766b&");
/* harmony import */ var _Delegaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Delegaciones.vue?vue&type=script&lang=js& */ "./resources/js/src/views/configuracion/catalogos/Delegaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Delegaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Delegaciones_vue_vue_type_template_id_189b766b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Delegaciones_vue_vue_type_template_id_189b766b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/configuracion/catalogos/Delegaciones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/configuracion/catalogos/Delegaciones.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/configuracion/catalogos/Delegaciones.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delegaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Delegaciones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/configuracion/catalogos/Delegaciones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Delegaciones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/configuracion/catalogos/Delegaciones.vue?vue&type=template&id=189b766b&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/configuracion/catalogos/Delegaciones.vue?vue&type=template&id=189b766b& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delegaciones_vue_vue_type_template_id_189b766b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Delegaciones.vue?vue&type=template&id=189b766b& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/configuracion/catalogos/Delegaciones.vue?vue&type=template&id=189b766b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delegaciones_vue_vue_type_template_id_189b766b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Delegaciones_vue_vue_type_template_id_189b766b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);