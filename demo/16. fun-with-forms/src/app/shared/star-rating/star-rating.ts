import { Component, computed, input, InputSignal, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss',
})
export class StarRating implements FormValueControl<number> {
  readonly value = model.required<number>();

  readonly max = input<number | undefined>(undefined);

  readonly stars = computed(() => Array.from({length: this.max() || 5}, (_, i) => i + 1))

}
