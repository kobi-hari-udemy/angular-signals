import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinnerReview } from './models/dinner-review.model';
import {
  applyEach,
  customError,
  disabled,
  email,
  Field,
  form,
  max,
  min,
  minLength,
  required,
  submit,
  validate,
  validateTree,
} from '@angular/forms/signals';
import { ReviewsService } from './services/reviews-service';
import { FieldStyleDirective } from './shared/field-styling.directive';
import { FieldWrapper } from './shared/field-wrapper/field-wrapper';
import { ReviewItemForm } from './shared/review-item-form/review-item-form';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Field, FieldStyleDirective, FieldWrapper, ReviewItemForm],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly reviewsService = inject(ReviewsService);
  readonly submittedSuccessfully = signal(false);

  readonly model = signal<DinnerReview>({
    username: 'Kobi Hari',
    role: 'user',
    email: 'kobi2294@yahoo.com',
    description: 'The dinner was very nice, we enjoyed it so much',
    food: {
        rating: 4,
        recommendation: 'recommend',
      },
    service: 
      {
        rating: 5,
        recommendation: 'recommend',
      },
  });

  readonly reviewForm = form(this.model, (path) => {
    required(path.username, {
      message: 'Username is required',
    });
    required(path.email, {
      message: 'Email is required',
      when: (ctx) => ctx.valueOf(path.role) !== 'author',
    });
    email(path.email, {
      message: 'Email is not in the correct format',
    });
    disabled(path, ctx => ctx.state.submitting());
    validate(path.description, (ctx) => {
      const value = ctx.value();
      const threshold = ctx.valueOf(path.role) === 'author' ? 10 : 5;

      // check that there are at least 10 words
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount < threshold) {
        return customError({
          kind: 'min-words',
          message: `Description needs to be at least ${threshold} words long (currently there are ${wordCount} words)`,
        });
      }

      return undefined;
    });

    // applyEach(path.reviews, (p) => {
    //   min(p.rating, 1, {
    //     message: 'Min 1',
    //   });

    //   max(p.rating, 5, {
    //     message: 'Max 5',
    //   });

    //   required(p.aspect, {
    //     message: 'Aspect is mandatory',
    //   });

    //   validateTree(p, (ctx) => {
    //     const rating = ctx.valueOf(p.rating);
    //     const recommendation = ctx.valueOf(p.recommendation);
    //     if (rating >= 4 && recommendation === 'not-recommend') {
    //       return [
    //         customError({
    //           kind: 'rating-conflict',
    //           message: 'Rating Conflict',
    //           field: ctx.field.rating,
    //         }),
    //         customError({
    //           kind: 'rating-conflict',
    //           message: 'Rating Conflict',
    //           field: ctx.field.recommendation,
    //         }),
    //       ];
    //     }

    //     return undefined;
    //   });
    // });
  });

  onSubmit() {
    submit(this.reviewForm, async frm => {
      console.log('starting to submit the form');
      const res = await this.reviewsService.submitReview(frm);
      if (!res) {
        this.submittedSuccessfully.set(true);
      }
      return res;
    })
  }

}
