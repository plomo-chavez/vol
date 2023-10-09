<template>
  <div>

      <!-- v-if="" -->
    <ModalForm
        :openModal="openModalForm"
        :data ="dataForm"
        :btnLblSubmit="'Guardar horario'"
        :formSchema="schemaFormModal"
        :formLive="true"
        @exportLive="changeForm"
        @handleSubmit="handleSave"
        @handleCancelar="() => { openModalForm = false}"
    />
  </div>
</template>

<script>
import { BButton, BAvatar} from 'bootstrap-vue'
    import ModalForm from '@currentComponents/ModalForm.vue'

    import customHelpers  from '@helpers/customHelpers'

    const moment = require('moment-timezone');
    // Establecer el huso horario a México (Ciudad de México)
    moment.tz.setDefault('America/Mexico_City');
    export default {
        name: 'adminHorarioLaboralVoluntario',
        mixins  : [customHelpers],
        components: {
            BButton,
            ModalForm,
        },
        mounted() {},
        data() {
            return {
                openModalForm : false,
                dataForm : null,
                schemaFormModal : [],
                schemaMain : [
                    {
                        classContainer:' col-12 ',
                        type        : 'input-select',
                        name        : 'tipoHorario',
                        value       : 'tipoHorario',
                        rules       : 'required',
                        label       : 'Tipo de Horario',
                        catalogo    : [
                            {label:'24x48',value:'24x48'},
                            {label:'12x12',value:'12x12'},
                            {label:'Cecom 8 Hrs',value:'Cecom 8 Hrs'},
                        ],
                    }
                ],
                formTurnos:[
                    {
                        classContainer:' col-12 ',
                        type        : 'input-select',
                        name        : 'turno',
                        value       : 'turno',
                        label       : 'Turnos',  
                        catalogo    : [
                            {label : 'Matutino',    value: 'Matutino',  horario:{horaInicio:'07:00:00',horafin:'15:00:00'}},
                            {label : 'Vespertino',  value: 'Vespertino',horario:{horaInicio:'15:00:00',horafin:'23:00:00'}},
                            {label : 'Nocturno',    value: 'Nocturno',  horario:{horaInicio:'23:00:00',horafin:'07:00:00'}},
                        ],
                    }
                ],
                form24:[
                    {
                        classContainer:' col-6 ',
                        type        : 'flat-pickr',
                        formato     : 'DD-MM-YYYY',
                        name        : 'fechaInicio',
                        value       : 'fechaInicio',
                        label       : 'Fecha de inicio del periodo:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:' col-6 ',
                        type        : 'input-number',
                        digitos     : 2,
                        name        : 'numeroDias',
                        value       : 'numeroDias',
                        label       : 'Numero de días',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:' col-12 ',
                        type        : 'input-timer',
                        name        : 'horaInicio',
                        value       : 'horaInicio',
                        label       : 'Horario de:',
                        placeholder : 'Introduce un numero de interno',
                    },
                ],
                formHoras:[
                    {
                        classContainer:' col-6 ',
                        type        : 'input-timer',
                        name        : 'horaInicio',
                        value       : 'horaInicio',
                        label       : 'Horario de:',
                        placeholder : 'Introduce un numero de interno',
                    },
                    {
                        classContainer:' col-6 ',
                        type        : 'input-timer',
                        name        : 'horaFin',
                        value       : 'horaFin',
                        label       : 'a:',
                        placeholder : 'Introduce un numero de interno',
                    },
                ],
                formDias : [
                    {
                        classContainer:' col-12 ',
                        classSwitch : ' col-6 ',
                        type        : 'input-multiple',
                        name        : 'dias',
                        value       : 'dias',
                        stacked     : true,
                        label       : 'Dias',
                        catalogo    : [
                            {label : 'Lunes', value: 'Lunes'},
                            {label : 'Martes', value: 'Martes'},
                            {label : 'Miercoles', value: 'Miercoles'},
                            {label : 'Jueves', value: 'Jueves'},
                            {label : 'Viernes', value: 'Viernes'},
                            {label : 'Sabado', value: 'Sabado'},
                            {label : 'Domingo', value: 'Domingo'},
                        ],
                    },
                ],
            }
        },
        props: {
            data: {
                type    : Object,
                default : null
            },
            openModal:{
                type    : Boolean,
                default : false,
            },
            showDiv:{
                type    : Boolean,
                default : true,
            },
        },
        watch: {
            openModal () {
                this.handelOpenModal();
            }

        },
        computed: {

        },
        created() {

        },
        beforeMount(){
            this.schemaFormModal = [...this.schemaMain];
        },
        methods:{
            handelOpenModal(){
                let tmp = typeof this.data.horarioLaboral == 'string' ? JSON.parse(this.data.horarioLaboral) : {}
                this.changeForm(tmp)
                this.openModalForm = true;
            },

            changeForm(data){
                let tmp = []
                let hayModificaciones = false;
                let  dataTmp = {...data};
                if((data?.turno ?? null) != (this.dataForm?.turno ?? null)){
                    dataTmp = {...dataTmp,...this.dataForm.turno.horario}
                }
                if((data?.tipoHorario ?? null) != (this.dataForm?.tipoHorario ?? null)){       
                    switch(data.tipoHorario.value){
                        case '24x48':
                            let tmpFecha = moment();
                            dataTmp.numeroDias = 24
                            dataTmp.fechaInicio = tmpFecha;
                            dataTmp.horaInicio = '07:00:00'
                        tmp = [
                            ...this.schemaMain,
                            ...this.form24,
                        ]
                        break;
                        case '12x12':
                            dataTmp.dias = [
                                {label : 'Miercoles', value: 'Miercoles'},
                                {label : 'Jueves', value: 'Jueves'},
                                {label : 'Viernes', value: 'Viernes'},
                                {label : 'Sabado', value: 'Sabado'},
                                {label : 'Domingo', value: 'Domingo'},
                            ];
                            dataTmp.horaInicio = '08:00:00'
                            dataTmp.horaFin = '20:00:00'

                        tmp = [
                            ...this.schemaMain,
                            ...this.formHoras,
                            ...this.formDias,
                        ]
                        break;
                        case 'Cecom 8 Hrs':
                            dataTmp.dias = [
                                {label : 'Lunes', value: 'Lunes'},
                                {label : 'Martes', value: 'Martes'},
                                {label : 'Miercoles', value: 'Miercoles'},
                                {label : 'Jueves', value: 'Jueves'},
                                {label : 'Viernes', value: 'Viernes'},
                                {label : 'Sabado', value: 'Sabado'},
                                {label : 'Domingo', value: 'Domingo'},
                            ];
                        tmp = [
                            ...this.schemaMain,
                            ...this.formTurnos,
                            ...this.formDias,
                        ]
                        break;
                    }
                    hayModificaciones = true;
                }
                if (hayModificaciones) {
                    this.dataForm = {...dataTmp};
                    this.schemaFormModal = [...tmp]
                }
            },
            async handleSave(data){
                this.loading();
                let response = await this.peticionGeneral('administrarVoluntarios',{
                    payload : {
                        id : this.data.id,
                        accion : 2,
                        horarioLaboral : JSON.stringify(data),
                    }
                });
                this.$emit('reset');
            },
        }
    }
</script>
<style>
</style>
