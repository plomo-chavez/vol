export default [
    {
      title: 'Administración',
      icon: 'SettingsIcon',
      children: [
          {
            title: 'Usuarios',
            route: 'usuarios',
          },
          {
            title: 'Voluntarios',
            route: 'voluntarios',
          },
      ],
    },
    {
      title: 'Configuración',
      icon: 'SettingsIcon',
      children: [
          {
            title: 'Catalogos',
            children: [
                {
                    title: 'Delegaciones',
                    route: 'catalogo-delegaciones',
                },
            ],
          },
        //   {
        //     title: 'Voluntarios',
        //     route: 'voluntarios',
        //   },
      ],
    },
]
