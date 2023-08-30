<template>
<div>
    <div class=" col-12 d-flex flex-wrap justify-content-between mb-2">
        <div>
            <b-button
                size="sm"
                variant="outline-danger"
                @click="() => { $emit('handleCancelar')}"
            >Atrás</b-button>
        </div>
    <div>
</div>
</div>
    <b-card class="col-12 p-2">
        <b-tabs content-class="pt-1" fill v-if="data != null" @input="handleTabChange">
            <b-tab>
                <template #title>
                    <feather-icon icon="ToolIcon" />
                    <span class="d-none d-sm-block">Contadores</span>
                </template>
                <div class="wwfull "  :class=" windowInnerWidth < 700 ? '' : ' d-flex justify-content-center '">
                    <div class=" p-1" :class=" windowInnerWidth < 700 ? ' col-12 p-0 m-0 ' : ' ww-300 ' ">
                        <b-card  no-body class="ww-300 p-1 mx-auto">
                            <div class="wwfull">
                            <!-- User avatar -->
                            <div class="wwfull mb-2 text-center">
                                <b-avatar
                                    size="60"
                                    :src="null"
                                    variant="light-primary"
                                    class="mx-auto badge-minimal"
                                />
                            </div>
                            <div class="d-flex flex-column">
                                <div class="mb-1">
                                    <h4 class=" wwfull text-center font-weight-bolder mb-1">{{ data.voluntario }}</h4>
                                </div>
                            </div>
                            <!-- User Stats -->
                            <div class="mb-2">
                                <div class="wwfull d-flex align-items-center mr-2">
                                    <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                                    <div class="ml-1">
                                        <h5 class="mb-0">{{ data.tiempo_mes }}</h5>
                                        <small>Tiempo actual </small>
                                    </div>
                                </div>
                                <div class="wwfull d-flex align-items-center mr-2">
                                    <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                                    <div class="ml-1">
                                        <h5 class="mb-0">{{ data.tiempo_total }}</h5>
                                        <small>Tiempo total </small>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </b-card>
                    </div>
                    <div class=" p-1" :class=" windowInnerWidth < 700 ? ' col-12 p-0 m-0 ' : ' ww-300A ' ">
                        <div class=" col-12 d-flex flex-wrap justify-content-between">
                            <div>
                                <b-button size="sm" variant="relief-secondary" >Generar reporte de horas voluntarias</b-button>
                            </div>
                            <div>
                            </div>
                        </div>
                        <VistaUno
                            :title="'Registro de horas voluntarias  '"
                            :data="horas"
                            :config="configHistorico"
                            :columnas="columnasMes"
                            @mdoView="viewDetailsRegistro"
                        />
                    </div>
                </div>
            </b-tab>
            <b-tab>
                <template #title>
                    <feather-icon icon="ToolIcon" />
                    <span class="d-none d-sm-block">Historico</span>
                </template>
                <div>
                    <div class=" d-flex flex-wrap justify-content-between ">
                        <div v-if="panelHistorico > 1" class="col-12 d-flex align-items-center mb-2">
                            <div>
                                <b-button
                                size="sm"
                                variant="outline-danger"
                                class="mr-1"
                                @click="() => { this.atrasDetalleMes() }"
                                >Atrás</b-button>
                            </div>
                        </div>
                        <VistaUno
                            v-if="panelHistorico != 0 "
                            class=" col-12 text-sm"
                            :title="titulo"
                            :data="dataActive"
                            :config="configHistorico"
                            :columnas="columnasActivas"
                            @mdoView="viewDetails"
                        />
                        <b-modal
                            v-model="modalShow"
                            title="Detalles del registro de actividad"
                            no-fade
                            hide-footer
                            no-close-on-backdrop
                        >
                        <b-card-text>
                            <div v-if="actividad != null" class="ww-300 p-1 mx-auto">
                                <h3 class="mb-2 col-12 text-center">Detalles del registro de hora voluntaria</h3>
                                <div class="mb-3 d-flex flex-wrap justify-content-between ">
                                    <p class="col-12 m-0 p-0  font-weight-bolder mr-1 text-center mmb-1 ">{{ actividad.tiempoLabel }}</p>
                                </div>
                                <div class="mb-1 d-flex flex-wrap justify-content-between ">
                                    <p class="col-12 m-0 p-0  font-weight-bolder mr-1 ">Tipo de actividad:</p>
                                    <p class="col-12 m-0 p-0 " > {{ actividad.actividad }} </p>
                                </div>
                                <div class="mb-1 d-flex flex-wrap justify-content-between ">
                                    <p class="col-12 m-0 p-0  font-weight-bolder mr-1 ">Area:</p>
                                    <p class="col-12 m-0 p-0 " > {{ actividad.area }} </p>
                                </div>
                                <div v-if="actividad.guardia != null">
                                    <div class=" d-flex flex-wrap justify-content-between ">
                                        <p class="col-12 m-0 p-0  font-weight-bolder mr-1 text-center ">Guardia</p>
                                    </div>
                                    <div class="mb-1 d-flex flex-wrap justify-content-between ">
                                        <p class="col-12 m-0 p-0  font-weight-bolder mr-1 ">Fecha inicio:</p>
                                        <p class="col-12 m-0 p-0 " > {{ formatoFechaYMD(actividad.guardia.inicio,true) }} </p>
                                    </div>
                                    <div class="mb-1 d-flex flex-wrap justify-content-between ">
                                        <p class="col-12 m-0 p-0  font-weight-bolder mr-1 ">Fecha fin:</p>
                                        <p class="col-12 m-0 p-0 " > {{ formatoFechaYMD(actividad.guardia.fin,true) }} </p>
                                    </div>
                                    <div class="mb-1 d-flex flex-wrap justify-content-between ">
                                        <p class="col-12 m-0 p-0  font-weight-bolder mr-1 ">Delegación:</p>
                                        <p class="col-12 m-0 p-0 " > {{ actividad.guardia.delegacion.nombreLabel }} </p>
                                    </div>
                                    <div class="mb-1 d-flex flex-wrap justify-content-between ">
                                        <p class="col-12 m-0 p-0  font-weight-bolder mr-1 ">Verificador:</p>
                                        <p class="col-12 m-0 p-0 " > {{ actividad.guardia.verificador.nombreCompleto }} </p>
                                    </div>
                                </div>
                            </div>
                        </b-card-text>
                        </b-modal>
                    </div>
                </div>
            </b-tab>
        </b-tabs>
        <h1 v-else class="col-12 text-center"> No se encontró el voluntario.</h1>
    </b-card>
</div>
</template>
  
<script>
import { BTabs, BTab, BCard, BButton, BAvatar, VBModal, BCardText, } from 'bootstrap-vue'
import formDatosVoluntario  from '@/views/voluntarios/formDatosVoluntario.vue'
import tabHoras  from '@/views/voluntarios/tabHorasVoluntarias.vue'
import peticiones from '@/apis/usePeticiones'
import customHelpers  from '@helpers/customHelpers'
import VistaUno from '@currentComponents/VistaUno.vue'
import { useWindowSize, useCssVar } from '@vueuse/core'
import Ripple from 'vue-ripple-directive'

export default {
    name: 'formDetailsHorasVoluntarias',
    mixins : [customHelpers],
    components: {
        BCard,
        BTabs,
        BTab,
        BAvatar,
        BCardText,
        BButton,
        formDatosVoluntario,
        tabHoras,
        VistaUno,
    },
    directives: {
        'b-modal': VBModal,
        Ripple,
    },
    mounted() {},
    data() {
        return {
            windowInnerWidth: window.innerWidth,
            panelHistorico  : 0,
            voluntario      : null,
            titulo          : null,
            modalShow       : false,
            detalleRegistro : null,
            actividad     : null,
            detallesMes     : null,
            historico       : [],
            horas       : [],
            columnasActivas : [],
            configHistorico :  {
                showCellActions: true,
                cellActions: {
                  btnEditar         : false,
                  btnEliminar       : false,
                  btnView           : true,
                  btnChangePassword : false,
                },
                index       : true,
                buscador    : true,
                btnNuevo    : false,
                btnFiltrar  : false,
                btnOtros    : null,
            },
            columnas        : [
                {
                    type    : 'text',
                    key     : 'numeroAsociado',
                    label   : 'Numero de asociado',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'voluntario',
                    label   : 'Voluntario',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'actividad',
                    label   : 'Actividad',
                    sortable: true
                },
                {
                    type    : 'fechaTime',
                    key     : 'fecha',
                    label   : 'Fecha',
                    sortable: true
                },
                {
                    type    : 'fechaTime',
                    key     : 'horaInicio',
                    label   : 'Hora de inicio',
                    sortable: true
                },
                {
                    type    : 'fechaTime',
                    key     : 'horaFin',
                    label   : 'Hora de fin',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'numeroHoras',
                    label   : 'Horas registradas',
                    sortable: true
                },
            ],
            columnasHistorico : [
                {
                    type    : 'text',
                    key     : 'mes',
                    label   : 'Mes',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'minutos',
                    label   : 'Minutos',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'horas',
                    label   : 'Horas',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'tiempo',
                    label   : 'Tiempo',
                    sortable: true
                },
            ],
            columnasMes     : [
                {
                    type    : 'text',
                    key     : 'area',
                    label   : 'Area',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'actividad',
                    label   : 'Actividad',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'tiempoLabel',
                    label   : 'Tiempo',
                    sortable: true
                },
                {
                    type    : 'fechaTime',
                    key     : 'horaInicio',
                    label   : 'Hora inicio',
                    sortable: true
                },
                {
                    type    : 'fechaTime',
                    key     : 'horaFin',
                    label   : 'Hora Fin',
                    sortable: true
                },
                {
                    type    : 'fechaTime',
                    key     : 'created_at',
                    label   : 'Fecha registro',
                    sortable: true
                },
            ]
        }
    },
    props: {
        data: {
            type    : Object,
            default : null
        },
        isRegistro: {
            type    : Boolean,
            default : false
        },
    },
    watch: {
        panelHistorico(newValue, oldValue) {
            switch (newValue) {
                case 1: this.titulo = 'Historico por meses'; break;
                case 2: this.titulo = 'Horas voluntarias de ' +  this.mes; break;
                case 3: this.titulo = 'Detalles de la actividad'; break;
            }
        }
    },
    computed: {},
    created() {
        window.addEventListener('resize', this.handleWindowResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.handleWindowResize);
    },
    beforeMount(){
        this.panelHistorico  = 1;
        this.historico       = JSON.parse(this.data.historico);
        this.dataActive      = this.copyObject(this.historico);
        this.columnasActivas = this.copyObject(this.columnasHistorico);
        this.iniciar();
    },
    methods:{

        handleTabChange(tabID) {
            if(tabID == 0){
                this.iniciar();
            }
        },
        async iniciar() {
                let payload = {
                    payload : {
                        anio            : this.data.anio,
                        mes             : this.data.mes_actual,
                        voluntario_id   : this.data.voluntario_id,
                        accion          : 8,
                    }
                };
                let response         = await this.peticionGeneral('administrarGuardiaHoras',payload,false);
                this.horas     = this.copyObject(response.data)
        },
        handleWindowResize() {
            this.windowInnerWidth = window.innerWidth;
        },
        atrasDetalleMes(){
            let tmp = this.panelHistorico == 3 ? 2 : 1;
            this.panelHistorico = 0;
            this.columnasActivas = this.copyObject(this.columnasHistorico);
            this.dataActive = this.historico;
            setTimeout(() => { this.panelHistorico = 1 }, 5);
        },
        async viewDetails(data){
            let tmp = this.panelHistorico;
            this.panelHistorico = 0;
            if(tmp == 1){
                let payload = {
                    payload : {
                        anio            : data.anio,
                        mes             : data.mesNumero,
                        voluntario_id   : this.data.voluntario_id,
                        accion          : 8,
                    }
                };
                this.mes = data.mes;
                let response         = await this.peticionGeneral('administrarGuardiaHoras',payload,false);
                this.detallesMes     = this.copyObject(response.data)
                this.dataActive      = this.copyObject(this.detallesMes);
                this.columnasActivas = this.copyObject(this.columnasMes);
                this.panelHistorico  = 2;
            } else {
                this.panelHistorico = 3;
                this.viewDetailsRegistro(data)
            }
            // this.showModal('modal-detalles')
        },
        viewDetailsRegistro(data){
            this.actividad = this.copyObject(data);
            this.modalShow = !this.modalShow;
        },
    }
}
</script>
<style>
</style>
  