<template>
<div>
  <b-button
    size="sm"
    variant="primary"
    class="btn-tour-finish"
    @click="callApiWithHeaders()"
  >Con headers</b-button>
  <b-button
  
    size="sm"
    variant="primary"
    class="btn-tour-finish"
    @click="callApi()"
  >Sin headers</b-button>
  <!-- <ModalValidSession :openModal="openModal" /> -->
</div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import ModalValidSession from '@currentComponents/ModalValidSession.vue'
import customHelpers  from '@helpers/customHelpers'

import apis from '@/apis/useApis'

export default {
  components: {
    BButton,
    ModalValidSession,
  },
  data() {
    return {
      data: {},
      openModal:false,
    }
  },
  mixins : [customHelpers],
  created() {
    setTimeout(() => {
      this.openModal = true;
    }, 1000);
  },
  methods: {
    callApiWithHeaders(){
      setTimeout(() => {
        this.loading();
        setTimeout(() => { this.loading(false); }, 1000);
      }, 100);
    },
    callApi(){
      apis
        .pruebas({})
        .then(response => {})
        .catch(error   => { console.log(error); })
    },
  },
}
</script>
