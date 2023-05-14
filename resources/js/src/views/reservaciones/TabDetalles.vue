<template>
    <div>
        <div class="col">
            <p class="pb-0 mb-0 font-weight-bolder text-black">Fechas de la reservación:</p>
            <date-range-picker
                class="col-12 p-0 m-0 text-center"
                :ranges="false"
                :locale-data="locate"
                v-model="dateRange"
                :min-date="new Date()"
            />
        </div>
        <customPerson
            :reservacion="reservacion"
            @changeReservacion="handleChangeReservacion"
        />
    </div>
  </template>

  <script>
  import DateRangePicker from 'vue2-daterange-picker'
  import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
  import customPerson from '@currentComponents/customPerson.vue'
  import customHelpers  from '@helpers/customHelpers'
  export default {
    components: {
      DateRangePicker,
      customPerson
    },
    data() {
        return {
            locate : {
                direction: 'ltr',
                format: 'mm/dd/yyyy',
                separator: ' - ',
                applyLabel: 'Aplicar',
                cancelLabel: 'Cancelar',
                weekLabel: 'Sem',
                customRangeLabel: 'Rango Personalizado',
                daysOfWeek: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
                monthNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                firstDay: 0
            },
            dateRange: {},
        }
    },
    mixins : [customHelpers],
    props: {
        reservacion: {
            type    : Object,
            default : {}
        },
    },
    watch:{
        dateRange(value){
            console.log(value)
            this.$emit('changeReservacion', {
                ...this.reservacion,
                fechaInicio : this.formatoFechaYMD(value.startDate),
                fechaFin    : this.formatoFechaYMD(value.endDate),
            })
        },
    },
    methods: {
        handleChangeReservacion(data){
            this.$emit('changeReservacion', data);
        },
        changeValue(data){
            let payload = this.copyObject(this.reservacion)
            console.log(data)
        },
    },
  }
  </script>
