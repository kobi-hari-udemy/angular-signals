import { Component, DestroyRef, inject, OnInit } from '@angular/core';
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
  constructor() {
    // startCounting();
  }

  ngOnInit() {
    startCounting();
  }
}
