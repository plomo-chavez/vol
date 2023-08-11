<template>
    <div>
        <div v-if="!showForm">
            <!-- <pre>{{ data[0].tipo_usuario }}</pre> -->
            <VistaUno
                :data="data"
                :config="config"
                :showCellActions="!isVerificador"
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
    </div>
  </template>
  <script>
    import FormFactory from '@currentComponents/FormFactory.vue'
    import VistaUno from '@currentComponents/VistaUno.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'
    import formVoluntario  from '@/views/voluntarios/formVoluntario.vue'
    import formHoras  from '@/views/horas/formHoras.vue'

  export default {
    components: {
        FormFactory,
        VistaUno,
        formHoras
    },
    data() {
      return {
        config:{
            cellActions: {
                btnEditar: false,
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
        schemaMain : null,
        showForm : false,
        data:[],
        formSchema: [
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
        ]
      }
    },
    mixins : [customHelpers],
    beforeMount() {
        // this.isVerificador = this.userData.tipoUsuario == 'Verificador Horas Voluntarias';
        this.inicializar()
    },
    methods: {
        inicializar(){
            this.schemaMain = this.copyObject(this.formSchema)
            this.reload()
        },
        reload () {
            peticiones
                .getHorasVoluntarias({})
                .then(response => {
                    let data = response.data.data;
                    data.forEach((element,index) => {
                        if(element['voluntario'] != null) {
                            data[index]['voluntario'] = element.voluntario.nombre + ' ' + element.voluntario.primerApellido + ' ' + element.voluntario.segundoApellido;      
                            data[index]['numeroAsociado'] = element.voluntario.numeroAsociado; 
                        }     
                    });
                    this.data = data;
                })
                .catch(error   => { console.log(error); })
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
        peticionAdministrar(payload){
            this.loading()
            peticiones
                .administrarVoluntarios({
                    'payload' : payload,
                })
                .then(response => {
                    this.loading(false)
                    this.messageSweet({
                        message: response.data.message,
                        icon: response.data.result ? 'success' : 'error',
                    });
                    this.resetForm();
                })
                .catch(error   => {
                    this.loading(false)
                    console.log(error);
                })
        },
        nuevoRegistro () {
            this.schemaMain = this.copyObject(this.formSchema)
            this.activeRow = {};
            setTimeout(() => { this.showForm = true; }, 10);
        },
        editar (data) {
            this.accion = 2;
            let tmp = this.copyObject(data)
            if(typeof tmp.tipo_usuario != 'undefined') {
                tmp.tipoUsuario = {value : tmp.tipoUsuario_id, label : tmp.tipo_usuario.nombre}
            }
            tmp.accesoMovil = typeof tmp.accesoMovil  == 'number' ? (tmp.accesoMovil ? true:false) : false
            tmp.accesoWeb = typeof tmp.accesoWeb  == 'number' ? (tmp.accesoWeb ? true:false) : false
            tmp.bloqueado = typeof tmp.bloqueado  == 'number' ? (tmp.bloqueado ? true:false) : false
            this.activeRow = this.copyObject(tmp)
            let tmpSchema = this.copyObject(this.formSchema)
            tmpSchema.splice(3,1)
            this.schemaMain = tmpSchema
            this.showForm = true;
        },
        onEliminar(data){
            console.log('eliminar')
            this.messageConfirm({
                confirmFunction: () => { this.peticionAdministrar({...data,accion : 3}) }
            })
        }
    },
  }
  </script>

