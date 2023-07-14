<template>
<div>
    <b-modal
        ref="my-modal"
        hide-footer
        ok-only
        no-close-on-backdrop
        title="Using Component Methods"
    >
    <div class="col-12 p-0">
        <div class=" col-12 d-flex flex-wrap justify-content-between p-0">
            <div class="mb-1 col-6 p-0">
                <div class=" p-0 col-12 d-flex flex-wrap justify-content-between">
                    <h3 class="my-auto">Amenidades:</h3>
                </div>
                <div class="pt-0">
                    <h4 v-if="amenidades.length == 0 " class="p-0 col-12 text-center fw-bolder">No hay amenidades registradas.</h4>
                    <div v-else class="p-0 col-12 ">
                        <div v-for="(amenidad,index) in amenidades" :key="index+'amenidad'" class="d-flex flex-wrap p-0 col-12 ">
                            <div class="pp-custom col-12"><p class="fw-bolder p-0 m-0">{{ amenidad.nombre }}</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-1 col-6 p-0">
                <div class=" col-12 d-flex flex-wrap justify-content-between">
                    <h3 class="my-auto">Camas:</h3>
                </div>
                <div class="d-flex flex-wrap co-12 mt-1">
                    <p class="col col-12 font-weight-bolder text-black mmb-2">Cama King Size:   <span class="font-weight-normal">{{ camas.camaKing }}</span></p>
                    <p class="col col-12 font-weight-bolder text-black mmb-2">Cama Queen Size:  <span class="font-weight-normal">{{ camas.camaQueen  }}</span></p>
                    <p class="col col-12 font-weight-bolder text-black mmb-2">Cama matrimonial: <span class="font-weight-normal">{{ camas.camaMatrimonial }}</span></p>
                    <p class="col col-12 font-weight-bolder text-black mmb-2">Cama individual:  <span class="font-weight-normal">{{ camas.camaIndividual }}</span></p>
                </div>
            </div>
        </div>
    </div>
    </b-modal>
    <b-card class="p-1"  bg-variant="light">
        <div class="d-flex flex-wrap col-12 m-0 p-0">
            <p class=" m-0 p-0 col-12 font-weight-bolder text-black mmb-2">Nombre: <span class="font-weight-normal">{{ habitacion.nombre }}</span></p>
            <p class=" m-0 p-0 col-12 font-weight-bolder text-black mmb-2">Capacidad: <span class="font-weight-normal">{{ habitacion.capacidad }} {{ habitacion.capacidad == 1 ? 'persona' :' personas' }}</span></p>
            <!-- <p class=" m-0 p-0 col-12 font-weight-bolder text-black mmb-2">Tarifa: <span class="font-weight-normal">{{ this.formatoMoney(habitacion.tarifa) }}</span></p> -->
            <p class=" m-0 p-0 col-12 font-weight-bolder text-black mmb-2">Tarifa: <span class="font-weight-normal">{{ (habitacion.tarifa) }}</span></p>
            <p class=" m-0 p-0 col-12 font-weight-bolder text-black mmb-2">¿Se puede fumar?:</p>
            <p class=" m-0 p-0 col-12 font-weight-bolder text-black mmb-2"><span class="font-weight-normal">{{ habitacion.puedeFumar?'Si':'No' }} se puede fumar</span></p>
        </div>
        <div class="col-12 p-0 m-0 d-flex justify-content-between">
            <div class="d-flex align-items-center">
                <b-button v-if="showButton" variant="relief-primary" class="btn-sm my-auto" @click="handleSeleccionar">
                    Seleccionar
                </b-button>
            </div>
            <div>
                <b-button v-ripple.400="'rgba(255, 255, 255, 0.15)'" variant="secondary" class="btn-sm btn-icon rounded-circle" @click="handleModal">
                    <feather-icon size="20" icon="HelpCircleIcon" />
                </b-button>
            </div>
        </div>
    </b-card>
</div>
</template>

<script>

import { BButton, BCardText, BCard } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import customHelpers  from '@helpers/customHelpers'

export default {
    name: 'detailsRoomComponent',
    components: {
        BCard,
        BCardText,
        BButton,
    },
    mixins : [customHelpers],
    directives: {
        Ripple,
    },
    mounted() {},
    data() {
        return {
            showButton : true,
            camas:[],
            amenidades:[],
        }
    },
    props: {
        habitacion:{
            type: Object,
            default: null
        },

    },
    watch: {

    },
    computed: {

    },
    created() {

    },
    beforeMount(){
        if (this.habitacion !=  null){
            this.camas      = typeof this.habitacion.camas      == 'string' ? JSON.parse(this.habitacion.camas)      : this.habitacion.camas
            this.amenidades = typeof this.habitacion.amenidades == 'string' ? JSON.parse(this.habitacion.amenidades) : this.habitacion.amenidades
        }
    },
    methods:{
        handleModal(){
            this.$refs['my-modal'].show()
        },
        handleSeleccionar(){
            this.showButton = false;
            this.$emit('seleccionar', this.habitacion)
        },
    }
}
</script>
<style>
</style>
