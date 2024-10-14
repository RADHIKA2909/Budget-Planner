import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



// main.ts: This is the main entry point for the client-side rendering of the Angular app. It does the following:
// Imports bootstrapApplication to bootstrap an Angular application.
// Bootstraps AppComponent using the configuration provided by appConfig.
// Catches any errors during the bootstrapping process.
