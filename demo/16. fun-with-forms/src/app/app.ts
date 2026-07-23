import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { disabled, email, form, FormField, readonly, required, submit, validate, validateTree } from '@angular/forms/signals';
import { DinnerReview } from './models/dinner-review.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormField],
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
    recommendation: 'no-opinion',
  });

  readonly reviewForm = form(this.model, path => {
    required(path.username, {
      message: 'Username is required'
    });
    // required(path.email, {
    //   message: 'Email is required', 
    //   when: (ctx) => ctx.valueOf(path.role) !== 'author'
    // });
    readonly(path.email, {
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
    validateTree(path, ctx => {
      const rating = ctx.valueOf(path.rating);
      const recommendation = ctx.valueOf(path.recommendation);

      if ((rating >= 4) && (recommendation === 'not-recommend')) {
        return [
          {
            kind: 'rating-conflict', 
            message: 'You cannot give rating of 4 and above and not recommend the dinner', 
            fieldTree: ctx.fieldTree.rating
          }, 
          {
            kind: 'rating-conflict', 
            message: 'You cannot give rating of 4 and above and not recommend the dinner', 
            fieldTree: ctx.fieldTree.recommendation
          }
        ]
      }

      return null;

    })
  });
}
