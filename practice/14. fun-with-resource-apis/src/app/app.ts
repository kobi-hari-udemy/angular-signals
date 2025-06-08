import { Component, inject, resource } from '@angular/core';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly api = inject(Api);

  // Add the resource here, call it 'apiNumber'
}
