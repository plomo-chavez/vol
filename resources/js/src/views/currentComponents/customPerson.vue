<template>

    <div>
        <div v-if="!viewForm" >

            <div v-if="person == null" class=" col d-flex align-items-end flex-wrap">
                <customSelect
                    class="ww-50A"
                    :input="{...config, label : label}"
                    @changeData="changeValue"
                    :formValue="person"
                />
                <div class="ww-50 text-center">
                    <b-button
                        variant="outline-primary"
                        class=" pp-custom m-0 rounded-circle"
                        style=" margin-bottom: 10px!important;"
                        @click="handleViewForm"
                    >
                        <feather-icon
                            icon="PlusIcon"
                            size="15"
                            class="text-primary font-weight-bold stroke-current"
                        />
                    </b-button>
                </div>
            </div>
            <div v-else>
                <div class="d-flex flex-wrap co-12 mt-1">
                    <p class="col col-11 font-weight-bolder text-black mmb-4">¿Quien registra?:</p>
                    <feather-icon size="18" :icon="`XIcon`" class="cursor-pointer text-danger font-weight-bolder mmb-4" @click="() => { person = null }"/>
                    <p class="col col-12 font-weight-bolder text-black mmb-2">Nombre: <span class="font-weight-normal">{{ person.nombre }}</span></p>
                    <p class="col col-6 font-weight-bolder text-black">Correo electronico: <span class="font-weight-normal">{{ person.correo }}</span></p>
                    <p class="col col-6 font-weight-bolder text-black">Telefono: <span class="font-weight-normal">{{ person.telefono }}</span></p>
                </div>
            </div>

        </div>
        <FormFactory
            v-else
            ref="formPeople"
            classForm=" col-12 p-0 m-0 "
            :schema="formSchema"
            @formExport="handleSubmit"
            @cancelar="handleCancelar"
        />
    </div>
</template>

<script>
import {
  BButton,
  BModal,
  BCardText,
  BFormInput,
  BRow,
  BCol,
  BFormGroup,
}                         from 'bootstrap-vue'
import BCardCode          from '@core/components/b-card-code'
import Ripple             from 'vue-ripple-directive'
import store              from '@/store'
import { goToLogout }     from '@/auth/utils'
import customHelpers  from '@helpers/customHelpers'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'
import FormFactory from '@currentComponents/FormFactory.vue'
import customSelect from '@currentComponents/customSelect.vue'
import peticiones from '@/apis/usePeticiones'


export default {
    name:'customPerson',
    components: {
        customSelect,
        BFormInput,
        BRow,
        FormFactory,
        BCol,
        BFormGroup,
        BCardCode,
        BButton,
        BModal,
        BCardText,
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            viewForm    : false,
            person      : null,
            config : {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-select',
                name        : 'tipo de usuario',
                value       : 'tipoUsuario',
                label       : 'Tipo de usuario',
                rules       : 'required',
                catalogo    : 'customPersons',
            },
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
    mixins : [customHelpers],
    props: {
        label: {
            type    : String,
            default : '¿Quien reserva?'
        },
        reservacion: {
            type    : Object,
            default : {}
        },
    },
    watch:{
        person(value){
            console.log('customPersona -> ',value)
            if (value != null) {
                this.$emit('changeReservacion', {
                    ...this.reservacion,
                    person:value,
                    person_id:value.id,
                })
            }
        },
    },
    beforeMount(){
    },
    methods: {
        changePerson(){
            this.person = null
        },
        changeValue(data){
            console.log(data)
            this.person = data.value
        },
        handleViewForm(){
            this.viewForm = true
        },
        handleSubmit(data){
            let payload = data
            payload.accion = 1;
        peticiones
            .administrarPersonas({
                'payload' : payload,
            })
            .then(response => {
                this.messageSweet({
                    message: response.data.message,
                    icon: response.data.result ? 'success' : 'error',
                });
                if (response.data.result ) {
                    this.viewForm = false
                }
            })
            .catch(error   => { console.log(error); })
        },
        handleCancelar(){
            this.person = {};
            this.viewForm = false;
        },
    },
}
</script>
