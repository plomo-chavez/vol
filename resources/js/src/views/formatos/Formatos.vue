<template>
    <div>
        <div  class=" col-12 d-flex flex-wrap justify-content-between mb-2">
            <div v-if="btnAtras && tipoRegistro == null" class="ww-100">
                <b-button
                    size="sm"
                    variant="outline-danger"
                    @click="() => { tipoRegistro != null ? tipoRegistro = null : resetForm() }"
                >Atrás</b-button>
            </div>
        </div>
        <div v-if="tipoRegistro == null" class=" col-10 mx-auto d-flex  flex-wrap justify-content-center">
            <b-button
                size="sm"
                variant="relief-secondary"
                @click="() => { tipoRegistro = 'aniguedades'}"
            >Reporte de antigüedades</b-button>
        </div>
        <div v-if="tipoRegistro == 'aniguedades'">
            <V1Antiguedades 
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
import V1Antiguedades  from './Antiguedades.vue'
export default {
    name: 'formHoras',
    components: {
        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BModal,
        BButton,
        V1Antiguedades,
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
  