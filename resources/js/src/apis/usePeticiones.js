import usePeticiones from './config/peticiones/usePeticiones'
import axiosCurrent from '@/apis/component/axiosCurrent'

const { peticiones } = usePeticiones(axiosCurrent, {})
export default peticiones
