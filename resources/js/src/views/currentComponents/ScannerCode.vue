<template>
    <component 
      v-bind:is="isModal ? 'b-modal' : 'b-card'"
      ref="my-modal"
      hide-footer

      ok-only
      no-close-on-backdrop
      :title="'Modal escaner'"
    >
    <h3 
      v-if="loading"
      class="col-12 m-0 p-0 font-weight-bolder text-primary text-center"
    >Cargando camara!!....</h3>
      <StreamBarcodeReader

        ref="scann"
        @decode="(a, b, c) => onDecode(a, b, c)"
        @loaded="() => onLoaded()"
      ></StreamBarcodeReader>
      <!-- Input Value: {{ text || "Nothing" }} -->
    </component>
  </template>

  <script>
  import { StreamBarcodeReader } from "vue-barcode-reader";

  export default {
    name: "ScannerCode",
    components: {
      StreamBarcodeReader,
    },
    data() {
      return {
        loading : true,
        text: "",
        id: null,
      };
    },
    beforeMount(){
      this.loading = true;
    },
    props: {
      msg: String,
      openScann: { type: Boolean, default: false },
      isModal: { type: Boolean, default: false },
    },
    // http://sccrm.mx/c.php?t=DbyMvZc91nqhFNKLqA3wwphBk&a=42403
    watch:{
      openScann(value){
        if(value){
          this.showModal();
        } else {
          this.hideModal();
        }
      },
      text(value){
        if(value != ''){
          this.$emit('changeText',this.text)
        }
      },
    },
    methods: {
      onDecode(a, b, c) {
        // console.log(a, b, c);
        this.text = a;
        if (this.id) clearTimeout(this.id);
        this.id = setTimeout(() => {
          if (this.text === a) {
            this.text = "";
          }
        }, 5000);
      },
      onLoaded() {
        this.loading = false;
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
  };
  </script>
  <style scoped>
  </style>
