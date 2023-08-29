<template>
    <div>
        <div v-if="!showForm && !showDetails">
            <!-- <pre>{{ data[0].tipo_usuario }}</pre> -->
            <VistaUno
                :data="data"
                :config="config"
                :columnas="columnas"
                @mdoEditar="editar"
                @mdoEliminar="onEliminar"
                @mtdNuevo="nuevoRegistro"
                @mtdFiltrar="reload"
            />
        </div>
        <div v-if="showForm">
            <formHoras
                withCard
                v-if="accion == 1"
                :data = '{}'
                @handleSubmit="save"
                @handleCancelar="resetForm"
            />
        </div>
        <div v-if="showDetails">
            <formDetailsHorasVoluntarias
                :data="activeRow"
                @handleCancelar="resetForm"
            />
        </div>
    </div>
  </template>
  <script>
    import FormFactory from '@currentComponents/FormFactory.vue'
    import VistaUno from '@currentComponents/VistaUno.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'
    import formVoluntario  from '@/views/voluntarios/formVoluntario.vue'
    import formHoras  from '@/views/horas/formHoras.vue'
    import formDetailsHorasVoluntarias  from '@/views/horas/formDetailsHorasVoluntarias.vue'

  export default {
    components: {
        FormFactory,
        VistaUno,
        formHoras,
        formDetailsHorasVoluntarias,
    },
    data() {
      return {
        config:{
            cellActions: {
                btnEditar: true,
                btnEliminar: false,
                btnView: false,
                btnChangePassword: false,
            },
            index: true,
            buscador: true,
            btnNuevo: true,
            btnFiltrar: false,
            btnOtros: null,
        },
        userData: JSON.parse(localStorage.getItem('userData')),
        isVerificador : true,
        accion: 1,
        activeRow : null,
        showForm : false,
        showDetails : false,
        data:[],
        schemaMain: [
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-select',
                name        : 'persona',
                value       : 'persona',
                label       : 'Persona'
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-select',
                name        : 'tipo de usuario',
                value       : 'tipoUsuario',
                label       : 'Tipo de usuario',
                rules       : 'required',
                catalogo    : 'tiposUsuario',
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'text',
                name        : 'usuario',
                value       : 'usuario',
                label       : 'Usuario',
                placeholder : 'Introduce un usuario',
                rules       : 'required',
                prefixIcon  : 'UserIcon',
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'password',
                name        : 'contraseña',
                value       : 'contraseña',
                label       : 'Contraseña',
                placeholder : 'Introduce una contraseña',
                rules       : 'required',
                // rules       : 'required|min:6|max:12',
                prefixIcon  : 'LockIcon',
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'email',
                name        : 'correo',
                value       : 'email',
                prefixIcon  : 'MailIcon',
                rules       : 'required|email',
                label       : 'Correo electronico',
                placeholder : 'Introduce un correo electronico',
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-phone',
                name        : 'telefono',
                value       : 'telefono',
                label       : 'Telefono',
                rules       : 'required',
                placeholder: 'Introduce un telefono celular',
            },
            {
                classContainer:' col-lg-4 col-md-4 col-sm-12 col-12',
                type        : 'input-switch',
                name        : 'accesoMovil',
                value       : 'accesoMovil',
                label       : 'Acceso a la plataforma movil',
                rules       : 'required',
                labels      : {
                                'on' : "Si",
                                'off': "No"
                            },
            },
            {
                classContainer:' col-lg-4 col-md-4 col-sm-12 col-12',
                type        : 'input-switch',
                name        : 'accesoWeb',
                value       : 'accesoWeb',
                label       : 'Acceso a la plataforma web',
                rules       : 'required',
                labels      : {
                                'on' : "Si",
                                'off': "No"
                            },
            },
            {
                classContainer:' col-lg-4 col-md-4 col-sm-12 col-12',
                type        : 'input-switch',
                name        : 'bloqueado',
                value       : 'bloqueado',
                label       : '¿Esta bloqueado?',
                rules       : 'required',
                labels      : {
                                'on' : "Si",
                                'off': "No"
                            },
            },
        ],
        columnas : [
            {
                type    : 'text',
                key     : 'voluntario',
                label   : 'Voluntario',
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
    mixins : [customHelpers],
    beforeMount() {
        this.inicializar()
    },
    methods: {
        inicializar(){
            this.reload()
        },
        async reload () {
            let response = await this.peticionGeneral('getHorasVoluntarias',{voluntario_id:this.userData.voluntario_id},false);
            let data = response.data;
            this.data = data;
        },
        resetForm(){
            this.accion = 1;
            this.showForm = false
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

