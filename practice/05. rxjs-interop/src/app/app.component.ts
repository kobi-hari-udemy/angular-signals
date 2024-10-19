import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  // 1. Create an obserbable that emits a value every second

  // 2. Convert the observable to a signal


  readonly myName = signal('John Doe');
  // 3. Create an observable from the "myName" signal

  // 4. Subscribe to the observable and log the value to the console
  


  ngOnInit() {
    // 5. challenge - repeat steps 1 - 4 in this method
  }

}
