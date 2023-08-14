import config from './apisUploadFilesConfig'
export default class apiPeticiones {
  // Will be used by this service for making API calls
  axiosIns = null

  // apisConfig <= Will be used by this service
  apisConfig = { ...config }
  constructor(axiosIns, jwtOverrideConfig) {
    this.axiosIns = axiosIns
    this.apisConfig = { ...this.apisConfig, ...jwtOverrideConfig }
  }
  administarFilesDelegacionesCoordinadores(...args) {
    return this.axiosIns.post(this.apisConfig.apiAdminnistrarArchivosDelegacionCoordinadores, ...args, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
