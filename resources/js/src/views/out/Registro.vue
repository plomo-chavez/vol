<template>
    <div class="p-4">
        <BCard v-if="showFormCURP" class="col-12 col-md-6 mx-auto p-1" >
            <FormFactory
                ref="formCURP"
                class="col-12 mx-auto"
                :btnsAccion="false"
                :data = '{}'
                :schema="formSchemaCURP"
                @formExport="handleSubmitFormCURP"
            />
            <div class=" col-12 d-flex flex-wrap justify-content-between">
                <div>
                    <b-button
                        size="sm"
                        variant="outline-danger"
                        @click="handleCancelFormCURP"
                    >Cancelar</b-button>
                </div>
                <div>
                    <b-button
                        size="sm"
                        variant="relief-primary"
                        @click="onSubmitFormCURP"
                    >Buscar</b-button>
                </div>
            </div>
        </BCard>
        <div v-else>
            <BCard v-if="!showMensaje" class="col-12 col-md-6 mx-auto p-1" >
                <FormFactory
                    v-if="showFormVoluntario"
                    ref="formVoluntario"
                    class="col-12 mx-auto"
                    :btnsAccion="false"
                    :data = 'dataForm'
                    formLive
                    @exportLive="formCopy"
                    :schema="formSchemaVoluntario"
                    @formExport="handleSubmitFormVoluntario"
                />
                <div class=" col-12 d-flex flex-wrap justify-content-between">
                    <div>
                        <b-button
                            size="sm"
                            variant="outline-danger"
                            @click="handleCancel"
                        >Cancelar</b-button>
                    </div>
                    <div>
                        <b-button
                            size="sm"
                            variant="relief-primary"
                            @click="onSubmitFormCURP"
                        >Buscar</b-button>
                    </div>
                </div>
            </BCard>

            <BCard v-else class="col-12 col-md-6 mx-auto p-1" >
                <h2 class="col-12 text-center fw-weight-bold">La CURP introducida ya esta registrada !!...</h2>
                <h6 class="col-12 text-center fw-weight-bold">Si es un error coménteselo a tu coordinador de Voluntariado</h6>
                <div class=" col-12 d-flex flex-wrap justify-content-between">
                    <div>
                        <b-button
                            size="sm"
                            variant="outline-danger"
                            @click="handleCancel"
                        >Cancelar</b-button>
                    </div>
                    <div></div>
                </div>
            </BCard>
        </div>
    </div>
</template>

<script>
import FormFactory from '@currentComponents/FormFactory.vue'
import peticiones from '@/apis/usePeticiones'
import customHelpers  from '@helpers/customHelpers'
import formVoluntario  from '@/views/voluntarios/formVoluntario.vue'

import {
    BCard,
    BCardTitle,
    BCardSubTitle,
    BCardBody,
    BModal,
    BButton
} from 'bootstrap-vue'

export default {
    name: "OutRegistro",
    mixins : [customHelpers],
    components: {
        formVoluntario,
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
            showFormVoluntario:true,
            showFormCURP:true,
            showMensaje:false,
            formSchemaCURP:[
                {
                    classContainer:'col-12',
                    type        : 'input-text',
                    name        : 'curp',
                    value       : 'curp',
                    label       : 'CURP:',
                    rules       : 'required',
                },
            ],
            formSchemaVoluntario: [
                    {
                        classContainer:'col-12',
                        type        : 'input-text',
                        name        : 'curp',
                        value       : 'curp',
                        label       : 'CURP:',
                        disabled    : true,

                    },
                    {
                        classContainer:'col-12',
                        type        : 'input-text',
                        name        : 'nombre',
                        value       : 'nombre',
                        label       : 'Nombre',
                        rules       : 'required',
                    },
                    {
                        classContainer:'col-12',
                        type        : 'input-text',
                        name        : 'primerApellido',
                        value       : 'primerApellido',
                        label       : 'Primer apellido:',
                        rules       : 'required',
                    },
                    {
                        classContainer:'col-12',
                        type        : 'input-text',
                        name        : 'segundoApellido',
                        value       : 'segundoApellido',
                        label       : 'Segundo apellido:',
                        rules       : 'required',
                    },
                    {
                        classContainer:'col-12',
                        type        : 'email',
                        name        : 'correo',
                        value       : 'correo',
                        prefixIcon  : 'MailIcon',
                        rules       : 'required|email',
                        label       : 'Correo electronico',
                        placeholder : 'Introduce un correo electronico',
                    },
                    {
                        classContainer:'col-12',
                        type        : 'input-phone',
                        name        : 'telefono',
                        value       : 'telefono',
                        label       : 'Telefono',
                        rules       : 'required',
                        placeholder: 'Introduce un telefono celular',
                    },
                    {
                        classContainer:' col-12 ',
                        type        : 'input-select',
                        name        : 'estado',
                        value       : 'estado',
                        catalogo    : 'estados',
                        label       : 'Estado:'
                    },
                    {
                        classContainer:' col-12 ',
                        type        : 'input-select',
                        name        : 'delegacion',
                        value       : 'delegacion',
                        label       : 'Delegación'
                    },
                    {
                        classContainer:' col-12 ',
                        type        : 'input-select',
                        name        : 'area',
                        value       : 'area',
                        label       : 'Area:'
                    },
                    {
                        classContainer:' col-12 ',
                        type        : 'input-select',
                        name        : 'tipoAsociado',
                        value       : 'tipoAsociado',
                        catalogo    : 'tiposAsociado',
                        label       : 'Tipo de asociado:'
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
    created() {

    },
    beforeMount(){

    },
    methods:{
        formCopy(dataForm){
            if (dataForm.estado != (this.dataForm?.estado ?? null)) {
                this.showFormVoluntario = false;
                this.dataForm = this.copyObject(dataForm)
                if (!(dataForm.estado === null)) {
                    this.formSchemaVoluntario[7].catalogo = [
                        {value:'uno',label:'Uno'},
                        {value:'dos',label:'Dos'},
                        {value:'tres',label:'Tres'}
                    ]
                    setTimeout(() => { this.showFormVoluntario = true }, 5);
                } else {
                    this.dataForm.delegacion = null;
                    this.formSchemaVoluntario[7].catalogo = [];
                    setTimeout(() => { this.showFormVoluntario = true }, 5);
                }
            }
        },
        handleCancel() {
            this.showFormCURP = true;
            this.showMensaje = false;
            this.dataForm = {}
        },
        onSubmitFormCURP(){ this.$refs.formCURP.validationForm() },
        handleCancelFormCURP() { this.$refs.formCURP.resetForm() },
        handleSubmitFormCURP(info) {
            if (this.esCurpValido(info.curp)){
                this.loading()
                let filtro = {'curp':info.curp}
                peticiones
                    .validCurp({ 'payload' : filtro,})
                    .then(response => {
                        this.loading(false)
                        console.log(response)
                        this.showFormCURP = false
                        if (response.data.data) {
                            this.dataForm = this.copyObject(info)
                        } else {
                            this.showMensaje = true;
                        }
                        // let tmp = this.copyObject(response.data.data)
                        // this.voluntario =  this.copyObject(typeof tmp[0] != 'undefined' ?  tmp[0] : filtro)
                    })
                    .catch(error   => {
                        console.log(error);
                    })
            } else {
                this.messageSweet({
                    message: 'La curp introducida es incorrecta.',
                    icon: 'error',
                });
            }
        },
        handleSubmitFormVoluntario(info){
            let tmp =  this.copyObject(info)
            console.log(tmp);
        },

    }
}
</script>
<style>
</style>
