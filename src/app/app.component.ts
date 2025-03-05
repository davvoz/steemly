import { Component } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule
  ],
  template: `
    <page-router-outlet></page-router-outlet>
  `
})
export class AppComponent {
  title = 'steemly';
}
