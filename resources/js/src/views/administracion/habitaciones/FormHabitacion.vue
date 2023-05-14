<template>
    <BCard :class="screenWidth > 1000 ? ' ww-1000 mx-auto' : ' col-12 '" class="p-2">
        <h1 class="col-12 mb-1">Registro de habitación</h1>
        <FormFactory
            ref="formHabitacion"
            class="col-12 mx-auto"
            :btnsAccion="false"
            :data = 'activeRow'
            :schema="formSchema"
            @formExport="saveRegistro"
        />
        <div class=" col-12 d-flex flex-wrap justify-content-between">
            <div class="mb-1 col-12 col-md-6">
                <Modal
                    ref="modalForm"
                    :openModal="modalAmenidad"
                    :data="activeAmenidad"
                    :formSchema="formAmenidad"
                    @handleSubmit="handleSubmitAmenidad"
                    @handleCancelar="handleCancelar"
                />
                <div class=" col-12 d-flex flex-wrap justify-content-between">
                    <h3 class="my-auto">Amenidades:</h3>
                    <div>
                        <b-button
                            size="sm"
                            class="my-auto fw-bolder"
                            variant="primary"
                            @click="modalAmenidad = true"
                            >
                            <feather-icon icon="PlusIcon" size="16" />
                            <span>Agregar</span>
                        </b-button>
                    </div>
                </div>
                <div class="pt-2">
                    <h4 v-if="amenidades.length == 0 " class="col-12 text-center fw-bolder">No hay amenidades registradas.</h4>
                    <div v-else class="col-12 ">
                        <div v-for="(amenidad,index) in amenidades" :key="index+'amenidad'" class="d-flex flex-wrap col-12 ">
                            <div class="ww-50A"><p class="fw-bolder">{{ amenidad.nombre }}</p></div>
                            <div class="ww-50">
                                <feather-icon class="cursor-pointer" size="16" icon="EditIcon"    @click="handleEditar(amenidad)"/>
                                <feather-icon class="cursor-pointer" size="16" icon="Trash2Icon"  @click="handleEliminar(index)"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-1 col-12 col-md-6">
                <div class=" col-12 d-flex flex-wrap justify-content-between">
                    <h3 class="my-auto">Camas:</h3>
                </div>
                <div class="">
                    <FormFactory
                        ref="formCamas"
                        class="col-12 mx-auto"
                        :btnsAccion="false"
                        :data = 'camas'
                        :schema="formSchemaCamas"
                    />
                </div>
            </div>
        </div>
        <div class=" col-12 d-flex flex-wrap justify-content-between">
            <b-button
                size="sm"
                class="fw-bolder"
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                variant="outline-secondary"
                @click="handleAtras"
                >
                <feather-icon icon="XCircleIcon" size="16" />
                <span class="my-auto">Cancelar</span>
            </b-button>
            <b-button
                size="sm"
                class="fw-bolder"
                variant="primary"
                @click="handleSubmit"
                >
                <feather-icon icon="SaveIcon" size="16" />
                <span class="my-auto">Guardar</span>
            </b-button>
        </div>
    </BCard>
  </template>
  <script>
    import FormFactory from '@currentComponents/FormFactory.vue'
    import Modal from '@currentComponents/ModalForm.vue'
    import VistaUno from '@currentComponents/VistaUno.vue'
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
    import Ripple from 'vue-ripple-directive'

  export default {
    directives: {
      Ripple,
    },
    components: {
        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BModal,
        BButton,
        Modal,
        FormFactory,
        VistaUno
    },
    data() {
      return {
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        activeRow : null,
        amenidades:[
            {nombre:'Pruebas'}
        ],
        activeAmenidad : {},
        schemaMain : null,
        showForm : true,
        modalAmenidad : false,
        formSchema: [
            {
                classContainer:' col-md-6 col-lg-6 col-12 ',
                type        : 'input-text',
                name        : 'nombre',
                value       : 'nombre',
                label       : 'Nombre',
                placeholder : 'Introduce un nombre',
                rules       : 'required',
            },
            {
                classContainer:'col-md-3 col-lg-3 col-12',
                type        : 'input-number',
                name        : 'capacidad',
                value       : 'capacidad',
                label       : 'Capacidad',
                placeholder : 'Introduce una capacidad',
                rules       : 'required',
                prefix      : '',
            },
            {
                classContainer:' col-md-3 col-lg-3 col-12',
                type        : 'input-switch',
                name        : 'puedeFumar',
                value       : 'puedeFumar',
                label       : '¿Se puede fumar?',
                rules       : 'required',
                labels      : {
                                'on' : "Si",
                                'off': "No"
                            },
            },
            {
                classContainer:' col-md-6 col-lg-6 col-12',
                type        : 'input-money',
                name        : 'tarifa',
                value       : 'tarifa',
                label       : 'Tarifa',
                placeholder : 'Introduce una tarifa',
                rules       : 'required',
            },
            {
                classContainer:' col-md-6 col-lg-6 col-12',
                type        : 'input-select',
                name        : 'estatus',
                value       : 'estatus',
                // rules       : 'required',
                label       : 'Estatus',
                catalogo    : 'estatusHabitaciones',
            },
            {
                classContainer:'col-12',
                type        : 'text-area',
                name        : 'descripcion',
                value       : 'descripcion',
                rules       : 'required',
                label       : 'Descripción',
                placeholder : 'Introduce una descripción de la habitación',
            },
        ],
        camas:{
            'camaKing':0,
            'camaQueen':0,
            'camaMatrimonial':0,
            'camaIndividual':0,
        },
        formSchemaCamas: [
            {
                classContainer:' col-6',
                type        : 'input-number',
                name        : 'camaKing',
                value       : 'camaKing',
                label       : 'Kingsize',
                placeholder : 'Introduce un nombre',
                rules       : 'required',
            },
            {
                classContainer:' col-6',
                type        : 'input-number',
                name        : 'camaQueen',
                value       : 'camaQueen',
                label       : 'QueenSize',
                placeholder : 'Introduce un nombre',
                rules       : 'required',
            },
            {
                classContainer:' col-6',
                type        : 'input-number',
                name        : 'camaMatrimonial',
                value       : 'camaMatrimonial',
                label       : 'Matrimonial',
                placeholder : 'Introduce un nombre',
                rules       : 'required',
            },
            {
                classContainer:' col-6',
                type        : 'input-number',
                name        : 'camaIndividual',
                value       : 'camaIndividual',
                label       : 'Individual',
                placeholder : 'Introduce un nombre',
                rules       : 'required',
            },
        ],
        formAmenidad: [
            {
                classContainer:' col-6',
                type        : 'input-text',
                name        : 'nombre',
                value       : 'nombre',
                label       : 'Nombre',
                placeholder : 'Introduce un nombre',
                rules       : 'required',
            },
        ],
      }
    },
    props: {
        info: {
            type: Object,
            default: () => null,
        },
        accion: {
            type: Number,
            default: () => 1,
        },
    },
    mixins : [customHelpers],
    beforeMount() {
        if (this.info != null && Object.keys(this.info).length > 0){
            console.log('info -> ', this.info)
            this.activeRow =  this.copyObject(this.info)
            this.camas =  this.copyObject(this.info.camas)
            this.amenidades =  this.copyObject(this.info.amenidades)
        }
    },
    mounted() {
        // Escuchamos el evento de cambio de tamaño de ventana
        window.addEventListener('resize', this.onResize);
    },
    beforeDestroy() {
        // Eliminamos el evento de cambio de tamaño de ventana
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
        },
        handleAtras(){
            this.$emit('handleAtras')
        },
        handleSubmit(){
            this.$refs.formHabitacion.validationForm()
        },
        handleSubmitAmenidad(data){
            this.amenidades = [...this.amenidades,data]
            this.handleCancelar()
        },
        handleCancelar(){
            this.activeAmenidad = {}
            this.$refs.modalForm.toggleModal()
            this.modalAmenidad = false;
        },
        handleEditar(data){
            this.activeAmenidad = this.copyObject(data)
            this.openModal = true;
        },
        handleEliminar(index){
            this.messageConfirm({
                confirmFunction: () => { this.eliminarRegistro(index) }
            })
        },
        eliminarRegistro(index){
            let tmp = this.copyObject(this.amenidades)
            tmp.splice(index,1)
            this.amenidades = this.copyObject(tmp)
        },
        saveRegistro(data){
            let payload = {...data}
            payload.camas = JSON.stringify(this.$refs.formCamas.getForm())
            payload.amenidades = JSON.stringify(this.amenidades)
            if (this.accion == 2) {
                payload.id = this.info.id
            }
            payload.accion = this.accion
            payload.estatus_id = payload.estatus?.value ?? null
           this.peticionAdministrar(payload)
        },
        peticionAdministrar(payload){
            peticiones
                .adminUsuarios({
                    'payload' : payload,
                })
                .then(response => {

                    this.messageSweet({
                        message: response.data.message,
                        icon: response.data.result ? 'success' : 'error',
                    });
                    if (response.data.result ) {
                        this.handleAtras()
                    }
                })
                .catch(error   => { console.log(error); })
        },
    },
  }
  </script>

