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
        <b-tabs content-class="pt-1" fill v-if="voluntario != null" >
            <b-tab>
                <template #title>
                    <feather-icon icon="ToolIcon" />
                    <span class="d-none d-sm-block">Información del voluntario</span>
                </template>
                <formDatosVoluntario
                    withCard
                    :isRegistro="isRegistro"
                    :data = 'voluntario'
                    :btnCancel="false"
                    exportActions
                />
            </b-tab>
            <b-tab>
                <template #title>
                    <feather-icon icon="ToolIcon" />
                    <span class="d-none d-sm-block">Información personal</span>
                </template>
                <h3 class="col-12 text-center">Proximamente</h3>
            </b-tab>
            <b-tab v-if="!isRegistro">
                <template #title>
                    <feather-icon icon="ToolIcon" />
                    <span class="d-none d-sm-block">Horas voluntarias</span>
                </template>
                <!-- <tabHoras
                    :voluntario_id="voluntario_id"
                /> -->
                <HorasVoluntarias
                    :voluntario_id="voluntario_id"
                />
            </b-tab>
            <b-tab v-if="!isRegistro">
                <template #title>
                    <feather-icon icon="ToolIcon" />
                    <span class="d-none d-sm-block">Expediente</span>
                </template>
                <h3 class="col-12 text-center">Proximamente</h3>
            </b-tab>
        </b-tabs>
        <h1 v-else class="col-12 text-center"> No se encontró el voluntario.</h1>
    </b-card>
  </div>
</template>

<script>
    import { BTabs, BTab, BCard, BButton, VBModal } from 'bootstrap-vue'
    import formDatosVoluntario  from '@/views/voluntarios/formDatosVoluntario.vue'
    import tabHoras  from '@/views/voluntarios/tabHorasVoluntarias.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'
    import HorasVoluntarias from '@currentComponents/HorasVoluntarias.vue'
    import Ripple from 'vue-ripple-directive'

    export default {
        name: 'detallesVoluntario',
        mixins : [customHelpers],
        components: {
            HorasVoluntarias,
            BCard,
            BTabs,
            BTab,
            BButton,
            formDatosVoluntario,
            tabHoras,
        },
        mounted() {},
        data() {
            return {
                voluntario : null,
            }
        },
        props: {
            voluntario_id: {
                type    : Number,
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
            if (this.voluntario_id != null) {
                this.loading()
                if (this.isRegistro) {
                    peticiones.getVoluntarioOut({'payload' : {id: this.voluntario_id},})
                    .then(response => {
                        this.loading(false)
                        if (response.data.data != null) {
                            let tmp = this.copyObject(response.data.data);
                            if (tmp.delegacion != null) {
                                tmp.delegacion = {
                                    'value':tmp.delegacion.id,
                                    'label':tmp.delegacion.nombre,
                                    'areas':tmp.delegacion.areas,
                                };

                                let tmpAreas = []
                                tmp.delegacion.areas.map((item,index) => { tmpAreas.push(item.area) })
                                tmp.delegacion.areas = tmpAreas;
                            }
                            tmp.nacionalidad    = tmp.nacionalidad != null ? { value: tmp.nacionalidad, label : tmp.nacionalidad} : null;
                            tmp.tipoSangre      = tmp.tipoSangre != null ? { value: tmp.tipoSangre, label : tmp.tipoSangre} : null;
                            tmp.sexo            = tmp.sexo != null ? { value: tmp.sexo, label : tmp.sexo} : null;
                            tmp.estadoCivil     = tmp.estadoCivil != null ? { value: tmp.estadoCivil, label : tmp.estadoCivil} : null;
                            tmp.area            = tmp.area != null ? { label: tmp.area.nombre, value : tmp.area.id} : null;

                            this.voluntario = tmp;
                        }
                    })
                    .catch(error   => { console.log(error); })
                } else {
                    peticiones.getVoluntario({'payload' : {id: this.voluntario_id},})
                    .then(response => {
                        this.loading(false)
                        if (response.data.data != null) {
                            let tmp = this.copyObject(response.data.data);
                            if (tmp.delegacion != null) {
                                tmp.delegacion = {
                                    'value':tmp.delegacion.id,
                                    'label':tmp.delegacion.nombreLabel,
                                    'areas':tmp.delegacion.areas,
                                };

                                let tmpAreas = []
                                tmp.delegacion.areas.map((item,index) => { tmpAreas.push(item.area) })
                                tmp.delegacion.areas = tmpAreas;
                            }
                            tmp.nacionalidad    = tmp.nacionalidad != null ? { value: tmp.nacionalidad, label : tmp.nacionalidad} : null;
                            tmp.tipoSangre      = tmp.tipoSangre != null ? { value: tmp.tipoSangre, label : tmp.tipoSangre} : null;
                            tmp.sexo            = tmp.sexo != null ? { value: tmp.sexo, label : tmp.sexo} : null;
                            tmp.estadoCivil     = tmp.estadoCivil != null ? { value: tmp.estadoCivil, label : tmp.estadoCivil} : null;
                            tmp.area            = tmp.area != null ? { label: tmp.area.nombre, value : tmp.area.id} : null;

                            this.voluntario = tmp;
                        }
                    })
                    .catch(error   => { console.log(error); })
                }                
            }
        },
        methods:{

        }
    }
</script>
<style>
</style>
