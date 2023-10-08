
<template>
    <div>
        <component v-bind:is="withCard ? 'b-card' : 'div'" class="col-12 pp-3" >
            <div v-if="viewForm">
                <FormFactory
                    ref="formVoluntario"
                    class="wwfull mx-auto"
                    classForm="''"
                    :btnsAccion="false"
                    :data = 'dataForm'
                    :schema="formSchemaFormVoluntario"
                    @formExport="handleSubmitFormVoluntario"
                />
                <div class=" mt-2 col-12 d-flex flex-wrap justify-content-between">
                    <div >
                        <b-button
                            v-if="btnCancel"
                            size="sm"
                            variant="relief-secondary"
                            @click="() => { $emit('handleCancelar')}"
                        >Cancelar</b-button>
                    </div>
                    <div>
                        <b-button
                            size="sm"
                            variant="relief-primary"
                            @click="onSubmitFormVoluntario"
                        >Guardar</b-button>
                    </div>
                </div>
            </div>
            <h3 v-else class="wwfull text-center"> Cargando datos ...!!</h3>
        </component>
    </div>
</template>

<script>
    import FormFactory      from '@currentComponents/FormFactory.vue'
    import customHelpers    from '@helpers/customHelpers'
    import FileUpload       from '@currentComponents/FileUpload.vue'
    import Ripple from 'vue-ripple-directive'
    import Scann from '@currentComponents/ScannerCode.vue'
    import ModalForm from '@currentComponents/ModalForm.vue'

    import {
        BCard,
        VBModal,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BModal,
        BButton
    } from 'bootstrap-vue'
import { init } from 'echarts/lib/echarts'
    export default {
        name: "FormVoluntarioExtraInfo",
        mixins : [customHelpers],
        directives: {
            'b-modal': VBModal,
            Ripple,
        },
        components: {
            FileUpload,
            ModalForm,
            FormFactory,
            BCard,
            BCardTitle,
            BCardSubTitle,
            BCardBody,
            BModal,
            BButton,
            Scann
        },
        mounted() {},
        data() {
            return {
                userData    : JSON.parse(localStorage.getItem('userData')) ?? null,
                dataForm    : {},
                urlImagen   : null,
                viewForm    : false,
                showScann   : false,
                openScann   : false,
                openModalForm    : false,
                modalArchivos    : false,
                formSchemaFormVoluntario: [
                    {
                        classContainer:' col-12',
                        type        : 'titulo-seccion',
                        label       : 'Datos de salud',
                    },
                    {
                        classContainer:'col-lg-4  col-md-4 col-12',
                        type        : 'input-text',
                        name        : 'capacidadesDiferentes',
                        value       : 'capacidadesDiferentes',
                        label       : 'Capacidades diferentes',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-4  col-md-4 col-12',
                        type        : 'input-text',
                        name        : 'enfermedades',
                        value       : 'enfermedades',
                        label       : 'Enfermedades',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-4  col-md-4 col-12',
                        type        : 'input-text',
                        name        : 'alergias',
                        value       : 'alergias',
                        label       : 'Alergias',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:' col-12',
                        type        : 'titulo-seccion',
                        label       : 'Datos de contacto',
                    },
                    {
                        classContainer:'col-lg-6 col-md-6 col-12',
                        type        : 'input-text',
                        name        : 'direccion',
                        value       : 'direccion',
                        label       : 'Dirección:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-2 col-md-2 col-4',
                        type        : 'input-number',
                        digitos     : 5,
                        name        : 'noExt',
                        value       : 'noExt',
                        label       : 'No. Ext.:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-2 col-md-2 col-4',
                        type        : 'input-number',
                        digitos     : 5,
                        name        : 'noInt',
                        value       : 'noInt',
                        label       : 'No. Int.:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-2 col-md-2 col-4',
                        type        : 'input-number',
                        digitos     : 5,
                        name        : 'cp',
                        value       : 'cp',
                        label       : 'C.P.:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-3   col-md-4   col-12',
                        type        : 'input-select',
                        name        : 'estado',
                        value       : 'estado',
                        label       : 'Estado:',
                        catalogo    : 'estados',
                    },
                    {
                        classContainer:'col-lg-4 col-md-4 col-sm-6 col-12',
                        type        : 'input-text',
                        name        : 'ciudad',
                        value       : 'ciudad',
                        label       : 'Ciudad:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-4 col-md-4 col-sm-6 col-12',
                        type        : 'input-text',
                        name        : 'colonia',
                        value       : 'colonia',
                        label       : 'Colonia:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-4 col-md-4 col-12',
                        type        : 'input-phone',
                        name        : 'telTrab',
                        value       : 'telTrab',
                        label       : 'Tel. Trab.:',
                        // rules       : 'required',
                        placeholder: 'Introduce un telefono celular',
                    },
                    {
                        classContainer:'col-lg-4 col-md-4 col-12',
                        type        : 'input-phone',
                        name        : 'telPart',
                        value       : 'telPart',
                        label       : 'Tel. Part.:',
                        // rules       : 'required',
                        placeholder: 'Introduce un telefono celular',
                    },
                    {
                        classContainer:'col-lg-4 col-md-4 col-12',
                        type        : 'input-phone',
                        name        : 'cel',
                        value       : 'cel',
                        label       : 'Cel.:',
                        // rules       : 'required',
                        placeholder: 'Introduce un telefono celular',
                    },
                    {
                        classContainer:' col-12',
                        type        : 'titulo-seccion',
                        label       : 'Datos de profesionales',
                    },
                    {
                        classContainer:'col-lg-6  col-md-6 col-12',
                        type        : 'input-text',
                        name        : 'gradoEstudios',
                        value       : 'gradoEstudios',
                        label       : 'Grado de estudios:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-6  col-md-6 col-12',
                        type        : 'input-text',
                        name        : 'profesion',
                        value       : 'profesion',
                        label       : 'Profesión:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-6  col-md-6 col-12',
                        type        : 'input-text',
                        name        : 'ocupacionActual',
                        value       : 'ocupacionActual',
                        label       : 'Ocupación actual:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-6  col-md-6 col-12',
                        type        : 'input-text',
                        name        : 'empresaInstitucion',
                        value       : 'empresaInstitucion',
                        label       : 'Empresa o institución en donde laboras:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-4 col-md-4 col-12',
                        type        : 'input-text',
                        name        : 'idioma1',
                        value       : 'idioma1',
                        label       : 'Idioma extranjero #1:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-2 col-md-2 col-12',
                        type        : 'input-number',
                        digitos     : 3,
                        name        : 'nivelIdioma1',
                        value       : 'nivelIdioma1',
                        label       : 'Nivel %:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-4 col-md-4 col-12',
                        type        : 'input-text',
                        name        : 'idioma2',
                        value       : 'idioma2',
                        label       : 'Idioma extranjero #2:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-2 col-md-2 col-12',
                        type        : 'input-number',
                        digitos     : 3,
                        name        : 'nivelIdioma2',
                        value       : 'nivelIdioma2',
                        label       : 'Nivel %:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-3 col-md-3 col-6',
                        type        : 'input-text',
                        name        : 'pasaporte',
                        value       : 'pasaporte',
                        label       : 'Pasaporte:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-3 col-md-3 col-6',
                        type        : 'flat-pickr',
                        formato     : 'DD-MM-YYYY',
                        name        : 'pasaporteVence',
                        value       : 'pasaporteVence',
                        label       : 'Vence:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-3 col-md-3 col-6',
                        type        : 'input-text',
                        name        : 'visa',
                        value       : 'visa',
                        label       : 'Visa:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-3 col-md-3 col-6',
                        type        : 'flat-pickr',
                        formato     : 'DD-MM-YYYY',
                        name        : 'visaVence',
                        value       : 'visaVence',
                        label       : 'Vence:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-6 col-md-6 col-12',
                        type        : 'input-text',
                        name        : 'interesVoluntario',
                        value       : 'interesVoluntario',
                        label       : '¿Por qué te interesa ser voluntario en Cruz Roja?:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-4 col-md-6 col-12',
                        type        : 'input-text',
                        name        : 'recibirCR',
                        value       : 'recibirCR',
                        label       : 'Qué espera recibir de la Cruz Roja:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-xxl-4 col-lg-4 col-md-6 col-12',
                        type        : 'input-text',
                        name        : 'aportarCR',
                        value       : 'aportarCR',
                        label       : 'Qué crees poder aportar a la Cruz Roja:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-xxl-4 col-lg-4 col-md-6 col-12',
                        classSwitch : ' col-6 ',
                        type        : 'input-multiple',
                        name        : 'medios',
                        value       : 'medios',
                        stacked     : true,
                        label       : '¿Cómo te enteraste de Cruz Roja y su Voluntariado?:',
                        catalogo    : [
                            {label : 'Radio', value: 'Radio'},
                            {label : 'TV', value: 'TV'},
                            {label : 'Internet', value: 'Internet'},
                            {label : 'Colecta', value: 'Colecta'},
                            {label : 'Voluntarios', value: 'Viernes'},
                            {label : 'Otros', value: 'Otros'},
                        ],
                    },

                    {
                        classContainer:'col-xxl-4 col-lg-4 col-md-6 col-12',
                        type        : 'input-switch',
                        name        : 'miembroInstitucion',
                        value       : 'miembroInstitucion',
                        label       : '¿Alguna vez has sido voluntario de alguna institución?:',
                        labels      : {
                                        'on' : "Si",
                                        'off': "No"
                                    },
                    },
                    {
                        classContainer:'col-xxl-4 col-lg-4 col-md-6 col-12',
                        type        : 'input-text',
                        name        : 'cualInstitucion',
                        value       : 'cualInstitucion',
                        label       : 'Cuál?',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:' col-12',
                        type        : 'titulo-seccion',
                        label       : 'Contacto de emergencia',
                    },
                    {
                        classContainer:'col-lg-3  col-md-6 col-12',
                        type        : 'input-text',
                        name        : 'contactoNombre',
                        value       : 'contactoNombre',
                        label       : 'Nombre',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-lg-3  col-md-6 col-12',
                        type        : 'input-select',
                        name        : 'contactoParentesco',
                        value       : 'contactoParentesco',
                        label       : 'Parentesco',
                        catalogo    : 'parentesco',
                    },
                    {
                        classContainer:'col-lg-3  col-md-6 col-12',
                        type        : 'input-phone',
                        name        : 'contactoTelefono',
                        value       : 'contactoTelefono',
                        label       : 'Teléfono:',
                        // rules       : 'required',
                        placeholder: 'Introduce un teléfono celular',
                    },
                    {
                        classContainer:'col-lg-3  col-md-6 col-12',
                        type        : 'input-phone',
                        name        : 'contactoCelular',
                        value       : 'contactoCelular',
                        label       : 'Celular:',
                        placeholder : 'Introduce un celular',
                    },
                    {
                        classContainer:' col-12',
                        type        : 'titulo-seccion',
                        label       : 'Disponibilidad',
                    },
                    {
                        classContainer:'col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6',
                        type        : 'input-timer',
                        name        : 'disponibilidadHorarioInicio',
                        value       : 'disponibilidadHorarioInicio',
                        label       : 'Horario de:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6',
                        type        : 'input-timer',
                        name        : 'disponibilidadHorarioFin',
                        value       : 'disponibilidadHorarioFin',
                        label       : 'a:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:'col-xl-2  col-lg-3 col-md-3 col-sm-4 col-12  ',
                        type        : 'input-multiple',
                        name        : 'disponibilidadTurnos',
                        value       : 'disponibilidadTurnos',
                        stacked     : true,
                        label       : 'Turnos',  
                        catalogo    : [
                            {label : 'Matutino', value: 'Matutino'},
                            {label : 'Vespertino', value: 'Vespertino'},
                            {label : 'Nocturno', value: 'Nocturno'},
                            {label : 'Discontinuo', value: 'Discontinuo'},
                        ],
                    },
                    {
                        classContainer:'col-xl-3 col-lg-3 col-md-6 col-sm-8 col-12 ',
                        classSwitch : ' col-6 ',
                        type        : 'input-multiple',
                        name        : 'disponibilidadDias',
                        value       : 'disponibilidadDias',
                        stacked     : true,
                        label       : 'Dias',
                        catalogo    : [
                            {label : 'Lunes', value: 'Lunes'},
                            {label : 'Martes', value: 'Martes'},
                            {label : 'Miercoles', value: 'Miercoles'},
                            {label : 'Jueves', value: 'Jueves'},
                            {label : 'Viernes', value: 'Viernes'},
                            {label : 'Sabado', value: 'Sabado'},
                            {label : 'Domingo', value: 'Domingo'},
                        ],
                    },
                ],
            }
        },
        props: {
            data: {
                type    : Object,
                default : {}
            },
            isRegistro: {
                type    : Boolean,
                default : false
            },
            withCard:{
                type    : Boolean,
                default : false,
            },
            btnRegistrarHoras:{
                type    : Boolean,
                default : false,
            },
            exportActions:{
                type    : Boolean,
                default : false,
            },
            btnCancel:{
                type    : Boolean,
                default : false,
            },
        },
        watch: {
            data: {
                handler() { this.init(); },
                deep: true, // Opcional: indica si se debe realizar una observación profunda (deep watch)
                immediate: true // Opcional: indica si se debe ejecutar el watcher inmediatamente después de su definición
            }
        },
        computed: {

        },
        created() {

        },
        beforeMount(){
            this.init()
        },
        mounted(){},
        methods:{
            async init(){
                let payload = {
                    accion : 7,
                    query :true,
                    voluntario_id : this.data.id,
                };
                const response = await this.peticionGeneral('administrarVoluntarios',{payload},false,true);
                let tmp = [];
                this.dataForm = [];
                if (response.data != null ){
                    let tmp = {...response.data};
                     tmp.estado = tmp.estado ? {label:tmp.estado.nombre, value: tmp.estado_id} : null;
                     tmp.disponibilidadDias     = JSON.parse(tmp.disponibilidadDias)
                     tmp.disponibilidadTurnos   = JSON.parse(tmp.disponibilidadTurnos)
                     tmp.medios                 = JSON.parse(tmp.medios)
                     tmp.miembroInstitucion = tmp.miembroInstitucion == 1 ? true : false;
                     this.dataForm = {...tmp}
                }
                 this.viewForm = true;
            },
            handleCancel() {
                this.$emit('handleCancelar')
            },
            handleSubmitFormVoluntario(info) {
                console.log(info);
                let payload = {
                    // ...this.data,
                    ...info
                }
                payload.accion                  = 7
                payload.update = true;
                payload.voluntario_id           = this.data.id;
                payload.estado_id               = payload.estado?.value ?? null 
                payload.contactoParentesco_id   = payload?.contactoParentesco?.value ?? null 
                payload.disponibilidadTurnos    = JSON.stringify(payload.disponibilidadTurnos)
                payload.disponibilidadDias      = JSON.stringify(payload.disponibilidadDias)
                payload.medios                  = JSON.stringify(payload.medios)
                delete(payload.contactoParentesco);
                delete(payload.estado);
                this.peticionAdministrar({payload})
            },
            onSubmitFormVoluntario(){
                this.$refs.formVoluntario.validationForm()
            },
            async peticionAdministrar(payload){
                this.loading();
                const response = await this.peticionGeneral('administrarVoluntarios',payload,true,false);
            },
        }
    }
</script>
<style>
</style>
