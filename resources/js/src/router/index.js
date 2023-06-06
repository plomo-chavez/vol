import Vue              from 'vue'
import VueRouter        from 'vue-router'
// Routes
import { isUserLoggedIn, goToLogout } from '@/auth/utils'
import routesDefault    from './routes/routesDefault'
import useJwt           from '@/auth/jwt/useJwt'
import store            from '@/store'
import administracion   from './routes/administracion'
import uiElements       from './routes/ui-elements/index'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() { return { x: 0, y: 0 } },
  routes: [
      ...routesDefault,
      ...administracion,
      ...uiElements,
      { path: '/', redirect: { name: 'home' } },
      { path: '*', redirect: 'error-404', },
  ],
})
router.beforeEach(async (to, _, next) => {
    const isLoggedIn = isUserLoggedIn();
    let validUser = to.meta?.validUser ?? true;
    console.log('validUser -> ',validUser)
    console.log('isLoggedIn -> ',isLoggedIn)
    if (validUser) {
      if (isLoggedIn === null) {
        console.log('      if (isLoggedIn === null) {          ')
        // next({ name: 'auth-login' });
      } else {
        try {
          const response = await useJwt.validateUser({ tk: store.state.app.userData.token });
          if (!response.data.data) {
            console.log('response.data.data  ',response.data.data)
            console.log('if (!response.data.data) { ')
            // goToLogout();
          }
        } catch (error) { console.log(error); }
      }
    }
    if (to.meta.redirectIfLoggedIn && isLoggedIn) { 
      console.log(' if (to.meta.redirectIfLoggedIn && isLoggedIn) { ')
      // next({ name: 'home' }); 
    }
    next();
  });
router.afterEach(() => {
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})
export default router
