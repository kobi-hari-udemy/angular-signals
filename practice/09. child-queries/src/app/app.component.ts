import { Component, ElementRef, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputManagerComponent } from "./components/input-manager/input-manager.component";
import { ManagedInputDirective } from './components/input-manager/managed-input.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputManagerComponent, ManagedInputDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // add a proper view query (hint, use the # reference string)

  onSelect() {
    // use the view query to select the input
    // hint, use the 'select' method on the native element
  }

}
