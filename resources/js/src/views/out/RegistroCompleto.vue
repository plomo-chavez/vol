<template>
  <div class="mt-4">
    <div v-if="voluntario_id == null"  class="col-10 mx-auto">
      <h3 class="col-12 text-center font-weight-bolder text-primary">El codigo es invalido</h3>
      <h5 class="col-12 text-center font-weight-bolder">Valida la información con tu coordinador o soporte del sistema</h5>
    </div>
    <div v-else class="col-10 mx-auto">
      <detallesVoluntario
          @handleAtras="resetForm"
          :voluntario_id="voluntario_id"
          :isRegistro="true"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import FormFactory from '@currentComponents/FormFactory.vue'
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
      voluntario_id : null,
    }
  },
  beforeMount(){
    this.code = this.$route.params.code;
    this.getRegistro();
  },
  computed: {
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
                this.voluntario_id = response.data.data;
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
