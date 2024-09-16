import { ChangeDetectionStrategy, Component, computed, Input, input, OnChanges, signal, SimpleChanges } from '@angular/core';
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
export class CurrencyConverterComponent implements OnChanges {
  
  @Input({required: true})
  amount!: number;

  @Input({required: true})
  currency!: string;

  rate = 1;
  converted = 0;


  ngOnChanges(): void {
    this.rate = RATES[this.currency];
    this.converted = this.amount * this.rate;    
  }




}
