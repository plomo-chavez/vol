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
        <div v-if="activeData != null" >
            <h3 class="col-12 text-center"> {{ activeData.label }}</h3>
            <b-tabs content-class="pt-1" fill @input="handleTabChange">
                <b-tab>
                    <template #title>
                        <font-awesome-icon icon="fa-solid fa-house" />
                        <span class="d-none d-sm-block">Información de la delegación</span>
                    </template>
                    <div class="d-flex text-center">
                        <FormFactory
                            class="ww-600 mx-auto"
                            withCard
                            :data = 'activeData'
                            :schema="schema"
                            @formExport="mtdSave"
                            @cancelar="mtdCancelar"
                        />
                    </div>
                </b-tab>
                <b-tab>
                    <template #title>
                        <font-awesome-icon :icon="['fas', 'users']" />
                        <span class="d-none d-sm-block">Coordinadores</span>
                    </template>
                    <div class="d-flex flex-wrap">
                        <div v-for="(item) in coordinadores" class="mb-2 wwfull d-flex justify-content-center ">
                            <div class="d-flex flex-wrap divBorde p-1 ww-500">
                                <div class="ww-100 text-center d-flex flex-wrap justify-content-center" >
                                    <div class="wwfull mmb-2">
                                        <b-button
                                            pill
                                            v-if="item.pedirArchivos"
                                            size="sm"
                                            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                                            v-b-modal.modal-archivos
                                            variant="primary"
                                            @click="() => {administrarArchivos(item)}"
                                        >
                                            <font-awesome-icon icon="fa-solid fa-laptop-file" />
                                        </b-button>
                                    </div>
                                    <div class="wwfull mmb-2">
                                        <b-button
                                            pill
                                            size="sm"
                                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                                            variant="secondary"
                                            v-b-modal.modal-voluntarios
                                            @click="() => {selectVoluntario(item)}"
                                        >
                                            <font-awesome-icon icon="fa-solid fa-laptop-file" />
                                        </b-button>
                                    </div>
                                </div>
                                <div class="ww-100A">
                                    <h3 class="wwfull">{{ item.area.nombre }}</h3>
                                    <h5 v-if="item.voluntario" class="wwfull">{{ item.voluntario.nombreCompleto }}</h5>
                                    <p v-else class="wwfull text-center">No hay coordinador</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
        <h1 v-else class="col-12 text-center"> No se encontró el voluntario.</h1>
    </b-card>
    <!-- Modal de administrador de archivos de los coordinadores -->
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
                        <font-awesome-icon icon="fa-solid fa-signature" />
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
                        <font-awesome-icon icon="fa-solid fa-stamp" />
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
    <!-- Modal de selector de voluntarios -->
    <b-modal
        id="modal-voluntarios"
        ref="modal-voluntarios"
        content-class="shadow"
        title="Selector de voluntarios"
        no-fade
        hide-footer
        no-close-on-backdrop
    >
        <div class="d-flex flex-wrap">
            <FormFactory
                class="ww-600 mx-auto"
                withCard
                :data = 'activeRow'
                :schema="schemaVoluntarios"
                @formExport="addCoordinador"
                @cancelar="()=> {hideModal('modal-voluntarios')}"
            />
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
    import Ripple from 'vue-ripple-directive'

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
            Ripple,
        },
        mounted() {},
        data() {
            return {
                activeData : null,
                activeRow : null,
                coordinadores : [],
                schemaVoluntarios:[
                {
                    classContainer:' col-12',
                    type        : 'input-select',
                    name        : 'voluntario',
                    value       : 'voluntario',
                    label       : 'Volunatario:',
                    rules       : 'required',
                    catalogo    : 'voluntariosXDelegacion',
                    data        : {
                        delegacion_id   : this.data.id,
                        isLocal         : this.data.isLocal,
                        estado_id       : this.data.estado_id
                    },
                },
                ]
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
                let response =  await this.peticionGeneral('administrarDelegaciones',payload)
                this.coordinadores = response.data;
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
            selectVoluntario(item){
                let tmp = this.copyObject(item);
                if(tmp.id){
                    tmp.voluntario = {label:(tmp.voluntario.numeroInterno + ' - ' + tmp.voluntario.numeroAsociado + ' - '+ tmp.voluntario.nombreCompleto ),value:tmp.voluntario.id};
                }
                this.activeRow = tmp
            },
            async addCoordinador(data){
                data.voluntario_id  = data.voluntario.value;
                data.isLocal        = this.data.isLocal;
                data.delegacion_id  = this.data.id;
                data.area_id        = this.activeRow.area.id;
                data.accion         = 6;
                data.pedirArchivos  = this.activeRow.area.nombre == 'Voluntariado';
                data.subAccion      = this.activeRow.id ? 2:1;
                if(this.activeRow.id){
                    data.id = this.activeRow.id;
                }
                let response =  await this.peticionGeneral('administrarDelegaciones',{payload: {...data}})
                this.messageSweet({message:response.message})
                if(response.result){
                    this.hideModal('modal-voluntarios')
                    this.getCoordinadores();
                }
            },
        }
    }
</script>
<style></style>
