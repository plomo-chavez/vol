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
            <!-- <GeneratorTemplateEmail
                :data="activeRow"
                @cancelar="handleCancelar"
            /> -->
        </div>
    </div>
  </template>
  <script>
    import GeneratorTemplateEmail from '@currentComponents/GeneratorTemplateEmail.vue'
    import VistaUno from '@currentComponents/VistaUno.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'

  export default {
    components: {
        GeneratorTemplateEmail,
        VistaUno
    },
    data() {
      return {
        accion: 1,
        activeRow : null,
        showForm : false,
        data:[],
        columnas : [
            {
                type    : 'text',
                key     : 'nombre',
                label   : 'Nombre',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'title',
                label   : 'Titulo',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'slug',
                label   : 'Clave',
                sortable: true
            },
            {
                type    : 'dateYMD',
                key     : 'updated_at',
                label   : 'Ùlt. Modificaciòn',
                sortable: true,
            },
            {
                type    : 'dateYMD',
                key     : 'created_at',
                label   : 'Fecha creación',
                sortable: true,
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
            this.reload()
        },
        reload () {
            this.loading();
            peticiones
                .getTemplatesEmail({})
                .then(response => {
                    this.data = response.data.data
                    this.loading(false);
                })
                .catch(error   => { console.log(error); })
        },
        handleCancelar(){
            this.accion = 1;
            this.showForm = false
            this.activeRow = null
            this.reload();
        },
        peticionAdministrar(payload){
            peticiones
                .administrarTemplatesEmail({
                    'payload' : payload,
                })
                .then(response => {
                    this.messageSweet({
                        message: response.data.message,
                        icon: response.data.result ? 'success' : 'error',
                    });
                    this.handleCancelar();
                })
                .catch(error   => { console.log(error); })
        },
        nuevoRegistro () {
            this.activeRow = null;
            setTimeout(() => { this.showForm = true; }, 10);
        },
        editar (data) {
            this.accion = 2;
            let tmp = this.copyObject(data)
            this.activeRow = this.copyObject(tmp)
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

