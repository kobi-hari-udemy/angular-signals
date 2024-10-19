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
  // 1. Create an observable called number$ that emits an integer value every second

  // 2. Convert the observable to a signal called number from the number$ observable.

  // 3. Add an element in the UI that displays the value of the 'number' signal.


  readonly myName = signal('John Doe');
  // 4. Create an observable called myName$ from the "myName" signal

  // 5. Subscribe to myName$ and log the value to the console so that you log every name change from the UI.  


  ngOnInit() {
    // 6. challenge - repeat steps 1 - 4 in this method
  }

}
