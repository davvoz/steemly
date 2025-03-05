import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stackblitz-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stackblitz-container">
      <h1>NativeScript Project in StackBlitz</h1>
      <p>This project contains a NativeScript application that requires native device capabilities.</p>
      <p>For the best development experience:</p>
      <ul>
        <li>Clone this repository locally</li>
        <li>Install the NativeScript CLI: <code>npm install -g nativescript</code></li>
        <li>Run the app with: <code>ns run android</code> or <code>ns run ios</code></li>
      </ul>
      <p>Learn more at <a href="https://docs.nativescript.org/" target="_blank">docs.nativescript.org</a></p>
    </div>
  `,
  styles: [`
    .stackblitz-container {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 { color: #2a5885; }
    ul { line-height: 1.6; }
    code { background: #f0f0f0; padding: 2px 5px; border-radius: 4px; }
  `]
})
export class StackblitzInfoComponent {}
