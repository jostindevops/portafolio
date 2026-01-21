import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

// Uncomment the following line to enable production mode in a build environment.
// if (environment.production) {
//   enableProdMode();
// }

/**
 * Bootstraps the root component using Angular’s new standalone API.
 * The router providers are registered here with the application routes.
 */
bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)],
}).catch((err) => console.error(err));