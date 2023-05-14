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
  roomsAvailable(...args) {
    return this.axiosIns.post(this.apisConfig.roomsAvailableApi, ...args)
  }
}
