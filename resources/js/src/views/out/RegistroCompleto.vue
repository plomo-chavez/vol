<template>
  <div class="mt-4">
    <div v-if="voluntario == null"  class="col-10 mx-auto">
      <h3 class="col-12 text-center font-weight-bolder text-primary">El codigo es invalido</h3>
      <h5 class="col-12 text-center font-weight-bolder">Valida la información con tu coordinador o soporte del sistema</h5>
    </div>
    <div v-else class="col-10 mx-auto">
      <h3>Registro de voluntario</h3>
      <p>Para concluir con tu registro, rellena el siguiente formulario por favor:</p>
      <FormDatosVoluntario
          withCard
          :isRegistro="true"
          :data = 'voluntario'
          btnCancel
          @handleCancelar="() => { resetForm() }"
          exportActions
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import FormFactory from '@currentComponents/FormFactory.vue'
import FormDatosVoluntario  from '@/views/voluntarios/formDatosVoluntario.vue'

import detallesVoluntario  from '@/views/voluntarios/detallesVoluntario.vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import customHelpers  from '@helpers/customHelpers'
import peticiones from '@/apis/usePeticiones'
import {
BRow,
BCol,
BLink,
BButton,
BForm,
BFormCheckbox,
BFormGroup,
BFormInput,
BInputGroup,
BInputGroupAppend,
BImg,
BCardTitle,
BCardText,
} from 'bootstrap-vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import useJwt from '@/auth/jwt/useJwt'

export default {
  components: {
    VuexyLogo,
    FormDatosVoluntario,
    BRow,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup, 
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    // validations
    ValidationProvider,
    ValidationObserver,
    FormFactory,
    detallesVoluntario,
  },
  mixins: [customHelpers],
  data() {
    return {
      code : '',
      voluntario : null,
    }
  },
  beforeMount(){
    if (this.codeExterno != null){
      this.code = this.codeExterno;
      this.getRegistro();
    }
  },
  computed: {
  },
    props: {
      codeExterno: { type: String, default: false },
    },
  methods: {
    resetForm(){
      this.$router.push('/login');
    },
    getRegistro(){
      this.loading();
      peticiones
            .validCode({code:this.code})
            .then(response => {
                this.loading(false);
                if(response.data.data != null){
                  let tmp = this.copyObject(response.data.data);
                  if (tmp.delegacion != null) {
                    tmp.delegacion = {
                        'value':tmp.delegacion.id,
                        'label':tmp.delegacion.nombreLabel,
                        'areas':tmp.delegacion.areas,
                    };

                    let tmpAreas = []
                    tmp.delegacion.areas.map((item,index) => { tmpAreas.push(item.area) })
                    tmp.delegacion.areas = tmpAreas;
                  }
                  tmp.nacionalidad    = tmp.nacionalidad != null ? { value: tmp.nacionalidad, label : tmp.nacionalidad} : null;
                  tmp.tipoSangre      = tmp.tipoSangre != null ? { value: tmp.tipoSangre, label : tmp.tipoSangre} : null;
                  tmp.sexo            = tmp.sexo != null ? { value: tmp.sexo, label : tmp.sexo} : null;
                  tmp.estadoCivil     = tmp.estadoCivil != null ? { value: tmp.estadoCivil, label : tmp.estadoCivil} : null;
                  tmp.area            = tmp.area != null ? { label: tmp.area.nombre, value : tmp.area.id} : null;
                  this.voluntario = tmp;
                }
            })
            .catch(error   => {
                this.loading(false);
                console.log(error); 
            })
    },
    
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '~@resources/scss/vue/pages/page-auth.scss';
</style>
