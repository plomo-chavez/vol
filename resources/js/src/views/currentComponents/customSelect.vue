<template>
    <div>
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
            <b-form-group>
                <v-select
                    :id="   input.name"
                    :ref="  input.name"
                    :name=" input.name"
                    :value="formValue"
                    @input="changeData($event)"
                    class="bg-white w-100 p-0 m-0"
                    :disabled=" formDisabled ? true : ( typeof input.disabled != 'undefined' ? input.disabled : false )"
                    :placeholder="(typeof input.placeholder != 'undefined' ? input.placeholder : 'Selecciona un opción' )"
                    :options="opciones"
                >
                    <span slot="no-options">No hay opciones.</span>
                </v-select>
        <p v-if="errorCatalogo != null" class="col-12 text-danger ">´{{ errorCatalogo }}</p>
            </b-form-group>
            <!-- Errores de validación -->
            <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bold text-danger col-12">{{ errors[0] }}</small></p>
        </validation-provider>

    </div>
</template>

<script>

import vSelect from 'vue-select'
import catalogos from '@/apis/useCatalogo'
import {
        BFormGroup,
    } from 'bootstrap-vue'
    import {
      ValidationProvider,
      ValidationObserver,
    } from 'vee-validate'
export default {
  components: {
    vSelect,
    BFormGroup,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
        opciones : [],
        errorCatalogo : null,
    }
  },
  props: {
    input: {
      type    : Object,
      default : null
    },
    formValue: {
      default : null
    },
    formDisabled: {
      default : null
    },
  },
  created() {},
  watch: {},
  computed: {
  },
  beforeMount() {
    this.getCatalogo()
  },
  methods: {
    formatoToCatalogo(data,all = false){
        let tmp = []
        data.map((item, index) => {
            if(all)
                tmp.push({...item, 'label': item?.nombre ?? '','value': item?.id ?? '',})
            else
                tmp.push({ 'label': item?.nombre ?? '','value': item?.id ?? '',})
        })
        return tmp
    },
    changeData(data) {
        this.$emit('changeData',{'value':data, 'field' : this.input.value})
    },
    getCatalogo(){
        if (typeof this.input.catalogo == 'string') {
            switch (this.input.catalogo) {
                case 'tiposUsuario':
                    catalogos
                        .tiposUsuarios({})
                        .then(response => {
                            this.opciones = this.formatoToCatalogo(response.data.data)
                        })
                        .catch(error   => { console.log(error); })
                    break;
                case 'estatusHabitaciones':
                    catalogos
                        .estatusHabitaciones({})
                        .then(response => {
                            this.opciones = this.formatoToCatalogo(response.data.data)
                        })
                        .catch(error   => { console.log(error); })
                    break;
                case 'habitaciones':
                    catalogos
                        .habitaciones({})
                        .then(response => {
                            this.opciones = this.formatoToCatalogo(response.data.data)
                        })
                        .catch(error   => { console.log(error); })
                break;
                case 'customPersons':
                    catalogos
                        .customPersons({})
                        .then(response => {
                            this.opciones = this.formatoToCatalogo(response.data.data,true)
                        })
                        .catch(error   => { console.log(error); })
                break;

                default:
                    this.errorCatalogo = 'No se encontro ningun catalogo';
                    break;
            }
        }
    }
  },
}
</script>

<style lang="scss">
  @import '~@resources/scss/vue/libs/vue-select.scss';
  @import '~@resources/scss/vue/libs/vue-flatpicker.scss';
</style>
