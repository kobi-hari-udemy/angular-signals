import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly x = signal(10);
  readonly isLarge = signal(false);

  readonly xLarge = computed(() => this.x() > 12);

  incrementX() {
    this.x.update(v => v + 1);
  }

  constructor() {
    effect(async () => {
      if (this.x() > 12) {
        console.log('x is greater than 12');
        
        await new Promise(resolve => setTimeout(resolve, 100));
        
        this.isLarge.set(true);
      }
    }, {
      // allowSignalWrites: true
    });
  }

}
