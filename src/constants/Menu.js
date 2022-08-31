export const ROLE_ADMIN = 'ADMIN';
export const ROLE_STUDENT = 'ESTUDIANTE';

export const studentMenuOptions = [
  {
    text: 'Aprender',
    route: '/home',
    icon: 'majesticons:light-bulb',
  },
  {
    text: 'Estadísticas',
    route: '/statistics',
    icon: 'ic:sharp-query-stats',
  },
  {
    text: 'Acerca de',
    route: '/credits',
    icon: 'charm:info',
  },
];

export const adminMenuOptions = [
  {
    text: 'Contenido',
    route: '/admin/course',
    icon: 'fluent:content-settings-24-regular',
  },
  {
    text: 'Estadísticas',
    route: '/admin/statistics',
    icon: 'ic:sharp-query-stats',
  },
  {
    text: 'Acerca de',
    route: '/credits',
    icon: 'charm:info',
  },
];
