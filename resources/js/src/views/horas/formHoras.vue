<template>
    <div>
        <div  class=" col-12 d-flex flex-wrap justify-content-between mb-2">
            <div v-if="btnAtras" class="ww-100">
                <b-button
                    size="sm"
                    variant="outline-danger"
                    @click="() => { tipoRegistro != null ? tipoRegistro = null : resetForm() }"
                >Atrás</b-button>
            </div>
            <div :class=" btnAtras ? 'ww-100A' : ' wwfull '">
                <h3>Formularios de registros de hora voluntarias</h3>
            </div>
        </div>
        <div v-if="tipoRegistro == null" class=" col-10 mx-auto d-flex  flex-wrap justify-content-between">
            <b-button
                size="sm"
                variant="relief-secondary"
                @click="() => { tipoRegistro = 'porGuardia'}"
            >Por Guardia</b-button>

            <b-button
                size="sm"
                variant="relief-secondary"
                @click="() => { tipoRegistro = 'porVoluntario'}"
            >Por voluntario</b-button>

            <!-- <b-button
                size="sm"
                variant="relief-secondary"
                @click="() => { tipoRegistro = 'porHora'}"
            >Por Hora</b-button> -->
        </div>
        <div v-if="tipoRegistro == 'porGuardia'">
            <FormPorGuardia 
            />
        </div>
        <div v-if="tipoRegistro == 'porVoluntario'">
            <formPorVoluntario 
            @handleAtras="() => { tipoRegistro = null }"
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
import formPorVoluntario  from '@/views/horas/formPorVoluntario.vue'
export default {
    name: 'formHoras',
    components: {
        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BModal,
        BButton,
        FormPorGuardia,
        formPorVoluntario
    },
    mounted() {},
    data() {
        return {
            tipoRegistro : null,
        }
    },
    props: {

        btnAtras: {
            type: Boolean,
            default: false,
        },
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
        resetForm(){
            this.$emit('handleCancelar');
        },
    }
}
</script>
<style>
</style>
  