export default [
    {
        path: '/registro',
        name: 'registro',
        component: () => import('@/views/out/Registro.vue'),
        meta: {
            layout: 'full',
            validUser: false,
            pageTitle: 'Usuarios',
        },
    },
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
    },
  },
  {
    path: '/catalogos/delegaciones',
    name: 'catalogo-delegaciones',
    component: () => import('@/views/configuracion/catalogos/Delegaciones.vue'),
    meta: {
        pageTitle: 'Delegaciones',
    },
  },
]
