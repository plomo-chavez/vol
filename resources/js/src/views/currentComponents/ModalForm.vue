<template>
    <b-modal
      ref="my-modal"
      hide-footer

      ok-only
      no-close-on-backdrop
      :title="title"
    >
    <pre>{{ formSchema }}</pre>
        <FormFactory
            class="col-12 mx-auto"
            :data = 'data'
            :schema="formSchema"
            @formExport="handleSubmit"
            @cancelar="handleCancelar"
        />
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
import FormFactory from '@currentComponents/FormFactory.vue'

import apis from '@/apis/useApis'
import useJwt             from '@/auth/jwt/useJwt'

export default {
  components: {
    BFormInput,
    BRow,
    FormFactory,
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
    title: {
      type    : String,
      default : 'Nuevo registro'
    },
    formSchema: {
      type    : Array,
      default : []
    },
    data: {
      type    : Object,
      default : {}
    },
  },
  watch:{
    openModal(value){
        console.log(value)
      if(value){
        this.showModal();
      }
    },
  },

  beforeMount(){
    this.user = store.state.app.userData.name;
  },
  methods: {
    handleSubmit(data){
        this.$emit('handleSubmit',data)
    },
    handleCancelar(){
        console.log('handleCancelar')
        this.$emit('handleCancelar');
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
