(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/usuarios/Usuarios.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/usuarios/Usuarios.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @currentComponents/VistaUno.vue */ "./resources/js/src/views/currentComponents/VistaUno.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    FormFactory: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    VistaUno: _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    var _ref;
    return {
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
        type: 'input-text',
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
      formSchemaChange: [{
        classContainer: 'col-lg-4 col-md-6 col-12',
        type: 'input-label',
        name: 'tipo de usuario',
        value: 'tipoUsuario',
        label: 'Tipo de usuario'
      }, {
        classContainer: 'col-lg-4 col-md-6 col-12',
        type: 'input-label',
        name: 'usuario',
        value: 'usuario',
        label: 'Usuario'
      }, {
        classContainer: 'col-lg-4 col-md-6 col-12',
        type: 'input-label',
        name: 'correo',
        value: 'email'
      }, {
        classContainer: 'col-lg-4 col-md-6 col-12',
        type: 'input-label',
        name: 'telefono',
        value: 'telefono',
        label: 'Telefono'
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
      }],
      columnas: [{
        type: 'text',
        key: 'usuario',
        label: 'Usuario',
        sortable: true
        // thStyle : { width: "500px" },
        // tdStyle : { width: "500px" },
      }, {
        type: 'text',
        key: 'tipoUsuario',
        label: 'Tipo de usuario',
        sortable: true
      }, {
        type: 'text',
        key: 'email',
        label: 'Correo',
        sortable: true
      }, {
        type: 'text',
        key: 'telefono',
        label: 'Telefono',
        sortable: true
      }, {
        type: 'text',
        key: 'persona',
        label: 'Persona',
        sortable: true
      }, {
        type: 'switch',
        key: 'accesoMovil',
        label: 'Acceso movil',
        sortable: true
      }, {
        type: 'switch',
        key: 'accesoWeb',
        label: 'Acceso Web',
        sortable: true
      }, {
        type: 'text',
        key: 'estatus',
        label: 'Estatus',
        sortable: true
      }, (_ref = {
        type: 'text'
      }, Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "type", 'switch'), Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "key", 'bloqueado'), Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "label", 'Bloqueado'), Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, "sortable", true), _ref), {
        type: 'switch',
        key: 'validado',
        label: 'Validado',
        sortable: true
      }]
    };
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_7__["default"]],
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
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_6__["default"].getUsuarios({}).then(function (response) {
        var tmp = response.data.data;
        tmp.map(function (item) {
          var _item$tipo_usuario$no, _item$tipo_usuario;
          item.tipoUsuario = (_item$tipo_usuario$no = (_item$tipo_usuario = item.tipo_usuario) === null || _item$tipo_usuario === void 0 ? void 0 : _item$tipo_usuario.nombre) !== null && _item$tipo_usuario$no !== void 0 ? _item$tipo_usuario$no : '';
        });
        _this.data = tmp;
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
      if (this.accion == 2 || this.accion == 4) {
        payload.id = this.activeRow.id;
      }
      payload.tipoUsuario_id = payload.tipoUsuario.value;
      payload.accion = this.accion;
      this.peticionAdministrar(payload);
    },
    peticionAdministrar: function peticionAdministrar(payload) {
      var _this2 = this;
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_6__["default"].adminUsuarios({
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
      if (typeof tmp.tipo_usuario != 'undefined' && tmp.tipo_usuario != null) {
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
    },
    changePassword: function changePassword(data) {
      this.accion = 4;
      var tmp = this.copyObject(data);
      this.activeRow = this.copyObject(tmp);
      this.schemaMain = this.copyObject(this.formSchemaChange);
      this.showForm = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/usuarios/Usuarios.vue?vue&type=template&id=806dfc56&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/usuarios/Usuarios.vue?vue&type=template&id=806dfc56& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
                columnas: _vm.columnas,
                config: {
                  showCellActions: true,
                  cellActions: {
                    btnEditar: true,
                    btnEliminar: true,
                    btnChangePassword: true,
                  },
                  index: true,
                  buscador: true,
                  btnNuevo: true,
                  btnFiltrar: true,
                  btnOtros: null,
                },
              },
              on: {
                mdoEditar: _vm.editar,
                mdoEliminar: _vm.onEliminar,
                mtdNuevo: _vm.nuevoRegistro,
                mtdFiltrar: _vm.reload,
                mdoChangePassword: _vm.changePassword,
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

/***/ "./resources/js/src/views/usuarios/Usuarios.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/usuarios/Usuarios.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Usuarios_vue_vue_type_template_id_806dfc56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Usuarios.vue?vue&type=template&id=806dfc56& */ "./resources/js/src/views/usuarios/Usuarios.vue?vue&type=template&id=806dfc56&");
/* harmony import */ var _Usuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Usuarios.vue?vue&type=script&lang=js& */ "./resources/js/src/views/usuarios/Usuarios.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Usuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Usuarios_vue_vue_type_template_id_806dfc56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Usuarios_vue_vue_type_template_id_806dfc56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/usuarios/Usuarios.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/usuarios/Usuarios.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/usuarios/Usuarios.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Usuarios.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/usuarios/Usuarios.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuarios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/usuarios/Usuarios.vue?vue&type=template&id=806dfc56&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/usuarios/Usuarios.vue?vue&type=template&id=806dfc56& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuarios_vue_vue_type_template_id_806dfc56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Usuarios.vue?vue&type=template&id=806dfc56& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/usuarios/Usuarios.vue?vue&type=template&id=806dfc56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuarios_vue_vue_type_template_id_806dfc56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuarios_vue_vue_type_template_id_806dfc56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);