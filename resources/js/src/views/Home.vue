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
                class="col-10 mx-auto"
            >

                <BCard
                    v-if="voluntario == null"
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
                    v-if="voluntario != null  && !showFormHoras"
                    class="col-12 p-2"
                >
                    <FormFactory
                        ref="formVoluntario"
                        class="col-12 mx-auto"
                        :btnsAccion="false"
                        :data = 'voluntario'
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
                            v-if="voluntario.id"
                                size="sm"
                                variant="relief-secondary"
                                @click="() => { showFormHoras = true }"
                            >Registrar horas voluntarias</b-button>
                            <b-button
                                size="sm"
                                variant="relief-primary"
                                @click="onSubmitFormVoluntario"
                            >Guardar</b-button>
                        </div>
                    </div>

                </BCard>
                <BCard
                    v-if="voluntario != null  && showFormHoras"
                    class="col-12 p-2"
                >
                <div class=" col-12 d-flex flex-wrap justify-content-between mb-1">
                        <div>
                            <p class="m-0 p-0"><span class="font-weight-bolder ">Numero de asociado:</span> {{ voluntario.numeroAsociado }} </p>
                            <p class="m-0 p-0"><span class="font-weight-bolder ">Nombre:</span>{{ getName() }}</p>
                        </div>
                        <div>
                            <b-button
                                size="sm"
                                variant="relief-info"
                                @click="() => { registroHoras.push({}) } "
                            >Agregar nuevo registro</b-button>
                        </div>
                    </div>
                    <div v-for="(index) in registroHoras.length ">
                        <div class=" col-12 d-flex flex-wrap justify-content-between">
                            <div><p class="font-weight-bolder ">Registro # {{ index }}</p></div>
                            <div>
                                <b-button
                                    size="sm"
                                    variant="relief-danger"
                                    @click="() => { registroHoras.splice((index - 1),1) }"
                                ><feather-icon icon="TrashIcon" /></b-button>
                            </div>
                        </div>
                        <FormFactory
                            ref="FormHoras"
                            class="col-12 mx-auto"
                            :btnsAccion="false"
                            :formLive="true"
                            :data = 'registroHoras[index -1]'
                            :schema="formSchemaFormHoras"
                            @exportLive="copyForm($event,index)"
                            @formExport="handleSubmitFormVoluntario"
                        />
                    </div>
                    <div class=" col-12 d-flex flex-wrap justify-content-between mt-1">
                        <div>
                            <b-button
                                size="sm"
                                variant="outline-danger"
                                @click="handleCancelFormHoras"
                            >Cancelar</b-button>
                        </div>
                        <div>
                            <b-button
                                size="sm"
                                variant="relief-primary"
                                @click="onSubmitFormHoras"
                            >Guardar horas</b-button>
                        </div>
                    </div>
                </BCard>
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
                    showCam : false,
                    showFormHoras : false,
                    registroHoras:[{}],
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
                            type        : 'input-asociado',
                            name        : 'numeroAsociado',
                            value       : 'numeroAsociado',
                            label       : 'Numero de asociado',
                            rules       : 'required',
                        },
                    ],
                    formSchemaFormHoras: [
                        {
                            classContainer:'col-12',
                            type        : 'input-text',
                            name        : 'actividad',
                            value       : 'actividad',
                            label       : 'Nombre de la actividad',
                            rules       : 'required',
                        },
                        {
                            classContainer:'col-md-4 col-12',
                            type        : 'input-select',
                            name        : 'coordinacion',
                            value       : 'coordinacion',
                            label       : 'Coordinacion',
                            rules       : 'required',
                            catalogo    : 'coordinaciones',
                        },
                        {
                            classContainer:'col-md-4 col-12',
                            type        : 'flat-pickr',
                            value       : 'fecha',
                            label       : 'Fecha',
                            name        : 'fecha',
                            rules       : 'required',
                        },
                        {
                            classContainer:'col-md-4 col-12',
                            type        : 'input-number',
                            name        : 'numeroHoras',
                            value       : 'numeroHoras',
                            label       : 'Numero de horas',
                            digitos     : 2,
                            rules       : 'required',
                            prefix      : '',
                        },
                    ],
                };
            },
            props: {
                msg: String,
            },
            methods: {
                onDecode(a, b, c) {
                    console.log(a, b, c);
                    this.handleSubmitFormBusqueda({numeroAsociado:a})
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
                copyForm(info,index){
                    this.registroHoras[index - 1] = this.copyObject(info)
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
                            let tmp = this.copyObject(response.data.data)
                            this.voluntario =  this.copyObject(typeof tmp[0] != 'undefined' ?  tmp[0] : filtro)
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
                getName(){
                    return this.voluntario.nombre + (this.voluntario?.primerApellido ?? '') + (this.voluntario?.segundoApellido ?? '');
                },
                handleSubmitFormVoluntario(info) {
                    let payload = {...info}
                    payload.accion = typeof this.voluntario.id == 'undefined' ? 1 : 2
                    if (typeof this.voluntario.id != 'undefined'){
                        payload.id = this.voluntario.id
                    }
                    this.peticionAdministrar(payload)
                },
                onSubmitFormVoluntario(){
                    this.$refs.formVoluntario.validationForm()
                },
                handleCancelFormHoras() {
                    this.showFormHoras = false;
                    this.registroHoras = [{}];
                },
                handleSubmitFormHoras() {
                    let tmp = []
                    this.registroHoras.map((item) => {
                        tmp.push({
                            ...item,
                            voluntario_id : this.voluntario.id,
                            coordinacion_id : item.coordinacion.value
                        })
                    })
                    peticiones
                        .administrarHorasVoluntarias({
                            'payload' : {accion: 4, data : tmp},
                        })
                        .then(response => {
                            this.messageSweet({
                                message: response.data.message,
                                icon: response.data.result ? 'success' : 'error',
                            });
                            if (response.data.result ) {
                                this.handleCancelFormHoras()
                            }
                        })
                        .catch(error   => { console.log(error); })
                },
                async onSubmitFormHoras() {
                    let tmp = 0;
                    await Promise.all(
                        this.$refs.FormHoras.map(async (item) => {
                        let rs = await item.isValid();
                            if (rs) {
                                tmp++;
                            }
                        })
                    );
                    if ( tmp == this.registroHoras.length){
                        this.handleSubmitFormHoras()
                    }
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
