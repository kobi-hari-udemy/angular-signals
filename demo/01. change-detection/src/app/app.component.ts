import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  counter = 0;

  // readonly changeDetector = inject(ChangeDetectorRef);

  calculateValue() {
    console.log('Calculating value...');
    return 42;
  }

  doNothing() {}
  
  constructor() {
    setInterval(() => {
      this.counter++;
      console.log('Counter:', this.counter);
    }, 1000);

    // setInterval(() => {
    //   this.changeDetector.detectChanges();
    // }, 5000)
  }
}
