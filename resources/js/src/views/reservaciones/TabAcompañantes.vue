<template>
    <div class="col-12 m-0 p-0">
        <div class="col-12 d-flex flex-wrap justify-content-between pb-1 mb-2" style="border-bottom: 1px solid gray;">
            <h3 class="my-auto">Acompañantes:</h3>
            <div>
                <b-button
                    size="sm"
                    class="my-auto fw-bolder"
                    variant="primary"
                    @click="handleAgregar"
                    >
                    <feather-icon icon="PlusIcon" size="16" />
                    <span>Agregar</span>
                </b-button>
            </div>
        </div>
        <h3 v-if="formularios.length == 0" class="col-12 text-center font-weight-bolder">No hay acompañantes registrados.</h3>
        <div
        :ref="'divForm'"
            :key="'Form#'+index"
            class="mb-2"
            v-for="(formulario,index) in formularios"
        >
            <div class="col-12 d-flex justify-content-between">
                <p class="">Acompañante # {{ index + 1 }}:</p>
                <feather-icon size="18" :icon="`XIcon`" class="cursor-pointer text-danger font-weight-bolder mmb-4" @click="handleEliminar(index)"/>
            </div>
            <FormFactory
                :ref="'formAcom'"
                classForm=" col-12 p-0 m-0 "
                :btnsAccion="false"
                :schema="formSchema"
                @formExport="(data) => {handleSubmit(data,index)}"
            />
        </div>
    </div>
</template>
<script>
    import customHelpers  from '@helpers/customHelpers'
    import FormFactory from '@currentComponents/FormFactory.vue'
    import {
    BButton,
    BModal,
    BCardText,
    BFormInput,
    BRow,
    BCol,
    BFormGroup,
    } from 'bootstrap-vue'

    export default {
        components: {
            FormFactory,
            BButton,
            BModal,
            BCardText,
            BFormInput,
            BRow,
            BCol,
            BFormGroup,
        },
        mixins : [customHelpers],
        data() {
            return {
                formularios:[],
                acompaniantes:[],
                formSchema: [
                    {
                        classContainer:' col-md-4 col-lg-4 col-12 ',
                        type        : 'input-text',
                        name        : 'nombre',
                        value       : 'nombre',
                        label       : 'Nombre',
                        placeholder : 'Introduce un nombre',
                        rules       : 'required',
                    },
                    {
                        classContainer:' col-md-4 col-lg-4 col-12 ',
                        type        : 'input-text',
                        name        : 'primerApellido',
                        value       : 'primerApellido',
                        label       : 'Primer apellido',
                        rules       : 'required',
                    },
                    {
                        classContainer:' col-md-4 col-lg-4 col-12 ',
                        type        : 'input-text',
                        name        : 'segundoApellido',
                        value       : 'segundoApellido',
                        label       : 'Segundo apellido',
                    },
                    {
                        classContainer:'col-2',
                        type        : 'input-number',
                        name        : 'edad',
                        value       : 'edad',
                        label       : 'Edad',
                        placeholder : 'Introduce una edad',
                        rules       : 'required',
                        prefix      : '',
                    },
                    {
                        classContainer:'col-lg-5 col-md-5 col-12',
                        type        : 'input-phone',
                        name        : 'telefono',
                        value       : 'telefono',
                        label       : 'Telefono',
                        rules       : 'required',
                        placeholder: 'Introduce un telefono celular',
                    },
                    {
                        classContainer:'col-lg-5 col-md-5 col-12',
                        type        : 'email',
                        name        : 'correo',
                        value       : 'correo',
                        prefixIcon  : 'MailIcon',
                        rules       : 'required|email',
                        label       : 'Correo electronico',
                        placeholder : 'Introduce un correo electronico',
                    },
                ],
            }
        },
        mounted(){
            console.log(this.$refs)
        },
        methods: {
            changePerson(){
                this.person = null
            },
            handleSubmit(data,index){
                this.acompaniantes[index] = this.copyObject(data)
            },
            handleEliminar(){
                console.log(this.$refs)
            },
            async getAcompaniantes(index) {
                if (typeof this.$refs.formAcom != 'undefined') {
                    this.$refs.formAcom.map((item, index) => {
                        item.validationForm()
                    })
                    return new Promise((resolve) => { // crea una nueva promesa
                    setTimeout(() => {
                        console.log('TabAcompaniantes - this.acompaniantes -> ', this.acompaniantes)
                        console.log('TabAcompaniantes - this.acompaniantes.length -> ', this.acompaniantes.length)
                        console.log('TabAcompaniantes - this.formularios.length -> ', this.formularios.length)
                        console.log('TabAcompaniantes - this.acompaniantes.length == this.formularios.length -> ', this.acompaniantes.length == this.formularios.length)
                        resolve(this.acompaniantes.length == this.formularios.length ? this.acompaniantes : false); // resuelve la promesa con el resultado
                    }, 50);
                    });
                } else {
                    return false;
                }
            },
            handleAgregar(index){
                this.formularios.push({})
            },
        },
    }
</script>

