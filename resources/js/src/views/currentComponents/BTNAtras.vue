<template>
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
</template>

<script>
import { BButton } from 'bootstrap-vue'
    export default {
        name: 'btnAtras',
        components: {
            BButton
        },
        mounted() {},
        data() {
            return {

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
