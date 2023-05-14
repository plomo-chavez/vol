export default [
  {
    path: '/usuarios',
    name: 'admin-usuarios',
    component: () => import('@/views/administracion/usuarios/Usuarios.vue'),
    meta: {
      pageTitle: 'Usuarios',
    },
  },
//   {
//     path: '/trabajadores',
//     name: 'admin-trabajadores',
//     component: () => import('@/views/components/calendar/Calendar.vue'),
//     meta: {
//       pageTitle: 'Trabajadores',
//     },
//   },
  {
    path: '/habitaciones',
    name: 'admin-habitaciones',
    component: () => import('@/views/administracion/habitaciones/Habitaciones.vue'),
    meta: {
      pageTitle: 'Habitaciones',
    },
  },
//   {
//     path: '/reservaciones',
//     name: 'admin-reservaciones',
//     component: () => import('@/views/Home.vue'),
//     meta: {
//       pageTitle: 'Reservaciones',
//     },
//   },
  {
    path: '/reservaciones',
    name: 'admin-reservaciones',
    component: () => import('@/views/administracion/reservaciones/StepsReservacion.vue'),
    meta: {
      pageTitle: 'Reservaciones',
    },
  },
  {
    path: '/reservacioness',
    name: 'admin-reservacioness',
    component: () => import('@/views/administracion/reservaciones/Reservaciones.vue'),
    meta: {
      pageTitle: 'Reservaciones',
    },
  },
]
