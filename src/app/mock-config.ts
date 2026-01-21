import { ConfigOption } from './config-option';

/**
 * A simulated configuration list that defines the initial set of widgets
 * available in the dashboard. In a real application this data might be
 * retrieved from a backend API or user preferences. Keeping it in a
 * separate file makes it easy to replace with a service later on.
 */
export const CONFIG_OPTIONS: ConfigOption[] = [
  {
    id: 'monitoring',
    name: 'Monitorización',
    description: 'Estado de los servicios y métricas en tiempo real',
  },
  {
    id: 'logs',
    name: 'Logs',
    description: 'Registro de eventos y auditorías',
  },
  {
    id: 'alerts',
    name: 'Alertas',
    description: 'Notificaciones de seguridad y rendimiento',
  },
  {
    id: 'cicd',
    name: 'CI/CD Status',
    description: 'Estado de los pipelines de integración y despliegue',
  },
];