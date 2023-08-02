<template>
    <div>
        <div v-if="tipoRegistro == null" class=" col-10 mx-auto d-flex  flex-wrap justify-content-between">
            <b-button
                size="sm"
                variant="relief-secondary"
                @click="() => { tipoRegistro = 'porGuardia'}"
            >Por Guardia</b-button>

            <b-button
                size="sm"
                variant="relief-secondary"
                @click="() => { tipoRegistro = 'porEvento'}"
            >Por evento</b-button>

            <b-button
                size="sm"
                variant="relief-secondary"
                @click="() => { tipoRegistro = 'porHora'}"
            >Por Hora</b-button>
        </div>
        <div v-if="tipoRegistro == 'porGuardia'">
            <FormPorGuardia 
            />
        </div>
    </div>
</template>

<script>


import {
    BCard,
    BCardTitle,
    BCardSubTitle,
    BCardBody,
    BModal,
    BButton
} from 'bootstrap-vue'
import FormPorGuardia  from '@/views/horas/formPorGuardia.vue'
export default {
    name: 'formPorGuardia',
    components: {
        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BModal,
        BButton,
        FormPorGuardia
    },
    mounted() {},
    data() {
        return {
            tipoRegistro : null,
        }
    },
    props: {

    },
    watch: {

    },
    computed: {

    },
    created() {

    },
    beforeMount(){

    },
    methods:{

    }
}
</script>
<style>
</style>
  