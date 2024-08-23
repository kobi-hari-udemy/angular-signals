import { Component, DestroyRef, inject, Injector, OnInit, runInInjectionContext } from '@angular/core';
import { interval } from 'rxjs';
import { startCounting } from '../../util';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent  {
  private dr = inject(DestroyRef);
  private injector = inject(Injector);


  constructor() {
    // startCounting();
  }

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      startCounting();
    })
  }
}
