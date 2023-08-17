export default [
  {
    title: 'Voluntarios',
    icon: 'UsersIcon',
    route: 'voluntarios',
  },
  {
    title: 'Horas voluntarias',
    icon: 'ClockIcon',
    route: 'horas',
  },
  {
    title: 'Verificador HV',
    icon: 'ClockIcon',
    route: 'verificador-horas',
  },
  {
    title: 'Delegaciones',
    icon: 'HomeIcon',
    route: 'delegaciones',
  },
  {
    title: 'Formatos',
    icon: 'FileTextIcon',
    route: 'formatos',
  },
  {
    title: 'Configuración',
    icon: 'SettingsIcon',
    children: [
      {
        title: 'Configuración general',
        route: 'confguracionGeneral',
      },
      {
        title: 'Notificaciones',
        children: [
          {
              title: 'Plantillas de correo',
              route: 'config-notificaciones-templateEmail',
          },
          {
              title: 'Notificaciones',
              route: 'catalogo-delegaciones',
          },
          {
              title: 'Grupo de notificaciones',
              route: 'catalogo-delegaciones',
          },
        ],
      },
      {
        title: 'Catalogos',
        children: [
          {
              title: 'Areas',
              route: 'catalogo-delegaciones',
          },
          {
              title: 'Tipo de autoridades',
              route: 'catalogo-delegaciones',
          },
          {
              title: 'Tipo de sangre',
              route: 'catalogo-delegaciones',
          },
          {
              title: 'Actividades de horas voluntarias',
              route: 'catalogo-delegaciones',
          },
          {
              title: 'Estados',
              route: 'catalogo-delegaciones',
          },
          {
              title: 'Tipos de usuarios',
              route: 'catalogo-delegaciones',
          },
        ],
      },
      {
        title: 'Usuarios',
        route: 'usuarios',
      },
      {
        title: 'Log',
        route: 'log',
      },
      //   {
      //     title: 'Voluntarios',
      //     route: 'voluntarios',
      //   },
    ],
  },
]
