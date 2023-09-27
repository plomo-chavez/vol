<template>
    <div>
        <div class="col-12 p-0 m-0">
            <BTNAtras
                v-if="codigo != null "
                @handleAtras="() => { codigo = null}"
            />
            <BTNAtras
                v-if="codigo == null "
                @handleAtras="() => { $emit('handleAtras') }"
            />
            <b-card class="col-6 mx-auto p-1 mb-2">
                <Scann 
                    v-if="hadScann"
                    :openScann="openScann"
                    :isModal="true"
                    @changeOpenModal="()=>{ openScann = false }"
                    @changeText="handleChangeCodigo"
                />
                <div v-if="codigo == null " class="d-flex flex-wrap w-100 justify-content-center">
                    <h4 class="col-12 mb-2 text-center">Para poder registrar una hora voluntaria se requiere escanear la credencial nacional o la temporal</h4>
                    <b-button
                        size="sm"
                        variant="relief-secondary"
                        @click="handleOpenScann"
                    >Escanear código</b-button>
                </div>
                <div v-else >
                    <FormFactory
                        v-if="viewForm || formView"
                        class="col-10 mx-auto"
                        withCard
                        :data = 'activeRow'
                        :schema="formSchema"
                        :formLive="true"
                        @exportLive="changeForm"
                        @formExport="saveHora"
                        @cancelar="() => { viewForm = false }"
                    />
                            <!-- @formExport="save" -->
                    <div v-else class="wwfull">
                        <div v-if="registros.length == 0" class="wwfull text-center mb-1">
                            <b-button size="sm" variant="relief-secondary" class="mx-auto mt-1" @click="viewForm = true">Registrar Hora Voluntaria</b-button>
                            <h6  class="wwfull text-center mt-3">No hay registros de horas voluntarias abiertas</h6>
                        </div>
                        <div v-else >
                            <div v-for="(registro, index) in registros" >
                                <div class="wwfull d-flex align-items-center mr-2" >
                                    <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                                    <div class="ml-1">
                                        <h5 class="mb-0">{{ registro.actividad }} - {{ registro.subactividad }}</h5>
                                        <h6 class="mb-0">{{ formatoFechaYMD(registro.horaInicio,true) }}</h6>
                                        <small>{{ registro.area }}</small>
                                    </div>
                                </div>
                                <b-button
                                    class="wwfull"
                                    size="sm"
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                    variant="primary"
                                    block
                                    @click="() => { closeHora(registro) }"
                                >
                                Cerrar registro
                                </b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>

<script>


import {
    BCard,
    BCardTitle,
    BCardSubTitle,
    BCardBody,
    BModal,
    BFormCheckboxGroup,
    BFormCheckbox,
    BButton, BAvatar
} from 'bootstrap-vue'
import customHelpers  from '@helpers/customHelpers'
import OnoffToggle from 'vue-onoff-toggle'
import Scann from '@currentComponents/ScannerCode.vue'
import BTNAtras from '@currentComponents/BTNAtras.vue'
import FormFactory from '@currentComponents/FormFactory.vue'
import Ripple from 'vue-ripple-directive'

export default {
    name: 'formPorGuardia',
    components: {
        Scann,
        BTNAtras,
        BAvatar,
        FormFactory,
        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BModal,
        BFormCheckboxGroup,
        BFormCheckbox,
        BButton,
        OnoffToggle,
    },
    directives: {
        Ripple,
    },
    mixins : [customHelpers],
    data() {
        return {
            userData    : JSON.parse(localStorage.getItem('userData')),
            codigo      : null,
            openScann   : false,
            hadScann    : false,
            viewForm    : false,
            checked     : true,
            formView    : false,
            registros   : [],
            voluntario_id : null,
            activeRow   : {},
            formSchema: [
                {
                    classContainer:'col-12',
                    type        : 'input-text',
                    name        : 'voluntario',
                    value       : 'voluntario',
                    label       : 'Voluntario',
                    placeholder : 'Introduce un nombre',
                    rules       : 'required',
                    disabled    : true,
                    focus: true
                },
                {
                    classContainer:'col-12',
                    type        : 'input-select',
                    name        : 'area',
                    value       : 'area',
                    catalogo    : 'areas',
                    rules       : 'required',
                    label       : 'Area',
                },
                {
                    classContainer:'col-12',
                    type        : 'input-select',
                    name        : 'actividad',
                    value       : 'actividad',
                    catalogo    : 'tipo-actividades-horas-voluntarias',
                    rules       : 'required',
                    label       : 'Actividad',
                },
                {
                    classContainer:'col-12',
                    type        : 'input-select',
                    name        : 'subactividad',
                    value       : 'subactividad',
                    catalogo    : 'tipo-subactividades-horas-voluntarias',
                    rules       : 'required',
                    label       : 'Subactividad',
                    disabled    : true,
                    filtros        : {
                        actividad_id    :  1,
                    },
                },
            ],
        }
    },
    props: {

    },
    watch: {

    },
    computed: {

    },
    beforeMount(){},
    mounted() {},
    created() {},
    methods:{
        handleOpenScann(){
            this.hadScann = true;
            setTimeout(() => { this.openScann = true; }, 3);
        },
        handleChangeCodigo(codigo){
            this.openScann = false;
            setTimeout(() => { this.hadScann = false; }, 3);
            this.codigo = codigo;
            this.peticionGetVoluntario();
        },
        peticionGetVoluntario(){
            let payload = {
                payload : {
                    codigo : this.codigo,
                    accion : 9
                }
            };
            this.peticion(payload)
        },
        changeForm(data){
            console.log('data',data);
            let hayModificaciones = false;
            if((data?.actividad ?? null)  == null){
                this.formSchema[3].disabled = true
                hayModificaciones = true;
            } else if((data?.actividad ?? null) != (this.activeRow?.actividad ?? null)){
                this.formSchema[3].filtros.actividad_id = data.actividad.value
                this.formSchema[3].disabled = false
                hayModificaciones = true;
            } 
            if (hayModificaciones) {
                this.formView = false;
                this.activeRow = this.copyObject(data);
                this.formView = true
                // setTimeout(() => { }, 1);
            }
        },
        saveHora(data){
            let payload = { 
                payload : {
                    ...data,
                    voluntario_id   : this.voluntario_id,
                    actividad_id    : data.actividad.value,
                    subactividad_id : data.subactividad.value,
                    actividad       : data.actividad.label,
                    subactividad    : data.subactividad.label,
                    area            : data.area.label,
                    area_id         : data.area.value,
                },
                add : true,
            };
            this.peticion(payload)
        },
        closeHora(data){
            let payload = { 
                payload : {
                    ...data,
                },
                close : true,
            };
            this.peticion(payload)
        },
        async peticion(payload){
            this.loading();

            let response = await this.peticionGeneral('getRegistroHV',payload);
            switch (payload.payload.accion) {
                case 9: 
                    this.activeRow.voluntario   = response.data.voluntario;
                    this.voluntario_id          = response.data.voluntario_id;
                    this.registros              = response.data.registros;
                break;
                default:
                    this.viewForm = false;
                    this.formView = false;
                    this.peticionGetVoluntario();
                break;
            }        
        }
    }
}
</script>
<style>
</style>
  