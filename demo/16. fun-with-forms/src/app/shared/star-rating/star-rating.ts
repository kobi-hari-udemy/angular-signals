import { Component, computed, input, InputSignal, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss',
  host: {
    '[class.disabled]': 'disabled()', 
    '[class.readonly]': 'readonly()'
  }
})
export class StarRating implements FormValueControl<number> {
  readonly value = model.required<number>();

  readonly max = input<number | undefined>(undefined);

  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);

  readonly stars = computed(() => Array.from({length: this.max() || 5}, (_, i) => i + 1));

  setValue(val: number) {
    if (this.disabled()) return;
    if (this.readonly()) return;
    this.value.set(val);
  }

}
