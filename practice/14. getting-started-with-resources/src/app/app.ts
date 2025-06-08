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

  readonly apiNumber = null;

  reloadNumber() {
  }

  setLocalValue(val: number) {
  }
}
