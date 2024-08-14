import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly a$ = new BehaviorSubject(0);
  readonly b$ = new BehaviorSubject(0);

  readonly sum$ = combineLatest([this.a$, this.b$]).pipe(
    map(([a, b]) => a + b)
  );

  incrementA() {
    // only increase the value of a if sum$ is less than 10
    this.a$.next(this.a$.value + 1);
  }

  incrementB() {
    this.b$.next(this.b$.value + 1);
  }

  
  readonly firstName$ = new BehaviorSubject('John');
  readonly lastName$ = new BehaviorSubject('Smith');

  readonly fullName$ = combineLatest([this.firstName$, this.lastName$]).pipe(
    map(([firstName, lastName]) => `${firstName} ${lastName}`), 

    // debouncTime(0) to avoid the temporary wrong full name to be displayed
  );

  setName(firstName: string, lastName: string) {

    // would cause a temporary wrong full name to be displayed

    this.firstName$.next(firstName);
    this.lastName$.next(lastName);
  }


  constructor() {
    this.fullName$.subscribe(console.log);
  }



}
