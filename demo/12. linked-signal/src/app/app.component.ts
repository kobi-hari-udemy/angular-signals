import { CommonModule } from '@angular/common';
import { Component, linkedSignal, signal } from '@angular/core';
import { PRODUCTS } from './products';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly products = signal(['Apple', 'Banana', 'Cherry']);

  readonly selectedProduct = linkedSignal<string[], string>({
    source: this.products, 
    computation: (prod, prev) => {
      if (!prev) return prod[0];
      if (prod.includes(prev.value)) return prev.value;
      return prod[0];
    }
  })

  addProduct() {
    this.products.update(prods => [...prods, PRODUCTS[prods.length]]);
  }

  removeProduct() {
    this.products.update(prods => prods.slice(0, -1));
  }

  nextProduct() {
    this.selectedProduct.update(selected => {
      const index = this.products().indexOf(selected);
      return this.products()[(index + 1) % this.products().length];
    });
  }

  prevProduct() {
    this.selectedProduct.update(selected => {
      const index = this.products().indexOf(selected);
      return this.products()[(index - 1 + this.products().length) % this.products().length];
    });
  }



}
