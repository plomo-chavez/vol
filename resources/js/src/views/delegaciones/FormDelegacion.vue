<template>
    <div>
        <FormFactory
            class="col-10 mx-auto"
            withCard
            :data = 'activeRow'
            :schema="formSchema"
            @formExport="save"
            :formLive="true"
            @exportLive="changeForm"
            @cancelar="resetForm"
        />
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
        activeRow : {},
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
                key     : 'nombre',
                label   : 'Nombre',
                sortable: true
            },
        ]
      }
    },
    mixins : [customHelpers],
    beforeMount() {
        // this.inicializar()
    },
    methods: {
        save(){},
        resetForm(){},
        changeForm(data){
            let hayModificaciones = false;
            console.log('data',data);
            // let tmpDelegacion = (data.delegacion?.value ?? null) ;
            // if(tmpDelegacion != (this.dataForm.delegacion?.value ?? null)){
            //     if (tmpDelegacion != null) {
            //         this.formSchemaFormVoluntario[22].disabled = false;
            //         this.formSchemaFormVoluntario[22].catalogo = this.formatoToCatalogo(data['delegacion'].areas);
            //         hayModificaciones = true;
            //     } else {
            //         this.formSchemaFormVoluntario[22].disabled = true;
            //         this.formSchemaFormVoluntario[22].catalogo = [];
            //         hayModificaciones = true;
            //     }
            // }
            // if((data?.fechaNacimiento ?? null) != (this.dataForm?.fechaNacimiento ?? null)){
            //     var fechaActual = new Date();
            //     var fecha = new Date(data.fechaNacimiento);
            //     var diferenciaMilisegundos = fechaActual - fecha;
            //     var aniosDiferencia = diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 365.25);
            //     let diferencia = Math.floor(aniosDiferencia)
            //     data.edad =  diferencia < 0 ? 0 : Math.floor(aniosDiferencia);
            //     hayModificaciones = true;
            // }
            if (hayModificaciones) {
                // this.activeRow = this.copyObject(data)
                // this.viewForm = false;
                // setTimeout(() => { this.viewForm = true; }, 1);
            }
        },
        // inicializar(){
        //     this.schemaMain = this.copyObject(this.formSchema)
        //     this.reload()
        // },
        // reload () {
        //     peticiones
        //         .getCoordinaciones({})
        //         .then(response => {
        //             this.data = response.data.data
        //         })
        //         .catch(error   => { console.log(error); })
        // },
        // resetForm(){
        //     this.accion = 1;
        //     this.showForm = false
        //     this.activeRow = null
        //     this.reload();
        // },
        // save(data){
        //     let payload = this.copyObject(data);
        //     if (this.accion == 2) {
        //         payload.id = this.activeRow.id
        //     }
        //     payload.accion = this.accion
        //    this.peticionAdministrar(payload)
        // },
        // peticionAdministrar(payload){
        //     peticiones
        //         .administrarCoordinaciones({
        //             'payload' : payload,
        //         })
        //         .then(response => {
        //             this.messageSweet({
        //                 message: response.data.message,
        //                 icon: response.data.result ? 'success' : 'error',
        //             });
        //             this.resetForm();
        //         })
        //         .catch(error   => { console.log(error); })
        // },
        // nuevoRegistro () {
        //     this.schemaMain = this.copyObject(this.formSchema)
        //     this.activeRow = {};
        //     setTimeout(() => { this.showForm = true; }, 10);
        // },
        // editar (data) {
        //     this.accion = 2;
        //     let tmp = this.copyObject(data)
        //     if(typeof tmp.tipo_usuario != 'undefined') {
        //         tmp.tipoUsuario = {value : tmp.tipoUsuario_id, label : tmp.tipo_usuario.nombre}
        //     }
        //     tmp.accesoMovil = typeof tmp.accesoMovil  == 'number' ? (tmp.accesoMovil ? true:false) : false
        //     tmp.accesoWeb = typeof tmp.accesoWeb  == 'number' ? (tmp.accesoWeb ? true:false) : false
        //     tmp.bloqueado = typeof tmp.bloqueado  == 'number' ? (tmp.bloqueado ? true:false) : false
        //     this.activeRow = this.copyObject(tmp)
        //     let tmpSchema = this.copyObject(this.formSchema)
        //     tmpSchema.splice(3,1)
        //     this.schemaMain = tmpSchema
        //     this.showForm = true;
        // },
        // onEliminar(data){
        //     this.messageConfirm({
        //         confirmFunction: () => { this.peticionAdministrar({...data,accion : 3}) }
        //     })
        // }
    },
  }
  </script>

