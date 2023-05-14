import useJwt from '@core/auth/jwt/useJwt'
import axiosCurrent from '@/apis/component/axiosCurrent'

const { jwt } = useJwt(axiosCurrent, {})
export default jwt
