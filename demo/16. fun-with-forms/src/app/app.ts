import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  apply,
  applyEach,
  disabled,
  email,
  FieldTree,
  form,
  FormField,
  FormRoot,
  hidden,
  max,
  min,
  required,
  TreeValidationResult,
  validate,
  validateTree,
  ValidationError,
} from '@angular/forms/signals';
import { DinnerReview } from './models/dinner-review.model';
import { ReviewErrors, ReviewsService } from './services/reviews-service';
import { FieldWrapper } from './shared/field-wrapper/field-wrapper';
import { ReviewItemForm } from './shared/review-item-form/review-item-form';
import { reviewItemSchema } from './schemas/review-item-schema';
import { minWords } from './schemas/min-words-validator';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormField, FormRoot, FieldWrapper, ReviewItemForm],
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
    service: {
      rating: 5,
      recommendation: 'recommend',
    },
  });

  readonly reviewForm = form(
    this.model,
    (path) => {
      required(path.username, {
        message: 'Username is required',
      });
      required(path.email, {
        message: 'Email is required',
        when: (ctx) => ctx.valueOf(path.role) !== 'author',
      });
      email(path.email, {
        message: 'Email must be in a valid format',
      });
      disabled(path, {
        when: (ctx) => ctx.fieldTree().submitting(),
      });

      minWords(path.description, ctx => ctx.valueOf(path.role) === 'author' ? 10 : 5);

      apply(path.food, reviewItemSchema);
      apply(path.service, reviewItemSchema);

    },
    {
      submission: {
        action: async (frm) => {
          const value = frm().value();
          console.log('We are now submitting the form', value);
          const submitResult = await this.reviewsService.submitReview(value);
          const treeValidationResult = toTreeValidationResult(submitResult, frm);
          console.log('Submission completed');
          if (!treeValidationResult) this.submittedSuccessfully.set(true);
          return treeValidationResult;
        },
        onInvalid: (frm) => {
          console.log('The form is not valid, the errors are: ', frm().errorSummary());
          const firstInvalid = frm().errorSummary()[0];
          firstInvalid?.fieldTree().focusBoundControl();
        },
      },
    },
  );
}

function toTreeValidationResult(
  result: ReviewErrors,
  frm: FieldTree<DinnerReview>,
): TreeValidationResult {
  if (Object.keys(result).length === 0) return null;

  const res: ValidationError.WithFieldTree[] = [];

  if (result.email) {
    res.push({
      kind: 'submit-error',
      message: result.email,
      fieldTree: frm.email,
    });
  }

  if (result.role) {
    res.push({
      kind: 'submit-error',
      message: result.role,
      fieldTree: frm.role,
    });
  }

  return res;
}
