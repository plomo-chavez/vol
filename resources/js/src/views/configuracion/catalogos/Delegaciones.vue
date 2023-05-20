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
                type        : 'input-text',
                name        : 'nombre',
                value       : 'nombre',
                label       : 'Nombre',
                placeholder : 'Introduce un usuario',
                rules       : 'required',
            },
        ],
        columnas : [
            {
                type    : 'text',
                key     : 'nombre',
                label   : 'Nombre',
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
                .getCoordinaciones({})
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
                .administrarCoordinaciones({
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

