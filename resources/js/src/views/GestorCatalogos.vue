<template>
    <div>
        <ModalForm
            :openModal="openModalForm"
            :data ="activeRow"
            :formSchema="schema"
            @handleSubmit="save"
            @handleCancelar="inicializar"
        />
        <VistaUno
            v-if="showV1"
            :data="data"
            :columnas="columnas"
            :config="{
                showCellActions: true,
                cellActions: {
                  btnEditar         : true,
                  btnEliminar       : true,
                  btnView           : false,
                  btnChangePassword : false,
                },
                index     : true,
                buscador  : true,
                btnNuevo  : true,
                btnFiltrar: false,
                btnOtros  : null,
            }"
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
    import customHelpers  from '@helpers/customHelpers'
import { timestamp } from '@vueuse/core'

  export default {
    components: {
        ModalForm,
        VistaUno,
    },
    data() {
      return {
        accion          : 1,
        showV1          : false,
        catalogo        : null,
        activeRow       : null,
        schemaMain      : null,
        openModalForm   : false,
        data            : [],
        schema          : [],
        columnas          : [],
        schemaMain: [
            {
                classContainer:'col-12',
                type        : 'input-text',
                name        : 'nombre',
                value       : 'nombre',
                label       : 'Nombre',
                placeholder : 'Introduce un nombre',
                rules       : 'required',
                focus: true
            },
        ],
        columnasMain : [
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
        '$route'(newValue, oldValue) { this.inicializar(); }
    },
    mixins : [customHelpers],
    beforeMount() {
        this.inicializar();
    },
    methods: {
        getNameCatalogo(){
            return  this.$route.name.replace("catalogo-", "");
        },
        getSchema(){
            this.showV1 = false;
            let tmpSchema = [...this.schemaMain]
            console.log('this.catalogo',this.catalogo);
            if(this.catalogo == 'tipo-subactividades-horas-voluntarias'){
                let item = {
                    classContainer:'col-12',
                    type        : 'input-select',
                    name        : 'actividad',
                    value       : 'actividad',
                    catalogo    : 'tipo-actividades-horas-voluntarias',
                    rules       : 'required',
                    label       : 'Tipo de acitvidades'
                };
                tmpSchema = [item,...tmpSchema]
            }
            if(this.catalogo == 'areas') {

                let item =  {
                    classContainer:'col-12',
                    classSwitch : ' col-6 ',
                    type        : 'input-multiple',
                    name        : 'cargos',
                    value       : 'cargos',
                    stacked     : true,
                    label       : 'Cargos:',
                    catalogo    : 'cargos',
                };
                tmpSchema = [...tmpSchema,item]
            }
            this.schema = [...tmpSchema]
            let tmpColumnas = [...this.columnasMain]
            if(this.catalogo == 'tipo-subactividades-horas-voluntarias'){
                let item = {
                    type    : 'text',
                    key     : 'actividad',
                    label   : 'Tipo actividad',
                    sortable: true
                };
                tmpColumnas = [item,...tmpColumnas]
            }
            this.columnas = this.copyObject(tmpColumnas)
            this.reload()
            setTimeout(() => { this.showV1 = true; }, 1);
        },
        inicializar(){
            this.catalogo = this.getNameCatalogo();
            this.getSchema();
            this.reset()
        },
        reset(){
            this.openModalForm = false;
            this.accion = 1;
            this.reload()
        },
        async reload () {
            this.openModalForm = false;
            let response = await this.peticionCatalogo(this.catalogo,{},{all:true });
            let tmp = this.copyObject(response);

            if(this.catalogo == 'tipo-subactividades-horas-voluntarias'){
                tmp.map((item,index) => {
                    tmp[index].actividad = item.actividad.nombre
                })
            }
            this.data = this.copyObject(tmp);
        },
        nuevoRegistro () {
            this.activeRow = {};
            setTimeout(() => { this.openModalForm = true; }, 10);
        },
        async save(data){

            let payload = this.copyObject(data);
            payload.catalogo = this.catalogo;
            if (this.accion == 2) {
                payload.id = this.activeRow.id
            }
            if(this.catalogo == 'tipo-subactividades-horas-voluntarias'){
                payload.actividad_id = payload.actividad.value
                delete(payload.actividad)
            }
            payload.accion = this.accion
            let response = await this.peticionGeneral('adminCatalogos',payload);
            if(response.result){ this.reset(); }
        },
        async handleEliminar(payload){
            let response = await this.peticionGeneral('adminCatalogos',payload);
            if(response.result){ this.reload(); }
        },
        editar (data) {
            this.accion = 2;
            let tmp = this.copyObject(data)
            if(this.catalogo == 'subtratamientos'){
                tmp.tratamiento = {value : tmp.tratamiento_id, label: tmp.tratamiento};
            }
            if(this.catalogo == 'areas'){
                tmp.cargos = this.formatoToCatalogo(tmp.cargos);
            }
            this.activeRow = this.copyObject(tmp)
            this.openModalForm = true;
        },
        onEliminar(data){
            this.messageConfirm({
                confirmFunction: () => { this.handleEliminar({...data,catalogo:this.catalogo,accion : 3}) }
            })
        }
    },
  }
  </script>

