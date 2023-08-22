<template>
  <div>

      <FormPorGuardia  v-if="layoutVerificador"/>
      <div v-else class="d-flex justify-content-center">
          <div class="ww-600">
              <div class="wwfull d-flex justify-content-center">
                  <b-card  no-body class="wwfull p-1">
                      <h1 class="wwfull text-center">Bienvenido {{ userData.usuario }}</h1>
                      <div class="wwfull d-flex align-items-center justify-content-between">
                          <div class="w-1/4 d-flex align-items-center">
                              <small>Universo:{{ userData.tipoUsuario }}</small>
                          </div>
                          <div class="w-1/4 d-flex align-items-center">
                              <small>Delegaciones:</small>
                          </div>
                      </div>
                  </b-card>
              </div>
              <div class="wwfull d-flex justify-content-center">
                  <b-card  no-body class="wwfull p-1">
                      <div class="col-12 m-0 p-0 d-flex align-items-center justify-content-between">
                          <div class="w-1/4 d-flex align-items-center">
                              <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                              <div class="ml-1">
                                  <h5 class="mb-0">23 k </h5>
                                  <small>Horas mensuales</small>
                              </div>
                          </div>
                          <div class="w-1/4 d-flex align-items-center">
                              <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                              <div class="ml-1">
                                  <h5 class="mb-0">23 k </h5>
                                  <small>Horas totales</small>
                              </div>
                          </div>
                          <div class="w-1/4 d-flex align-items-center">
                              <b-avatar variant="light-primary" rounded > <feather-icon icon="UsersIcon" size="18" /> </b-avatar>
                              <div class="ml-1">
                                  <h5 class="mb-0">23 k </h5>
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
              <div class="wwfull d-flex justify-content-center">
                  <b-card  no-body class="ww-300 p-1">
                      <div class="wwfull">
                      <!-- User avatar -->
                      <div class="wwfull mb-2 text-center">
                          <b-avatar
                              size="60"
                              :src="userData.avatar"
                              variant="light-primary"
                              badge
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
                                  <h5 class="mb-0">23 k </h5>
                                  <small>Horas mensuales</small>
                              </div>
                          </div>
                          <div class="wwfull d-flex align-items-center mr-2">
                              <b-avatar variant="light-primary" rounded > <feather-icon icon="ClockIcon" size="18" /> </b-avatar>
                              <div class="ml-1">
                                  <h5 class="mb-0">23 k </h5>
                                  <small>Horas mensuales</small>
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
  import useUsersList from './useUsersList'
  import FormPorGuardia  from '@/views/horas/formPorGuardia.vue'
  import FileUpload from '@currentComponents/FileUpload.vue'


export default {
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
        date: new Date([2019, 5, 16]),
        userData: JSON.parse(localStorage.getItem('userData')),
        avatarText,
      }
  },
  
  beforeMount() {
      this.layoutVerificador = this.userData.tipoUsuario == 'Verificador Horas Voluntarias';
  },
}
</script>

<style>

</style>
