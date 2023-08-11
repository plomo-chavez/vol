export default [
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('@/views/Perfil.vue'),
      meta: {
        pageTitle: 'Información del usuario',
      },
    },
]
