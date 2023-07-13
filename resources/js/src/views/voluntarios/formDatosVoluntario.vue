<template>
    <div>
        <component v-bind:is="withCard ? 'b-card' : 'div'"
            class="col-12 p-2"
        >
            <FormFactory
                v-if="viewForm"
                ref="formVoluntario"
                class="col-12 mx-auto"
                :btnsAccion="false"
                :formLive="true"
                :data = 'dataForm'
                :schema="formSchemaFormVoluntario"
                @exportLive="changeForm"
                @formExport="handleSubmitFormVoluntario"
            />
            <div class=" col-12 d-flex flex-wrap justify-content-between">
                <div>
                    <b-button
                    v-if="!isRegistro"
                        size="sm"
                        variant="relief-primary"
                        @click="onSubmitFormVoluntario"
                    >Generar ficha de registro</b-button>
                </div>
                <div>
                    <b-button
                        size="sm"
                        variant="relief-primary"
                        @click="onSubmitFormVoluntario"
                    >Guardar</b-button>
                </div>
            </div>

        </component>
    </div>
</template>

<script>
    import { StreamBarcodeReader } from "vue-barcode-reader";
    import FormFactory from '@currentComponents/FormFactory.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'

    import {
        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BModal,
        BButton
    } from 'bootstrap-vue'

    import store from '@/store'
    export default {
        name: "FormVoluntario",
        mixins : [customHelpers],
        components: {
            StreamBarcodeReader,
            FormFactory,
            BCard,
            BCardTitle,
            BCardSubTitle,
            BCardBody,
            BModal,
            BButton
        },
        mounted() {},
        data() {
            return {
                userData: JSON.parse(localStorage.getItem('userData')),
                dataForm:{},
                viewForm: true,
                formSchemaFormVoluntario: [
                    {
                        classContainer:'col-lg-3  col-md-4 col-12',
                        type        : 'input-asociado',
                        name        : 'numeroAsociado',
                        value       : 'numeroAsociado',
                        label       : 'Numero de asociado',
                        placeholder : 'Introduce un numero de asociado',
                        disabled    : true,
                    },
                    {
                        classContainer:'col-lg-3  col-md-4 col-12',
                        type        : 'input-text',
                        name        : 'numeroInterno',
                        value       : 'numeroInterno',
                        label       : 'Numero Interno',
                        placeholder : 'Introduce un numero de interno',
                        disabled    : true,
                    },
                    {
                        classContainer:'col-lg-6 col-4',
                        type        : 'input-blank',
                    },
                    {
                        classContainer:'col-12 col-md-4',
                        type        : 'input-text',
                        name        : 'nombre',
                        value       : 'nombre',
                        label       : 'Nombre',
                        rules       : 'required',
                    },
                    {
                        classContainer:'col-12 col-md-4',
                        type        : 'input-text',
                        name        : 'primerApellido',
                        value       : 'primerApellido',
                        label       : 'Primer apellido:',
                        rules       : 'required',
                    },
                    {
                        classContainer:'col-12 col-md-4',
                        type        : 'input-text',
                        name        : 'segundoApellido',
                        value       : 'segundoApellido',
                        label       : 'Segundo apellido:',
                        rules       : 'required',
                    },
                    {
                        classContainer:'col-lg-6 col-md-6 col-12',
                        type        : 'email',
                        name        : 'correo',
                        value       : 'correo',
                        prefixIcon  : 'MailIcon',
                        rules       : 'required|email',
                        label       : 'Correo electronico',
                        placeholder : 'Introduce un correo electronico',
                    },
                    {
                        classContainer:'col-lg-6 col-md-6 col-12',
                        type        : 'input-text',
                        name        : 'curp',
                        value       : 'curp',
                        label       : 'CURP',
                        rules       : 'required',
                    },
                    {
                        classContainer:' ww-180 ',
                        type        : 'flat-pickr',
                        value       : 'fechaNacimiento',
                        label       : 'Fecha de nacimiento',
                        name        : 'fecha de nacimiento',
                        rules       : 'required',
                    },
                    {
                        classContainer:' ww-150 ',
                        classElement: 'text-right',
                        type        : 'input-text',
                        name        : 'edad',
                        value       : 'edad',
                        label       : 'Edad:',
                        sufijoText  : ' años',
                        disabled    : true,
                    },
                    {
                        classContainer:'col-lg-6   col-md-6   col-12',
                        type        : 'input-text',
                        name        : 'lugar de nacimiento',
                        value       : 'lugarNacimiento',
                        label       : 'Lugar de nacimiento:',
                    },
                    {
                        classContainer:'col-lg-3   col-md-4   col-12',
                        type        : 'input-select',
                        name        : 'nacionalidad',
                        value       : 'nacionalidad',
                        label       : 'Nacionalidad:',
                        catalogo    : 'nacionalidad',
                    },
                    {
                        classContainer:'col-lg-3   col-md-4   col-12',
                        type        : 'input-select',
                        name        : 'sexo',
                        value       : 'sexo',
                        label       : 'Sexo',
                        catalogo    : 'sexo',
                    },
                    {
                        classContainer:'col-lg-3   col-md-4   col-12',
                        type        : 'input-select',
                        name        : 'estado civil',
                        value       : 'estadoCivil',
                        label       : 'Estado civil',
                        catalogo    : 'estadoCivil',
                    },
                    {
                        classContainer:'col-lg-4   col-md-6   col-12',
                        type        : 'input-select',
                        name        : 'tipo de sangre',
                        value       : 'tipoSangre',
                        label       : 'Tipo de sangre:',
                        catalogo    : 'tiposSangre',
                    },
                    {
                        classContainer:'col-lg-4   col-md-6   col-12',
                        type        : 'input-text',
                        name        : 'capacidades diferentes',
                        value       : 'capacidadesDiferentes',
                        label       : 'Capacidades diferentes:',
                    },
                    {
                        classContainer:'col-lg-4   col-md-6   col-12',
                        type        : 'input-text',
                        name        : 'enfermedades',
                        value       : 'enfermedades',
                        label       : 'Enfermedades:',
                    },
                    {
                        classContainer:'col-lg-4   col-md-6   col-12',
                        type        : 'input-text',
                        name        : 'alergias',
                        value       : 'alergias',
                        label       : 'Alergias:',
                    },
                    {
                        classContainer:' col-12',
                        type        : 'titulo-seccion',
                        label       : 'Sección de voluntariado',
                    },
                    {
                        classContainer:'col-lg-3 col-md-6 col-12',
                        type        : 'flat-pickr',
                        value       : 'fechaIngresoCR',
                        label       : 'Fecha de ingreso a CR',
                        name        : 'fecha de ingreso a CR',
                        rules       : 'required',
                    },
                    {
                        classContainer:'col-lg-3 col-md-6 col-12',
                        type        : 'flat-pickr',
                        value       : 'fechaIngresoArea',
                        label       : 'Fecha de ingreso al area',
                        name        : 'fecha de ingreso al area',
                        rules       : 'required',
                    },
                    {
                        classContainer:'col-lg-3   col-md-6   col-12',
                        type        : 'input-select',
                        name        : 'delegación',
                        value       : 'delegacion',
                        label       : 'Delegación',
                        catalogo    : 'DelegacionesXTipoCoordinador',
                        rules       : 'required',
                    },
                    {
                        classContainer:'col-lg-3   col-md-6   col-12',
                        type        : 'input-select',
                        name        : 'area',
                        value       : 'area',
                        label       : 'Area:',
                        rules       : 'required',
                        catalogo    : [],
                        disabled    : true,
                    },
                    {
                        classContainer:'col-12',
                        type        : 'text-area',
                        name        : 'comentarios',
                        value       : 'comentarios',
                        label       : 'Comentarios:',
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
                default : true,
            },
        },
        watch: {
            data: {
                handler(nuevoValor, antiguoValor) {
                    this.init()
                },
                deep: true, // Opcional: indica si se debe realizar una observación profunda (deep watch)
                immediate: true // Opcional: indica si se debe ejecutar el watcher inmediatamente después de su definición
            }
        },
        computed: {

        },
        created() {

        },
        beforeMount(){
        },
        methods:{
            init(){
                this.dataForm = this.copyObject(this.data)
                if(this.dataForm.delegacion != null){
                    this.formSchemaFormVoluntario[22].disabled = false;
                    if(this.dataForm.delegacion.areas != null){
                        this.formSchemaFormVoluntario[22].catalogo = this.formatoToCatalogo(this.dataForm.delegacion.areas);
                    }
                }       
                this.dataForm.edad = this.dataForm.edad > 0 ? this.dataForm.edad : 0 

            },
            handleCancel() {
                this.$emit('handleCancelar')
            },
            handleSubmitFormVoluntario(info) {
                let payload = {...info}
                payload.accion = typeof this.data.id == 'undefined' ? 1 : 2
                if (typeof this.data.id != 'undefined'){
                    payload.id = this.data.id
                }
                payload.nacionalidad    = payload.nacionalidad?.value ?? null 
                payload.sexo            = payload.sexo?.value ?? null
                payload.tipoSangre      = payload.tipoSangre?.value ?? null
                payload.estadoCivil     = payload.estadoCivil?.value ?? null
                payload.delegacion_id   = payload.delegacion?.value ?? null
                payload.area_id         = payload.area?.value ?? null
                payload.userID          = this.userData?.id ?? null
                this.peticionAdministrar(payload)
            },
            onSubmitFormVoluntario(){
                this.$refs.formVoluntario.validationForm()
            },
            changeForm(data){
                let hayModificaciones = false;
                let tmpDelegacion = (data.delegacion?.value ?? null) ;
                if(tmpDelegacion != (this.dataForm.delegacion?.value ?? null)){
                    if (tmpDelegacion != null) {
                        this.formSchemaFormVoluntario[22].disabled = false;
                        this.formSchemaFormVoluntario[22].catalogo = this.formatoToCatalogo(data['delegacion'].areas);
                        hayModificaciones = true;
                    } else {
                        this.formSchemaFormVoluntario[22].disabled = true;
                        this.formSchemaFormVoluntario[22].catalogo = [];
                        hayModificaciones = true;
                    }
                }
                if((data?.fechaNacimiento ?? null) != (this.dataForm?.fechaNacimiento ?? null)){
                    var fechaActual = new Date();
                    var fecha = new Date(data.fechaNacimiento);
                    var diferenciaMilisegundos = fechaActual - fecha;
                    var aniosDiferencia = diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365.25);
                    let diferencia = Math.floor(aniosDiferencia)
                    data.edad =  diferencia < 0 ? 0 : Math.floor(aniosDiferencia);
                    hayModificaciones = true;
                }
                if (hayModificaciones) {
                    this.dataForm = this.copyObject(data)
                    // this.viewForm = false;
                    // setTimeout(() => { this.viewForm = true; }, 1);
                }
            },
            peticionAdministrar(payload){
                console.log(payload)
                this.loading();
                if (this.isRegistro) {
                    payload['codeEmail'] = null;
                    peticiones
                    .adminVoluntarioOut({ 'payload' : payload, })
                    .then(response => {
                        this.loading(false);
                        this.messageSweet({
                            message: response.data.message,
                            icon: response.data.result ? 'success' : 'error',
                        });
                    })
                    .catch(error   => { 
                        this.loading(false);
                        console.log(error); 
                    })
                } else {
                    peticiones
                    .administrarVoluntarios({ 'payload' : payload, })
                    .then(response => {
                        this.loading(false);
                        this.messageSweet({
                            message: response.data.message,
                            icon: response.data.result ? 'success' : 'error',
                        });
                    })
                    .catch(error   => { 
                        this.loading(false);
                        console.log(error); 
                    })
                }
            },
        }
    }
</script>
<style>
</style>
