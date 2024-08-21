import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly firstName$ = new BehaviorSubject('John');
  readonly lastName$ = new BehaviorSubject('Smith');

  readonly fullName$ = combineLatest([this.firstName$, this.lastName$]).pipe(
    map(([firstName, lastName]) => `${firstName} ${lastName}`),
    debounceTime(0)
  );

  setName() {
    this.firstName$.next('Jane');
    this.lastName$.next('Doe');
  }

  constructor() {
    this.fullName$.subscribe(console.log);
  }

}
