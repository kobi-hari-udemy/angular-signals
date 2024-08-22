import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { myComputed, mySignal } from './my-signal/my-signal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly firstSignal = mySignal(42);
  readonly secondSignal = mySignal('Signals');
  readonly derived = myComputed(() => this.firstSignal() + ' ' + this.secondSignal());

  // readonly firstSignal = signal(42);
  // readonly secondSignal = signal('Signals');

  constructor() {
    console.log(this.firstSignal());
    console.log(this.secondSignal());
  }

}
