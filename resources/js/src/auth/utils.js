import useJwt from '@/auth/jwt/useJwt'
import customHelpers  from '@helpers/customHelpers'

import store from '@/store/index'
/**
 * Return if user is logged in
 * This is completely up to you and how you want to store the token in your frontend application
 * e.g. If you are using cookies to store the application please update this function
 */
// eslint-disable-next-line arrow-body-style
export const isUserLoggedIn = () => {
  return localStorage.getItem('userData') && localStorage.getItem('tk')
  // return store.state.app.userData != null
}
export const loading = (valor = true) => {
  document.getElementById("loading-bg").style.display = valor?"block":"none";
}
export let goToLogout = () =>{
  store.commit('app/UPDATE_USERDATA', null)
  localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
  localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)
  // Remove userData from localStorage
  localStorage.removeItem('userData')
  // Redirect to login page
  window.location.reload();
}

export const getUserData = () => JSON.parse(localStorage.getItem('userData'))
export const validarRutaPorTipoUsuarioEnMeta = (ruta,role) => {
  let response = null
  // console.log(role)
  if(role == 'administrador'){
    response = true;;
  } else {
    if(typeof ruta != 'undefined'){
      if(typeof ruta.meta != 'undefined'){
        if(typeof ruta.meta.permitidos != 'undefined'){
          if(typeof ruta.meta.permitidos == 'string'){
            response = ruta.meta.permitidos == 'all' ? true : ruta.meta.permitidos.toLowerCase() == (role != null ? role.toLowerCase() : '') 
          } else {
            response = ruta.meta.permitidos.some(tipo => tipo.toLowerCase() === (role != null ? role.toLowerCase() : '') );
          }
        } else {
          response = false;
        }
      } else {
        response = false;
      }
    } else {
      response = false;
    }
  }
  return response;
}

/**
 * This function is used for demo purpose route navigation
 * In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 * Please note role field is just for showing purpose it's not used by anything in frontend
 * We are checking role just for ease
 * NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */
export const getHomeRouteForLoggedInUser = userRole => {
  console.log('getHomeRouteForLoggedInUser -> ', userRole)
  if (typeof userRole != 'undefined') {
    return '/'
  } else {
    return { name: 'auth-login' }
  }
}
