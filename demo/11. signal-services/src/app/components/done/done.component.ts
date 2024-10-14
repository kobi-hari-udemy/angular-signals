import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-done',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss'
})
export class DoneComponent {
  readonly correct = input.required<number>();
  readonly total = input.required<number>();

  readonly score = computed(() => this.total() === 0 ? 0 : this.correct() / this.total());
  

}
