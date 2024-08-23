import {
  Component,
  effect,
  inject,
  Injector,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval } from 'rxjs';
import { CounterComponent } from "./components/counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showCounter = false;

  toggleCounter() {
    this.showCounter = !this.showCounter;
  }
}
