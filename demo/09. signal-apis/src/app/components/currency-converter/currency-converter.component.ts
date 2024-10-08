import { ChangeDetectionStrategy, Component, computed, EventEmitter, Input, input, OnChanges, output, Output, signal } from '@angular/core';
import { RATES } from './rates';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, interval, map, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import { outputFromObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyConverterComponent {
  readonly manualRefresh$ = new BehaviorSubject<void>(undefined);

  private readonly stop$ = new Subject<void>();
  stopRefresh() {
    this.stop$.next();
  }

  readonly refreshRequired$ = this.manualRefresh$.pipe(
    switchMap(() => interval(2000).pipe(startWith(0))),
    map(() => {}),
    takeUntilDestroyed(), 
    takeUntil(this.stop$)
  );


  readonly refreshRequired = outputFromObservable(this.refreshRequired$);
  
  readonly amount = input.required<number>();
  readonly currency = input.required<string>();

  readonly rate = computed(() => RATES[this.currency()]);
  readonly converted = computed(() => this.amount() * this.rate());
  
}
