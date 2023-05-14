<template>
    <div>
        <b-card class="p-2">
            <!-- <pre>{{ reservacion }}</pre> -->
            <b-card-title>Registro de reservación</b-card-title>
            <b-card-body class="p-0 m-0">
                <!-- color="#7367F0" -->
                <!-- <pre>Step: {{ step }}</pre>
                <pre>{{ reservacion }}</pre> -->
                <form-wizard
                    ref="wizard"
                    :hideButtons="true"
                    :title="null"
                    :subtitle="null"
                    :startIndex="step"
                    :disable-navigation="true"
                    finish-button-text="Guardar"
                    back-button-text="Anterior"
                    next-button-text="Siguiente"
                    class="steps-transparent m-0 p-0"
                >
                    <!-- @update:startIndex="nextStep" -->
                    <!-- Detalles de la reservacion -->
                    <tab-content
                        title="Detalles de reservación"
                        icon="feather icon-calendar"
                    >
                        <tabDetalles
                            v-if="step == 0"
                            :reservacion="reservacion"
                            @changeReservacion="handleChangeReservacion"
                        />
                    </tab-content>

                    <!-- Habitaciones -->
                    <tab-content
                        title="Habitaciones"
                        icon="feather icon-airplay"
                    >
                        <TabHabitaciones
                            v-if="step == 1"
                            :reservacion="reservacion"
                            @changeReservacion="handleChangeReservacion"
                        />
                    </tab-content>

                    <!-- Acompañantes -->
                    <tab-content
                        title="Acompañantes"
                        icon="feather icon-users"
                    >
                        <TabAcompañantes
                            v-if="step == 2"
                            ref="tabAcompaniantes"
                            :reservacion="reservacion"
                            @changeReservacion="handleChangeReservacion"
                        />
                    </tab-content>

                    <!-- Pago -->
                    <tab-content
                        title="Pago"
                        icon="feather icon-credit-card"
                    >
                        <TabPago
                            v-if="step == 3"
                            :reservacion="reservacion"
                            @changeReservacion="handleChangeReservacion"
                        />
                    </tab-content>
                </form-wizard>
                <div class="col-12 d-flex justify-content-between">
                    <b-button
                        v-if="step != 0"
                        variant="outline-secondary"
                        class="mr-auto"
                        @click="prevStep"
                    >
                        Atrás
                    </b-button>
                    <b-button
                        class="ml-auto"
                        variant="primary"
                        @click="nextStep"
                    >
                        {{ step < 3 ? 'Siguiente' : 'Reservar' }}
                    </b-button>
                </div>
            </b-card-body>
        </b-card>
    </div>
  </template>
  <script>
    import { FormWizard, TabContent } from 'vue-form-wizard'
    import vSelect from 'vue-select'
    import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    import {
    BRow,
    BCol,
    BCard,
    BCardTitle,
    BCardSubTitle,
    BCardBody,
    BFormGroup,
    BFormInput,
    BButton
    } from 'bootstrap-vue'
    import tabDetalles from './TabDetalles.vue'
    import TabHabitaciones from './TabHabitaciones.vue'
    import TabPago from './TabPago.vue'
    import TabAcompañantes from './TabAcompañantes.vue'
    import customHelpers  from '@helpers/customHelpers'
    import peticiones from '@/apis/usePeticiones'

  export default {
    components: {

        BButton,
        FormWizard,
        BCard,
        tabDetalles,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        TabContent,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        vSelect,
        // eslint-disable-next-line vue/no-unused-components
        ToastificationContent,
        TabAcompañantes,
        TabHabitaciones,
        TabPago,
    },
    mixins : [customHelpers],
    data() {
      return {
        step : 0,
        reservacion:{}
      }
    },
    watch:{
        '$refs.wizard.activeTabIndex' (newValor){
            console.log(newValor)
        }
    },
    mounted() {
    },
    methods: {
        handleChangeReservacion(data){
            console.log('reservacion -> ', data)
            this.reservacion = this.copyObject(data)
        },
        prevStep(){
            this.$refs.wizard.prevTab()
            this.step = this.$refs.wizard.activeTabIndex;
        },
        async nextStep(data = null){
            if (this.step == 3) {
                this.handleSubmit()
            } else {
                let next = false;
                if (this.step == 0) {
                    next =  typeof this.reservacion.fechaInicio != 'undefined' &&
                            typeof this.reservacion.fechaFin    != 'undefined' &&
                            typeof this.reservacion.person_id  != 'undefined'
                    if (!next) {
                        this.messageSweet({
                            message: 'Revisa el formulario, falta algún campo',
                            icon: 'warning',
                        });
                    }
                }
                if (this.step == 1) {
                    if ((typeof this.reservacion.habitaciones == 'undefined' ? 0 : this.reservacion.habitaciones.length) == 0) {
                        this.messageConfirm({
                            message:'No hay habitaciones seleccionadas',
                            title:'¿Desea continuar con el proceso?',
                            icon:'warning',
                            confirmButtonText: 'Si, continuar',
                            confirmFunction: () => { this.next() },
                            messageCancel : false
                        })
                    } else {
                        next = true
                    }
                }
                if (this.step == 2) {
                    let response = await this.$refs.tabAcompaniantes.getAcompaniantes();
                    console.log('response -> ', response )
                    if (response != false) {
                        this.reservacion.acompaniantes = response
                    }
                    console.log('this.reservacion', this.reservacion)
                    // console.log('this.reservacion.acompaniantes.length', this.reservacion.acompaniantes.length)
                    console.log((typeof this.reservacion.acompaniantes == 'undefined'))
                    console.log((typeof this.reservacion.acompaniantes == 'undefined' ? 0 : this.reservacion.acompaniantes.length) == 0)
                    if ((typeof this.reservacion.acompaniantes == 'undefined' ? 0 : this.reservacion.acompaniantes.length) == 0) {
                        this.messageConfirm({
                            message:'No hay acompañastes registrados',
                            title:'¿Desea continuar con el proceso?',
                            icon:'warning',
                            confirmButtonText: 'Si, continuar',
                            confirmFunction: () => { this.next() },
                            messageCancel : false
                        })
                    } else {
                        next = true;
                    }
                }
                if (next) {
                    if (typeof  data == 'object')
                        this.next()
                    else
                        this.handleChangeStep(data);
                }
            }
        },
        next(){
            this.$refs.wizard.nextTab()
            this.handleChangeStep();
        },
        handleChangeStep(data = null){
            console.log('handleChangeStep')
            console.log('data -> ', data)
            console.log('data -> ', typeof data)
            console.log( "typeof  data == 'object' ? this.$refs.wizard.activeTabIndex : data    ->",typeof  data == 'object' ? this.$refs.wizard.activeTabIndex : data)
            this.step = typeof  data == 'object' ? this.$refs.wizard.activeTabIndex : data;
        },
        handleSubmit(){
            this.peticionAdministrar({...this.reservacion,'accion':1})
        },
        peticionAdministrar(payload){
            peticiones
                .administrarReservaciones({
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
