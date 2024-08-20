import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // 1. set change detection strategy to OnPush
})
export class AppComponent {
  readonly counter$ = interval(1000);

  // 2. Remove the counter property and the constructor
  counter = 0;

  constructor() {
    this.counter$.subscribe((value) => {
      this.counter = value;
    });
  }

  // 3. In the html, bind directly to the counter$ observable using the async pipe
}
