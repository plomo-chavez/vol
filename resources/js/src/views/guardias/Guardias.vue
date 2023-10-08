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
                    <ModalForm
                        :openModal="openModalForm"
                        :data ="itemVoluntario"
                        :formSchema="[
                            {
                                classContainer:'col-lg-4 col-md-6 col-12',
                                type        : 'input-dateTimer',
                                rules       : 'required',
                                name        : 'horaFinal',
                                value       : 'horaFinal',
                                label       : 'Hora Final',
                                today       : true
                            },
                        ]"
                        @handleSubmit="handleClosePersonal"
                        @handleCancelar="() => { openModalForm = false}"
                    />
                    <div v-for ="(item) in activeRow.voluntarios" class="col-12 p-1 d-flex align-items-center">
                        <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                        <div class="ml-1">
                            <h6 class="mb-0">{{ item.voluntario.nombreCompleto }}</h6>
                            <p class="col-12 p-0 m-0"><small >Inicio: {{formatoFechaYMD(item.fechaInicio, true)}}</small></p>
                            <p class="col-12 p-0 m-0"><small >Fin: {{formatoFechaYMD(item.fechaFin, true)}}</small></p>
                            <div class="col-12 p-0 m-0 mt-1" v-if="item.fechaFin == null">
                                <b-button
                                    size="sm"
                                    block
                                    variant="relief-danger"
                                    class="mx-auto"
                                    @click="() => { handelOpenModal(item) }"
                                >Checar salida</b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
  </template>
  <script>
  import { BCard, BCardBody, BButton, BAvatar} from 'bootstrap-vue'
    import FormFactory from '@currentComponents/FormFactory.vue'
    import VistaUno from '@currentComponents/VistaUno.vue'
    import customHelpers  from '@helpers/customHelpers'
    import formHoras  from '@/views/horas/formHoras.vue'
    import BTNAtras from '@currentComponents/BTNAtras.vue'
    import formDetailsHorasVoluntarias  from '@/views/horas/formDetailsHorasVoluntarias.vue'

    import ModalForm from '@currentComponents/ModalForm.vue'
    const moment = require('moment-timezone');
    // Establecer el huso horario a México (Ciudad de México)
    moment.tz.setDefault('America/Mexico_City');
  export default {
    name    : 'UI-GuardiasHV',
    mixins  : [customHelpers],
    components: {
        FormFactory,
        BTNAtras,
        BCard, 
        BCardBody,
        BButton,
        VistaUno,
        formHoras,
        formDetailsHorasVoluntarias,
        BAvatar,
        ModalForm,
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
        handelOpenModal(data){
            this.itemVoluntario = {...data}
            this.openModalForm = true;
        },
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
            this.schemaMain[3].min= this.fechaInput('-',0,0,1,''),
            this.schemaMain[3].max= this.fechaInput('+',0,0,0,''),
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

