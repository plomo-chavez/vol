<template>
  <div class="">
    <pre>{{ activeRow }}</pre>
  </div>
</template>

<script>
/* eslint-disable global-require */
import FormFactory from '@currentComponents/FormFactory.vue'
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
    FormFactory
  },
  mixins: [customHelpers],
  data() {
    return {
      code : '',
      activeRow : null,
    }
  },
  beforeMount(){
    this.code = this.$route.params.code;
    this.getRegistro();
  },
  computed: {
  },
  methods: {
    getRegistro(){
      this.loading();
      peticiones
            .validCode({code:this.code})
            .then(response => {
                this.loading(false);
                let tmp = response.data.data
                this.activeRow = tmp;
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
