import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

/**
 * The application’s route configuration. This simple configuration directs
 * the root path to the dashboard component. Additional routes can be added
 * here as new features are implemented.
 */
export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
];