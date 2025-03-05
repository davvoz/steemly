import { runNativeScriptAngularApp, bootstrapApplication } from '@nativescript/angular';
import {
  provideNativeScriptHttpClient,
  provideNativeScriptNgZone,
  provideNativeScriptRouter,
  NativeScriptModule
} from '@nativescript/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

runNativeScriptAngularApp({
  appModuleBootstrap: () =>
    bootstrapApplication(AppComponent, {
      providers: [
        importProvidersFrom(NativeScriptModule),
        provideNativeScriptHttpClient(),
        provideHttpClient(withInterceptorsFromDi()),
        provideNativeScriptRouter(routes),
        provideNativeScriptNgZone(),
        provideAnimations()
      ]
    })
});
