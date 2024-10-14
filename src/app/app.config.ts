import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideAnimations(), provideAnimationsAsync()]
};


// app.config.ts: (For Application Configuration)

// Defines the configuration for client-side rendering.
// Provides various features:
// provideRouter(routes): Sets up routing based on the defined routes in app.routes.ts.
// provideClientHydration(): Helps in maintaining state when switching between SSR and client-side rendering.
// provideAnimations() and provideAnimationsAsync(): Adds support for animations in the Angular application.
