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
  getAntiguedades(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetAntiguedades, ...args)
  }
  getRegistroHV(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetRegistroHV, ...args)
  }
  getCredencialesTemporales(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetCredencialesTemporales, ...args)
  }
  adminCredencialesTemporales(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminCredencialesTemporales, ...args)
  }
  scannOut(...args) {
    return this.axiosIns.post(this.apisConfig.apiScannOut, ...args)
  }
  home(...args) {
    return this.axiosIns.post(this.apisConfig.apiHome, ...args)
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
  getVoluntario(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetVoluntario, ...args)
  }
  getVoluntarioOut(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetVoluntarioOut, ...args)
  }
  adminVoluntarioOut(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminVoluntarioOut, ...args)
  }
  administrarVoluntarios(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminVoluntarios, ...args)
  }
  getHorasVoluntarias(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetHorasVoluntarias, ...args)
  }
  administrarHorasVoluntarias(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminHorasVoluntarias, ...args)
  }
  getAreas(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetAreas, ...args)
  }
  administrarAreas(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminAreas, ...args)
  }
  validCurp(...args) {
    return this.axiosIns.post(this.apisConfig.apiValidCURP, ...args)
  }
  getDelegaciones(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetDelegaciones, ...args)
  }
  administrarDelegaciones(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminDelegaciones, ...args)
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
  validCode(...args) {
    return this.axiosIns.post(this.apisConfig.apiValidCode, ...args)
  }
  getGuardiaHoras(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetGuardiaHoras, ...args)
  }
  administrarGuardiaHoras(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminGuardiaHoras, ...args)
  }
  getUltimaGuardiaHoras(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetUltimaGuardiaHoras, ...args)
  }
  adminCatalogos(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminCatalogos, ...args)
  }
  getCatalogos(...args) {
    return this.axiosIns.post(this.apisConfig.apiGetCatalogos, ...args)
  }
}
