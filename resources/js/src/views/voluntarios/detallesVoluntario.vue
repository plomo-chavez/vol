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
                <formVoluntario
                    withCard
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
            <b-tab>
                <template #title>
                    <feather-icon icon="ToolIcon" />
                    <span class="d-none d-sm-block">Horas voluntarias</span>
                </template>
                <tabHoras
                    :voluntario_id="voluntario_id"
                />
            </b-tab>
            <b-tab>
                <template #title>
                    <feather-icon icon="ToolIcon" />
                    <span class="d-none d-sm-block">Formación</span>
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
    import formVoluntario  from '@/views/voluntarios/formVoluntario.vue'
    import tabHoras  from '@/views/voluntarios/tabHorasVoluntarias.vue'
    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'

    export default {
        name: 'detallesVoluntario',
        mixins : [customHelpers],
        components: {
            BCard,
            BTabs,
            BTab,
            BButton,
            formVoluntario,
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
                peticiones
                    .getVoluntarios({
                        'payload' : {id: this.voluntario_id},
                    })
                    .then(response => {
                        this.loading(false)
                        if (response.data.data.length == 1 ) {
                            this.voluntario = response.data.data[0];
                        }
                    })
                    .catch(error   => { console.log(error); })
            }
        },
        methods:{

        }
    }
</script>
<style>
</style>
