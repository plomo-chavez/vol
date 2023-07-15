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
          permitidos: 'Verificador',
          action: 'read',
      },
    },
    {
      path: '/horas',
      name: 'horas',
      component: () => import('@/views/horas/Horas.vue'),
      meta: {
          permitidos: ['Verificador'],
          pageTitle: 'Horas voluntarias',
      },
    },
  {
    path: '/catalogos/delegaciones',
    name: 'catalogo-delegaciones',
    component: () => import('@/views/configuracion/catalogos/Delegaciones.vue'),
    meta: {
        pageTitle: 'Delegaciones',
        permitidos: 'Verificador',
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
