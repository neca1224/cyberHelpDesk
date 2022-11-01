export const MENU = [
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    url:'./autenticacion/login'
  },
  {
    separator: true,
  },
  {
    label: 'Gestión Usuarios',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        label: 'Listar Usuarios',
        icon: 'pi pi-list',
        url:'./administrador/usuarios'
      },
      {
        label: 'Agregar Usuario',
        icon: 'pi pi-fw pi-user-plus',
        url:'./administrador/usuarios/agregar'
      },
      {
        label: 'Editar Usuario',
        icon: 'pi pi-user-edit',
        url:'./administrador/usuarios/editar/:id'
      },
    ],
  },

  {
    separator: true,
  },
  {
    label: 'Gestión Herramientas',
    icon: 'pi pi-qrcode',
    items: [
      {
        label: 'Listar Herramientas',
        icon: 'pi pi-list',
        url:'./administrador/herramientas'
      },
      {
        label: 'Agregar Herramientas',
        icon: 'pi pi-plus',
        url:'./administrador/herramientas/agregar'
      },
      {
        label: 'Editar Herramientas',
        icon: 'pi pi-file-edit',
        url:'./administrador/herramientas/editar/:id'
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: 'Gestión Malware',
    icon: 'pi pi-qrcode',
    items: [
      {
        label: 'Listar Malware',
        icon: 'pi pi-list',
        url:'./administrador/malware'
      },
      {
        label: 'Agregar Malware',
        icon: 'pi pi-plus',
        url:'./administrador/malware/agregar'
      },
      {
        label: 'Editar Malware',
        icon: 'pi pi-file-edit',
        url:'./administrador/malware/editar/:id'
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
    label: 'Cerrar Sesión',
    icon: 'pi pi-fw pi-power-off',
    url:'./autenticacion/login'
  },
];
