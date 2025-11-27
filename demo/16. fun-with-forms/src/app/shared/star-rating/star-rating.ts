import { Component, computed, model } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss',
})
export class StarRating {
  readonly value = model.required<number>();

  readonly stars = computed(() => Array.from({length: 5}, (_, i) => i + 1))

}
