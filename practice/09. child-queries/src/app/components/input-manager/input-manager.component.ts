import { Component, contentChildren, ElementRef } from '@angular/core';
import { ManagedInputDirective } from './managed-input.directive';

@Component({
  selector: 'app-input-manager',
  standalone: true,
  imports: [],
  templateUrl: './input-manager.component.html',
  styleUrl: './input-manager.component.scss'
})
export class InputManagerComponent {

  // add a proper content query (hint, use the ManagedInputDirective)

  clearAll() {
    // use the content query to clear all inputs
  }

}
