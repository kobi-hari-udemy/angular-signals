import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly changeDetector = inject(ChangeDetectorRef);
  message = 'Hello World!';

  changeMessage() {
    setTimeout(() => {
      this.message = 'Hello Angular!';
      console.log('Message changed');
    }, 100);

    setTimeout(() => {
      this.changeDetector.detectChanges();
      console.log('Change detection triggered');
    }, 2000);
  }
}
