export default [

  {
    path: '/',
    name: 'inicio',
    component: () => import('@/views/out/inicio.vue'),
    meta: {
        isOut: true,
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
  {
    path: '/reservar',
    name: 'reservar',
    component: () => import('@/views/administracion/reservaciones/Reservaciones.vue'),
    meta: {
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('@/views/out/nosotros.vue'),
    meta: {
        isOut: true,
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('@/views/out/contacto.vue'),
    meta: {
        isOut: true,
      layout: 'full',
      resource: 'Auth',
      action: 'read',
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      pageTitle: 'Inicio',
      breadcrumb: [
        {
          text: 'Pages',
          to: '/error-404',
        },
        {
          text: 'Blog',
        },
        {
          text: 'List',
          active: true,
        },
      ],
    },
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import('@/views/Home.vue'),
    meta: {
      pageTitle: 'Trabajadores',
    },
  },
  {
    path: '/trabajadores',
    name: 'trabajadores',
    component: () => import('@/views/Home.vue'),
    meta: {
      pageTitle: 'Trabajadores',
    },
  },
  {
    path: '/trabajadores',
    name: 'trabajadores',
    component: () => import('@/views/Home.vue'),
    meta: {
      pageTitle: 'Trabajadores',
    },
  },
  {
    path: '/factory',
    name: 'factory',
    component: () => import('@/views/useFactory.vue'),
    meta: {
      pageTitle: 'Blog List',
      breadcrumb: [
        {
          text: 'Pages',
          to: '/error-404',
        },
        {
          text: 'Blog',
        },
        {
          text: 'List',
          active: true,
        },
      ],
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/error/Error404.vue'),
    meta: {
        isOut: true,
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
        isOut: true,
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
        isOut: true,
      layout: 'full',
      resource: 'Auth',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/forgot-password',
    name: 'auth-forgot-password',
    component: () => import('@/views/pages/authentication/ForgotPassword.vue'),
    meta: {
        isOut: true,
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
        isOut: true,
      layout: 'full',
    },
  },
  {
    path: '/pages/not-authorized',
    name: 'page-not-authorized',
    component: () => import('@/views/pages/miscellaneous/NotAuthorized.vue'),
    meta: {
        isOut: true,
      layout: 'full',
      resource: 'Auth',
    },
  },
  {
    path: '/pages/under-maintenance',
    name: 'page-under-maintenance',
    component: () => import('@/views/pages/miscellaneous/UnderMaintenance.vue'),
    meta: {
        isOut: true,
      layout: 'full',
    },
  },
  {
    path: '/pages/error',
    name: 'page-error',
    component: () => import('@/views/pages/miscellaneous/Error.vue'),
    meta: {
        isOut: true,
      layout: 'full',
    },
  },
]
