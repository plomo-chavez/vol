<template>
  <div>
      <FormPorGuardia  v-if="layoutVerificador"/>
      <div v-else class="d-flex justify-content-center">
          <div v-if="data != null" class="ww-600 d-flex flex-wrap justify-content-between">
              <div class="wwfull d-flex justify-content-center">
                  <b-card  no-body class="wwfull p-1">
                      <h1 class="wwfull text-center">Bienvenido {{ userData.usuario }}</h1>
                      <!-- <div class="hidden wwfull d-flex align-items-center justify-content-between">
                          <div class="w-1/4 d-flex align-items-center">
                              <small>Universo:{{ userData.tipoUsuario }}</small>
                          </div>
                          <div class="w-1/4 d-flex align-items-center">
                              <small>Delegaciones:</small>
                          </div>
                      </div> -->
                  </b-card>
              </div>
              <div  class="col-6 d-flex justify-content-center">
                  <b-card  no-body class="wwfull p-1">
                      <div  class="col-12 m-0 p-0 d-flex flex-wrap">
                        <h3 class="col-12 m-0 p-0 text-center">Contadores </h3>
                          <div class="col-12 p-1 d-flex align-items-center">
                              <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                              <div class="ml-1">
                                  <h6 class="mb-0">{{ data.tiempoMes }}</h6>
                                  <small>Tiempo Mes</small>
                              </div>
                          </div>
                          <div class="col-12 p-1 d-flex align-items-center">
                              <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                              <div class="ml-1">
                                <h6 class="mb-0">{{ data.tiempoTotal }}</h6>
                                  <small>Horas totales</small>
                              </div>
                          </div>
                          <div class="col-12 p-1 d-flex align-items-center">
                              <b-avatar variant="light-primary" rounded > <feather-icon icon="UsersIcon" size="18" /> </b-avatar>
                              <div class="ml-1">
                                <h6 class="mb-0">{{ data.numeroVoluntarios }}</h6>
                                  <small>Total de voluntarios</small>
                              </div>
                          </div>
                          <!-- <div class="w-1/4 d-flex align-items-center">
                              <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                              <div class="ml-1">
                                  <h5 class="mb-0">23 k </h5>
                                  <small>Horas mensuales</small>
                              </div>
                          </div> -->
                      </div>
                  </b-card>
              </div>
              <div class="col-6 d-flex justify-content-center">
                  <b-card  no-body class="ww-300 p-1">
                      <div class="wwfull">
                      <!-- User avatar -->
                      <div class="wwfull mb-2 text-center">
                          <b-avatar
                              size="60"
                              :src="userData.urlImagen"
                              variant="light-primary"
                              class="mx-auto badge-minimal"
                              badge-variant="success"
                          />
                      </div>
                      <div class="d-flex flex-column">
                          <div class="mb-1">
                              <h4 class=" wwfull text-center font-weight-bolder mb-1">{{ userData.usuario }}</h4>
                              <p class=" wwfull text-small text-center mb-0">{{ userData.tipoUsuario }}</p>
                          </div>
                      </div>
                      <!-- User Stats -->
                      <div class="mb-2">
                          <div class="wwfull d-flex align-items-center mr-2">
                              <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                              <div class="ml-1">
                                  <h5 class="mb-0">{{ data.voluntarioTiempoMes }}</h5>
                                  <small>Tiempo mensual</small>
                              </div>
                          </div>
                          <div class="wwfull d-flex align-items-center mr-2">
                              <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                              <div class="ml-1">
                                  <h5 class="mb-0">{{ data.voluntarioTiempoTotal }}</h5>
                                  <small>Tiempo total</small>
                              </div>
                          </div>
                      </div>
                      </div>
                  </b-card>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {
  BCard, BButton, BAvatar, BRow, BCol,
} from 'bootstrap-vue'
  import { avatarText } from '@core/utils/filter'
  import customHelpers    from '@helpers/customHelpers'
  import FormPorGuardia  from '@/views/horas/formPorGuardia.vue'
  import FileUpload from '@currentComponents/FileUpload.vue'

export default {
    name: "FormVoluntario",
    mixins : [customHelpers],
    components: {
        BCard, 
        BButton, 
        BRow, 
        BCol, 
        BAvatar,
        FormPorGuardia,
        FileUpload
    },
  data() {
        return {
            data :null,
            date: new Date([2019, 5, 16]),
            userData: JSON.parse(localStorage.getItem('userData')),
            avatarText,
        }
    },
    
    beforeMount() {
        this.layoutVerificador = this.userData.tipoUsuario == 'Verificador Horas Voluntarias';
        if (!this.layoutVerificador) {
            this.inicializar();
        }
    },        
    methods:{
        async inicializar(){
            let response = await this.peticionGeneral('home',{
                tipousuario_id : this.userData.tipoUsuario_id,
                voluntario_id : this.userData.voluntario_id,
                delegacion_id : this.userData.delegacion_id,
            },false,true);
            this.data = response.data
        },

    },

}
</script>

<style>

</style>
