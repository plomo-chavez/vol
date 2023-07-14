import apisServices from './apisServices'

export default function useApis(axiosIns, overrideConfig) {
  const apis = new apisServices(axiosIns, overrideConfig)

  return {
    apis,
  }
}
