import { Component, inject, resource, signal } from '@angular/core';
import { Api } from './services/api';
import { Numeric } from './components/numeric/numeric';

@Component({
  selector: 'app-root',
  imports: [Numeric],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly api = inject(Api);
  readonly source = signal(50);

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
