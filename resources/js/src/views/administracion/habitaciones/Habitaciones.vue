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
            <FormHabitacion
                :info="activeRow"
                :accion="accion"
                @handleAtras="handleAtras"
            />
        </div>
    </div>
  </template>
  <script>
    import FormHabitacion from './FormHabitacion.vue'
    import VistaUno from '@currentComponents/VistaUno.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'

  export default {
    name:'Habitaciones',
    components: {
        FormHabitacion,
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
                type    : 'money',
                key     : 'tarifa',
                label   : 'Tarifa',
                thStyle: { width: "150px" },
                thClass: "text-center",
                tdClass: "text-center",
                sortable: true
            },
            {
                type    : 'object',
                key     : 'camas',
                label   : 'Camas',
                sortable: true,
                thStyle: { width: "200px" }
            },
            {
                type    : 'switch',
                key     : 'puedeFumar',
                label   : '¿Se puede fumar?',
                thClass: "text-center",
                tdClass: "text-center",
                thStyle: { width: "150px" },
                sortable: true
            },
            {
                type    : 'text',
                key     : 'estatus',
                label   : 'Estatus',
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
        handleAtras(){ this.showForm = false; },
        inicializar(){ this.reload() },
        reload () {
            peticiones
                .getHabitaciones({})
                .then(response => {
                    let tmpData = this.copyObject(response.data.data)
                    tmpData.map((item) => {
                        item.estatus = typeof item.estatus == 'object' ? (item.estatus?.nombre ?? '') : ''
                        item.camas = typeof item.camas != 'string' ? item.camas : JSON.parse(item.camas)
                        item.amenidades = typeof item.amenidades == 'string' ? item.amenidades : JSON.parse(item.amenidades)
                    })
                    this.data = this.copyObject(tmpData)
                })
                .catch(error   => { console.log(error); })
        },
        resetForm(){
            this.accion = 1;
            this.showForm = false
            this.activeRow = null
            this.reload();
        },
        nuevoRegistro () {
            this.activeRow = {};
            setTimeout(() => { this.showForm = true; }, 10);
        },
        editar (data) {
            this.accion = 2;
            let tmp = this.copyObject(data)
            console.log(typeof tmp.amenidades)
            console.log(typeof tmp.amenidades == 'string')
            console.log(typeof tmp.amenidades == 'string' ? JSON.parse(tmp.amenidades) : tmp.amenidades)
            tmp.amenidades = typeof tmp.amenidades == 'string' ? JSON.parse(tmp.amenidades) : tmp.amenidades
            tmp.camas = typeof tmp.camas == 'string' ? JSON.parse(tmp.camas) : tmp.camas
            tmp.puedeFumar = tmp.puedeFumar ? true:false
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

