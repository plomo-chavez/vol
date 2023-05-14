import useApis from './config/useApis'
import axiosCurrent from '@/apis/component/axiosCurrent'

const { apis } = useApis(axiosCurrent, {})
export default apis
