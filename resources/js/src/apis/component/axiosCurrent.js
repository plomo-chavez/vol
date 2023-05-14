import axios from '@axios'
import store from '@/store'
import { goToLogout } from '@/auth/utils'
    let axiosCurrent = axios;
    let userData  = JSON.parse(localStorage.getItem('userData'));
    // Request Interceptor
    console.log(store.state.app.userData);
    axiosCurrent.interceptors.request.use(
        config => {
          config.headers.tk = store.state.app.userData?.token;
          return config
        },
        error => Promise.reject(error),
      )

      // Add request/response interceptor
      axiosCurrent.interceptors.response.use(
        response => {
          if(response.data.result == 'SinAutorizacion'){
            goToLogout();
          }
          return response
        },
        error => {
          return Promise.reject(error)
        },
      )

      export default axiosCurrent
