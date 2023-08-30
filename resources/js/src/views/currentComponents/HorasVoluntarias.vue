<template>
  <div class="wwfull">
    <VistaUno
      :title="'Registro de horas voluntarias ' + (showMesLabel ? 'de '+ nombresMeses[parseInt(mes, 10) - 1] : '')"
      :data="registros"
      :config="configHistorico"
      :columnas="columnasMes"
      @mdoView="viewDetailsRegistro"
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
  </template>

  <script>
  import VistaUno from '@currentComponents/VistaUno.vue'
  import { BTabs, BTab, BCard, BButton, BAvatar, VBModal, BCardText, } from 'bootstrap-vue'
  import Ripple from 'vue-ripple-directive'
  import customHelpers  from '@helpers/customHelpers'


  export default {
    name: "HorasVoluntarias",
    mixins : [customHelpers],
    components: {
        BCard,
        BTabs,
        BTab,
        BAvatar,
        BCardText,
        BButton,
        VistaUno,
    },
    directives: {
        'b-modal': VBModal,
        Ripple,
    },
    data() {
      return {
        modalShow       : false,
        horas           : [],
        registros       : [],
        actividad       : null,
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
        ],
        nombresMeses    : [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre"
        ],
      };
    },
    beforeMount(){
      this.inicializar();
    },
    props: {
      anio: {
        type    : String, 
        default : function() {
          // Obtener la fecha actual
          var fechaActual = new Date();
          // Obtener el año de la fecha actual
          return fechaActual.getFullYear().toString();
        }
      },
      mes: {
        type    : String, 
        default : function() {
          // Obtener la fecha actual
          var fechaActual = new Date();
          // Obtener el mes actual (los meses van de 0 a 11, por lo que sumamos 1)
          var mesActual = fechaActual.getMonth() + 1;
          return mesActual < 10 ? "0" + mesActual : mesActual.toString();
        }
      },
      voluntario_id: {
        type    : Number, 
        default : null,
      },
      showMesLabel: {
        type    : Boolean, 
        default : false,
      },
    },
    watch:{
    },
    methods: {
      async inicializar(){
        let payload = {
            payload : {
                anio            : this.anio,
                mes             : this.mes,
                voluntario_id   : this.voluntario_id,
                accion          : 8,
            }
        };
        let response    = await this.peticionGeneral('administrarGuardiaHoras',payload,false);
        this.registros  = this.copyObject(response.data)
      },
      viewDetailsRegistro(data){
          this.actividad = this.copyObject(data);
          this.modalShow = !this.modalShow;
      },
    },
  };
  </script>
  <style scoped>
  </style>
