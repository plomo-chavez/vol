<template>
    <div>
        <div v-if="!showForm">
            <!-- <pre>{{ data[0].tipo_usuario }}</pre> -->
            <VistaUno
                :data="data"
                :columnas="columnas"
                :config="{
                    showCellActions: true,
                    cellActions: {
                        btnEditar: true,
                        btnEliminar: true,
                        btnChangePassword: true,
                    },
                    index: true,
                    buscador: true,
                    btnNuevo: true,
                    btnFiltrar: true,
                    btnOtros: null,
                }"
                @mdoEditar="editar"
                @mdoEliminar="onEliminar"
                @mtdNuevo="nuevoRegistro"
                @mtdFiltrar="reload"
                @mdoChangePassword="changePassword"
            />
        </div>
        <div v-if="showForm">
            <FormFactory

                class="col-10 mx-auto"
                withCard
                :data = 'activeRow'
                :schema="schemaMain"
                @formExport="save"
                :formLive="true"
                @exportLive="changeForm"
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
    import store from '@/store'

  export default {
    components: {
        FormFactory,
        VistaUno
    },
    data() {
      return {
        viewInputEstatal    : this.isTypeUser('admin y Nacional'),
        userData            : store.state.app.userData,
        accion              : 1,
        row                 : null,
        schemaMain          : null,
        showForm            : false,
        data                : [],
        formSchema          : [
            {
                classContainer:'col-12',
                type        : 'input-select',
                name        : 'voluntario',
                value       : 'voluntario',
                label       : 'Voluntario',
                catalogo    : [],
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-select',
                name        : 'tipo de usuario',
                value       : 'tipoUsuario',
                label       : 'Tipo de usuario',
                rules       : 'required',
                catalogo    : 'tipo-usuarios',
                filtros        : {
                    tipoUsuario_id : JSON.parse(localStorage.getItem('userData')).tipoUsuario_id
                }
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-text',
                name        : 'usuario',
                value       : 'usuario',
                label       : 'Usuario',
                placeholder : 'Introduce un usuario',
                rules       : 'required',
                prefixIcon  : 'UserIcon',
                disabled     : true
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
                label       : 'Correo electrónico',
                placeholder : 'Introduce un correo electrónico',
                disabled     : true
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
        formSchemaChange: [
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-label',
                name        : 'tipo de usuario',
                value       : 'tipoUsuario',
                label       : 'Tipo de usuario',
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-label',
                name        : 'usuario',
                value       : 'usuario',
                label       : 'Usuario',
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-label',
                name        : 'correo',
                value       : 'email',
            },
            {
                classContainer:'col-lg-4 col-md-6 col-12',
                type        : 'input-label',
                name        : 'telefono',
                value       : 'telefono',
                label       : 'Telefono',
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
        ],
        columnas : [
            {
                type    : 'text',
                key     : 'usuario',
                label   : 'Usuario',
                sortable: true,
            // thStyle : { width: "500px" },
            // tdStyle : { width: "500px" },
            },
            {
                type    : 'text',
                key     : 'tipoUsuario',
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
                key     : 'voluntarioName',
                label   : 'Voluntario',
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
        selectSchema(){
            let tmp = this.copyObject(this.formSchema);
            if (this.viewInputEstatal) {
                tmp = [
                    {
                        classContainer:'col-12',
                        type        : 'input-select',
                        name        : 'estado',
                        value       : 'estado',
                        label       : 'Estados:',
                        rules       : 'required',
                        catalogo    : 'estados',
                        formato     : {all:true}
                    },
                    ...tmp
                ]
            }
            console.log('tmp', tmp)
            this.schemaMain = tmp;
        },
        inicializar(){
            this.selectSchema();
            this.reload()
        },

        async changeForm(data){
            let hayModificaciones = false;
            if((data?.voluntario ?? null) != (this.activeRow?.voluntario ?? null)){
                data.email = data.voluntario.correo
                data.usuario = data.voluntario.nombre
                hayModificaciones = true;
            }
            if((data?.estado ?? null) != (this.activeRow?.estado ?? null)){
                let tmpPayload = { 
                    catalogo    : 'voluntariosXDelegacion',
                    filtros      : {
                        isLocal:false,
                        estado_id:data.estado.value,
                    },
                    formato:{
                        all         : true,
                        indexLabel  : 'label',
                    }
                }
                let response = await this.getCatalogo(tmpPayload);
                this.schemaMain[1].catalogo = this.formatoToCatalogo(response,true,'id','label') 
                hayModificaciones = true;
            }
            if (hayModificaciones) {
                this.activeRow = this.copyObject(data);
            }
        },
        reload () {
            peticiones
                .getUsuarios({})
                .then(response => {
                    let tmp = response.data.data
                    tmp.map((item) => {
                        item.tipoUsuario = item.tipo_usuario?.nombre ?? '';
                        item.voluntarioName = item.voluntario?.nombre ?? '';
                    });
                    this.data = tmp;
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
            if (this.accion == 2 || this.accion == 4 ) {
                payload.id = this.row.id
            }
            payload.tipoUsuario_id = payload.tipoUsuario.value
            payload.voluntario_id  = payload.voluntario?.value ?? this.row.voluntario_id
            payload.persona_id  = payload.voluntario?.value ?? this.row.voluntario_id
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
            this.selectSchema();
            this.activeRow = {};
            setTimeout(() => { this.showForm = true; }, 10);
        },
        editar (data) {
            this.accion = 2;
            let tmp = this.copyObject(data)
            if(typeof tmp.tipo_usuario != 'undefined' && tmp.tipo_usuario  != null) {
                tmp.tipoUsuario = {value : tmp.tipoUsuario_id, label : tmp.tipo_usuario.nombre}
            }
            tmp.accesoMovil = typeof tmp.accesoMovil  == 'number' ? (tmp.accesoMovil ? true:false) : false
            tmp.accesoWeb   = typeof tmp.accesoWeb  == 'number' ? (tmp.accesoWeb ? true:false) : false
            tmp.bloqueado   = typeof tmp.bloqueado  == 'number' ? (tmp.bloqueado ? true:false) : false
            tmp.voluntario = {...tmp.voluntario,value : tmp.voluntario_id, label : tmp.voluntario.label}
            this.activeRow  = this.copyObject(tmp)
            this.row  = this.copyObject(tmp)
            let tmpSchema   = this.copyObject(this.formSchema)
            tmpSchema.splice(3,1)
            this.schemaMain = tmpSchema
            this.showForm = true;
        },
        onEliminar(data){
            this.messageConfirm({
                confirmFunction: () => { this.peticionAdministrar({...data,accion : 3}) }
            })
        },
        changePassword(data){
            this.accion = 4;
            let tmp = this.copyObject(data)
            this.activeRow  = this.copyObject(tmp)
            this.row  = this.copyObject(tmp)
            this.schemaMain = this.copyObject(this.formSchemaChange)
            this.showForm = true;
        },
    },
  }
  </script>

