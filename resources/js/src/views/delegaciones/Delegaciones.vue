<template>
    <div>
        <div v-if="!showForm">
            <!-- <pre>{{ data[0].tipo_usuario }}</pre> -->
            <VistaUno
                :config="config"
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
                v-if="accion == 1"
                class="col-10 mx-auto"
                withCard
                :data = 'activeRow'
                :schema="formSchema"
                @formExport="save"
                @cancelar="resetForm"
            />
            <detallesDelegacion
                v-else 
                :data="activeRow"
                :schema="formSchema"
                @formExport="save"
                @cancelar="resetForm"
            />
        </div>
    </div>
  </template>
  <script>
    import FormDelegacion   from './FormDelegacion.vue'
    import detallesDelegacion from './detallesDelegacion.vue'
    import FormFactory      from '@currentComponents/FormFactory.vue'
    import VistaUno         from '@currentComponents/VistaUno.vue'
    import peticiones       from '@/apis/usePeticiones'
    import customHelpers    from '@helpers/customHelpers'

  export default {
    components: {
        FormFactory,
        VistaUno,
        FormDelegacion,
        detallesDelegacion
    },
    data() {
      return {
        config:{
            cellActions: {
                btnEditar: true,
                btnEliminar: true,
                btnView: false,
                btnChangePassword: false,
            },
            index: true,
            buscador: true,
            btnNuevo: true,
            btnFiltrar: false,
            btnOtros: null,
        },
        accion: 1,
        activeRow : null,
        schemaMain : null,
        showForm : false,
        data:[],
        formSchema: [

            {
                classContainer:' col-lg-6 col-md-6 col-sm-12 col-12',
                type        : 'input-switch',
                name        : 'tipo delegacion',
                value       : 'isEstatal',
                label       : '¿La coordinacion es estatal?',
                rules       : 'required',
                labels      : {
                                'on' : "Si",
                                'off': "No"
                            },
            },
            {
                classContainer:' col-lg-6 col-md-6 col-sm-12 col-12',
                type        : 'input-select',
                name        : 'estado',
                value       : 'estado',
                label       : 'Estado:',
                rules       : 'required',
                catalogo    : 'estados',
            },
            {
                classContainer:' col-12 ',
                type        : 'input-text',
                name        : 'ciudad',
                value       : 'ciudad',
                label       : 'Ciudad',
                placeholder : 'Introduce una ciudad',
                rules       : 'required',
            },
        ],
        columnas : [
            {
                type    : 'text',
                key     : 'tipo',
                label   : 'Coordinación',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'estado',
                label   : 'Estado',
                sortable: true
            },
            {
                type    : 'text',
                key     : 'ciudad',
                label   : 'Ciudad',
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
            this.reload()
        },
        reload () {
            peticiones
                .getDelegaciones({})
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
            this.loading();
            peticiones
                .administrarDelegaciones({
                    'payload' : payload,
                })
                .then(response => {
                    this.loading(false);
                    this.messageSweet({
                        message: response.data.message,
                        icon: response.data.result ? 'success' : 'error',
                    });
                    this.resetForm();
                })
                .catch(error   => { 
                    this.loading(false);
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

