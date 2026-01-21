import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { AboutPageComponent } from './pages/about-page.component';
import { LabPageComponent } from './pages/lab-page.component';
import { BusinessPageComponent } from './pages/business-page.component';
import { ConnectPageComponent } from './pages/connect-page.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'lab', component: LabPageComponent },
  { path: 'business', component: BusinessPageComponent },
  { path: 'connect', component: ConnectPageComponent },
  { path: '**', redirectTo: '' },
];
