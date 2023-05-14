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
    },
  },
]
