import { MenuItem } from "primeng/api";
import { SideMenuOption } from './shared/interfaces/menu.interfece';

export const MENU :  SideMenuOption[]= [
  {
    label: 'Inicio',
    icon: 'pi pi-home',
    routerLink:'./autenticacion/login',
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
        label: 'Listar Usuarios',
        icon: 'pi pi-list',
        url:'./administrador/usuarios',
        enableRoles: ['admin']
      },
      {
        label: 'Agregar Usuario',
        icon: 'pi pi-fw pi-user-plus',
        url:'./administrador/usuarios/agregar',
        enableRoles: ['admin','develop']
      },
      {
        label: 'Editar Usuario',
        icon: 'pi pi-user-edit',
        url:'./administrador/usuarios/editar/:id',
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
        routerLink:'./administrador/herramientas',
        enableRoles: ['admin','develop']
      },
      {
        label: 'Agregar Herramientas',
        icon: 'pi pi-plus',
        routerLink:'./administrador/herramientas/agregar',
        enableRoles: ['admin','develop']
      },
      {
        label: 'Editar Herramientas',
        icon: 'pi pi-file-edit',
        routerLink:'./administrador/herramientas/editar/:id',
        enableRoles: ['admin']
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: 'Gestión Malware',
    icon: 'pi pi-qrcode',
    enableRoles: ['admin','develop', 'user'],
    items: [
      {
        label: 'Listar Malware',
        icon: 'pi pi-list',
        routerLink:'./administrador/malware',
        enableRoles: ['admin']
      },
      {
        label: 'Agregar Malware',
        icon: 'pi pi-plus',
        routerLink:'./administrador/malware/agregar',
        enableRoles: ['develop']
      },
      {
        label: 'Editar Malware',
        icon: 'pi pi-file-edit',
        routerLink:'./administrador/malware/editar/:id',
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
    enableRoles: ['admin','develop','user'],
    items: [
      {
        label: 'Listar Incidentes',
        icon: 'pi pi-list',
        routerLink:'./gestion-incidentes/incidentes',
        enableRoles: ['admin','develop','user']
      },
      {
        label: 'Agregar Incidentes',
        icon: 'pi pi-plus',
        routerLink:'./gestion-incidentes/incidentes/agregar',
        enableRoles: ['develop'],
      },

      {
        label: 'Editar Incidentes',
        icon: 'pi pi-file-edit',
        routerLink:'./gestion-incidentes/incidentes/editar/:id',
        enableRoles: ['admin','develop','user'],
      },
      {
        label: 'Analisis Incidentes',
        icon: 'pi pi-file-edit',
        routerLink:'./gestion-incidentes/analisis',
        enableRoles: ['admin','develop','user'],
      },
      {
        label: 'Gestión Incidentes',
        icon: 'pi pi-file-edit',
        routerLink:'./gestion-incidentes/gestion',
        enableRoles: ['admin','develop','user'],
      },
      {
        label: 'Impacto Incidentes',
        icon: 'pi pi-file-edit',
        routerLink:'./gestion-incidentes/impacto',
        enableRoles: ['admin','develop','user'],
      },
      {
        label: 'Cerrar Incidentes',
        icon: 'pi pi-file-edit',
        routerLink:'./gestion-incidentes/cerrar',
        enableRoles: ['admin','develop','user'],
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: 'Quit',
    icon: 'pi pi-fw pi-power-off',
    routerLink:'./auth/login'
  },
];
