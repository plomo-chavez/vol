
<template>
    <div>
        <component v-bind:is="withCard ? 'b-card' : 'div'"
            class="col-12 p-2"
        >
            <div class=" col-12 d-flex flex-wrap justify-content-between">
                <ModalForm
                    :openModal="openModalForm"
                    :data ="{}"
                    :formSchema="[
                        {
                            classContainer:'col-12',
                            type        : 'input-select',
                            name        : 'duracion',
                            value       : 'duracion',
                            rules       : 'required',
                            label       : 'Duración de la credencial',
                            catalogo    : [
                                {value : 10, label:'10 Días'},
                                {value : 20, label:'20 Días'},
                                {value : 30, label:'30 Días'},
                                {value : 40, label:'40 Días'},
                                {value : 50, label:'50 Días'},
                                {value : 60, label:'60 Días'}
                            ],
                        }
                    ]"
                    @handleSubmit="changeDuracion"
                    @handleCancelar="() => { openModalForm = false }"
                />
                <div>
                    <b-button
                    v-if="!isRegistro"
                        size="sm"
                        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                        v-b-modal.modalArchivos
                        variant="relief-primary"
                    >Foto del voluntario</b-button>
                        <!-- @click="handleExportFichaRegistro" -->
                        <b-button
                    v-if="!isRegistro"
                        size="sm"
                        variant="relief-secondary"
                        @click="handleExportFichaRegistro"
                    >Generar ficha de registro</b-button>
                    <b-button
                    v-if="!isRegistro"
                        size="sm"
                        variant="relief-secondary"
                        @click="() => { openModalForm  = true }"
                    >Generar Credencial Temporal</b-button>
                    <b-button
                    v-if="!isRegistro"
                        size="sm"
                        variant="relief-secondary"
                        @click="handleAddCodigoCredencialNacional"
                    >Vincular credencial nacional</b-button>
                </div>
                <div>
                </div>
            </div>
            <FormFactory
                v-if="viewForm"
                ref="formVoluntario"
                class="col-12 mx-auto"
                :btnsAccion="false"
                :data = 'dataForm'
                :schema="formSchemaFormVoluntario"
                :formLive="true"
                @exportLive="changeForm"
                @formExport="handleSubmitFormVoluntario"
            />
            <div class=" col-12 d-flex flex-wrap justify-content-between">
                <div v-if="btnCancel">
                    <b-button
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
            <!-- Escaner -->

            <Scann 
                v-if="showScann"
                :openScann="openScann"
                :isModal="true"
                @changeOpenModal="()=>{ openScann = false }"
                @changeText="handleChangeCodigo"
            />
            <!-- Modal de administrador de archivos de los coordinadores -->
            <b-modal
                id="modalArchivos"
                v-model="modalArchivos"

                content-class="shadow"
                title="Selector de la foto del voluntario"
                no-fade
                ok-only
                ok-title="Cerrar"
            >
                <div class="d-flex flex-wrap">
                    <div class="col-12">
                        <FileUpload 
                            btnSave
                            :tipoArchivo="'jpg,jpeg,png'"
                            :url="urlImagen"
                            @saveFile="(event) => { guardarArchivo(event,'fotoVoluntario')}"
                        />
                    </div>
                </div>
            </b-modal>
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
    export default {
        name: "FormVoluntario",
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
                viewForm    : true,
                showScann   : false,
                openScann   : false,
                openModalForm    : false,
                modalArchivos    : false,
                formSchemaFormVoluntario: [
                    {
                        classContainer:'col-lg-3  col-md-4 col-12',
                        type        : 'input-asociado',
                        name        : 'numeroAsociado',
                        value       : 'numeroAsociado',
                        label       : 'Numero de asociado',
                        placeholder : 'Introduce un numero de asociado',
                        disabled    :  (JSON.parse(localStorage.getItem('userData'))?.tipoUsuario_id ?? 1) > 2,
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
                        label       : 'Correo electrónico',
                        placeholder : 'Introduce un correo electrónico',
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
                        formato     : 'DD-MM-YYYY',
                        // min         : this.ajustarFecha('-',120),
                        // max         : this.ajustarFecha(),
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
                        filtros     : { tipoUsuario_id: (JSON.parse(localStorage.getItem('userData')) ?? null)?.tipoUsuario_id ?? 0 }
                    },
                    {
                        classContainer:'col-lg-3   col-md-6   col-12',
                        type        : 'input-select',
                        name        : 'area',
                        value       : 'area',
                        label       : 'Area:',
                        rules       : 'required',
                        catalogo    : 'areas',
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
                default : false,
            },
        },
        watch: {
            // openModalForm(val) {
            //     if (val) {
            //         setTimeout(() => {
            //             this.openModalForm = false;
            //         }, 2);
            //     }
            // },
            data: {
                handler(nuevoValor, antiguoValor) { this.init(); },
                deep: true, // Opcional: indica si se debe realizar una observación profunda (deep watch)
                immediate: true // Opcional: indica si se debe ejecutar el watcher inmediatamente después de su definición
            }
        },
        computed: {

        },
        created() {

        },
        beforeMount(){
            if (this.isRegistro) {
                this.formSchemaFormVoluntario.splice(-3);
            }
            this.urlImagen = this.data != null ? (this.data?.urlImagen ?? null) : null;
        },
        mounted(){
        },
        methods:{
            handleAddCodigoCredencialNacional(){
                this.showScann = true;
                setTimeout(() => { this.openScann = true; }, 2);
            },
            handleChangeCodigo(codigo){
                this.openScann = false;
                setTimeout(() => { this.showScann = false; }, 2);
                let payload = {
                    codigo,
                    accion:6,
                    id : this.data.id,
                }
                this.peticionAdministrar({payload})
            },
            init(){
                this.dataForm = this.copyObject(this.data)     
                this.dataForm.edad = this.dataForm.edad > 0 ? this.dataForm.edad : 0 
            },
            async guardarArchivo(data,fileName){
                const formData = new FormData();
                formData.append('filee',data.url);
                formData.append('file', data.file, data.name);
                formData.append('voluntario_id', this.data.id,);
                formData.append('fileName', fileName,);
                let response =  await this.peticionUpload('apiAdminnistrarArchivosVoluntarios',formData)
                this.urlImagen = response.data.url;
                this.messageSweet({message:response.message})
                this.modalArchivos = !this.modalArchivos;
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
                this.peticionAdministrar({payload})
            },
            onSubmitFormVoluntario(){
                this.$refs.formVoluntario.validationForm()
            },
            changeForm(data){
                let hayModificaciones = false;
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
                    this.dataForm = this.copyObject(data);
                }
            },
            async peticionAdministrar(payload){
                this.loading();
                if (this.isRegistro) {
                    payload['payload']['codeEmail'] = null;
                    await this.peticionGeneral('adminVoluntarioOut',payload,true,false);
                } else {
                    await this.peticionGeneral('administrarVoluntarios',payload,true,false);
                }
            },
            async handleExportFichaRegistro(){
                let payload = {
                    voluntario_id : this.data.id,
                    documento:'fichaRegistro',
                };
                let response =  await this.peticionPDF('generatePDFVoluntarios',payload)
                this.descargarPDF(response,this.data.id,'fichaRegistro',false)
            },
            
            changeDuracion(data){
                this.handreCreateCredencialTemporal(data.duracion.value)
            },
            async handreCreateCredencialTemporal(data){
                let payload = {
                    voluntario_id   : this.data.id,
                    duracion        : data,
                    emitio_id       : JSON.parse(localStorage.getItem('userData')).voluntario_id,
                    documento       :'credencialTemporal',
                };
                let response =  await this.peticionPDF('generatePDFVoluntarios',payload)
                this.descargarPDF(response,this.data.id,'fichaRegistro')
            },
        }
    }
</script>
<style>
</style>
