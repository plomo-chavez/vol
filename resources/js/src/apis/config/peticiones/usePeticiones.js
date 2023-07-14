import apiPeticiones from './apisPeticiones'

export default function usePeticiones(axiosIns, overrideConfig) {
  const peticiones = new apiPeticiones(axiosIns, overrideConfig)
  return {
    peticiones,
  }
}
