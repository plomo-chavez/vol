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
  pruebas(...args) {
    return this.axiosIns.post(this.apisConfig.apiGeneratePruebas, ...args, { responseType: 'blob' })
  }
}
