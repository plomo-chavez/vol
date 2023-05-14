<template>
    <div>
        <div v-if="!showForm">
            <!-- <pre>{{ data[0].tipo_usuario }}</pre> -->
            <VistaUno
                :data="data"
                :columnas="columnas"
                @mdoEditar="editar"
                @mdoEliminar="onEliminar"
                @mtdNuevo="nuevoRegistro"
                @mtdFiltrar="reload"
            />
        </div>
        <div v-if="showForm">
            <FormFactory
                class="col-10 mx-auto"
                withCard
                :data = 'activeRow'
                :schema="schemaMain"
                @formExport="save"
                @cancelar="resetForm"
            />
        </div>
    </div>
  </template>
  <script>
    import FormFactory from '@currentComponents/FormFactory.vue'
    import VistaUno from '@currentComponents/VistaUno.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'

  export default {
    components: {
        FormFactory,
        VistaUno
    },
    data() {
      return {
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
                key     : 'usuario',
                label   : 'Usuario',
                sortable: true
            },
            {
                key     : 'tipo_usuario.nombre',
                label   : 'Tipo de usuario',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'email',
                label   : 'Correo',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'telefono',
                label   : 'Telefono',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'persona',
                label   : 'Persona',
                sortable: true
            },
            {
                type    : 'switch',
                key     : 'accesoMovil',
                label   : 'Acceso movil',
                sortable: true
            },
            {
                type    : 'switch',
                key     : 'accesoWeb',
                label   : 'Acceso Web',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'estatus',
                label   : 'Estatus',
                sortable: true
            },
            {
                type    : 'text',
                type    : 'switch',
                key     : 'bloqueado',
                label   : 'Bloqueado',
                sortable: true
            },
            {
                type    : 'switch',
                key     : 'validado',
                label   : 'Validado',
                sortable: true
            },
        ]
      }
    },
    mixins : [customHelpers],
    beforeMount() {
        this.inicializar()
    },
    methods: {
        inicializar(){
            this.schemaMain = this.copyObject(this.formSchema)
            this.reload()
        },
        reload () {
            peticiones
                .getUsuarios({})
                .then(response => {
                    this.data = response.data.data
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
            peticiones
                .adminUsuarios({
                    'payload' : payload,
                })
                .then(response => {
                    this.messageSweet({
                        message: response.data.message,
                        icon: response.data.result ? 'success' : 'error',
                    });
                    this.resetForm();
                })
                .catch(error   => { console.log(error); })
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
            this.messageConfirm({
                confirmFunction: () => { this.peticionAdministrar({...data,accion : 3}) }
            })
        }
    },
  }
  </script>

