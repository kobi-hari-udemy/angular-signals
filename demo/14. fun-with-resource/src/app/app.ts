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

  readonly apiNumber = resource({
    loader: (options) => this.api.getRandomNumberAsync(options.abortSignal), 
    defaultValue: -1
  });

  reloadNumber() {
    this.apiNumber.reload();
  }

  setLocalValue(val: number) {
    this.apiNumber.set(val);
  }



  constructor() {
  }

}
