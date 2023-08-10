(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _currentComponents_GeneratorTemplateEmail_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @currentComponents/GeneratorTemplateEmail.vue */ "./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue");
/* harmony import */ var _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @currentComponents/VistaUno.vue */ "./resources/js/src/views/currentComponents/VistaUno.vue");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");

//
//
//
//
//
//
//
//
//
//
//
//
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
    GeneratorTemplateEmail: _currentComponents_GeneratorTemplateEmail_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VistaUno: _currentComponents_VistaUno_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      accion: 1,
      activeRow: null,
      showForm: false,
      data: [],
      columnas: [{
        type: 'text',
        key: 'nombre',
        label: 'Nombre',
        sortable: true
      }, {
        type: 'text',
        key: 'title',
        label: 'Titulo',
        sortable: true
      }, {
        type: 'text',
        key: 'slug',
        label: 'Clave',
        sortable: true
      }, {
        type: 'dateYMD',
        key: 'updated_at',
        label: 'Ùlt. Modificaciòn',
        sortable: true
      }, {
        type: 'dateYMD',
        key: 'created_at',
        label: 'Fecha creación',
        sortable: true
      }]
    };
  },
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_4__["default"]],
  beforeMount: function beforeMount() {
    this.inicializar();
  },
  methods: {
    inicializar: function inicializar() {
      this.reload();
    },
    reload: function reload() {
      var _this = this;
      this.loading();
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_3__["default"].getTemplatesEmail({}).then(function (response) {
        _this.data = response.data.data;
        _this.loading(false);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    handleCancelar: function handleCancelar() {
      this.accion = 1;
      this.showForm = false;
      this.activeRow = null;
      this.reload();
    },
    peticionAdministrar: function peticionAdministrar(payload) {
      var _this2 = this;
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_3__["default"].administrarTemplatesEmail({
        'payload': payload
      }).then(function (response) {
        _this2.messageSweet({
          message: response.data.message,
          icon: response.data.result ? 'success' : 'error'
        });
        _this2.handleCancelar();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    nuevoRegistro: function nuevoRegistro() {
      var _this3 = this;
      this.activeRow = null;
      setTimeout(function () {
        _this3.showForm = true;
      }, 10);
    },
    editar: function editar(data) {
      this.accion = 2;
      var tmp = this.copyObject(data);
      this.activeRow = this.copyObject(tmp);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_email_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-email-editor */ "./node_modules/vue-email-editor/dist/vue-email-editor.common.js");
/* harmony import */ var vue_email_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_email_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @currentComponents/FormFactory.vue */ "./resources/js/src/views/currentComponents/FormFactory.vue");
/* harmony import */ var _helpers_customHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @helpers/customHelpers */ "./resources/js/src/helpers/customHelpers.js");
/* harmony import */ var _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/apis/usePeticiones */ "./resources/js/src/apis/usePeticiones.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _apis_useSendEmails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/apis/useSendEmails */ "./resources/js/src/apis/useSendEmails.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "currentComponents",
  mixins: [_helpers_customHelpers__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    FormFactory: _currentComponents_FormFactory_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    EmailEditor: vue_email_editor__WEBPACK_IMPORTED_MODULE_1__["EmailEditor"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCard"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCardSubTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BCardBody"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BModal"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BButton"]
  },
  data: function data() {
    return {
      projectId: 0,
      // replace with your project id
      accion: 1,
      activeRow: null,
      tools: {
        image: {
          enabled: true
        }
      },
      options: {
        customJS: "console.log(1)",
        features: {
          undoRedo: false,
          audit: true,
          textEditor: {
            cleanPaste: false
          }
        }
      },
      formSchema: [{
        classContainer: 'col-lg-7 col-md-7 col-12',
        type: 'input-text',
        name: 'nombre',
        value: 'nombre',
        label: 'Nombre',
        placeholder: 'Introduce un nombre',
        rules: 'required'
      }, {
        classContainer: 'col-lg-5 col-md-5 col-12',
        type: 'input-text',
        name: 'clave',
        value: 'slug',
        label: 'Clave',
        placeholder: 'Introduce un clave',
        rules: 'required',
        prefixIcon: 'UserIcon'
      }, {
        classContainer: 'col-12',
        type: 'input-text',
        name: 'titulo',
        value: 'title',
        label: 'Titulo',
        placeholder: 'Introduce un titulo',
        rules: 'required'
      }]
    };
  },
  props: {
    data: {
      required: true
    }
  },
  mounted: function mounted() {},
  methods: {
    handleCancel: function handleCancel() {},
    handleProbar: function handleProbar() {
      var _this = this;
      _apis_useSendEmails__WEBPACK_IMPORTED_MODULE_6__["default"].sendEmail({}).then(function (response) {
        console.log(response);
        _this.messageSweet({
          message: 'Se envio correctamente el correo.',
          icon: 'success'
        });
      })["catch"](function (error) {
        _this.messageSweet({
          message: 'Ups... ocurrio un problema, lo siento, intente de nuevo.',
          icon: 'error'
        });
        console.log(error);
      });
    },
    handleCancelForm: function handleCancelForm() {
      this.$emit('cancelar');
    },
    onSubmit: function onSubmit() {
      this.$refs.formFactoryRef.validationForm();
    },
    handleSubmit: function handleSubmit(formValues) {
      var _this2 = this;
      this.$refs.emailEditor.editor.exportHtml(function (data) {
        var payload = _this2.copyObject(formValues);
        payload.accion = _this2.accion;
        if (_this2.data != null) {
          payload.id = _this2.data.id;
          payload.accion = 2;
        }
        payload.config = JSON.stringify(data.design);
        payload.html = JSON.stringify(data.html);
        _this2.peticionAdministrar(payload);
      });
    },
    editorLoaded: function editorLoaded(data) {
      var tempDesign = {
        counters: {
          u_row: 1,
          u_column: 1,
          u_content_text: 2
        },
        body: {
          rows: [{
            cells: [1],
            columns: [{
              contents: [{
                type: "text",
                values: {
                  containerPadding: "10px",
                  textAlign: "left",
                  lineHeight: "140%",
                  linkStyle: {
                    inherit: true,
                    linkColor: "#0000ee",
                    linkHoverColor: "#0000ee",
                    linkUnderline: true,
                    linkHoverUnderline: true
                  },
                  _meta: {
                    htmlID: "u_content_text_2",
                    htmlClassNames: "u_content_text"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  text: '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 48px; line-height: 67.2px;">This is an example template. Replace the JSON with your own.</span></p>'
                }
              }],
              values: {
                _meta: {
                  htmlID: "u_column_1",
                  htmlClassNames: "u_column"
                },
                border: {},
                padding: "0px",
                backgroundColor: ""
              }
            }],
            values: {
              displayCondition: null,
              columns: false,
              backgroundColor: "",
              columnsBackgroundColor: "",
              backgroundImage: {
                url: "",
                fullWidth: true,
                repeat: false,
                center: true,
                cover: false
              },
              padding: "0px",
              hideDesktop: false,
              _meta: {
                htmlID: "u_row_1",
                htmlClassNames: "u_row"
              },
              selectable: true,
              draggable: true,
              duplicatable: true,
              deletable: true,
              hideable: true
            }
          }],
          values: {
            textColor: "#000000",
            backgroundColor: "#e7e7e7",
            backgroundImage: {
              url: "",
              fullWidth: true,
              repeat: false,
              center: true,
              cover: false
            },
            contentWidth: "500px",
            contentAlign: "center",
            fontFamily: {
              label: "Arial",
              value: "arial,helvetica,sans-serif"
            },
            preheaderText: "",
            linkStyle: {
              body: true,
              linkColor: "#e67e23",
              linkHoverColor: "#0000ee",
              linkUnderline: true,
              linkHoverUnderline: true,
              inherit: false
            },
            _meta: {
              htmlID: "u_body",
              htmlClassNames: "u_body"
            }
          }
        },
        schemaVersion: 6
      };
      var tmp = this.data != null ? JSON.parse(this.data.config) : tempDesign;
      this.$refs.emailEditor.editor.loadDesign(tmp);
    },
    peticionAdministrar: function peticionAdministrar(payload) {
      var _this3 = this;
      _apis_usePeticiones__WEBPACK_IMPORTED_MODULE_4__["default"].administrarTemplatesEmail({
        'payload': payload
      }).then(function (response) {
        _this3.messageSweet({
          message: response.data.message,
          icon: response.data.result ? 'success' : 'error'
        });
        if (response.data.result) {
          _this3.handleCancelForm();
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=style&index=0&id=06d3610e&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=style&index=0&id=06d3610e&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.unlayer-editor{\n    height: 800px!important;\n    min-height: 0!important;\n}\n.unlayer-editor > iframe{\n    min-width: 0px!important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue?vue&type=template&id=d3964e1a&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue?vue&type=template&id=d3964e1a& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
            _c("GeneratorTemplateEmail", {
              attrs: { data: _vm.activeRow },
              on: { cancelar: _vm.handleCancelar },
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

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=template&id=06d3610e&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=template&id=06d3610e& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "parent" },
    [
      _c(
        "BCard",
        { staticClass: "p-2", class: " col-12 " },
        [
          _c("FormFactory", {
            ref: "formFactoryRef",
            staticClass: "col-12 mx-auto",
            attrs: {
              btnsAccion: false,
              data: _vm.data == null ? {} : _vm.data,
              schema: _vm.formSchema,
            },
            on: { formExport: _vm.handleSubmit },
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: " col-12 d-flex flex-wrap justify-content-between" },
            [
              _c(
                "div",
                [
                  _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "outline-danger" },
                      on: { click: _vm.handleCancelForm },
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
                      attrs: { size: "sm", variant: "relief-secondary" },
                      on: { click: _vm.handleProbar },
                    },
                    [_vm._v("Enviar correo")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "relief-primary" },
                      on: { click: _vm.onSubmit },
                    },
                    [_vm._v("Guardar plantilla")]
                  ),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c("EmailEditor", {
            ref: "emailEditor",
            staticClass: "col-12 p-0 m-0 child",
            attrs: {
              locale: "es",
              "project-id": _vm.projectId,
              tools: _vm.tools,
              options: _vm.options,
            },
            on: { load: _vm.editorLoaded },
          }),
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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=style&index=0&id=06d3610e&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=style&index=0&id=06d3610e&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneratorTemplateEmail.vue?vue&type=style&index=0&id=06d3610e&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=style&index=0&id=06d3610e&lang=css&");

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

/***/ "./resources/js/src/apis/config/sendEmails/apisSendEmails.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/apis/config/sendEmails/apisSendEmails.js ***!
  \*******************************************************************/
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
/* harmony import */ var _apisSendEmailsConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apisSendEmailsConfig */ "./resources/js/src/apis/config/sendEmails/apisSendEmailsConfig.js");






var apiPeticiones = /*#__PURE__*/function () {
  // Will be used by this service for making API calls

  // apisConfig <= Will be used by this service

  function apiPeticiones(axiosIns, jwtOverrideConfig) {
    Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, apiPeticiones);
    Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "axiosIns", null);
    Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "apisConfig", Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _apisSendEmailsConfig__WEBPACK_IMPORTED_MODULE_5__["default"]));
    this.axiosIns = axiosIns;
    this.apisConfig = Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.apisConfig), jwtOverrideConfig);
  }
  Object(_Users_plomo_Documents_MAMP_vol_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(apiPeticiones, [{
    key: "sendEmail",
    value: function sendEmail() {
      var _this$axiosIns;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return (_this$axiosIns = this.axiosIns).post.apply(_this$axiosIns, [this.apisConfig.apiSendEmail].concat(args));
    }
  }]);
  return apiPeticiones;
}();


/***/ }),

/***/ "./resources/js/src/apis/config/sendEmails/apisSendEmailsConfig.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/apis/config/sendEmails/apisSendEmailsConfig.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Endpoints
  apiSendEmail: '/api/send/email'
});

/***/ }),

/***/ "./resources/js/src/apis/config/sendEmails/useSendEmails.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/apis/config/sendEmails/useSendEmails.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSendEmails; });
/* harmony import */ var _apisSendEmails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apisSendEmails */ "./resources/js/src/apis/config/sendEmails/apisSendEmails.js");

function useSendEmails(axiosIns, overrideConfig) {
  var sendEmails = new _apisSendEmails__WEBPACK_IMPORTED_MODULE_0__["default"](axiosIns, overrideConfig);
  return {
    sendEmails: sendEmails
  };
}

/***/ }),

/***/ "./resources/js/src/apis/useSendEmails.js":
/*!************************************************!*\
  !*** ./resources/js/src/apis/useSendEmails.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_sendEmails_useSendEmails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/sendEmails/useSendEmails */ "./resources/js/src/apis/config/sendEmails/useSendEmails.js");
/* harmony import */ var _apis_component_axiosCurrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/apis/component/axiosCurrent */ "./resources/js/src/apis/component/axiosCurrent.js");


var _useSendEmails = Object(_config_sendEmails_useSendEmails__WEBPACK_IMPORTED_MODULE_0__["default"])(_apis_component_axiosCurrent__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
  sendEmails = _useSendEmails.sendEmails;
/* harmony default export */ __webpack_exports__["default"] = (sendEmails);

/***/ }),

/***/ "./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TemplateEmails_vue_vue_type_template_id_d3964e1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateEmails.vue?vue&type=template&id=d3964e1a& */ "./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue?vue&type=template&id=d3964e1a&");
/* harmony import */ var _TemplateEmails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplateEmails.vue?vue&type=script&lang=js& */ "./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TemplateEmails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TemplateEmails_vue_vue_type_template_id_d3964e1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TemplateEmails_vue_vue_type_template_id_d3964e1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateEmails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TemplateEmails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateEmails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue?vue&type=template&id=d3964e1a&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue?vue&type=template&id=d3964e1a& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateEmails_vue_vue_type_template_id_d3964e1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TemplateEmails.vue?vue&type=template&id=d3964e1a& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/configuracion/notificaciones/template/TemplateEmails.vue?vue&type=template&id=d3964e1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateEmails_vue_vue_type_template_id_d3964e1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TemplateEmails_vue_vue_type_template_id_d3964e1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneratorTemplateEmail_vue_vue_type_template_id_06d3610e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneratorTemplateEmail.vue?vue&type=template&id=06d3610e& */ "./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=template&id=06d3610e&");
/* harmony import */ var _GeneratorTemplateEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneratorTemplateEmail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GeneratorTemplateEmail_vue_vue_type_style_index_0_id_06d3610e_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GeneratorTemplateEmail.vue?vue&type=style&index=0&id=06d3610e&lang=css& */ "./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=style&index=0&id=06d3610e&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GeneratorTemplateEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneratorTemplateEmail_vue_vue_type_template_id_06d3610e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneratorTemplateEmail_vue_vue_type_template_id_06d3610e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorTemplateEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneratorTemplateEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorTemplateEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=style&index=0&id=06d3610e&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=style&index=0&id=06d3610e&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorTemplateEmail_vue_vue_type_style_index_0_id_06d3610e_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneratorTemplateEmail.vue?vue&type=style&index=0&id=06d3610e&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=style&index=0&id=06d3610e&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorTemplateEmail_vue_vue_type_style_index_0_id_06d3610e_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorTemplateEmail_vue_vue_type_style_index_0_id_06d3610e_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorTemplateEmail_vue_vue_type_style_index_0_id_06d3610e_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorTemplateEmail_vue_vue_type_style_index_0_id_06d3610e_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=template&id=06d3610e&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=template&id=06d3610e& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorTemplateEmail_vue_vue_type_template_id_06d3610e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneratorTemplateEmail.vue?vue&type=template&id=06d3610e& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/currentComponents/GeneratorTemplateEmail.vue?vue&type=template&id=06d3610e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorTemplateEmail_vue_vue_type_template_id_06d3610e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneratorTemplateEmail_vue_vue_type_template_id_06d3610e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);