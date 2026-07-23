import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { email, form, FormField, hidden, required, validate } from '@angular/forms/signals';
import { DinnerReview } from './models/dinner-review.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormField],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly model = signal<DinnerReview>({
    username: 'Kobi Hari',
    role: 'user',
    email: 'kobi2294@yahoo.com',
    description: 'The dinner was very nice, we enjoyed it so much',
    food: {
      rating: 1,
      recommendation: 'no-opinion',
    },
    service: {
      rating: 1, 
      recommendation: 'no-opinion'
    }
  });

  readonly reviewForm = form(this.model, path => {
    required(path.username, {
      message: 'Username is required'
    });
    // required(path.email, {
    //   message: 'Email is required', 
    //   when: (ctx) => ctx.valueOf(path.role) !== 'author'
    // });
    hidden(path.email, {
      when: ctx => ctx.valueOf(path.role) === 'author'
    })
    email(path.email, {
      message: 'Email must be in a valid format'
    });
    validate(path.description, (ctx) => {
      const value = ctx.value();
      const threshold = ctx.valueOf(path.role) === 'author'
        ? 10
        : 5;
      const wordsCount = value.trim().split(/\s+/).length;
      if (wordsCount < threshold) {
        return {
          kind: 'min-words', 
          message: `Must have at least ${threshold} words. Current count: ${wordsCount}`
        }

      }
      return null;

    });
  });
}
