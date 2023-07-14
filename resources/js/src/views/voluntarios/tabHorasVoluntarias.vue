<template>
  <div>

    <VistaUno
        :data="data"
        :columnas="columnas"
    />
  </div>
</template>

<script>

    import peticiones from '@/apis/usePeticiones'
    import customHelpers  from '@helpers/customHelpers'
    import VistaUno from '@currentComponents/VistaUno.vue'

    export default {
        name: 'tabHorasVoluntarias',
        mixins : [customHelpers],
        components: {
            VistaUno
        },
        mounted() {},
        data() {
            return {

                data:[],
                columnas : [
                    {
                        type    : 'text',
                        key     : 'actividad',
                        label   : 'Actividad',
                        sortable: true
                    },
                    {
                        type    : 'fecha',
                        key     : 'fecha',
                        label   : 'Fecha de la actividad',
                        sortable: true
                    },
                    {
                        type    : 'text',
                        key     : 'numeroHoras',
                        label   : 'Numero de horas',
                        sortable: true
                    },
                    {
                        type    : 'fechaTime',
                        key     : 'created_at',
                        label   : 'Fecha de registro',
                        sortable: true
                    },
                ]
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
                    .getHorasVoluntarias({
                        'payload' : {voluntario_id: this.voluntario_id},
                    })
                    .then(response => {
                        this.loading(false)
                        this.data = response.data.data;
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
