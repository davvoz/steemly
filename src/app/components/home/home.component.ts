import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { 
  NativeScriptCommonModule, 
  NativeScriptFormsModule,
  NativeScriptRouterModule
} from '@nativescript/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeComponent {
  constructor() { }
}
