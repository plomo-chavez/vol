import apisDefaultConfig from './apisDefaultConfig'
export default class apisServices {
  // Will be used by this service for making API calls
  axiosIns = null

  // apisConfig <= Will be used by this service
  apisConfig = { ...apisDefaultConfig }
  constructor(axiosIns, jwtOverrideConfig) {
    this.axiosIns = axiosIns
    this.apisConfig = { ...this.apisConfig, ...jwtOverrideConfig }
  }
  pruebas(...args) {
    return this.axiosIns.post(this.apisConfig.pruebasEndPoint, ...args)
  }
  pruebas2(...args) {
    return this.axiosIns.post(this.apisConfig.pruebas2EndPoint, ...args)
  }
  login(...args) {
    return this.axiosIns.post(this.apisConfig.loginEndpoint, ...args)
  }
  getUsuarios(...args) {
    return this.axiosIns.post(this.apisConfig.getUsuarios, ...args)
  }
}
