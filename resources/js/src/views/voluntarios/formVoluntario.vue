<template>
    <div>
        <component v-bind:is="withCard ? 'b-card' : 'div'"
            class="col-12 p-2"
        >
            <FormFactory
                ref="formVoluntario"
                class="col-12 mx-auto"
                :btnsAccion="false"
                :data = 'data'
                :schema="formSchemaFormVoluntario"
                @formExport="handleSubmitFormVoluntario"
            />
            <div class=" col-12 d-flex flex-wrap justify-content-between">
                <div>
                    <b-button
                        v-if="btnCancel"
                        size="sm"
                        variant="outline-danger"
                        @click="handleCancel"
                    >Cancelar</b-button>
                </div>
                <div>
                    <b-button
                    v-if="(typeof data.id != 'undefined' ) && btnRegistrarHoras"
                        size="sm"
                        variant="relief-secondary"
                        @click="() => { $emit('handleShowFormHoras') }"
                    >Registrar horas voluntarias</b-button>
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
                formSchemaFormVoluntario: [
                    {
                        classContainer:'col-4',
                        type        : 'input-text',
                        name        : 'numeroAsociado',
                        value       : 'numeroAsociado',
                        label       : 'Numero de asociado',
                        rules       : 'required',
                        disabled    : true,
                    },
                    {
                        classContainer:'col-8',
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
                        type        : 'input-phone',
                        name        : 'telefono',
                        value       : 'telefono',
                        label       : 'Telefono',
                        rules       : 'required',
                        placeholder: 'Introduce un telefono celular',
                    },
                ],
            }
        },
        props: {
            data: {
                type    : Object,
                default : {}
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

        },
        computed: {

        },
        created() {

        },
        beforeMount(){

        },
        methods:{
            handleCancel() {
                this.$emit('handleCancelar')
            },
            handleSubmitFormVoluntario(info) {
                if (this.exportActions) {
                    this.$emit('handleSubmit',info)
                } else {
                    let payload = {...info}
                    payload.accion = typeof this.voluntario.id == 'undefined' ? 1 : 2
                    if (typeof this.voluntario.id != 'undefined'){
                        payload.id = this.voluntario.id
                    }
                    this.peticionAdministrar(payload)
                }
            },
            onSubmitFormVoluntario(){
                this.$refs.formVoluntario.validationForm()
            },
            peticionAdministrar(payload){
                peticiones
                    .administrarVoluntarios({
                        'payload' : payload,
                    })
                    .then(response => {
                        this.messageSweet({
                            message: response.data.message,
                            icon: response.data.result ? 'success' : 'error',
                        });
                        if (response.data.result ) {
                            this.handleCancelForm()
                        }
                    })
                    .catch(error   => { console.log(error); })
            },
        }
    }
</script>
<style>
</style>
