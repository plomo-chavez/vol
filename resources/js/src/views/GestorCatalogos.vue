<template>
    <div>
        <ModalForm
            :openModal="showModal"
            :data ="activeRow"
            :formSchema="schema"
            @handleSubmit="save"
            @handleCancelar="inicializar"
        />
        <VistaUno
            :data="data"
            :columnas="columnas"
            @mdoEditar="editar"
            @mdoEliminar="onEliminar"
            @mtdNuevo="nuevoRegistro"
            @mtdFiltrar="reload"
        />
    </div>
  </template>
  <script>
    import ModalForm from '@currentComponents/ModalForm.vue'
    import VistaUno from '@currentComponents/VistaUno.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'
    import formVoluntario  from '@/views/voluntarios/formVoluntario.vue'
    import detallesVoluntario  from '@/views/voluntarios/detallesVoluntario.vue'

  export default {
    components: {
        ModalForm,
        VistaUno,
        detallesVoluntario,
        formVoluntario
    },
    data() {
      return {
        catalogo: null,
        accion: 1,
        activeRow : null,
        schemaMain : null,
        showModal : false,
        data:[],
        schema: [

            {
                classContainer:'col-12',
                type        : 'input-text',
                name        : 'nombre',
                value       : 'nombre',
                label       : 'Nombre',
                placeholder : 'Introduce un nombre',
                rules       : 'required',
            },
            {
                classContainer:' col-4',
                type        : 'input-switch',
                name        : 'estatus',
                value       : 'estatus',
                label       : 'Activo',
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
                key     : 'nombre',
                label   : 'Nombre',
                sortable: true

            },
        ]
      }
    },
    watch: {
        '$route'(newValue, oldValue) {
            this.inicializar();
        }
    },
    mixins : [customHelpers],
    beforeMount() {
        this.inicializar();
    },
    methods: {
        console(){
        },
        inicializar(){
            this.showModal = false;
            this.catalogo = this.$route.name;
            this.reload()
        },
        async reload () {
            let payload = { catalogo : this.catalogo, }
            let response = await this.peticionGeneral('getCatalogos',payload,false);
            this.data = response.data;
        },
        nuevoRegistro () {
            this.activeRow = {};
            setTimeout(() => { this.showModal = true; }, 10);
        },
        async save(data){
            let payload = this.copyObject(data);
            payload.catalogo = this.catalogo;
            if (this.accion == 2) {
                payload.id = this.activeRow.id
            }
            payload.accion = this.accion
            let response = await this.peticionGeneral('administrarCatalogos',payload);
            if(response.result){ this.reload(); }
        },
        async handleEliminar(payload){
            let response = await this.peticionGeneral('administrarCatalogos',payload);
            if(response.result){ this.reload(); }
        },
        editar (data) {
            this.accion = 2;
            this.activeRow = this.copyObject(data)
            this.showModal = true;
            console.log('final editar');
        },
        onEliminar(data){
            this.messageConfirm({
                confirmFunction: () => { this.handleEliminar({...data,catalogo:this.catalogo,accion : 3}) }
            })
        }
    },
  }
  </script>

