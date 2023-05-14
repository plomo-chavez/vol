import useCatalogos from './config/useCatalogos'
import axiosCurrent from '@/apis/component/axiosCurrent'

const { catalogos } = useCatalogos(axiosCurrent, {})
export default catalogos
