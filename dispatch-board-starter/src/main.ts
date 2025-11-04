import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

/**
 * Bootstrap Angular application with standalone components
 * No NgModule is used - Angular 20 standalone API
 *
 * withComponentInputBinding: Enables automatic binding of route parameters to component input signals
 */
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient()
  ]
}).catch((err) => console.error(err));
