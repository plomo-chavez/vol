<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <b-link class="brand-logo">
        <vuexy-logo />
        <h2 class="brand-text text-primary ml-1">
          Vuexy
        </h2>
      </b-link>
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Register V2"
          />
        </div>
      </b-col>
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title class="mb-1">
           {{ code }} 🚀
          </b-card-title>
          <b-card-text class="mb-2">
            Toda tu información dentro de la información a la palma de tu mano.
          </b-card-text>
          <div>

            <h2 class="brand-text text-primary ml-1">
              Registro de nuevo voluntario
            </h2>
            <FormFactory
              ref="formRegistro"
              class="col-11 mx-auto"
              :data = 'activeRow'
              :btnsAccion="false"
              :schema="formSchema"
              @formExport="save"
            />
            <div class=" col-12 d-flex flex-wrap justify-content-end mb-1">
              <div>
                <b-form-group>
                  <b-form-checkbox
                    id="register-privacy-policy"
                    v-model="status"
                    name="checkbox-1"
                  >
                    Acepto los
                    <b-link>terminos y condiciones</b-link>
                  </b-form-checkbox>
                </b-form-group>
              </div>
            </div>
            <div class=" col-12 d-flex flex-wrap justify-content-between">
              <div>
                <b-button
                    size="sm"
                    variant="relief-secondary"
                    @click="onCancelar"
                >Cancelar</b-button>
              </div>
              <div>
                <b-button
                    size="sm"
                    variant="relief-primary"
                    @click="onSubmit"
                >Registrar información</b-button>
              </div>
            </div>
          </div>
        </b-col>
      </b-col>
    <!-- /Register-->
    </b-row>
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
  mixins: [togglePasswordVisibility,customHelpers],
  data() {
    return {
      code : '',

      formSchema: [
            {
                classContainer:'col-12',
                type        : 'input-text',
                name        : 'nombre',
                value       : 'nombre',
                label       : 'Nombre:',
                placeholder : 'Campo requerido',
                rules       : 'required',
            },
            {
                classContainer:'col-12',
                type        : 'input-text',
                name        : 'apellido paterno',
                value       : 'primerApellido',
                label       : 'Apellido paterno:',
                placeholder : 'Campo requerido',
                rules       : 'required',
            },
            {
                classContainer:'col-12',
                type        : 'input-text',
                name        : 'apellido materno',
                value       : 'segundoApellido',
                label       : 'Apellido materno:',
                placeholder : 'Campo opcional',
            },
            {
                classContainer:'col-12',
                type        : 'input-text',
                name        : 'curp',
                value       : 'curp',
                label       : 'CURP:',
                placeholder : 'Introduce un titulo',
                rules       : 'required',
            },
            {
                classContainer:'col-12',
                type        : 'input-asociado',
                value        : 'numeroAsociado',
                name       : 'numero de asosciado',
                label       : 'Numero de asociado:',
                placeholder : 'Campo opcional',
            },
            {
                classContainer:'col-12',
                type        : 'email',
                name        : 'correo electronico',
                value       : 'correo',
                label       : 'Correo electronico:',
                placeholder : 'Introduce un correo electronico valido',
                rules       : 'required|email',
            },
        ],
      status: false,
      username: '',
      userEmail: '',
      password: '',
      sideImg: require('@/assets/images/pages/register-v2.svg'),
      // validation
      required,
      email,
    }
  },
  beforeMount(){
    this.code = this.$route.params.code;
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/register-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
      onSubmit(){
          this.$refs.formRegistro.validationForm()
      },
      onCancelar(){
        this.$router.push({ name: 'login' });
      },
      save(data){
        if (this.status) {
          peticiones
            .registroOut({data})
            .then(response => {
                let tmp = response.data.data
                tmp.map((item) => {
                    item.tipoUsuario = item.tipo_usuario?.nombre ?? '';
                });
                this.data = tmp;
            })
            .catch(error   => { console.log(error); })
        } else {
          this.messageSweet({
              message: 'Requiere aceptar los terminos y condiciones para continuar.',
              icon: 'error',
          });
        }
      },
    register() {
      this.$refs.registerForm.validate().then(success => {
        if (success) {
          useJwt
            .register({
              username: this.username,
              email: this.userEmail,
              password: this.password,
            })
            .then(response => {
              useJwt.setToken(response.data.accessToken)
              useJwt.setRefreshToken(response.data.refreshToken)
              localStorage.setItem('userData', JSON.stringify(response.data.userData))
              this.$ability.update(response.data.userData.ability)
              this.$router.push('/')
            })
            .catch(error => {
              this.$refs.registerForm.setErrors(error.response.data.error)
            })
        }
      })
    },
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '~@resources/scss/vue/pages/page-auth.scss';
</style>
