<template>
    <div >
        <detailsRoom
            class="ww-300"
            v-for="(habitacion, index) in habitaciones"
            :key="'hab' + index"
            :habitacion="habitacion"
            @seleccionar="handleSeleccionarHabitacion"
        />
    </div>
</template>
<script>
    import catalogos from '@/apis/useCatalogo'
    import detailsRoom from '@currentComponents/detailsRoom.vue'

    export default {
        data () {
            return {
                habitaciones:[],
            }
        },
        components: {
            detailsRoom,
        },
        props: {
            reservacion: {
                type    : Object,
                default : {}
            },
        },
        beforeMount(){
            this.getHabitaciones()
        },
        methods:{
            handleSeleccionarHabitacion(data) {
                const hbs = typeof this.reservacion.habitaciones != 'undefined' ? [...this.reservacion.habitaciones,data] : [data]
                this.$emit('changeReservacion', {
                    ...this.reservacion,
                    habitaciones: hbs
                });
            },
            getHabitaciones(){
                let filtros = {
                    fechaInicio : this.reservacion?.fechaInicio ?? null,
                    fechaFin    : this.reservacion?.fechaFin    ?? null,
                }
                catalogos
                    .roomsAvailable({
                        filtros:filtros,
                    })
                    .then(response => {
                        this.habitaciones = response.data.data
                    })
                    .catch(error   => { console.log(error); })

            }
        },
    }
</script>

roomsAvailable
