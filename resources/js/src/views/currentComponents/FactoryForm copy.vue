<template>
  <div>
    <pre>{{ form }}</pre>
    <validation-observer ref="simpleRules">
      <b-row>
        <b-col
          v-for="(input,indxInput) in schema"
          :key="'input-'+indxInput"
          :class="(typeof input.classContainer != 'undefined'?input.classContainer:'') + '' "
        >
          <div v-if="input.type === 'text'">
            <validation-provider
              #default="{ errors }"
              :name=" (typeof input.name  != 'undefined'?input.name:'')"
              :rules="(typeof input.rules != 'undefined'?input.rules:'')"
            >
            <p
              :for="input.name"
              :class="(typeof input.classLabel != 'undefined'?input.classLabel:'') + ' font-weight-bold p-0 m-0' "
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
                    @onChange="form[input.value] = $event"
                    :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                    :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce un dato valido')"
                    class="col-12"
                  />
                  <b-input-group-append v-if="(typeof input.sufijoIcon != 'undefined')" is-text>
                    <feather-icon :icon="input.sufijoIcon" />
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
              <small class=" font-weight-bold text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </div>
          <div v-if="input.type === 'password'">
            <validation-provider
              #default="{ errors }"
              :name=" (typeof input.name  != 'undefined'?input.name:'')"
              :rules="(typeof input.rules != 'undefined'?input.rules:'')"
            >
            <p
              :for="input.name"
              :class="(typeof input.classLabel != 'undefined'?input.classLabel:'') + ' font-weight-bold p-0 m-0' "
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
                    @onChange="form[input.value] = $event"
                    :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                    :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce un dato valido')"
                    class="col-12"
                  />
                  <b-input-group-append v-if="(typeof input.sufijoIcon != 'undefined')" is-text>
                    <feather-icon :icon="input.sufijoIcon" />
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
              <small class=" font-weight-bold text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </div>
          <div v-if="input.type === 'email'">
            <validation-provider
              #default="{ errors }"
              :name=" (typeof input.name  != 'undefined'?input.name:'')"
              :rules="(typeof input.rules != 'undefined'?input.rules:'')"
            >
            <p
              :for="input.name"
              :class="(typeof input.classLabel != 'undefined'?input.classLabel:'') + ' font-weight-bold p-0 m-0' "
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
                    @onChange="form[input.value] = $event"
                    :disabled=" formDisabled?true:(typeof input.disabled != 'undefined'?input.disabled:false)"
                    :placeholder="(typeof input.placeholder != 'undefined'?input.placeholder:'Introduce un dato valido')"
                    class="col-12"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                  <b-input-group-append v-if="(typeof input.sufijoIcon != 'undefined')" is-text>
                    <feather-icon :icon="input.sufijoIcon" />
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
              <div v-if="!isValidEmail(form[input.value])" class="error-message">Introduce una dirección de correo electrónico válida</div>

              <small class=" font-weight-bold text-danger">{{ errors[0] }}</small>
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
              :class="(typeof input.classLabel != 'undefined'?input.classLabel:'') + ' font-weight-bold p-0 m-0' "
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
            <small class=" font-weight-bold text-danger">{{ errors[0] }}</small>
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
              :class="(typeof input.classLabel != 'undefined'?input.classLabel:'') + ' font-weight-bold p-0 m-0' "
            >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
            <!-- input -->
            <b-input-group class="mb-3">
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
            <small class=" font-weight-bold text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </div>
          <!-- input input-phone -->
          <div v-if="input.type === 'input-phone'">
            <!-- Provider de validación -->
            <validation-provider
              #default="{ errors }"
              :name=" (typeof input.name  != 'undefined'?input.name:'')"
              :rules="(typeof input.rules != 'undefined'?input.rules:'')"
            >
            <!-- Label -->
            <p
              :for="input.name"
              :class="(typeof input.classLabel != 'undefined'?input.classLabel:'') + ' font-weight-bold p-0 m-0' "
            >{{(typeof input.label != 'undefined'?input.label:'')}}</p>
            <!-- input -->
            <VuePhoneNumberInput
              :id="   input.name"
              :ref="  input.name"
              :name=" input.name"
              :value="form[input.value]"
              @input="form[input.value] = $event"
              class="w-100 char-textarea"
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
            <small class=" font-weight-bold text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </div>
        </b-col>
      </b-row>
    </validation-observer>
    <!-- Botones de acción -->
    <div class="col-12 m-0 p-0 mt-4 d-flex justify-content-end">
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
      >Guardar</b-button>
    </div>
  </div>
</template>

<script>
  import {
    BRow,
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
  } from 'bootstrap-vue'
  import {
    ValidationProvider,
    ValidationObserver,
    localize
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
// eslint-disable-next-line import/no-extraneous-dependencies
// import 'cleave.js/dist/addons/cleave-phone.us'
// import 'cleave.js/dist/addons/cleave-phone.us'
  import apis from '@/apis/useApis'

export default {
  directives: {
    Ripple,
  },
  components: {
    VuePhoneNumberInput,
    BRow,
    Cleave,
    flatPickr,
    BFormTextarea,
    BCol,
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
  },
  data() {
    return {
      form : {},
      openModal:false,
      password,
      required,
      formDisabled : false,
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
    getForm:{
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
  },
  mixins : [customHelpers],
  created() {},
  watch: {
    data(){
      this.inicializar();
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
    isValidEmail(valor) {
      return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(valor);
    },
    changeFormat(input,valor){
      this.form[input] = valor;
      console.log('input',input);
      console.log('valor',valor);
    },
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted
      // The following will be an empty string until a valid date is entered
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
      let tmp = [];
      this.schema.forEach(item => {
        let valor = this.data == null ? null : ( this.data.hasOwnProperty(item.value) ? item.value : null )
        tmp[item.value] = valor;
      })
      this.$set(this,'form',tmp);
    },
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          this.$emit('formExport',this.form);
        }
      })
    },
  },
}
</script>

<style lang="scss">
  @import '~@resources/scss/vue/libs/vue-select.scss';
  @import '~@resources/scss/vue/libs/vue-flatpicker.scss';
</style>
