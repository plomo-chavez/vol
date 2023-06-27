<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <b-img :src="appLogoImage" alt="logo" class="hh-50 mr-2" />
        <h2 class="brand-text text-primary my-auto">
          {{ appName }}
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
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
          <b-card-title
            class="mb-1 font-weight-bold"
            title-tag="h2"
          >
            Bienvenido! 👋
          </b-card-title>
          <b-card-text class="mb-2">
            Para poder acceder requieres tener un cuenta activa en el sitema y la forma de acceder es con el correo electronico y contraseña regitrada.
          </b-card-text>

          <!-- form -->
          <validation-observer
            ref="loginForm"
            #default="{invalid}"
          >
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent="login"
            >
              <!-- email -->
              <b-form-group
                label="Correo electronico"
                label-for="login-email"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  vid="email"
                  rules="required|email"
                >
                  <b-form-input
                    id="login-email"
                    v-model="userEmail"
                    :state="errors.length > 0 ? false:null"
                    name="login-email"
                    placeholder="john@example.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Contraseña</label>
                  <b-link :to="{name:'auth-forgot-password'}">
                    <small>Se te olvido la contraseña?</small>
                  </b-link>
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  vid="password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="Password"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- checkbox
              <b-form-group>
                <b-form-checkbox
                  id="remember-me"
                  v-model="status"
                  name="checkbox-1"
                >
                  Remember Me
                </b-form-checkbox>
              </b-form-group> -->

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                :disabled="invalid"
              >
                Acceder
              </b-button>
            </b-form>
          </validation-observer>

          <b-card-text class="text-center mt-2">
            <span>Aun no tienes acceso? </span>
            <b-link :to="{name:'auth-register'}">
              <span>&nbsp;Solicita tu acceso aqui !!</span>
            </b-link>
          </b-card-text>
        </b-col>
      </b-col>
    <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
  BFormCheckbox,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
  BAlert,
  VBTooltip,
} from 'bootstrap-vue'
import useJwt from '@/auth/jwt/useJwt'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store  from '@/store/index'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'
import customHelpers  from '@helpers/customHelpers'

import { $themeConfig } from '@themeConfig'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    BAlert,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility,customHelpers],
  data() {
    return {
      status: '',
      password: 'demo123',
      userEmail: 'plomo@gmail.com',
      sideImg: require('@/assets/images/login/login.png'),

      // validation rules
      required,
      email,
    }
  },
  setup() {
    // App Name
    const { appName, appLogoImage } = $themeConfig.app
    return {
      appName,
      appLogoImage,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    login() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
            this.loading()
          useJwt
            .login({
              email: this.userEmail,
              password: this.password,
            })
            .then(response => {
              let data = response.data;
              this.loading(false)
              if(data.result){
                const userData = data.data.user
                localStorage.setItem('userData', JSON.stringify(userData))
                store.commit('app/UPDATE_USERDATA', userData)
                localStorage.setItem('tk', data.data.user.token)
                this.$ability.update(userData.ability)
                this.$router.replace(getHomeRouteForLoggedInUser(userData.role)).then(() => {})
              }else{
                  this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: data.message,
                      // title: `Welcome ${userData.fullName || userData.username}`,
                      icon: 'CoffeeIcon',
                      variant: 'danger',
                      text: data.data,
                    },
                  })
              }
            })
            .catch(error => {
              console.log(error);
              this.$refs.loginForm.setErrors(error.response.data.error)
            })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '~@resources/scss/vue/pages/page-auth.scss';
</style>
