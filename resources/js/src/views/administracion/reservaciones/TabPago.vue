<template>
    <div>
        <div class="ww-400 my-auto mx-auto">
            <h3 class="col-12 text-center font-weigth-bolder mb-1">Tu reservacion esta casi lista !!</h3>
            <h6 class="col-12 text-center font-weigth-bold mb-1">Queda pendiente el pago, si gustas hacerlo de una vez da clic en el siguente boton.</h6>
            <div class="text-center">
                <b-button
                    size="sm"
                    class="my-auto fw-bolder"
                    variant="success"
                    disabled
                    @click="handleAgregar"
                >
                    <feather-icon icon="CreditCardIcon" size="16" />
                    <span>Hacer el pago en linea</span>
                </b-button>
            </div>
        </div>
    </div>
</template>
<script>
    import {
    BButton
    } from 'bootstrap-vue'
    export default {
        components: {
            BButton
        },
    }
</script>

