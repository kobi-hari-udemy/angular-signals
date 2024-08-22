import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { mySignal } from './my-signal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly firstSignal = signal(42);

  readonly secondSignal = signal('Signals');

  readonly thirdSignal = signal(10);

  readonly derived = computed(() => this.firstSignal() + this.thirdSignal());


  setSignal() {
    this.firstSignal.set(10);
    this.firstSignal.update(value => value + 1);
    this.secondSignal.set('Hello');
  }

  updateSignal() {
    this.firstSignal.update(value => value + 1);
  }

   constructor() {
    effect(() => {
      console.log('The first signal value is:', this.firstSignal());
      console.log('The second signal value is:', this.secondSignal());    
    });
  }
}
