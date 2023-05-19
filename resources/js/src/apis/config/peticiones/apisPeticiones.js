import config from './apisPeticionesConfig'
export default class apiPeticiones {
  // Will be used by this service for making API calls
  axiosIns = null

  // apisConfig <= Will be used by this service
  apisConfig = { ...config }
  constructor(axiosIns, jwtOverrideConfig) {
    this.axiosIns = axiosIns
    this.apisConfig = { ...this.apisConfig, ...jwtOverrideConfig }
  }
  getUsuarios(...args) {
    return this.axiosIns.post(this.apisConfig.apiUsuarios, ...args)
  }
  adminUsuarios(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminUsuarios, ...args)
  }
  getHabitaciones(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetHabitaciones, ...args)
  }
  administrarHabitaciones(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminHabitaciones, ...args)
  }
  getPersonas(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetPersonas, ...args)
  }
  administrarPersonas(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminPersonas, ...args)
  }
  getReservaciones(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetReservaciones, ...args)
  }
  administrarReservaciones(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminReservaciones, ...args)
  }
  getVoluntarios(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetVoluntarios, ...args)
  }
  administrarVoluntarios(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminVoluntarios, ...args)
  }
}
