import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideNativeScriptHttpClient,
  provideNativeScriptNgZone,
  provideNativeScriptRouter,
  runNativeScriptAngularApp,
} from '@nativescript/angular';
import { AppComponent } from './app/app.component';
// Import from the index file insteadle NativeScript path format
import { routes } from './app';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

runNativeScriptAngularApp({
  appModuleBootstrap: () =>
    bootstrapApplication(AppComponent, {
      providers: [
        provideNativeScriptHttpClient(),
        provideHttpClient(withInterceptorsFromDi()),
        provideNativeScriptRouter(routes),
        provideNativeScriptNgZone()
      ]
    })
});
