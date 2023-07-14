export default [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        validUser: true,
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
          validUser: false,
        layout: 'full',
        resource: 'Auth',
        action: 'read',
      },
    },
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/pages/authentication/Login.vue'),
    meta: {
        validUser: false,
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/register',
    name: 'auth-register',
    component: () => import('@/views/pages/authentication/Register.vue'),
    meta: {
        validUser: false,
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('@/views/out/Registro.vue'),
    meta: {
      layout: 'full',
      validUser: false,
      resource: 'Auth',
    },
  },
  {
    path: '/forgot-password',
    name: 'auth-forgot-password',
    component: () => import('@/views/pages/authentication/ForgotPassword.vue'),
    meta: {
        validUser: false,
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/pages/coming-soon',
    name: 'page-coming-soon',
    component: () => import('@/views/pages/miscellaneous/ComingSoon.vue'),
    meta: {
        validUser: false,
      layout: 'full',
    },
  },
  {
    path: '/pages/not-authorized',
    name: 'page-not-authorized',
    component: () => import('@/views/pages/miscellaneous/NotAuthorized.vue'),
    meta: {
      validUser: false,
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/pages/under-maintenance',
    name: 'page-under-maintenance',
    component: () => import('@/views/pages/miscellaneous/UnderMaintenance.vue'),
    meta: {
        validUser: false,
      layout: 'full',
    },
  },
  {
    path: '/pages/error',
    name: 'page-error',
    component: () => import('@/views/pages/miscellaneous/Error.vue'),
    meta: {
        validUser: false,
      layout: 'full',
    },
  },
]
