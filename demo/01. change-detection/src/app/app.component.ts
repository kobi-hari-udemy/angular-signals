import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter++;
      console.log('Counter:', this.counter);
    }, 3000);
  }
}
