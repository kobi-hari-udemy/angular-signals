import { Component, signal } from '@angular/core';
import {Field } from '@angular/forms/signals';
import { CommonModule } from '@angular/common';
import { DinnerReview } from './models/dinner-review.model';

@Component({
  selector: 'app-root',
  imports: [Field, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly model = signal<DinnerReview>({
    username: '',
    role: 'user',
    email: '',
    description: '',
    rating: 1,
  })
}
