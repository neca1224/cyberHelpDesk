export const MENU = [
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    url:'./auth/login'
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
        url:'./admin/usuarios'
      },
      {
        label: 'Agregar Usuario',
        icon: 'pi pi-fw pi-user-plus',
        url:'./admin/usuarios/agregar'
      },
      {
        label: 'Editar Usuario',
        icon: 'pi pi-user-edit',
        url:'./admin/usuarios/editar/:id'
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
        url:'./admin/herramientas'
      },
      {
        label: 'Agregar Herramientas',
        icon: 'pi pi-plus',
        url:'./admin/herramientas/agregar'
      },
      {
        label: 'Editar Herramientas',
        icon: 'pi pi-file-edit',
        url:'./admin/herramientas/editar/:id'
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
        url:'./admin/malware'
      },
      {
        label: 'Agregar Malware',
        icon: 'pi pi-plus',
        url:'./admin/malware/agregar'
      },
      {
        label: 'Editar Malware',
        icon: 'pi pi-file-edit',
        url:'./admin/malware/editar/:id'
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
        url:'./gestionIncidentes/incidentes'
      },
      {
        label: 'Agregar Incidentes',
        icon: 'pi pi-plus',
        url:'./gestionIncidentes/incidentes/agregar'
      },
      {
        label: 'Editar Incidentes',
        icon: 'pi pi-file-edit',
        url:'./gestionIncidentes/incidentes/editar/:id'
      },
      {
        label: 'Analisis Incidentes',
        icon: 'pi pi-file-edit',
        url:'./gestionIncidentes/analisis'
      },
      {
        label: 'Gestión Incidentes',
        icon: 'pi pi-file-edit',
        url:'./gestionIncidentes/gestion'
      },
      {
        label: 'Impacto Incidentes',
        icon: 'pi pi-file-edit',
        url:'./gestionIncidentes/impacto'
      },
      {
        label: 'Cerrar Incidentes',
        icon: 'pi pi-file-edit',
        url:'./gestionIncidentes/cerrar'
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
