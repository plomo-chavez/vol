import config from './apisCatalogosConfig'
export default class apisCatalogos {
  // Will be used by this service for making API calls
  axiosIns = null

  // apisConfig <= Will be used by this service
  apisConfig = { ...config }
  constructor(axiosIns, jwtOverrideConfig) {
    this.axiosIns = axiosIns
    this.apisConfig = { ...this.apisConfig, ...jwtOverrideConfig }
  }
  tiposUsuarios(...args) {
    return this.axiosIns.post(this.apisConfig.apiTiposUsuarios, ...args)
  }
  habitaciones(...args) {
    return this.axiosIns.post(this.apisConfig.habitacionesApi, ...args)
  }
  estatusHabitaciones(...args) {
    return this.axiosIns.post(this.apisConfig.estatusHabitacionesApi, ...args)
  }
  customPersons(...args) {
    return this.axiosIns.post(this.apisConfig.customPersonsApi, ...args)
  }
  areas(...args) {
    return this.axiosIns.post(this.apisConfig.areasApi, ...args)
  }
  estados(...args) {
    return this.axiosIns.post(this.apisConfig.estadosApi, ...args)
  }
  tiposAsociado(...args) {
    return this.axiosIns.post(this.apisConfig.tipoAsociadoApi, ...args)
  }
  tiposSangre(...args) {
    return this.axiosIns.post(this.apisConfig.tiposSangreApi, ...args)
  }
  nacionalidad(...args) {
    return this.axiosIns.post(this.apisConfig.nacionalidadesApi, ...args)
  }
  sexo(...args) {
    return this.axiosIns.post(this.apisConfig.sexoApi, ...args)
  }
  estadoCivil(...args) {
    return this.axiosIns.post(this.apisConfig.estadoCivilApi, ...args)
  }
  getDelegacionesWithAreas(...args) {
    return this.axiosIns.post(this.apisConfig.getDelegacionesWithAreasApi, ...args)
  }
  delegacionesXTipoCoordinador(...args) {
    return this.axiosIns.post(this.apisConfig.apiDelegacionesXTipoCoordinador, ...args)
  }
}
