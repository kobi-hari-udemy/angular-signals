import { ChangeDetectionStrategy, Component, computed, Input, input, OnChanges, signal } from '@angular/core';
import { RATES } from './rates';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyConverterComponent {
  
  readonly amount = input.required<number>();
  readonly currency = input.required<string>();

  readonly rate = computed(() => RATES[this.currency()]);
  readonly converted = computed(() => this.amount() * this.rate());


}
