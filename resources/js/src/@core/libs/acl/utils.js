import { getCurrentInstance } from '@vue/composition-api'

import { validarRutaPorTipoUsuarioEnMeta } from '@/auth/utils'
import store from '@/store'
export const can = (action, subject) => {
  const vm = getCurrentInstance().proxy
  return vm.$can ? vm.$can(action, subject) : true
}
export const canViewVerticalNavMenuHeader = (item, rutas) => {
  let tmp = validarRuta(item,rutas);
  return tmp;
}
export const canViewVerticalNavMenuLink   = (item, rutas) => {
  let tmp = validarRuta(item,rutas);
  return tmp;
}
export const canViewVerticalNavMenuGroup  = (item, rutas) => {
  let r = true;
  r = item.children.some(it => {  return validarRuta(it,rutas) })
  return r
}
export const otra = (item, rutas) => {
  return response
} 
export const validarRuta = (item, rutas) => {
  let role = store.state.app.userData.role;
  let ruta = rutas.find(r => item.route === r.name);
  let response = validarRutaPorTipoUsuarioEnMeta(ruta,role);
  return response
} 

// export const canViewHorizontalNavMenuLink = item => can(item.action, item.resource)
// export const canViewHorizontalNavMenuHeaderLink = item => can(item.action, item.resource)
// export const canViewHorizontalNavMenuGroup = item => {
//   const hasAnyVisibleChild = item.children.some(i => can(i.action, i.resource))
//   if (!(item.action && item.resource)) {
//     return hasAnyVisibleChild
//   }
//   return can(item.action, item.resource) && hasAnyVisibleChild
// }
// export const canViewHorizontalNavMenuHeaderGroup = item => {
//   const hasAnyVisibleChild = item.children.some(grpOrItem => {
//     return grpOrItem.children ? canViewHorizontalNavMenuGroup(grpOrItem) : canViewHorizontalNavMenuLink(grpOrItem)
//   })
//   if (!(item.action && item.resource)) {
//     return hasAnyVisibleChild
//   }
//   return can(item.action, item.resource) && hasAnyVisibleChild
// }
