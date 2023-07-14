import apiSendEmails from './apisSendEmails'

export default function useSendEmails(axiosIns, overrideConfig) {
  const sendEmails = new apiSendEmails(axiosIns, overrideConfig)
  return {
    sendEmails,
  }
}
