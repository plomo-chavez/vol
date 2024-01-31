<template>
<div>
    <VistaUno
        :data="data"
        :config="config"
        :columnas="columnas"
        :showCellActions="false"
        @mdoEditar="editar"
        @mdoEliminar="onEliminar"
        @mtdNuevo="nuevoRegistro"
        @mtdFiltrar="reload"
        @mtdExportar="exportar"
        :title="'Reporte de antigüedades'"
    />
    <b-modal
      ref="modalExportar"
      hide-footer
      ok-only
      no-close-on-backdrop
      :title="'Exportar reporte'"
    >
    <div v-if="pnlExportar == null" class=" wwfull">
        <b-button @click="() => { pnlExportar = 'delegacion' }" >Por delegación</b-button>
        <b-button @click="() => { pnlExportar = 'estado' }" >Por estado</b-button>
        <b-button @click="() => { pnlExportar = 'general' }" >General</b-button>
    </div>
    <div v-else>

    </div>

    </b-modal>
</div>
</template>
<script>
import { BButton, } from 'bootstrap-vue'
import VistaUno from '@currentComponents/VistaUno.vue'
import customHelpers  from '@helpers/customHelpers'

export default {
    components: {
        BButton,
        VistaUno,
    },
    data() {
        return {
            pnlExportar : null,
            userData: JSON.parse(localStorage.getItem('userData')),
            modalExportar : false,
            config:{
                cellActions: {
                    btnEditar: false,
                    btnEliminar: false,
                    btnView: false,
                    btnChangePassword: false,
                },
                index: true,
                buscador: true,
                btnNuevo: false,
                btnFiltrar: false,
                btnExportar: true,
                btnOtros: null,
            },
            data:[],
            columnas : [
                {
                    type    : 'text',
                    key     : 'numeroInterno',
                    label   : 'Numero interno',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'numeroAsociado',
                    label   : 'Numero asociado',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'nombreCompleto',
                    label   : 'Voluntario',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'fechaIngresoCR',
                    label   : 'Fecha de ingreso',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'antiguedad',
                    label   : 'Antigüedad',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'tiempo_mes',
                    label   : 'Mes actual',
                    sortable: true
                },
                {
                    type    : 'text',
                    key     : 'tiempo_total',
                    label   : 'Tiempo total',
                    sortable: true
                }
            ]
        }
    },
    watch : {
        async pnlExportar(){
            if (this.pnlExportar == 'general') {
                this.$refs['modalExportar'].hide();
                let payload = {
                    voluntario_id : this.data.id,
                };
                let response =  await this.peticionPDF('generatePDFAntiguedades',payload)
                this.descargarPDF(response,this.data.id,'fichaRegistro',false)
            }
        },
    },
    mixins : [customHelpers],
    beforeMount() { this.inicializar(); },
    methods: {
        inicializar(){
            this.reload()
        },
        exportar(){
            this.$refs['modalExportar'].show()
        },
        async reload () {
            let response = await this.peticionGeneral('getAntiguedades',{voluntario_id:this.userData.voluntario_id},false);
            let data = response.data;
            this.data = data;
        },
        resetForm(){
            this.accion = 1;
            this.showForm = false
            this.showDetails = false
            this.activeRow = null
            this.reload();
        },
        save(data){
            let payload = this.copyObject(data);
            if (this.accion == 2) {
                payload.id = this.activeRow.id
            }
            payload.accion = this.accion
        this.peticionAdministrar(payload)
        },
        async peticionAdministrar(payload){
            await this.peticionGeneral('administrarVoluntarios',payload);
            this.resetForm();
        },
        nuevoRegistro () {
            this.activeRow = {};
            setTimeout(() => { this.showForm = true; }, 10);
        },
        editar (data) {
            this.activeRow = this.copyObject(data)
            this.showDetails = true;
        },
        onEliminar(data){
            this.messageConfirm({ confirmFunction: () => { this.peticionAdministrar({...data,accion : 3}) } })
        }
    },
}
</script>

