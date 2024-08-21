import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, debounce, debounceTime, map } from 'rxjs';

type Options = Record<string, string>;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly options$ = new BehaviorSubject<Options>({'r': 'Red', 'g': 'Green', 'b': 'Blue'});
  readonly selectedKey$ = new BehaviorSubject<string>('b');

  readonly selectedValue$ = combineLatest([this.options$, this.selectedKey$]).pipe(
    debounceTime(0),
    map(([options, key]) => options[key]), 
  );

  switchOptions() {
    this.options$.next({'m': 'Magenta', 'y': 'Yellow', 'c': 'Cyan'});
    this.selectedKey$.next('c');
  }

  constructor() {
    this.selectedValue$.subscribe(console.log);
  }


}
