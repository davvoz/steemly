import { bootstrapApplication } from '@angular/platform-browser';
import { StackblitzInfoComponent } from './app/stackblitz-info.component';

// Bootstrap the StackBlitz info component instead of the NativeScript app
bootstrapApplication(StackblitzInfoComponent)
  .catch(err => console.error(err));
