<template>
<div>
  <FactoryForm
    :schema="schema"
    :btnCancelar="false"
    disabledForm
    @formExport="formExport"
    @cancelar="cancelar"
  />
</div>
</template>

<script>
import customHelpers  from '@helpers/customHelpers'
import FactoryForm from './currentComponents/FormFactory.vue'

export default {
  components: {
    FactoryForm
},
  data() {
    return {
      schema: [
        {
          type            : 'text',
          value            : 'name',
          label           : 'name',
          classContainer  : 'col-6',
          classLabel      : 'text',
          placeholder     : 'text',
          name            : 'text',
          rules           : '',
          // prefixIcon      : 'UserIcon',
          // prefixText      : '',
          // sufijoIcon      : 'UserIcon',
          // sufijoText      : '',
        },
        {
          type            : 'input-phone',
          value           : 'namee',
          label           : 'name',
          classContainer  : 'col-6',
          classLabel      : 'text',
          placeholder     : 'text',
          name            : 'text',
          rules           : '',
        },
        {
          type            : 'text-area',
          value           : 'textArea',
          label           : 'name',
          classContainer  : 'col-6',
          classLabel      : 'text',
          placeholder     : 'text',
          name            : 'textt',
          rules           : '',
          counterChar     : true,
        },
        {
          type            : 'flat-pickr',
          value           : 'flat-pickr',
          label           : 'flat-pickr',
          classContainer  : 'col-6',
          classLabel      : 'flat-pickr',
          name            : 'flat-pickr',
          rules           : '',
        }
      ],
    }
  },
  mixins : [customHelpers],
  created() {},
  methods: {
    formExport(form){
      console.log('form',form);
    },
    cancelar(){
      console.log('Cancelando');
    },
  },
}
</script>
