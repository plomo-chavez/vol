import apisCatalogos from './apisCatalogos'

export default function useCatalogos(axiosIns, overrideConfig) {
  const catalogos = new apisCatalogos(axiosIns, overrideConfig)

  return {
    catalogos,
  }
}
