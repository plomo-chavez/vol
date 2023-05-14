<template>
    <b-modal
      ref="my-modal"
      hide-footer

      ok-only
      no-close-on-backdrop
      title="Using Component Methods"
    >
    <div class="col-12 col-md-10 mx-auto">
      <b-row>
        <b-col class=" col-12 mb-1">
          <b-form-group label="Usuario" >
            <b-form-input
              readonly
              v-model="user"
            />
          </b-form-group>
        </b-col>
        <b-col class=" col-12 mb-1">
          <b-form-group label="Contraseña" >
            <b-form-input
              :autocomplete="false"
              type="password"
              v-model="password"
              placeholder="Introduce contraseña"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </div>
    <b-row align-h="between">
      <b-button
        v-ripple.400="'rgba(186, 191, 199, 0.15)'"
        variant="outline-secondary"
        @click="goToLogout"
      > Cerrar sesión</b-button>
      <b-button
        @click="goToRefreshSession"
        variant="relief-primary"
      > Refrescar sesión</b-button>
    </b-row>
    </b-modal>
</template>

<script>
import {
  BButton,
  BModal,
  BCardText,
  BFormInput,
  BRow,
  BCol,
  BFormGroup,
}                         from 'bootstrap-vue'
import BCardCode          from '@core/components/b-card-code'
import Ripple             from 'vue-ripple-directive'
import store              from '@/store'
import { goToLogout }     from '@/auth/utils'
import customHelpers  from '@helpers/customHelpers'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'

import apis from '@/apis/useApis'
import useJwt             from '@/auth/jwt/useJwt'

export default {
  components: {
    BFormInput,
    BRow,
    BCol,
    BFormGroup,
    BCardCode,
    BButton,
    BModal,
    BCardText,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      user    : null,
      password: 'demo123',
    }
  },
  mixins : [customHelpers],
  props: {
    openModal: {
      type    : Boolean,
      default : false
    },
  },
  watch:{
    openModal(value){
      if(value){
        this.showModal();
      }
    },
  },

  beforeMount(){
    this.user = store.state.app.userData.name;
  },
  methods: {
    goToLogout(){
      goToLogout();
    },
    async goToRefreshSession(){
      if(this.password == null){
        this.messageToast({message :'Introduce la contraseña para continuar.',color:"danger"});
      }else{
          // useJwt
          //   .login({
          //     email   : store.state.app.userData.email,
          //     password: this.password,
          //   })
          //   .then(response => {
          //     console.log(response);
          //     // let data = response.data;
          //     // if(data.result){
          //     //   const userData = data.data.user
          //     //   localStorage.setItem('userData', JSON.stringify(userData))
          //     //   localStorage.setItem('tk', data.data.user.token)
          //     //   this.$ability.update(userData.ability)
          //     //   this.messageToast({message :`Bienvenido ${userData.name } !`,color:"success"});
          //     //   setTimeout(() => { goToLogout(); }, 500);
          //     // }else{
          //     //   this.messageToast({message :'Ocurrio un problema, intenta de nuevo', color:"danger"});
          //     //   setTimeout(() => { goToLogout(); }, 500);
          //     // }
          //   })
          //   .catch(error => {
          //     console.log(error);
          //     this.$refs.loginForm.setErrors(error.response.data.error)
          //   })


          useJwt
            .login({
              email   : store.state.app.userData.email,
              password: this.password,
            })
            .then(response => {
              console.log('response',response)
              let data = response.data;
              console.log('data',data)
              if(data.result){
                const userData = data.data.user
                console.log('userData',userData)
                localStorage.setItem('userData', JSON.stringify(userData))
                store.commit('app/UPDATE_USERDATA', userData)
                localStorage.setItem('tk', data.data.user.token)
                this.$ability.update(userData.ability)
                this.messageToast({message:'Sesión refrescada con exito.'});
                setTimeout(() => {
                  window.location.reload();
                }, );
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
    },
    login(){
      goToLogout();
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
  },
}
</script>
