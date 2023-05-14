<template>
    <component v-bind:is="withCard ? 'b-card' : 'div'" :class="classForm">
        <!-- Title & SubTitle -->
        <div v-if="title || subtitle" class="mb-2 col-12 p-0">
            <component v-bind:is="withCard ? 'b-card-title' : 'h1'" v-if="title">{{ title }}</component>
            <component v-bind:is="withCard ? 'b-card-sub-title' : 'h3'" v-if="subtitle">{{ subtitle }}</component>
        </div>
        <div class="col-12 p-11 pt-0 pb-0">
            <validation-observer ref="simpleRules">
              <b-row>
                  <b-col
                      v-for="(input,indxInput) in schema"
                      :key="'input-'+indxInput"
                      :class="(typeof input.classContainer != 'undefined'? input.classContainer : ' col-12 ' ) + ' mb-1' "
                  >
                  <!-- input text -->
                      <div v-if="input.type === 'input-text'">
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                        >
                        <p
                            :for="input.name"
                            :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                            <b-form-group
                            class=" p-0 m-0"
                            >
                            <b-input-group
                                :prepend="(typeof input.prefixText != 'undefined'?input.prefixText:'')"
                                :append=" (typeof input.sufijoText != 'undefined'?input.sufijoText:'')"
                                class="input-group-merge"
                            >
                                <b-input-group-prepend v-if="(typeof input.prefixIcon != 'undefined')" is-text>
                                <feather-icon :icon="input.prefixIcon" />
                                </b-input-group-prepend>
                                <b-form-input
                                :id="   input.name"
                                :ref="  input.name"
                                :name=" input.name"
                                :value="form[input.value]"
                                @input="changeData(input.value,$event)"
                                :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                                :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce un dato valido')"
                                class="bg-white col-12"
                                />
                                <b-input-group-append v-if="(typeof input.sufijoIcon != 'undefined')" is-text>
                                <feather-icon :icon="input.sufijoIcon" />
                                </b-input-group-append>
                            </b-input-group>
                            </b-form-group>
                            <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger">{{ errors[0] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input password -->
                      <div v-if="input.type === 'password'">
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                        >
                        <p
                            :for="input.name"
                            :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                            <b-form-group
                            class=" p-0 m-0"
                            >
                            <b-input-group
                                :prepend="(typeof input.prefixText != 'undefined'?input.prefixText:'')"
                                :append=" (typeof input.sufijoText != 'undefined'?input.sufijoText:'')"
                                class="input-group-merge"
                            >
                                <b-input-group-prepend v-if="(typeof input.prefixIcon != 'undefined')" is-text>
                                <feather-icon :icon="input.prefixIcon" />
                                </b-input-group-prepend>
                                <b-form-input
                                :id="   input.name"
                                :type="input.type"
                                :ref="  input.name"
                                :name=" input.name"
                                :value="form[input.value]"
                                @input="form[input.value] = $event"
                                :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                                :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce un dato valido')"
                                class="bg-white col-12"
                                />
                                <b-input-group-append v-if="(typeof input.sufijoIcon != 'undefined')" is-text>
                                <feather-icon :icon="input.sufijoIcon" />
                                </b-input-group-append>
                            </b-input-group>
                            </b-form-group>
                            <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger">{{ errors[0] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input email -->
                      <div v-if="input.type === 'email'">
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                        >
                        <p
                            :for="input.name"
                            :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                            <b-form-group
                            class=" p-0 m-0"
                            >
                            <b-input-group
                                :prepend="(typeof input.prefixText != 'undefined'?input.prefixText:'')"
                                :append=" (typeof input.sufijoText != 'undefined'?input.sufijoText:'')"
                                class="input-group-merge"
                            >
                                <b-input-group-prepend v-if="(typeof input.prefixIcon != 'undefined')" is-text>
                                <feather-icon :icon="input.prefixIcon" />
                                </b-input-group-prepend>
                                <b-form-input
                                :id="   input.name"
                                :type="input.type"
                                :ref="  input.name"
                                :name=" input.name"
                                :value="form[input.value]"
                                @input="form[input.value] = $event"
                                :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                                :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce un dato valido')"
                                class="bg-white col-12"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                />
                                <b-input-group-append v-if="(typeof input.sufijoIcon != 'undefined')" is-text>
                                <feather-icon :icon="input.sufijoIcon" />
                                </b-input-group-append>
                            </b-input-group>
                            </b-form-group>
                            <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger">{{ errors[0] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input text-area -->
                      <div v-if="input.type === 'text-area'">
                        <!-- Provider de validación -->
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                        >
                        <!-- Label -->
                        <p
                            :for="input.name"
                            :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                        <!-- Input -->
                        <b-form-textarea
                            :id="   input.name"
                            :ref="  input.name"
                            :name=" input.name"
                            :value="form[input.value]"
                            @input="form[input.value] = $event"
                            class="col-12 char-textarea"
                            :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                            :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'')"
                            rows="3"
                            :class="typeof input.counterChar == 'undefined'?'': ( !input.counterChar ? '' : (typeof input.maxChar == 'undefined'?'':((form[input.value] == null? 0 : form[input.value].length) <= input.maxChar)?'':' text-danger '))"
                        />
                        <!-- Contador de caracteres -->
                        <small
                            v-if=" form[input.value] != null && (typeof input.counterChar != 'undefined'?input.counterChar:false) "
                            class="textarea-counter-value float-right"
                        ><span class="char-count">{{   form[input.value].length }}</span></small>
                        <!-- Errores de validación -->
                        <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger">{{ errors[0] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input flat-pickr -->
                      <div v-if="input.type === 'flat-pickr'">
                        <!-- Provider de validación -->
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?input.rules:'')"
                        >
                        <!-- Label -->
                        <p
                            :for="input.name"
                            :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                        <!-- input -->
                        <b-input-group class="mb-3 bg-white ">
                            <b-input-group-prepend>
                            <b-form-datepicker
                            style="z-index: 0;"
                                :id="   input.name"
                                :ref="  input.name"
                                :name=" input.name"
                                button-only
                                :value="form[input.value]"
                                :min="(typeof input.minDate != 'undefined'?input.minDate:'')"
                                :max="(typeof input.maxDate != 'undefined'?input.maxDate:'')"
                                @input="form[input.value] = $event"
                                :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false) "
                                :placeholder=" (typeof input.placeholder != 'undefined'?input.placeholder:'Introduce una fecha valida') "
                                :show-decade-nav="true"
                                :hide-header="true"
                                size="sm"
                                locale="es"
                            />
                            </b-input-group-prepend>
                            <b-form-input
                            :value="form[input.value]"
                            type="text"
                            disabled
                            :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce una fecha valida')"
                            autocomplete="off"
                            />
                        </b-input-group>
                        <!-- Errores de validación -->
                        <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger">{{ errors[0] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input input-phone -->
                      <div v-if="input.type === 'input-phone'">
                        <!-- Provider de validación -->
                        <validation-provider
                            #default="{ errors }"
                            :name=" (typeof input.name  != 'undefined'?input.name:'')"
                            :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                            >
                            <!-- Label -->
                        <p
                            :for="input.name"
                            :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                        >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                        <!-- input -->
                        <VuePhoneNumberInput
                            :id="   input.name"
                            :ref="  input.name"
                            :name=" input.name"
                            :value="form[input.value]"
                            @input="changeData(input.value,$event)"
                            class="bg-white w-100 char-textarea"
                            :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                            :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'')"
                            :default-country-code="'MX'"
                            :countries-height="50"
                            :preferred-countries="['MX','US']"
                            :translations="{
                            countrySelectorLabel: 'Codigo',
                            countrySelectorError: 'Selecciona un país',
                            phoneNumberLabel    : null,
                            example             : 'Ejemplo :'
                            }"
                        />
                        <!-- Errores de validación -->
                        <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger col-12">{{ errors[0] }}</small></p>
                        <p class="m-0 p-0"><small v-if="errorsPersonalizados[input.name]" class="m-0 p-0 font-weight-bolder text-danger col-12">{{ errorsPersonalizados[input.name] }}</small></p>
                        </validation-provider>
                      </div>
                  <!-- input input-money -->
                      <div v-if="input.type === 'input-money'">
                          <!-- Provider de validación -->
                          <validation-provider
                              #default="{ errors }"
                              :name=" (typeof input.name  != 'undefined'?input.name:'')"
                              :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                          >                <!-- Label -->
                              <p
                                  :for="input.name"
                                  :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                              <!-- input -->

                              <cleave
                                :id="input.name"
                                :ref="input.name"
                                :name="input.name"
                                :value="form[input.value]"
                                @input="changeData(input.value, $event)"
                                class="bg-white w-100 char-textarea form-control"
                                :disabled="formDisabled || Boolean(input.disabled)"
                                :placeholder="input.placeholder || ''"
                                :raw="false"
                                :options="optionsInputMoney"
                            />

                              <!-- Errores de validación -->
                              <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger col-12">{{ errors[0] }}</small></p>
                              <p class="m-0 p-0"><small v-if="errorsPersonalizados[input.name]" class="m-0 p-0 font-weight-bolder text-danger col-12">{{ errorsPersonalizados[input.name] }}</small></p>
                          </validation-provider>
                      </div>

                  <!-- input input-money -->
                  <div v-if="input.type === 'input-number'">
                          <!-- Provider de validación -->
                          <validation-provider
                              #default="{ errors }"
                              :name=" (typeof input.name  != 'undefined'?input.name:'')"
                              :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                          >                <!-- Label -->
                              <p
                                  :for="input.name"
                                  :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                              <!-- input -->

                              <cleave
                                :id="input.name"
                                :ref="input.name"
                                :name="input.name"
                                :value="form[input.value]"
                                @input="changeData(input.value, $event)"
                                class="bg-white w-100 char-textarea form-control"
                                :disabled="formDisabled || Boolean(input.disabled)"
                                :placeholder="input.placeholder || ''"
                                :raw="false"
                                :options="optionsInputNumerico"
                            />

                              <!-- Errores de validación -->
                              <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger col-12">{{ errors[0] }}</small></p>
                              <p class="m-0 p-0"><small v-if="errorsPersonalizados[input.name]" class="m-0 p-0 font-weight-bolder text-danger col-12">{{ errorsPersonalizados[input.name] }}</small></p>
                          </validation-provider>
                      </div>
                  <!-- input input-select -->
                      <div v-if="input.type === 'input-select'">
                        <customSelect
                            :id="   input.name"
                            :ref="  input.name"
                            :name=" input.name"
                            :input="input"
                            :formDisabled="formDisabled"
                            @changeData="changeValueSelect"
                            :formValue="form[input.value]"
                        />
                      </div>
                  <!-- input input-checkbox -->
                      <div v-if="input.type === 'input-checkbox'">
                          <!-- Provider de validación -->
                          <validation-provider
                              #default="{ errors }"
                              :name=" (typeof input.name  != 'undefined'?input.name:'')"
                              :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                          >
                              <!-- Label -->
                              <p
                                  :for="input.name"
                                  :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                              <!-- input -->
                              <div>
                                  <b-form-checkbox-group
                                      :id="   input.name"
                                      :ref="  input.name"
                                      :name=" input.name"
                                      :options="input.catalogo"
                                      :value="form[input.value]"
                                      :stacked ="typeof input.vertical != 'undefined' ? input.vertical : false "
                                      @input="{ changeData(input.value,$event) }"
                                  />
                              </div>
                              <!-- Errores de validación -->
                              <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bolder text-danger col-12">{{ errors[0] }}</small></p>
                          </validation-provider>
                      </div>
                  <!-- input input-switch -->
                      <div v-if="input.type === 'input-switch'">
                          <!-- Provider de validación -->
                          <validation-provider
                              #default="{ errors }"
                              :name=" (typeof input.name  != 'undefined'?input.name:'')"
                              :rules="(typeof input.rules != 'undefined'?  input.rules + '' : '' )"
                          >
                              <!-- Label -->
                              <p
                                  :for="input.name"
                                  :class="(typeof input.classLabel != 'undefined'?input.classLabel + ' m-0 p-0 ':'') + ' font-weight-bolder p-0 m-0' "
                              >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
                              <!-- input -->
                              <div>
                                  <b-form-checkbox
                                  switch
                                  v-model="form[input.value]"
                                  @change="changeData(input.value, form[input.value])"
                                  >
                                  <label class=" font-weight-bolder ">{{ getLabelSwitch(form[input.value],input.labels) }}</label>
                                  </b-form-checkbox>

                              </div>
                              <!-- Errores de validación -->
                          </validation-provider>
                      </div>
                  </b-col>
              </b-row>
            </validation-observer>
            <!-- Botones de acción -->
            <div v-if="btnsAccion" class="col-12 m-0 p-0 mt-1 d-flex justify-content-end">
              <b-button
                v-if="formDisabled"
                class=""
                variant="relief-warning"
                type="button"
                @click=" formDisabled = false"
              >Editar</b-button>
              <b-button
                v-if="(disabledForm) ? (!formDisabled) : btnCancelar "
                class=" mr-1"
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                variant="outline-secondary"
                type="button"
                @click="cancelar()"
              >Cancelar</b-button>
              <b-button
                v-if="!formDisabled"
                class=""
                variant="relief-primary"
                type="submit"
                @click.prevent="validationForm"
              >{{ btnLblSubmit }}</b-button>
            </div>
        </div>
    </component>
  </template>

  <script>
    import {
        BRow,

        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BCol,
        BFormDatepicker,
        BFormGroup,
        BFormInput,
        BFormCheckbox,
        BForm,
        BButton,
        BFormTextarea,
        BInputGroup,
        BInputGroupPrepend,
        BInputGroupAppend,
        BFormCheckboxGroup
    } from 'bootstrap-vue'
    import vSelect from 'vue-select'
    import {
      ValidationProvider,
      ValidationObserver,
      localize,
      extend
    } from 'vee-validate'
    import {
      password,
      required
    } from '@validations'
    import flatPickr from 'vue-flatpickr-component'
    import Ripple from 'vue-ripple-directive'
    import customHelpers  from '@helpers/customHelpers'
    import es from "vee-validate/dist/locale/es.json";
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';
    import Cleave from 'vue-cleave-component'
    import 'cleave.js/dist/addons/cleave-phone.us'
    import apis from '@/apis/useApis'
    import customSelect from '@currentComponents/customSelect.vue'

  export default {
    directives: {
      Ripple,
    },
    components: {
        VuePhoneNumberInput,
        BFormCheckboxGroup,
        BRow,
        Cleave,
        flatPickr,
        BFormTextarea,
        BCol,
        vSelect,
        BFormDatepicker,
        BFormGroup,
        BFormInput,
        BFormCheckbox,
        BForm,
        BButton,
        BInputGroup,
        BInputGroupPrepend,
        BInputGroupAppend,
        ValidationProvider,
        ValidationObserver,
        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        customSelect,
    },
    data() {
        return {
            errorsPersonalizados : {},
            form : {},
            openModal:false,
            password,
            required,
            formDisabled : false,
            optionsInputMoney : {
                numeral: true,
                prefix: '$ ',
                numeralThousandsGroupStyle: 'thousand',
            },
            optionsInputNumerico : {
                // Configuramos el bloque de dígitos enteros
                blocks: [1],
                // Permitimos solo valores numéricos
                numericOnly: true,
                // Establecemos el valor mínimo y máximo
            },
        }
    },
    props: {
      schema: {
        type    : Array,
        default : []
      },
      data: {
        type    : Object,
        default : null
      },
      title: {
        type    : String,
        default : null
      },
      subtitle: {
        type    : String,
        default : null
      },
      classForm: {
        type    : String,
        default : ' p-1 '
      },
      withCard:{
        type    : Boolean,
        default : false,
      },
      disabledForm:{
        type    : Boolean,
        default : false,
      },
      btnCancelar:{
        type    : Boolean,
        default : true,
      },
      btnsAccion:{
        type    : Boolean,
        default : true,
      },
      btnLblSubmit : {
        type: String,
        default : 'Guardar'
      }
    },
    mixins : [customHelpers],
    created() {},
    watch: {
      data(){
        // this.inicializar();
      },
    },
    computed: {
    },
    beforeMount() {
        this.formDisabled = this.disabledForm,
        localize('es',es);
        this.inicializar();
    },
    methods: {
        getOptions(input) {
            let options;
            if (input?.prefix ?? false) {
                options = {...this.optionsInputMoney, prefix : input.prefix}
            } else {
                options = this.optionsInputMoney ?? null; // o un valor predeterminado
            }
            return options;
        },
        getOptionsMoney(input){
            let tmp = this.copyObject(this.optionsInputMoney)
            return tmp
        },
        changeValueSelect(data){
            this.changeData(data.field,data.value)
        },
        getLabelSwitch(valor,labels){
            let texto = 'Faltan los labels'
            if (typeof labels == 'object') {
                texto = valor ? labels.on : labels.off
                texto = typeof texto == 'undefined' ? 'lol' : texto
            }
            return texto;
        },
        changeData(field,valor){
            this.$set(this.form,field,valor);
            this.validacionesExternas()
        },
        changeFormat(input,valor){
            this.form[input] = valor;
        },
        getForm(){
            return this.form
        },
        onContext(ctx) {
            this.formatted = ctx.selectedFormatted
            this.selected = ctx.selectedYMD
        },
        cancelar(){
            if( this.disabledForm ){
                this.formDisabled = true;
            }else{
                this.$emit('cancelar');
            }
        },
        inicializar(){
            let tmp = {};
            this.schema.forEach(item => {
                let valor = null
                if(item.type == 'input-checkbox'){
                    valor = this.data == null ? [] : ( this.data.hasOwnProperty(item.value) ? this.data[item.value] : [] )
                }else if(item.type == 'input-switch'){
                    valor = this.data == null ? false : ( this.data.hasOwnProperty(item.value) ? this.data[item.value] : false )
                }else if(item.type == 'input-money'){
                    valor = this.data == null ? 0 : ( this.data.hasOwnProperty(item.value) ? this.data[item.value] : 0 )
                }else{
                    valor = this.data == null ? null : ( this.data.hasOwnProperty(item.value) ? this.data[item.value] : null )
                }
                tmp[item.value] = valor;
            })
            this.$set(this,'form',tmp);
        },
        validacionesExternas(){
            let hayErrores = false;
            this.schema.map((field) => {
                if (hayErrores == false) {
                    if (field.type == 'input-phone') {
                        if (!this.$refs[field.name][0].isValid) {
                                this.errorsPersonalizados[field.name] = 'El ' + field.label.toLowerCase() + ' debe de ser valido.'
                                hayErrores = true
                        } else {
                            delete(this.errorsPersonalizados[field.name])
                        }
                    } else if (field.type == 'input-checkbox') {
                        console.log(field.rules)
                    }
                }
            })
            return hayErrores;
        },
        validationForm() {
            this.$refs.simpleRules.validate().then(success => {
                let hayErrores = this.validacionesExternas();
                if (hayErrores == false && success) {
                    this.$emit('formExport',this.form);
                } else {
                    this.messageSweet({
                        message: 'Faltan campos por rellenar o hay un error con el formulario, revisalo',
                        icon: 'warning',
                    });
                }
            })
        },
    },
  }
  </script>

  <style lang="scss">
    @import '~@resources/scss/vue/libs/vue-select.scss';
    @import '~@resources/scss/vue/libs/vue-flatpicker.scss';
    .form-group{
        margin-bottom:0px;
    }
    .card-body{
        padding: 0px;
    }
  </style>
