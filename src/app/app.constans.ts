export const MENU = [
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    url:'./auth/login',
    enableRoles: ['admin','user', 'develop']
  },
  {
    separator: true,
  },
  {
    label: 'Gestión Usuarios',
    icon: 'pi pi-fw pi-user',
    enableRoles: ['admin','develop'],
    items: [
      {
        label: 'Listadar Usuarios',
        icon: 'pi pi-list',
        url:'./admin/usuarios',
        enableRoles: ['admin','develop']
      },
      {
        label: 'Agregar Usuario',
        icon: 'pi pi-fw pi-user-plus',
        url:'./admin/usuarios/agregar',
        enableRoles: ['admin','develop']
      },
      {
        label: 'Editar Usuario',
        icon: 'pi pi-user-edit',
        url:'./admin/usuarios/editar/:id',
        enableRoles: ['admin','develop']
      },      
    ],
  },
  {
    separator: true,
  },
  {
    label: 'Gestión Herramientas',
    icon: 'pi pi-qrcode',
    enableRoles: ['admin','develop'],
    items: [
      {
        label: 'Listar Herramientas',
        icon: 'pi pi-list',
        url:'./admin/herramientas',
        enableRoles: ['admin','develop']
      },
      {
        label: 'Agregar Herramientas',
        icon: 'pi pi-plus',
        url:'./admin/herramientas/agregar',
        enableRoles: ['admin','develop']
      },
      {
        label: 'Editar Herramientas',
        icon: 'pi pi-file-edit',
        url:'./admin/herramientas/editar/:id',
        enableRoles: ['admin','develop']
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: 'Gestión Malware',
    icon: 'pi pi-qrcode',
    enableRoles: ['admin','develop'],
    items: [
      {
        label: 'Listar Malware',
        icon: 'pi pi-list',
        url:'./admin/malware',
        enableRoles: ['admin','develop']
      },
      {
        label: 'Agregar Malware',
        icon: 'pi pi-plus',
        url:'./admin/malware/agregar',
        enableRoles: ['admin','develop']
      },
      {
        label: 'Editar Malware',
        icon: 'pi pi-file-edit',
        url:'./admin/malware/editar/:id',
        enableRoles: ['admin','develop'],
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: 'Gestión Incidentes',
    icon: 'pi pi-qrcode',
    items: [
      {
        label: 'Listar Incidentes',
        icon: 'pi pi-list',
        url:'./gestion-incidentes/incidentes'
      },
      {
        label: 'Agregar Incidentes',
        icon: 'pi pi-plus',
        url:'./gestion-incidentes/incidentes/agregar'
      },
      {
        label: 'Editar Incidentes',
        icon: 'pi pi-file-edit',
        url:'./gestion-incidentes/incidentes/editar/:id'
      },
      {
        label: 'Analisis Incidentes',
        icon: 'pi pi-file-edit',
        url:'./gestion-incidentes/analisis'
      },
      {
        label: 'Gestión Incidentes',
        icon: 'pi pi-file-edit',
        url:'./gestion-incidentes/gestion'
      },
      {
        label: 'Impacto Incidentes',
        icon: 'pi pi-file-edit',
        url:'./gestion-incidentes/impacto'
      },
      {
        label: 'Cerrar Incidentes',
        icon: 'pi pi-file-edit',
        url:'./gestion-incidentes/cerrar'
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: 'Quit',
    icon: 'pi pi-fw pi-power-off',
    url:'./auth/login'
  },
];
