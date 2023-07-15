import useGeneratePDF from './config/generatePDF/useGeneratePDF'
import axiosCurrent from '@/apis/component/axiosCurrent'

const { generatePDF } = useGeneratePDF(axiosCurrent, {})
export default generatePDF
