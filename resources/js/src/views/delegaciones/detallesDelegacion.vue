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
                    <feather-icon icon="ToolIcon" />
                    <span class="d-none d-sm-block">Autoridades</span>
                </template>
                <h3 class="col-12 text-center">Proximamente</h3>
            </b-tab>
        </b-tabs>
        <h1 v-else class="col-12 text-center"> No se encontró el voluntario.</h1>
    </b-card>
  </div>
</template>

<script>
    import { BTabs, BTab, BCard, BButton } from 'bootstrap-vue'
    import formDatosVoluntario  from '@/views/voluntarios/formDatosVoluntario.vue'
    import tabHoras  from '@/views/voluntarios/tabHorasVoluntarias.vue'
    import FormFactory      from '@currentComponents/FormFactory.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'
import { platform } from 'chart.js'

    export default {
        name: 'detallesDelegacion',
        mixins : [customHelpers],
        components: {
            BCard,
            BTabs,
            BTab,
            BButton,
            FormFactory,
            formDatosVoluntario,
            tabHoras,
        },
        mounted() {},
        data() {
            return {
                activeData : null,
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
        watch: {

        },
        computed: {

        },
        created() {

        },
        beforeMount(){
            if (this.data != null) {
                this.activeData = this.copyObject(this.data)               
            }
        },
        methods:{
            handleTabChange(tabID) {
                if(tabID == 1){
                    this.getAutoridades();
                }
            },
            mtdSave(data){ this.$emit('formExport',data) },
            mtdCancelar(){ this.$emit('cancelar') },
            getAutoridades(){ 
                let payload = {accion:5}
                // this.peticionGeneralAdministrar(peticiones.administrarDelegaciones,payload)
                let response = this.peticionAdministrar(payload)
            },
            peticionAdministrar(payload){
                this.loading();
                peticiones
                    .administrarDelegaciones({ 'payload' : payload, })
                    .then(response => {
                        this.loading(false);
                        return response
                    })
                    .catch(error   => { 
                        this.loading(false);
                        console.log(error); 
                    })
            },

        }
    }
</script>
<style>
</style>
