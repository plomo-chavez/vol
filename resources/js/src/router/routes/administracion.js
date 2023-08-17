export default [
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('@/views/usuarios/Usuarios.vue'),
      meta: {
        pageTitle: 'Usuarios',
      },
    },
    {
      path: '/voluntarios',
      name: 'voluntarios',
      component: () => import('@/views/voluntarios/Voluntarios.vue'),
      meta: {
          pageTitle: 'Voluntarios',
          permitidos: [
            'CL -  Coordinador Local',
            'CE -  Coordinador Estatal',
            'CN -  Coordinador Nacional',
          ],
      },
    },
    {
      path: '/voluntarios',
      name: 'confguracionGeneral',
      component: () => import('@/views/voluntarios/Voluntarios.vue'),
      meta: {
          pageTitle: 'Voluntarios',
      },
    },
    {
      path: '/horas',
      name: 'horas',
      component: () => import('@/views/horas/Horas.vue'),
      meta: {
          pageTitle: 'Horas voluntarias',
          permitidos: 'all',
      },
    },
    {
      path: '/verificador/horas',
      name: 'verificador-horas',
      component: () => import('@/views/horas/formPorGuardia.vue'),
      meta: {
          pageTitle: 'Agregar horas voluntarias',
          // permitidos: 'verificador horas voluntarias',
      },
    },
  {
    path: '/delegaciones',
    name: 'delegaciones',
    component: () => import('@/views/delegaciones/Delegaciones.vue'),
    meta: {
        pageTitle: 'Delegaciones',
    },
  },
  {
    path: '/config/notificaciones/template-email',
    name: 'config-notificaciones-templateEmail',
    component: () => import('@/views/configuracion/notificaciones/template/TemplateEmails.vue'),
    meta: {
        pageTitle: 'Delegaciones',
    },
  },
]
