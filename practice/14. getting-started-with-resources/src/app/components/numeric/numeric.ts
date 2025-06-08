import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-numeric',
  imports: [FormsModule],
  templateUrl: './numeric.html',
  styleUrl: './numeric.scss'
})
export class Numeric {
  readonly value = model.required<number>();

  readonly label = input('');

  inc() {
    this.value.update((v) => Math.min(100, v + 1));
  }
  dec() {
    this.value.update((v) => Math.max(0, v - 1));
  }

}
