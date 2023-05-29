<template>
    <div class="p-4">
        <BCard v-if="showFormCURP" class="col-12 col-md-6 mx-auto p-1" >
            <FormFactory
                ref="formCURP"
                class="col-12 mx-auto"
                :btnsAccion="false"
                :data = '{}'
                :schema="formSchemaCURP"
                @formExport="handleSubmitFormCURP"
            />
            <div class=" col-12 d-flex flex-wrap justify-content-between">
                <div>
                    <b-button
                        size="sm"
                        variant="outline-danger"
                        @click="handleCancelFormCURP"
                    >Cancelar</b-button>
                </div>
                <div>
                    <b-button
                        size="sm"
                        variant="relief-primary"
                        @click="onSubmitFormCURP"
                    >Buscar</b-button>
                </div>
            </div>
        </BCard>
        <div v-else>
            <BCard v-if="!showMensaje" class="col-12 col-md-6 mx-auto p-1" >
                <FormFactory
                    v-if="showFormVoluntario"
                    ref="formVoluntario"
                    class="col-12 mx-auto"
                    :btnsAccion="false"
                    :data = 'dataForm'
                    formLive
                    @exportLive="formCopy"
                    :schema="formSchemaVoluntario"
                    @formExport="handleSubmitFormVoluntario"
                />
                <div class=" col-12 d-flex flex-wrap justify-content-between">
                    <div>
                        <b-button
                            size="sm"
                            variant="outline-danger"
                            @click="handleCancel"
                        >Cancelar</b-button>
                    </div>
                    <div>
                        <b-button
                            size="sm"
                            variant="relief-primary"
                            @click="onSubmitFormVoluntario"
                        >Buscar</b-button>
                    </div>
                </div>
            </BCard>

            <BCard v-else class="col-12 col-md-6 mx-auto p-1" >
                <h2 class="col-12 text-center fw-weight-bold">La CURP introducida ya esta registrada !!...</h2>
                <h6 class="col-12 text-center fw-weight-bold">Si es un error coménteselo a tu coordinador de Voluntariado</h6>
                <div class=" col-12 d-flex flex-wrap justify-content-between">
                    <div>
                        <b-button
                            size="sm"
                            variant="outline-danger"
                            @click="handleCancel"
                        >Cancelar</b-button>
                    </div>
                    <div></div>
                </div>
            </BCard>
        </div>
    </div>
</template>

<script>
import FormFactory from '@currentComponents/FormFactory.vue'
import peticiones from '@/apis/usePeticiones'
import catalogos from '@/apis/useCatalogo'
import customHelpers  from '@helpers/customHelpers'
import formVoluntario  from '@/views/voluntarios/formVoluntario.vue'

import {
    BCard,
    BCardTitle,
    BCardSubTitle,
    BCardBody,
    BModal,
    BButton
} from 'bootstrap-vue'

export default {
    name: "OutRegistro",
    mixins : [customHelpers],
    components: {
        formVoluntario,
        FormFactory,
        BCard,
        BCardTitle,
        BCardSubTitle,
        BCardBody,
        BModal,
        BButton
    },
    mounted() {},
    data() {
        return {
            showFormVoluntario:true,
            showFormCURP:true,
            showMensaje:false,
            formSchemaCURP:[
                {
                    classContainer:'col-12',
                    type        : 'input-text',
                    name        : 'curp',
                    value       : 'curp',
                    label       : 'CURP:',
                    rules       : 'required',
                },
            ],
            formSchemaVoluntario: [
                    {
                        classContainer:'col-12',
                        type        : 'input-text',
                        name        : 'curp',
                        value       : 'curp',
                        label       : 'CURP:',
                        disabled    : true,

                    },
                    {
                        classContainer:'col-12',
                        type        : 'input-text',
                        name        : 'nombre',
                        value       : 'nombre',
                        label       : 'Nombre',
                        rules       : 'required',
                    },
                    {
                        classContainer:'col-12',
                        type        : 'input-text',
                        name        : 'primerApellido',
                        value       : 'primerApellido',
                        label       : 'Primer apellido:',
                        rules       : 'required',
                    },
                    {
                        classContainer:'col-12',
                        type        : 'input-text',
                        name        : 'segundoApellido',
                        value       : 'segundoApellido',
                        label       : 'Segundo apellido:',
                        rules       : 'required',
                    },
                    {
                        classContainer:'col-12',
                        type        : 'email',
                        name        : 'correo',
                        value       : 'correo',
                        prefixIcon  : 'MailIcon',
                        rules       : 'required|email',
                        label       : 'Correo electronico',
                        placeholder : 'Introduce un correo electronico',
                    },
                    {
                        classContainer:'col-12',
                        type        : 'input-phone',
                        name        : 'telefono',
                        value       : 'telefono',
                        label       : 'Telefono',
                        rules       : 'required',
                        placeholder: 'Introduce un telefono celular',
                    },
                    {
                        classContainer:' col-12 ',
                        type        : 'input-select',
                        name        : 'estado',
                        value       : 'estado',
                        catalogo    : 'estados',
                        label       : 'Estado:'
                    },
                    {
                        classContainer:' col-12 ',
                        type        : 'input-select',
                        name        : 'delegacion',
                        value       : 'delegacion',
                        label       : 'Delegación'
                    },
                    {
                        classContainer:' col-12 ',
                        type        : 'input-select',
                        name        : 'area',
                        value       : 'area',
                        label       : 'Area:'
                    },
                    {
                        classContainer:' col-12 ',
                        type        : 'input-select',
                        name        : 'tipoAsociado',
                        value       : 'tipoAsociado',
                        catalogo    : 'tiposAsociado',
                        label       : 'Tipo de asociado:'
                    },
                    {
                        classContainer:'col-12',
                        type        : 'flat-pickr',
                        value       : 'fechaIngresoInstitucion',
                        name        : 'fecha de ingreso a la institucion',
                        label       : 'Fecha de Ingreso a la Institución',
                        rules       : 'required',
                    },
            ],
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

        formCopy(dataForm) {
    const oldEstado = this.dataForm?.estado ?? null;
    const oldDelegacion = this.dataForm?.delegacion ?? null;
    this.dataForm = this.copyObject(dataForm);
    let termino = true;

  if (dataForm.estado !== oldEstado || dataForm.delegacion !== oldDelegacion) {
    this.loading(true);
    this.showFormVoluntario = false;


    if (dataForm.delegacion != oldDelegacion) {
      this.dataForm.area = null;
      this.formSchemaVoluntario[8].catalogo = [];
      if (!(dataForm.delegacion === null)) {
        this.formSchemaVoluntario[8].catalogo = this.dataForm.delegacion.areas;
      }
    }
    if (dataForm.estado !== oldEstado) {
        this.dataForm.delegacion = null;
        this.dataForm.area = null;
        this.formSchemaVoluntario[7].catalogo = [];
        this.formSchemaVoluntario[8].catalogo = [];
      if (!(dataForm.estado === null)) {
        termino = false
        catalogos
          .getDelegacionesWithAreas({ payload: { estado: dataForm.estado.value } })
          .then((response) => {
            let tmp = response.data.data;
            let delegaciones = [];
            let requests = tmp.map((item) => {
              return new Promise((resolve) => {
                let t = {
                  label: item.ciudad,
                  value: item.id,
                  areas: [],
                };
                item.areas.map((area) => {
                  t.areas.push({ label: area.area.nombre, value: area.area.id });
                });
                delegaciones.push(t);
                resolve();
              });
            });
            Promise.all(requests).then(() => {
              console.log(delegaciones);
              this.formSchemaVoluntario[7].catalogo = delegaciones;
              setTimeout(() => {
                this.showFormVoluntario = true;
                this.loading(false);
              }, 5);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    if (termino) {
              setTimeout(() => {
                this.showFormVoluntario = true;
                this.loading(false);
              }, 5);

    }
  }
},



        handleCancel() {
            this.showFormCURP = true;
            this.showMensaje = false;
            this.dataForm = {}
        },
        onSubmitFormCURP(){ this.$refs.formCURP.validationForm() },
        onSubmitFormVoluntario(){ this.$refs.formVoluntario.validationForm() },
        handleCancelFormCURP() { this.$refs.formCURP.resetForm() },
        handleSubmitFormCURP(info) {
            if (this.esCurpValido(info.curp)){
                this.loading()
                let filtro = {'curp':info.curp}
                peticiones
                    .validCurp({ 'payload' : filtro,})
                    .then(response => {
                        this.loading(false)
                        console.log(response)
                        this.showFormCURP = false
                        if (response.data.data) {
                            this.dataForm = this.copyObject(info)
                        } else {
                            this.showMensaje = true;
                        }
                        // let tmp = this.copyObject(response.data.data)
                        // this.voluntario =  this.copyObject(typeof tmp[0] != 'undefined' ?  tmp[0] : filtro)
                    })
                    .catch(error   => {
                        console.log(error);
                    })
            } else {
                this.messageSweet({
                    message: 'La curp introducida es incorrecta.',
                    icon: 'error',
                });
            }
        },
        handleSubmitFormVoluntario(info){
            let tmp =  this.copyObject(info)
            tmp.estado_id = tmp.estado.value
            tmp.delegacion_id = tmp.delegacion.value
            tmp.tipoAsociado_id = tmp.tipoAsociado.value
            tmp.area_id = tmp.area.value
            console.log(tmp);
        },

    }
}
</script>
<style>
</style>
