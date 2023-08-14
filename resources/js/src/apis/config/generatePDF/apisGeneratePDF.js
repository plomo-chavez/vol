import config from './apisGeneratePDFConfig'
export default class apiPeticiones {
  // Will be used by this service for making API calls
  axiosIns = null

  // apisConfig <= Will be used by this service
  apisConfig = { ...config }
  constructor(axiosIns, jwtOverrideConfig) {
    this.axiosIns = axiosIns
    this.apisConfig = { ...this.apisConfig, ...jwtOverrideConfig }
  }
  generatePDFVoluntarios(...args) {
    return this.axiosIns.post(this.apisConfig.apiGeneratePDFVoluntarios, ...args, { responseType: 'blob' })
  }
  generatePDFCredencialTemporal(...args) {
    return this.axiosIns.post(this.apisConfig.apiGeneratePDFCredencialTemporal, ...args, { responseType: 'blob' })
  }
}
