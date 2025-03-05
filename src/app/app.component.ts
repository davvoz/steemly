import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptModule, NativeScriptRouterModule } from '@nativescript/angular';

@Component({
  selector: 'ns-app',
  standalone: true,
  imports: [NativeScriptCommonModule, NativeScriptModule, NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA],
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `
})
export class AppComponent {
  title = 'Steemly';
}
