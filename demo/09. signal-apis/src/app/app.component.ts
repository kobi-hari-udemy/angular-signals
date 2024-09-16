import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RATES } from './component/currency-converter/rates';
import { CurrencyConverterComponent } from "./component/currency-converter/currency-converter.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyConverterComponent, ReactiveFormsModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly currencies = Object.keys(RATES);

  amount = new FormControl(100);
  currency = new FormControl('USD');


}
