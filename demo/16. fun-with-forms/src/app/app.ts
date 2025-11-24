import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinnerReview } from './models/dinner-review.model';
import { customError, email, Field, form, minLength, required, validate } from '@angular/forms/signals';

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
      when: (ctx) => ctx.valueOf(path.role) !== 'author'
    });
    email(path.email, {
      message: 'Email is not in the correct format',
    });
    validate(path.description, (ctx) => {
      const value = ctx.value();

      // check that there are at least 10 words
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount < 10) {
        return customError({
          kind: 'min-words', 
          message: `Description needs to be at least 10 words long (currently there are ${wordCount} words)`
        })
      }

      return undefined;
    })
  });
}
