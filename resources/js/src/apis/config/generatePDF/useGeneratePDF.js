import apisGeneratePDF from './apisGeneratePDF'

export default function useGeneratePDF(axiosIns, overrideConfig) {
  const generatePDF = new apisGeneratePDF(axiosIns, overrideConfig)
  return {
    generatePDF,
  }
}
