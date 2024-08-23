import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  readonly counter = signal(0);

  // 1. Inject the destroyRef here
  // 2. Inject the injector here

  constructor() {
    const int = setInterval(() => {
      this.counter.update(v => v + 1);
    }, 1000);

    // 3. Use the destroyRef to clear the interval (use `clearInterval(int)`)
  }

  // 4. Create an effect when clicking a button
  startEffect() {
  }

  // 5. Stop the effect when clicking another button
  stopEffect() {
  }

}
