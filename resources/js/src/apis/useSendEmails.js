import useSendEmails from './config/sendEmails/useSendEmails'
import axiosCurrent from '@/apis/component/axiosCurrent'

const { sendEmails } = useSendEmails(axiosCurrent, {})
export default sendEmails
