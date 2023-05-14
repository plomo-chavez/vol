import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
import routesDefault from './routes/routesDefault'
import useJwt             from '@/auth/jwt/useJwt'
import store              from '@/store'
import administracion from './routes/administracion'
import dashboard from './routes/dashboard'
import uiElements from './routes/ui-elements/index'
import pages from './routes/pages'
import chartsMaps from './routes/charts-maps'
import formsTable from './routes/forms-tables'
import others from './routes/others'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'home' } },
    ...routesDefault,
    ...administracion,
    // ...dashboard,
    // ...pages,
    // ...chartsMaps,
    // ...formsTable,
    ...uiElements,
    // ...others,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()
  let validateUser = false;

//   if(typeof to.meta.isOut != 'undefined' && isLoggedIn != null){
//     return next({ name: 'home' })
//   }
console.log(to)
  if(isLoggedIn){
    useJwt
    .validateUser({ tk   : store.state.app.userData.token, })
    .then(response => {
      validateUser = response.data.data;
      store.commit('app/UPDATE_USERVALIDATION', response.data.data)
    })
    .catch(error => {
      console.log(error);
    })
  }

  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({ name: 'auth-login' })
    // If logged in => not authorized
    return next({ name: 'misc-not-authorized' })
  }


  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    const userData = getUserData()
    next({ name: 'home' })
    // next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  }
  return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
