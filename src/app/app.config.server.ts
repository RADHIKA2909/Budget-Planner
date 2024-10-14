import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);


// app.config.server.ts: (For Application Configuration)
// Merges appConfig with additional configurations specific to SSR, such as provideServerRendering().
// Ensures the app can also be rendered on the server-side, which is essential for SSR setups.
