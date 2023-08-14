<template>
  <div>
    <div class=" col-12 d-flex flex-wrap justify-content-between mb-2">
        <div>
            <b-button
                size="sm"
                variant="outline-danger"
                @click="() => { $emit('handleAtras')}"
            >Atrás</b-button>
        </div>
        <div>
        </div>
    </div>
    <b-card class="col-12 p-2">
        <b-tabs content-class="pt-1" fill v-if="activeData != null" @input="handleTabChange">
            <b-tab>
                <template #title>
                    <feather-icon icon="ToolIcon" />
                    <span class="d-none d-sm-block">Información de la delegación</span>
                </template>
                <FormFactory
                    class="col-10 mx-auto"
                    withCard
                    :data = 'activeData'
                    :schema="schema"
                    @formExport="mtdSave"
                    @cancelar="mtdCancelar"
                />
            </b-tab>
            <b-tab>
                <template #title>
                    <feather-icon icon="UsersIcon" />
                    <span class="d-none d-sm-block">Coordinadores</span>
                </template>
                <div>
                    <div v-for="(item) in coordinadores" class="mb-2">
                        <h3 class="wwfull">{{ item.area.nombre }}</h3>
                        <div v-if="item.voluntario">
                            <h5  class="wwfull">{{ item.voluntario.nombreCompleto }}</h5>
                            <div v-if="item.pedirArchivos">
                                
                                <b-button
                                    variant="danger"
                                    v-b-modal.modal-archivos
                                    @click="() => {administrarArchivos(item)}"
                                >Atrás</b-button>
                            </div>
                        </div>
                        <h3 v-else class="wwfull">No hay coordinador</h3>
                    </div>
                </div>
                <div>

                </div>
            </b-tab>
        </b-tabs>
        <h1 v-else class="col-12 text-center"> No se encontró el voluntario.</h1>
    </b-card>
    <!-- disable animation-->
    <b-modal
        v-if="activeRow != null"
        id="modal-archivos"
        content-class="shadow"
        title="Administrador de archivos del coordinador"
        no-fade
        ok-only
        ok-title="Cerrar"
    >
        <div class="d-flex flex-wrap">
            <b-tabs content-class="pt-1" fill class="wwfull">
                <b-tab>
                    <template #title>
                        <feather-icon icon="Edit3Icon" />
                        <span class="d-none d-sm-block">Firma</span>
                    </template>
                    <div class="col-12">
                        <FileUpload 
                            btnSave
                            :tipoArchivo="'jpg,jpeg,png'"
                            :url="activeRow.uriFirma"
                            @saveFile="(event) => { guardarArchivo(event,'Firma')}"
                        />
                    </div>
                </b-tab>
                <b-tab>
                    <template #title>
                        <feather-icon icon="HashIcon" />
                        <span class="d-none d-sm-block">Sello</span>
                    </template>
                    <div class="col-12">
                        <FileUpload 
                            btnSave
                            :tipoArchivo="'jpg,jpeg,png'"
                            :url="activeRow.uriSello"
                            @saveFile="(event) => { guardarArchivo(event,'Sello')}"
                        />
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </b-modal>
  </div>
</template>

<script>
    import { 
        BTabs, 
        BTab, 
        BCard, 
        BButton,
        BModal, 
        VBModal, 
        BAlert, 
        BCardText } from 'bootstrap-vue'
    import formDatosVoluntario  from '@/views/voluntarios/formDatosVoluntario.vue'
    import tabHoras  from '@/views/voluntarios/tabHorasVoluntarias.vue'
    import FormFactory      from '@currentComponents/FormFactory.vue'
    import customHelpers  from '@helpers/customHelpers'
    import FileUpload from '@currentComponents/FileUpload.vue'

    export default {
        name: 'detallesDelegacion',
        mixins : [customHelpers],
        components: {
            BCard,
            BTabs,
            BTab,
            BButton,
            BModal, 
            VBModal, 
            BAlert, 
            BCardText, 
            FormFactory,
            formDatosVoluntario,
            tabHoras,
            FileUpload
        },    
        directives: {
            'b-modal': VBModal,
        },
        mounted() {},
        data() {
            return {
                activeData : null,
                activeRow : null,
                coordinadores : [],
            }
        },
        props: {
            data: {
                type    : Object,
                default : null
            },
            schema: {
                type    : Array,
                default : null
            },
            isRegistro: {
                type    : Boolean,
                default : false
            },
        },
        watch: {},
        computed: {},
        created() {},
        beforeMount(){
            if (this.data != null) {
                this.activeData = this.copyObject(this.data)               
            }
        },
        methods:{
            handleTabChange(tabID) {
                if(tabID == 1){
                    this.getCoordinadores();
                }
            },
            mtdSave(data){ this.$emit('formExport',data) },
            mtdCancelar(){ this.$emit('cancelar') },
            async getCoordinadores(){ 
                let payload = { 
                    payload : {
                        accion : 5,
                        delegacion_id : this.data.id
                    }
                };
                let tmp =  await this.peticionGeneral('administrarDelegaciones',payload)
                this.coordinadores = tmp.data;
            },
            administrarArchivos(data){
                this.activeRow = this.copyObject(data);
            },
            async guardarArchivo(data,tipo){
                const formData = new FormData();
                formData.append('filee',data.url);
                formData.append('file', data.file, data.name);
                formData.append('newName', tipo);
                formData.append('registro_id', this.activeRow.id);
                let resp =  await this.peticionGeneral('administarFilesDelegacionesCoordinadores',formData)
                this.messageSweet({message:resp.message})
            },
        }
    }
</script>
<style></style>
