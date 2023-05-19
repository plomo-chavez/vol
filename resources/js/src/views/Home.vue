    <template>
        <div class="hello">
            <BCard v-if="showCam"
                class="col-10 col-lg-6 mx-auto p-2"
            >
            <h3 class="col-12 text-center font-weight-bolder">Escanea el codigo de barras de tu credencial:</h3>
                <StreamBarcodeReader
                    class="my-2"
                    @decode="(a, b, c) => onDecode(a, b, c)"
                    @loaded="() => onLoaded()"
                />
                <div class=" col-12 d-flex flex-wrap justify-content-between">
                    <div>
                        <b-button
                            size="sm"
                            variant="outline-danger"
                            @click="() => { showCam = false }"
                        >Cancelar</b-button>
                    </div>
                    <div>
                    </div>
                </div>
            </BCard>
            <div v-else
                class="col-10"
            >

                <BCard
                    v-if="formBusqueda"
                    class="col-12 col-md-6 mx-auto p-1"
                >
                    <FormFactory
                        ref="formBusqueda"
                        class="col-12 mx-auto"
                        :btnsAccion="false"
                        :data = 'numeroAsociado == null ? {} : numeroAsociado'
                        :schema="formSchemaFormBusqueda"
                        @formExport="handleSubmitFormBusqueda"
                    />
                    <div class=" col-12 d-flex flex-wrap justify-content-between">
                        <div>
                            <b-button
                                size="sm"
                                variant="outline-danger"
                                @click="handleCancelFormBusqueda"
                            >Cancelar</b-button>
                        </div>
                        <div>
                            <b-button
                                size="sm"
                                variant="relief-secondary"
                                @click="() => { showCam = true }"
                            >Escanear</b-button>
                            <b-button
                                size="sm"
                                variant="relief-primary"
                                @click="onSubmitFormBusqueda"
                            >Buscar</b-button>
                        </div>
                    </div>
                </BCard>
                <BCard
                    v-else
                    class="col-12 p-2"
                >
                    <FormFactory
                        v-if="formVoluntario != null"
                        ref="formVoluntario"
                        class="col-12 mx-auto"
                        :btnsAccion="false"
                        :data = 'dataVoluntario'
                        :schema="formSchemaFormVoluntario"
                        @formExport="handleSubmitFormVoluntario"
                    />
                    <div class=" col-12 d-flex flex-wrap justify-content-between">
                        <div>
                            <b-button
                                size="sm"
                                variant="outline-danger"
                                @click="handleCancelFormVoluntario"
                            >Cancelar</b-button>
                        </div>
                        <div>
                            <b-button
                                size="sm"
                                variant="relief-primary"
                                @click="onSubmitFormVoluntario"
                            >Guardar</b-button>
                        </div>
                    </div>

                </BCard>
                <pre>{{ voluntario }}</pre>
            </div>
        </div>
    </template>

    <script>
        import { StreamBarcodeReader } from "vue-barcode-reader";
        import FormFactory from '@currentComponents/FormFactory.vue'
        import peticiones from '@/apis/usePeticiones'
        import customHelpers  from '@helpers/customHelpers'

        import {
            BCard,
            BCardTitle,
            BCardSubTitle,
            BCardBody,
            BModal,
            BButton
        } from 'bootstrap-vue'

        export default {
            name: "HelloWorld",
            mixins : [customHelpers],
            components: {
                StreamBarcodeReader,
                FormFactory,
                BCard,
                BCardTitle,
                BCardSubTitle,
                BCardBody,
                BModal,
                BButton
            },
            data() {
                return {
                    text: "",
                    id: null,
                    formBusqueda : true,
                    formVoluntario : false,
                    showCam : false,
                    dataVoluntario:null,
                    voluntario:null,
                    numeroAsociado:null,
                    formSchemaFormVoluntario: [
                        {
                            classContainer:'col-4',
                            type        : 'input-text',
                            name        : 'numeroAsociado',
                            value       : 'numeroAsociado',
                            label       : 'Numero de asociado',
                            rules       : 'required',
                            disabled    : true,
                        },
                        {
                            classContainer:'col-8',
                            type        : 'input-blank',
                        },
                        {
                            classContainer:'col-12 col-md-4',
                            type        : 'input-text',
                            name        : 'nombre',
                            value       : 'nombre',
                            label       : 'Nombre',
                            rules       : 'required',
                        },
                        {
                            classContainer:'col-12 col-md-4',
                            type        : 'input-text',
                            name        : 'primerApellido',
                            value       : 'primerApellido',
                            label       : 'Primer apellido:',
                            rules       : 'required',
                        },
                        {
                            classContainer:'col-12 col-md-4',
                            type        : 'input-text',
                            name        : 'segundoApellido',
                            value       : 'segundoApellido',
                            label       : 'Segundo apellido:',
                            rules       : 'required',
                        },
                        {
                            classContainer:'col-lg-6 col-md-6 col-12',
                            type        : 'email',
                            name        : 'correo',
                            value       : 'correo',
                            prefixIcon  : 'MailIcon',
                            rules       : 'required|email',
                            label       : 'Correo electronico',
                            placeholder : 'Introduce un correo electronico',
                        },
                        {
                            classContainer:'col-lg-6 col-md-6 col-12',
                            type        : 'input-phone',
                            name        : 'telefono',
                            value       : 'telefono',
                            label       : 'Telefono',
                            rules       : 'required',
                            placeholder: 'Introduce un telefono celular',
                        },
                    ],
                    formSchemaFormBusqueda: [
                        {
                            classContainer:'col-12',
                            type        : 'input-text',
                            name        : 'numeroAsociado',
                            value       : 'numeroAsociado',
                            label       : 'Numero de asociado',
                            rules       : 'required',
                        },
                    ],
                };
            },
            props: {
                msg: String,
            },
            methods: {
                setVoluntario(response,filtro){
                    let tmp = this.copyObject(response.data.data)
                    let vol = typeof tmp[0] != 'undefined' ?  tmp[0] : filtro
                    this.dataVoluntario =  this.copyObject(vol)
                    setTimeout(() => {

                    }, 100);
                },
                onDecode(a, b, c) {
                    console.log(a, b, c);
                    this.text = a;
                    if (this.id) clearTimeout(this.id);
                    this.id = setTimeout(() => {
                    if (this.text === a) {
                        this.text = "";
                    }
                    }, 5000);
                },
                onLoaded() {
                    console.log("load");
                },
                handleCancelFormBusqueda() {
                    this.$refs.formBusqueda.resetForm()
                    this.numeroAsociado = null;
                },
                handleSubmitFormBusqueda(info) {
                    let filtro = {'numeroAsociado':info.numeroAsociado}
                    peticiones
                        .getVoluntarios({
                            'payload' : filtro,
                        })
                        .then(response => {
                            this.formBusqueda = false;
                            this.setVoluntario(response,filtro)
                        })
                        .catch(error   => {
                            console.log(error);
                        })
                },
                onSubmitFormBusqueda(){
                    this.$refs.formBusqueda.validationForm()
                },
                handleCancelFormVoluntario() {
                    this.voluntario = null;
                },
                handleSubmitFormVoluntario(info) {
                    let payload = {...info}
                    payload.accion = typeof this.voluntario.id == 'undefined' ? 1 : 2
                    this.peticionAdministrar(payload)
                },
                onSubmitFormVoluntario(){
                    this.$refs.formVoluntario.validationForm()
                },
                peticionAdministrar(payload){
                    peticiones
                        .administrarVoluntarios({
                            'payload' : payload,
                        })
                        .then(response => {
                            this.messageSweet({
                                message: response.data.message,
                                icon: response.data.result ? 'success' : 'error',
                            });
                            if (response.data.result ) {
                                this.handleCancelForm()
                            }
                        })
                        .catch(error   => { console.log(error); })
                },
            },
        };
    </script>
    <style scoped>
    </style>
