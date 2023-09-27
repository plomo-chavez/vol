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
    title: 'Credenciales Temporales',
    icon: 'HomeIcon',
    route: 'credenciales-temporales',
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
        title: 'Catálogos',
        children: [
          {
              title: 'Areas',
              route: 'catalogo-areas',
          },
          {
              title: 'Tipo de autoridades',
              route: 'catalogo-tipo-autoridades',
          },
          {
              title: 'Tipo de sangre',
              route: 'catalogo-tipo-sangre',
          },
          {
              title: 'Actividades de horas voluntarias',
              route: 'catalogo-actividades-horas-voluntarias',
          },
          {
              title: 'Estados',
              route: 'catalogo-estados',
          },
          {
              title: 'Tipos de usuarios',
              route: 'catalogo-tipo-usuarios',
          },
          {
              title: 'Tipos de actividades de HV',
              route: 'catalogo-tipo-actividades-horas-voluntarias',
          },
          {
              title: 'Tipos de subactividades de HV',
              route: 'catalogo-tipo-subactividades-horas-voluntarias',
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
