import { AfterViewInit, ChangeDetectionStrategy, Component, effect, ElementRef, OnInit, signal, viewChild, ViewChild, viewChildren, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RATES } from './components/currency-converter/rates';
import { CurrencyConverterComponent } from "./components/currency-converter/currency-converter.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { OptionSelectorComponent } from "./components/option-selector/option-selector.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyConverterComponent, ReactiveFormsModule, OptionSelectorComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit{
  // @ViewChild(CurrencyConverterComponent)
  currencyConverter = viewChild.required(CurrencyConverterComponent);

  currentConverters = viewChildren(CurrencyConverterComponent);

  myRefDiv = viewChild.required('myRef', {read: ViewContainerRef});

  stopRefresh() {
    // this.currencyConverter().stopRefresh();
    for (const converter of this.currentConverters()) {
      converter.stopRefresh();
    }
  }

  constructor() {
    effect(() => {
      console.log('Effect', this.currencyConverter());
    })
  }


  ngOnInit(): void {
    console.log('Init');
  }

  ngAfterViewInit(): void {
    console.log('After View Init')
  }


  readonly currencies = Object.keys(RATES);

  /*   */
  readonly currency = signal('GBP');
  /*   */

  amount = new FormControl(100);

  refreshData() {
    console.log('refreshData');
  }

}
