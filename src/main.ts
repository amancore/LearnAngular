import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // or AppComponent

bootstrapApplication(App, {
  providers: [provideHttpClient(), ...appConfig.providers], // Merge!
}).catch((err) => console.error(err));
