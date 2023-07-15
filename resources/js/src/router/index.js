import Vue              from 'vue'
import VueRouter        from 'vue-router'
// Routes
import { isUserLoggedIn, goToLogout, loading, validarRutaPorTipoUsuarioEnMeta } from '@/auth/utils'
import routesDefault    from './routes/routesDefault'
import useJwt           from '@/auth/jwt/useJwt'
import store            from '@/store'
import administracion   from './routes/administracion'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() { return { x: 0, y: 0 } },
  routes: [
      ...routesDefault,
      ...administracion,
      { path: '/', redirect: { name: 'home' } },
      { path: '*', redirect: 'error-404', },
  ],
})
router.beforeEach(async (to, _, next) => {
    const isLoggedIn = isUserLoggedIn();
    let validUser = to.meta?.validUser ?? true;
    if (validUser) {
      if (isLoggedIn === null) {
        next({ name: 'auth-login' });
      } else {
        if (!validarRutaPorTipoUsuarioEnMeta(to,store.state.app.userData.role)) {
          next({ name: 'home' }); 
        } else {  
          try {
            loading()
            const response = await useJwt.validateUser({ tk: store.state.app.userData.token });
            
            loading(false)
            if (!response.data.data) {
              goToLogout();
            }
          } catch (error) { console.log(error); }
        }
      }
    }
    if (to.meta.redirectIfLoggedIn && isLoggedIn) { 
      next({ name: 'home' }); 
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
