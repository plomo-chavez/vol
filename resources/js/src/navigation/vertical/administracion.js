export default [
  {
    title: 'Voluntarios',
    icon: 'UsersIcon',
    route: 'voluntarios',
  },
  {
    title: 'Horas voluntarias',
    icon: 'ClockIcon',
    route: 'usuarios',
  },
  {
    title: 'Delelgaciones',
    icon: 'HomeIcon',
    route: 'usuarios',
  },
  {
    title: 'Formatos',
    icon: 'FileTextIcon',
    route: 'usuarios',
  },
  {
    title: 'Configuración',
    icon: 'SettingsIcon',
    children: [

      {
        title: 'Configuración general',
        route: 'voluntarios',
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
        route: 'voluntarios',
      },
      //   {
      //     title: 'Voluntarios',
      //     route: 'voluntarios',
      //   },
    ],
  },
]
