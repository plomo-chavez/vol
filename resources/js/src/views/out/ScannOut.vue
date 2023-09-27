<template>
  <div>
    <div class=" col-12 mb-2">
      <div class="">
        <b-link class="brand-logo d-flex flex-wrap mt-2">
          <b-img :src="appLogoImage" alt="logo" class="hh-50 mr-2" />
          <h2 class="brand-text text-primary my-auto">
            {{ appName }}
          </h2>
        </b-link>
      </div>
    </div>
    <div v-if="tipo == 'scann' && data == null" class="col-12  d-flex flex-wrap justify-content-center">
      <b-card  no-body class="ww-500 p-1">
        <div class="wwfull">
          <h2 class="brand-text text-primary text-center"> Validador de codigos QR </h2>
          <b-card-text class="mb-3">
            Esta es una herramienta que la coordinación de voluntariado pone a tu disposicion para confirmar la validez de documentos, voluntarios y documentos.
          </b-card-text>
          <div>
            <div v-if="showError" class=" col-12">
              <h2 class="col-12 brand-text text-primary text-center"> Codigo invalido </h2>
              <h3 class=" col-12 brand-text text-secondary text-center"> No se encontro información para este codigo. </h3>
            </div>

            <div class="col-12  d-flex flex-wrap justify-content-center">
              <div class="ww-500">
                <div class=" col-12 d-flex flex-wrap justify-content-between">
                  <div>
                    <b-button
                        size="sm"
                        variant="relief-secondary"
                        @click="onCancelar"
                    >Cancelar</b-button>
                  </div>
                  <div>
                    <b-button
                        size="sm"
                        variant="relief-primary"
                        @click="handleOpenScann"
                    >Iniciar escaneo</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-card>
    </div>
    <div v-else class="col-12  d-flex flex-wrap justify-content-center">
      <div v-if="tipo == 'credencialTemporal'">
        <b-card  no-body class="ww-300 p-1">
          <div class="wwfull">
            <!-- User avatar -->
            <div class="wwfull mb-2 text-center">
                <b-avatar
                    size="80"
                    :src="data.voluntario.urlImagen"
                    variant="light-primary"
                    class="mx-auto badge-minimal"
                    badge-variant="success"
                />
            </div>
            <div class="d-flex flex-column">
                <div class="mb-1">
                    <h4 class=" wwfull text-center font-weight-bolder mb-0">{{ data.voluntario.nombreCompleto }}</h4>
                    <h4 class=" wwfull text-center font-weight-bolder mb-1"><small>{{ data.voluntario.delegacion.nombreLabel }}</small></h4>
                </div>

                <h4 class=" wwfull text-primary text-center font-weight-bolder mb-1">Datos de la credencial</h4>
                <div class="wwfull">
                  <div v-if="!data.isActual" class=" col-12 mb-1">
                      <h5 class="mb-0 text-danger" >Esta credencial no es la actual</h5>
                      <small>Estatus de la credencial</small>
                  </div>
                  <div class=" col-12 mb-1">
                      <h5 class="mb-0" :class="validarFecha(data.fechaVencimiento) ? ' text-success ' : ' text-danger '" >{{ validarFecha(data.fechaVencimiento) ? 'Credencial vigente' : 'Credencial caduca' }}</h5>
                      <small>Vigencia de la credencial</small>
                  </div>
                  <div class=" col-12 mb-1">
                    <h5 class="mb-0" >{{ formatoFechaYMD(data.fechaEmision) }}</h5>
                      <small>Fecha de emisión</small>
                  </div>
                  <div class=" col-12 mb-1">
                      <h5 class="mb-0" >{{ formatoFechaYMD(data.fechaVencimiento) }}</h5>
                      <small>Fecha de vencimiento</small>
                  </div>
                </div>
            </div>
          </div>
        </b-card>
      </div>
      <div v-if="tipo == 'voluntario'">
        <b-card  no-body class="ww-300 p-1">
          <div class="wwfull">
            <!-- User avatar -->
            <div class="wwfull mb-2 text-center">
                <b-avatar
                    size="80"
                    :src="data.urlImagen"
                    variant="light-primary"
                    class="mx-auto badge-minimal"
                    badge-variant="success"
                />
            </div>
            <div class="d-flex flex-column">
                <h4 class=" wwfull text-primary text-center font-weight-bolder mb-1">Datos del voluntario</h4>
                <div class="wwfull">
                  <div class=" col-12 mb-1">
                    <h5 class="mb-0" >{{ data.nombre }}</h5>
                      <small>Nombre</small>
                  </div>
                  <div class=" col-12 mb-1">
                    <h5 class="mb-0" >{{ data.nombreLabel }}</h5>
                      <small>Delegación</small>
                  </div>
                  <div class=" col-12 mb-1">
                    <h5 class="mb-0" >{{ data.estado }}</h5>
                      <small>Estado</small>
                  </div>
                  <div class=" col-12 mb-1">
                    <h5 class="mb-0" >{{ data.area }}</h5>
                      <small>Area</small>
                  </div>
                  <div class=" col-12 mb-1">
                    <h5 class="mb-0" >{{ data.numeroAsociado }}</h5>
                      <small>Numero de asociado</small>
                  </div>
                  <div class=" col-12 mb-1">
                    <h5 class="mb-0" >Activo</h5>
                      <small>Estatus</small>
                  </div>
                </div>
            </div>
          </div>
        </b-card>
      </div>
      <div class="col-12  d-flex flex-wrap justify-content-center">
        <div class="ww-500">
          <div class=" col-12 d-flex flex-wrap justify-content-between">
            <div>
              <b-button
                  size="sm"
                  variant="relief-secondary"
                  @click="onCancelar"
              >Cancelar</b-button>
            </div>
            <div>
              <b-button
                  size="sm"
                  variant="relief-primary"
                  @click="handleOpenScann"
              >Escanear otra vez</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Scann 
      :openScann="openScann"
      :isModal="true"
      @changeOpenModal="()=>{ openScann = false }"
      @changeText="handleChangeCodigo"
    />

  </div>
</template>

<script>
/* eslint-disable global-require */
import FormFactory from '@currentComponents/FormFactory.vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import customHelpers  from '@helpers/customHelpers'
import Scann from '@currentComponents/ScannerCode.vue'
import {
BRow,
BAvatar,
BCard,
BCol,
BLink,
BButton,
BForm,
BFormCheckbox,
BFormGroup,
BFormInput,
BInputGroup,
BInputGroupAppend,
BImg,
BCardTitle,
BCardText,
} from 'bootstrap-vue'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import RegistroCompleto from './RegistroCompleto.vue'

import { $themeConfig } from '@themeConfig'

export default {
  components: {
    Scann,
    BCard,
    BAvatar,
    VuexyLogo,
    RegistroCompleto,
    BRow,
    BImg,
    BCol,
    BLink,
    BButton,
    BForm,
    BCardText,
    BCardTitle,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    // validations
    ValidationProvider,
    ValidationObserver,
    FormFactory
  },
  mixins: [togglePasswordVisibility,customHelpers],
  setup() {
    // App Name
    const { appName, appLogoImage } = $themeConfig.app
    return {
      appName,
      appLogoImage,
    }
  },
  data() {
    return {
      data      : null,
      tipo      : 'scann',
      openScann : false,
      hadScann  : false,
      showError : false,
      permitidos : [
        'credencialTemporal',
        'voluntario',
      ]
    }
  },
  beforeMount() {},
  methods: {
      onCancelar(){
        this.$router.push('/login');
      },
      handleOpenScann(){
        this.openScann = true;
      },
      validarFecha(fecha){
        const fechaDada = new Date(fecha);
        const fechaActual = new Date(); // Fecha y hora actual

        return fechaActual < fechaDada;
      },
      async handleChangeCodigo(codigo){
            this.hadScann = false;
            this.openScann = false;
            let response = await this.peticionGeneral('scannOut',{codigo},false);
            if(this.permitidos.includes(response.data.tipo)){
              this.data = response.data.data;
              this.tipo = response.data.tipo;
            }
            this.showError = this.data == null;
      },
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '~@resources/scss/vue/pages/page-auth.scss';
</style>
