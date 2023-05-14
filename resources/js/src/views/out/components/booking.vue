<template>
    <!-- Booking Start -->
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container-md">
            <div class="booking p-5">
                <div class="row g-5 align-items-center">
                    <div class="col-md-6 text-white">
                        <h1 class="text-white mb-4">¿Quieres reservar?</h1>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <a class="btn btn-outline-light py-3 px-5 mt-2" href="">Ver disponibilidad</a>
                    </div>
                    <div class="col-md-6">
                        <h1 class="text-white mb-4">Dejanos la chamba</h1>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <label class="col-12 text-white fw-bolder">Nombre:</label>
                            <b-form-input
                                id="input-2"
                                v-model="form.name"
                                placeholder="Introduce tu nombre"
                                required
                            />
                            <label class="col-12 text-white fw-bolder">Correo electronico:</label>
                            <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                placeholder="Introduce un correo valido"
                                required
                            />
                            <label class="col-12 text-white fw-bolder">Telefono:</label>
                            <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                placeholder="Introduce un correo valido"
                                required
                            />
                            <label class="col-12 text-white fw-bolder">Necesidades:</label>
                            <b-form-textarea
                                id="textarea"
                                v-model="text"
                                placeholder="Descripbe todo lo que requieras ..."
                                rows="3"
                                max-rows="6"
                            />
                            <div class=" mt-4 d-flex justify-content-between">
                                <b-button variant="outline-light">Enviar información</b-button>
                                <b-button variant="outline-danger">Reiniciar</b-button>
                            </div>
                            </b-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Booking Start -->
</template>
<script>
    import {

        BForm,
        BFormGroup,
        BFormInput,
        BFormSelect,
        BFormTextarea,
        BFormCheckbox,
        BButton
     } from 'bootstrap-vue'

    export default {
        name: 'Booking',
        components: {
            BForm,
            BFormGroup,
            BFormInput,
            BFormSelect,
            BFormTextarea,
            BFormCheckbox,
            BButton
        },
        data() {
            return {
                form: {
                email: '',
                name: '',
                text: '',
                food: null,
                checked: []
                },
                foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault()
                alert(JSON.stringify(this.form))
            },
            onReset(event) {
                event.preventDefault()
                // Reset our form values
                this.form.email = ''
                this.form.name = ''
                this.form.food = null
                this.form.checked = []
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                this.show = true
                })
            }
        }
    }
</script>
<style scoped>
.lbl > label[for="input-2"] {
    color: white!important;
}

.lbl > label[for="input-1"] {
    color: white!important;
}
</style>
