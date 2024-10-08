import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  OnInit,
  signal,
  viewChild,
  ViewChild,
  viewChildren,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RATES } from './components/currency-converter/rates';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { OptionSelectorComponent } from './components/option-selector/option-selector.component';
import { OptionDirective } from './components/option-selector/option.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CurrencyConverterComponent,
    ReactiveFormsModule,
    OptionSelectorComponent,
    OptionDirective,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  currencyConverter = viewChild.required(CurrencyConverterComponent);

  stopRefresh() {
    this.currencyConverter().stopRefresh();
  }

  readonly currencies = Object.keys(RATES);

  readonly currency = signal('GBP');

  amount = new FormControl(100);

  refreshData() {
    console.log('refreshData');
  }
}
