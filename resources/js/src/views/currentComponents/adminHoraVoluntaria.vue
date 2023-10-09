<template>
  <div>

    <ModalForm
        :openModal="openModalForm"
        :data ="itemVoluntario"
        :btnLblSubmit="'Cerrar guardia'"
        :formSchema="schemaFormModal"
        @handleSubmit="handleClosePersonal"
        @handleCancelar="() => { openModalForm = false}"
    />

    <div v-if="showDiv" class="col-12 p-1 d-flex align-items-center">
        <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
        <div class="ml-1">
            <h6 class="mb-0">{{ data.voluntario.nombreCompleto }}</h6>
            <p class="col-12 p-0 m-0"><small >Inicio: {{formatoFechaYMD(data.fechaInicio, true)}}</small></p>
            <p class="col-12 p-0 m-0"><small >Fin: {{formatoFechaYMD(data.fechaFin, true)}}</small></p>
            <div class="col-12 p-0 m-0 mt-1" v-if="data.fechaFin == null">
                <b-button
                    size="sm"
                    block
                    variant="relief-danger"
                    class="mx-auto"
                    @click="() => { handelOpenModal() }"
                >Checar salida</b-button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { BButton, BAvatar} from 'bootstrap-vue'
    import ModalForm from '@currentComponents/ModalForm.vue'

    import customHelpers  from '@helpers/customHelpers'
    export default {
        name: 'adminHoraVoluntaria',
        mixins  : [customHelpers],
        components: {
            BButton,
            BAvatar,
            ModalForm,
        },
        mounted() {},
        data() {
            return {
                openModalForm : false,
                itemVoluntario : null,
                schemaFormModal : [
                    {
                        classContainer:'col-lg-4 col-md-6 col-12',
                        type        : 'input-dateTimer',
                        rules       : 'required',
                        name        : 'horaFinal',
                        value       : 'horaFinal',
                        label       : 'Hora Final',
                        today       : true
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
        },
        methods:{
            handelOpenModal(){
                this.itemVoluntario = {...this.data}
                if (!this.isAdmin()) {
                    this.schemaFormModal[0].min= this.fechaInput(this.itemVoluntario.fechaInicio,'-',0,0,1,'');
                    this.schemaFormModal[0].max= this.fechaInput(this.itemVoluntario.fechaInicio,'+',0,0,0,'');
                }
                this.openModalForm = true;
            },
            async handleClosePersonal(data){
                this.loading();
                let response = await this.peticionGeneral('administrarGuardiaHoras',{
                    payload : {
                        registroGuardiaVoluntario : this.itemVoluntario.id,
                        fechaFin : data.horaFinal,
                        accion : 6
                    }
                });
                this.$emit('reset');
            },
        }
    }
</script>
<style>
</style>
