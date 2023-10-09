<template>
    <div>
        <div v-if="activeRow == null">
            <h3 v-if=" data == null " class="wwfull text-center">Cargando datos ..!!</h3>
            <VistaUno
                v-else
                :data="data"
                :config="{
                    showCellActions: true,
                    cellActions: {
                        btnEditar   : true,
                        btnEliminar : false,
                        btnView     : false,
                        btnChangePassword: false,
                    },
                    index       : true,
                    buscador    : true,
                    btnNuevo    : false,
                    btnFiltrar  : false,
                    btnOtros    : null,
                }"
                :columnas="columnas"
                @mdoEditar="editar"
                @mdoEliminar="onEliminar"
                @mtdNuevo="nuevoRegistro"
                @mtdFiltrar="reload"
                @mdoView="editar"
            />
        </div>
        <div v-else>
            <BTNAtras @handleAtras="resetForm" />
            <b-card class="p-1 ww-600 mx-auto">
                <FormFactory
                    :btnLblSubmit="'Cerrar guardia'"
                    :btnsAccion="canClose"
                    :data ="activeRow"
                    @formExport="save"
                    :schema="schemaMain"
                    @cancelar="resetForm"
                />
                <div>
                    <AdminHoraVoluntaria  
                        :key="index+'d'"
                        v-for ="(item,index) in activeRow.voluntarios" 
                        :data="item"
                        @reset="resetForm"
                    />
                    <!-- v-for ="(item) in activeRow.voluntarios"> -->
                </div>
            </b-card>
        </div>
    </div>
  </template>
  <script>
  import { BCard , BCardBody , BButton, BAvatar} from 'bootstrap-vue'

    import FormFactory from '@currentComponents/FormFactory.vue'
    import VistaUno from '@currentComponents/VistaUno.vue'
    import customHelpers  from '@helpers/customHelpers'
    import formHoras  from '@/views/horas/formHoras.vue'
    import BTNAtras from '@currentComponents/BTNAtras.vue'
    import AdminHoraVoluntaria from '@currentComponents/adminHoraVoluntaria.vue'
    import formDetailsHorasVoluntarias  from '@/views/horas/formDetailsHorasVoluntarias.vue'

    const moment = require('moment-timezone');
    // Establecer el huso horario a México (Ciudad de México)
    moment.tz.setDefault('America/Mexico_City');
  export default {
    name    : 'UI-GuardiasHV',
    mixins  : [customHelpers],
    components: {
        FormFactory,
        AdminHoraVoluntaria,
        BTNAtras,
        BCard, 
        BCardBody,
        VistaUno,
        formHoras,
        formDetailsHorasVoluntarias,
        BButton,
        BAvatar,
    },
    data() {
      return {
        userData    : JSON.parse(localStorage.getItem('userData')),
        data        : null,
        accion      : 1,
        itemVoluntario  : null,
        openModalForm   : false,
        viewForm    : true,
        showForm    : false,
        activeRow   : null,
        showDetails : false,
        canClose    : false,
        schemaMain: [
            {
                classContainer:'col-12 col-lg-6 col-md-6 col-sm-12',
                type        : 'input-text',
                disabled    : true,
                name        : 'delegación',
                value       : 'delegacion',
                label       : 'Delegación'
            },
            {
                classContainer:'col-12 col-lg-6 col-md-6 col-sm-12',
                type        : 'input-text',
                disabled    : true,
                name        : 'verificador',
                value       : 'verificador',
                label       : 'Verificador',
            },
            {
                classContainer:'col-12 col-lg-6 col-md-6 col-sm-12',
                type        : 'input-dateTimer',
                name        : 'inicio',
                value       : 'inicio',
                label       : 'Inicio',
            },
            {
                classContainer:'col-12 col-lg-6 col-md-6 col-sm-12',
                type        : 'input-dateTimer',
                rules       : 'required',
                name        : 'fin',
                value       : 'fin',
                label       : 'Fin',
                today       : true
            },
        ],
        columnas : [
            {
                type    : 'text',
                key     : 'delegacion',
                label   : 'Delegación',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'verificador',
                label   : 'Verificador',
                sortable: true
            },
            {
                type    : 'fechaTime',
                key     : 'inicio',
                label   : 'Inicio',
                sortable: true
            },
            {
                type    : 'fechaTime',
                key     : 'fin',
                label   : 'Fin',
                sortable: true
            }
        ]
      }
    },
    beforeMount() {
        this.inicializar()
    },
    methods: {
        inicializar(){
            this.reload()
        },
        async reload () {
            let response = await this.peticionGeneral('getGuardiaHoras',{voluntario_id:this.userData.voluntario_id},false);
            response.data.forEach(element => {
                element.verificador = element.verificador?.nombreCompleto    ?? '';
                element.delegacion = element.delegacion?.nombreLabel ?? '';
            });
            let data = response.data.reverse();
            this.data = data;
        },
        resetForm(){
            this.accion = 1;
            this.showForm = false
            this.showDetails = false
            this.openModalForm = false
            this.activeRow = null
            this.reload();
        },
        save(data){
            let validacion = moment(data.fin).isBefore(moment());
            if (validacion) {
                let payload = this.copyObject(data);
                payload.guardia_id = this.activeRow.id
                payload.accion = 7
               this.peticionAdministrar({payload : payload})
            } else {
                this.messageSweet({
                    message: 'La fecha final debe de ser menor o diferente de la actual',
                    icon: 'warning',
                });
            }
        },
        async peticionAdministrar(payload){
            await this.peticionGeneral('administrarGuardiaHoras',payload);
            this.resetForm();
        },
        nuevoRegistro () {
            this.activeRow = {};
            setTimeout(() => { this.showForm = true; }, 10);
        },
        editar (data) {
            this.canClose = data.fin == null;
            this.schemaMain[3].disabled = (data.fin != null)
            if (!this.isAdmin()) {
                this.schemaMain[3].min= this.fechaInput(data.inicio,'-',0,0,1,'');
                this.schemaMain[3].max= this.fechaInput(data.inicio,'+',0,0,0,'');
            }
            // this.schemaMain[3].min = fechaActual.setDate(fechaActual.getDate() - 2),
            this.activeRow = this.copyObject(data)
            this.showDetails = true;
        },
        onEliminar(data){
            this.messageConfirm({ confirmFunction: () => { this.peticionAdministrar({...data,accion : 3}) } })
        },
        async handleClosePersonal(data){
            this.loading();
            let response = await this.peticionGeneral('administrarGuardiaHoras',{
                payload : {
                    registroGuardiaVoluntario : this.itemVoluntario.id,
                    fechaFin : data.horaFinal,
                    accion : 6
                }
            });
            this.resetForm();
        },
    },
  }
  </script>

