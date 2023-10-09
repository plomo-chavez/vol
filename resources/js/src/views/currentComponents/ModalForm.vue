<template>
    <b-modal
      ref="my-modal"
      hide-footer
      v-model="show"
      ok-only
      no-close-on-backdrop
      :title="title"
    >
    <!-- v-if="showForm" -->
        <FormFactory
            class="col-12 mx-auto"
            :data = 'data'
            :btnLblSubmit="btnLblSubmit"
            :schema="formSchema"
            :formLive="formLive"
            @exportLive="changeForm"
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
      show      : false,
      showForm  : true,
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
    btnLblSubmit: {
      type    : String,
      default : 'Guardar'
    },
    formLive:{
      type    : Boolean,
      default : false,
    },
    formLive:{
      type    : Boolean,
      default : false,
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
      if(value){
        this.showModal();
      } else {
        this.hideModal();
      }
    },    
    show(value){
      if(value){
        this.showModal();
      } else {
        this.hideModal();
      }
    },
  },

  beforeMount(){
    this.user = store.state.app.userData.name;
  },
  methods: {
    changeForm(data){
        this.$emit('exportLive',data)
    },
    handleSubmit(data){
        this.$emit('handleSubmit',data)
    },
    handleCancelar(){
        this.$emit('handleCancelar');
    },
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
      this.$emit('handleCancelar')
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
  },
}
</script>
