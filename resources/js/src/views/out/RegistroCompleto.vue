<template>
  <div class="">
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
    }
  },
  beforeMount(){
    this.code = this.$route.params.code;
  },
  computed: {
  },
  methods: {
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '~@resources/scss/vue/pages/page-auth.scss';
</style>
