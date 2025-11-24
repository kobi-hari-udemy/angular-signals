import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinnerReview } from './models/dinner-review.model';
import { email, Field, form, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Field],
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
  });

  readonly reviewForm = form(this.model, path => {
    required(path.username);
    required(path.email);
    email(path.email);
    minLength(path.description, 5);

  });
}
