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
                        btnEditar: false,
                        btnEliminar: false,
                        btnChangePassword: false,
                        btnView: true,
                    },
                    index: true,
                    buscador: true,
                    btnNuevo: false,
                    btnFiltrar: false,
                    btnOtros: null,
                }"
                @mtdFiltrar="reload"
                @mdoView="reimprimir"
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
        row : null,
        schemaMain : null,
        showForm : false,
        data:[],
        credencialTmp : null,
        formSchema: [
            {
                classContainer:'col-12',
                type        : 'input-select',
                name        : 'voluntario',
                value       : 'voluntario',
                catalogo    : 'voluntarios',
                data        : {
                    delegacion_id    : JSON.parse(localStorage.getItem('userData')).delegacion_id,
                    tipoUsuario_id   : JSON.parse(localStorage.getItem('userData')).tipoUsuario_id,
                },
                label       : 'Voluntario'
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
                label       : 'Correo electronico',
                placeholder : 'Introduce un correo electronico',
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
                key     : 'voluntario',
                label   : 'Voluntario',
                sortable: true,
            },
            {
                type    : 'fechaTime',
                key     : 'fechaEmision',
                label   : 'Fecha emision',
                sortable: true
            },
            {
                type    : 'fechaTime',
                key     : 'fechaVencimiento',
                label   : 'Fecha de vencimiento',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'emitio',
                label   : 'Emitio',
                sortable: true
            },
            {
                type    : 'text',
                type    : 'switch',
                key     : 'isActual',
                label   : 'Es actual',
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
        async reimprimir(data){
            console.log()
            if(!data.isActual){
                this.messageSweet({
                    message: 'Esta credencial no es la actual.',
                    icon: 'error',
                });
            }
            if(!this.validarFechaMayorAHora(data.fechaVencimiento)){
                this.messageSweet({
                    message: 'Esta credencial ya vencio',
                    icon: 'error',
                });
            }
            this.credencialTmp = data;
            this.messageConfirm({
                message             :'',
                title               :'¿Desea reimprimir esta credencial temporal?',
                icon                :'info',
                showCancelButton    : true,
                cancelButtonText    : 'No, cancelar',
                cancelFunction      : null,
                messageCancel       : false,
                confirmButtonText   : 'Si, reimprimir',
                confirmFunction     : () => { this.getCredencial(); },
            })
        },
        inicializar(){
            this.schemaMain = this.copyObject(this.formSchema)
            this.reload()
        },

        async getCredencial(){
                let payload = {
                    voluntario_id   : this.credencialTmp.voluntario_id,
                    emitio_id       : JSON.parse(localStorage.getItem('userData')).voluntario_id,
                    credencial_id   : this.credencialTmp.id,
                    documento       : 'credencialTemporalReimpresion',
                };
                let response =  await this.peticionPDF('generatePDFVoluntarios',payload)
                this.descargarPDF(response,this.credencialTmp.numeroInterno,'CredencialTemporal')
        },

        changeForm(data){
            let hayModificaciones = false;
            if((data?.voluntario ?? null) != (this.activeRow?.voluntario ?? null)){
                data.email = data.voluntario.correo
                data.usuario = data.voluntario.nombre
                hayModificaciones = true;
            }
            if (hayModificaciones) {
                this.activeRow = this.copyObject(data);
            }
        },
        async reload () {
            let response = await this.peticionGeneral('getCredencialesTemporales',{},false);
            this.data = response.data;
        },
        resetForm(){
            this.accion = 1;
            this.showForm = false
            this.activeRow = null
            this.reload();
        },    
    },
  }
  </script>

