import apisUploadFiles from './apisUploadFiles'

export default function useUploadFiles(axiosIns, overrideConfig) {
  const uploadFiles = new apisUploadFiles(axiosIns, overrideConfig)
  return {
    uploadFiles,
  }
}
