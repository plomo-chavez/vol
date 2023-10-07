<template>
<div>
  <p
    :for="input.name"
    :class="(typeof input.classLabel != 'undefined' ? input.classLabel + ' m-0 p-0 ' : '') + ' font-weight-bolder p-0 m-0' " class=""
  > {{ typeof input.label != 'undefined' ? input.label : '' }} </p>
  
  <b-form-checkbox-group 
    class=" wwfull  " 
    switches 
    v-model="dataInput" 
    @input="handleOptionChange"
    :stacked="(typeof input.stacked != 'undefined' ? input.stacked : false)"
    :multiple="(typeof input.multiple != 'undefined' ? input.multiple : false)"
  >
  <div :class=" ' wwfull ' + (typeof input.classSwitch == 'undefined' ? '' : ' d-flex flex-wrap' )">
    <!-- style="width: 50%!important;" -->
    <template v-for="(option, index) in options">
        <b-form-checkbox
          :key="index"
          :value="option.value"
          switches
          :class="[
            (typeof input.stacked != 'undefined' ? '' : ' mmb-1 '), 
            (typeof input.classSwitch == 'undefined' ? '' : ' m-0 mmb-2 '+ input.classSwitch +' ' ),
          ]"
        >
          {{ option.label }}
        </b-form-checkbox>
      </template>
  </div>
  </b-form-checkbox-group>
</div>
</template>
  
  <script>
  import { BFormCheckbox, BFormCheckboxGroup } from 'bootstrap-vue';
  import customHelpers from '@helpers/customHelpers';
  
  export default {
    components: {
      BFormCheckbox,
      BFormCheckboxGroup,
    },
    mixins: [customHelpers],
    props: {
        input: {
            type: Object,
            default: null,
        },
        data: {
            type: Array,
            default: () => null
        },
    },
    data() {
      
      return {
        options     : [],
        dataInput   : [], // Usamos un array para almacenar los valores seleccionados
        dataAllInput: [], // Usamos un array para almacenar los valores seleccionados
      };
    },
    watch: {
      data(){
        this.dataInput = this.data.map(item => item.value);
      },
    },
    async beforeMount() {
      this.options = await this.getCatalogo(this.input);
      if(this.data  != null){
        this.dataInput = this.data.map(item => item.value);
      }
    },
    mounted(){
      this.handleOptionChange();
    },
    methods: {
      handleOptionChange() {
        // Mapeamos los valores seleccionados a objetos completos de opciones
        this.dataAllInput = this.dataInput.map((value) => {
          return this.options.find((option) => option.value === value);
        });
        this.$emit('changeData',this.copyObject(this.dataAllInput));
      },
    },
  };
  </script>
<style>
.custom-switch:not(.custom-control-inline) .custom-control-label {
    margin-bottom: 0rem;
}
</style>