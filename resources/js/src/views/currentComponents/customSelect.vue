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
        <p v-if="errorCatalogo != null" class="font-weight-bolder col-12 text-danger ">{{ errorCatalogo }}</p>
            </b-form-group>
            <!-- Errores de validación -->
            <p class="m-0 p-0" v-if="errors[0]"><small class=" m-0 p-0 font-weight-bold text-danger col-12">{{ errors[0] }}</small></p>
        </validation-provider>

    </div>
</template>

<script>

import vSelect from 'vue-select'
import catalogos from '@/apis/useCatalogo'
import customHelpers  from '@helpers/customHelpers'
import store from '@/store'

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
    mixins : [customHelpers],
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
    watch: {
        input: {
            handler(nuevoValor, antiguoValor) {
                this.getCatalogo()
            },
            deep: true, // Opcional: indica si se debe realizar una observación profunda (deep watch)
            immediate: true // Opcional: indica si se debe ejecutar el watcher inmediatamente después de su definición
        }
    },
    computed: {
    },
    beforeMount() {
        this.getCatalogo()
    },
    methods: {
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
                    case 'coordinaciones':
                        catalogos
                            .coordinaciones({})
                            .then(response => {
                                this.opciones = this.formatoToCatalogo(response.data.data)
                            })
                            .catch(error   => { console.log(error); })
                        break;
                    case 'tiposAsociado':
                        catalogos
                            .tiposAsociado({})
                            .then(response => {
                                this.opciones = this.formatoToCatalogo(response.data.data)
                            })
                            .catch(error   => { console.log(error); })
                        break;
                    case 'estados':
                        catalogos
                            .estados({})
                            .then(response => {
                                this.opciones = this.formatoToCatalogo(response.data.data)
                            })
                            .catch(error   => { console.log(error); })
                        break;
                    case 'tiposSangre':
                        catalogos
                            .tiposSangre({})
                            .then(response => {
                                this.opciones = this.formatoToCatalogo(response.data.data)
                            })
                            .catch(error   => { console.log(error); })
                        break;
                    case 'sexo':
                        catalogos
                            .sexo({})
                            .then(response => {
                                this.opciones = this.formatoToCatalogo(response.data.data)
                            })
                            .catch(error   => { console.log(error); })
                        break;
                    case 'nacionalidad':
                        catalogos
                            .nacionalidad({})
                            .then(response => {
                                this.opciones = this.formatoToCatalogo(response.data.data)
                            })
                            .catch(error   => { console.log(error); })
                        break;
                    case 'estadoCivil':
                        catalogos
                            .estadoCivil({})
                            .then(response => {
                                this.opciones = this.formatoToCatalogo(response.data.data)
                            })
                            .catch(error   => { console.log(error); })
                        break;
                    case 'DelegacionesXTipoCoordinador':
                        let tmp = {};
                        if ( store.state.app.userData ?? null) {
                            tmp.tipoUsuario_id = store.state.app.userData.tipoUsuario_id;
                        }
                        catalogos
                            .delegacionesXTipoCoordinador(tmp)
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
            if (typeof this.input.catalogo == 'object') {
                this.opciones = this.input.catalogo
            }
        }
    },
}
</script>

<style lang="scss">
  @import '~@resources/scss/vue/libs/vue-select.scss';
  @import '~@resources/scss/vue/libs/vue-flatpicker.scss';
</style>
