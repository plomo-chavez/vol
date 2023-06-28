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
  getVoluntarios(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetVoluntarios, ...args)
  }
  administrarVoluntarios(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminVoluntarios, ...args)
  }
  getDelegaciones(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetDelegaciones, ...args)
  }
  administrarDelegaciones(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminDelegaciones, ...args)
  }
  getHorasVoluntarias(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetHorasVoluntarias, ...args)
  }
  administrarHorasVoluntarias(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminHorasVoluntarias, ...args)
  }
  getCoordinaciones(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetCoordinaciones, ...args)
  }
  administrarCoordinaciones(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminCoordinaciones, ...args)
  }
  validCurp(...args) {
    return this.axiosIns.post(this.apisConfig.apiValidCURP, ...args)
  }
  getDelegaciones(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetDelegaciones, ...args)
  }
  getTemplatesEmail(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetTemplatesEmail, ...args)
  }
  administrarTemplatesEmail(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminTemplatesEmail, ...args)
  }
  registroOut(...args) {
    return this.axiosIns.post(this.apisConfig.apiRegistroOut, ...args)
  }
}
