import useUploadFiles from './config/uploadFiles/useUploadFiles'
import axiosCurrent from '@/apis/component/axiosCurrent'

const { uploadFiles } = useUploadFiles(axiosCurrent, {})
export default uploadFiles
