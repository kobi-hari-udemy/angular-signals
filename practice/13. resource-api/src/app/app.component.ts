import { CommonModule } from '@angular/common';
import { Component, effect, inject, resource, signal } from '@angular/core';
import { Color } from './models/color.model';
import { SearchService } from './services/search.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly service = inject(SearchService);
  readonly keyword = signal('');

  readonly results = signal<Color[]>([
    { name: 'red', code: '#ff0000' },
    { name: 'green', code: '#00ff00' },
    { name: 'blue', code: '#0000ff' }, 
    { name: 'yellow', code: '#ffff00' },
    { name: 'cyan', code: '#00ffff' },
    { name: 'magenta', code: '#ff00ff' }
  ]);

}
