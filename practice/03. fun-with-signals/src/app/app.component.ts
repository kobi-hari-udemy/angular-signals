import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  // 8. Set change detection strategy to OnPush
})
export class AppComponent {
  // 1. replace with a writeable signal with an initial value of 0
  readonly firstNumber = undefined; 

  // 2. replace with a writeable signal with an initial value of 0
  readonly secondNumber = undefined;

  // 3. replace with a computed signal that emits the sum of the first and second numbers
  readonly sum = undefined;

  setSecondSignalTo10() {
    // 4. set the second number signal to 10
  }

  incrementFirstSignal() {
    // 5. increment the first number signal by 1 but only if it's less than 10
  }

  incrementBothSignals() {
    // 6. increment both number signals by 1 with a maximum of 10
  }


  constructor() {
    // 7. Define an effect that displays both signals to the console whenever any of them changes
  }
}
