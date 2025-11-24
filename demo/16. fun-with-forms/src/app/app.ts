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
    required(path.username, {
      message: 'Username is required',
    });
    required(path.email, {
      message: 'Email is required',
    });
    email(path.email, {
      message: 'Email is not in the correct format',
    });
    minLength(path.description, 5, {
      message: 'Description must be at least 5 characters long',
    });
  });
}
