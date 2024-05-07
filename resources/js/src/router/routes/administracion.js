export default [
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import('@/views/usuarios/Usuarios.vue'),
    meta: {
      pageTitle: 'Usuarios',
      permitidos : 'all',
    },
  },
  {
    path: '/eventos',
    name: 'eventos',
    component: () => import('@/views/eventos/Eventos.vue'),
    meta: {
      pageTitle: 'Eventos',
      permitidos : 'all',
    },
  },
  {
    path: '/catalogo/estados',
    name: 'catalogo-estados',
    component: () => import('@/views/GestorCatalogos.vue'),
    meta: {
        pageTitle: 'Estados',
        permitidos : 'all',
    },
  },
  {
    path: '/config/notificaciones/template-email',
    name: 'config-notificaciones-templateEmail',
    component: () => import('@/views/configuracion/notificaciones/template/TemplateEmails.vue'),
    meta: {
        pageTitle: 'Delegaciones',
        permitidos : 'all',
    },
  },
]
