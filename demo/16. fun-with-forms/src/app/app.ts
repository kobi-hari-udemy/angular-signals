import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
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
  submit,
  TreeValidationResult,
  validate,
  validateTree,
  ValidationError,
} from '@angular/forms/signals';
import { DinnerReview } from './models/dinner-review.model';
import { ReviewErrors, ReviewsService } from './services/reviews-service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormField, FormRoot],
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
    reviews: [
      {
        aspect: 'Food',
        rating: 4,
        recommendation: 'recommend',
      },
      {
        aspect: 'Service',
        rating: 5,
        recommendation: 'recommend',
      },
    ],
  });

  addReviewItem() {
    this.model.update((state) => ({
      ...state,
      reviews: [
        ...state.reviews,
        {
          aspect: '',
          rating: 3,
          recommendation: 'no-opinion',
        },
      ],
    }));
  }

  removeReviewItem(index: number) {
    this.model.update((state) => ({
      ...state,
      reviews: state.reviews.filter((ri, i) => i !== index),
    }));
  }

  readonly reviewForm = form(this.model, (path) => {
    required(path.username, {
      message: 'Username is required',
    });
    // required(path.email, {
    //   message: 'Email is required',
    //   when: (ctx) => ctx.valueOf(path.role) !== 'author'
    // });
    hidden(path.email, {
      when: (ctx) => ctx.valueOf(path.role) === 'author',
    });
    email(path.email, {
      message: 'Email must be in a valid format',
    });
    disabled(path, {
      when: ctx => ctx.fieldTree().submitting()
    });

    validate(path.description, (ctx) => {
      const value = ctx.value();
      const threshold = ctx.valueOf(path.role) === 'author' ? 10 : 5;
      const wordsCount = value.trim().split(/\s+/).length;
      if (wordsCount < threshold) {
        return {
          kind: 'min-words',
          message: `Must have at least ${threshold} words. Current count: ${wordsCount}`,
        };
      }
      return null;
    });

    applyEach(path.reviews, (p) => {
      (min(p.rating, 1, {
        message: 'Min 1',
      }),
        max(p.rating, 5, {
          message: 'Max 5',
        }),
        required(p.aspect, {
          message: 'Aspect is mandatory',
        }),
        validateTree(p, (ctx) => {
          const rating = ctx.valueOf(p.rating);
          const recommendation = ctx.valueOf(p.recommendation);
          if (rating >= 4 && recommendation === 'not-recommend') {
            return [
              {
                kind: 'rating-conflict',
                message: 'Rating Conflict',
                fieldTree: ctx.fieldTree.rating,
              },
              {
                kind: 'rating-conflict',
                message: 'Rating Conflict',
                fieldTree: ctx.fieldTree.recommendation,
              },
            ];
          }
          return null;
        }));
    });
  }, {
    submission: {
      action: async frm => {
        const value = frm().value();
        console.log('We are now submitting the form', value);
        const submitResult = await this.reviewsService.submitReview(value);
        const treeValidationResult = toTreeValidationResult(submitResult, frm);
        console.log('Submission completed');
        if (!treeValidationResult) this.submittedSuccessfully.set(true);
        return treeValidationResult;
      }, 
      onInvalid: frm => {
        console.log('The form is not valid, the errors are: ', frm().errorSummary())
        const firstInvalid = frm().errorSummary()[0];
        firstInvalid?.fieldTree().focusBoundControl();

      }
    }
  });
}


function toTreeValidationResult(result: ReviewErrors, frm: FieldTree<DinnerReview>): TreeValidationResult {
  if (Object.keys(result).length === 0) return null;

  const res: ValidationError.WithFieldTree[] = [];

  if (result.email) {
    res.push({
      kind: 'submit-error', 
      message: result.email, 
      fieldTree: frm.email
    })
  }

  if (result.role) {
    res.push({
      kind: 'submit-error', 
      message: result.role, 
      fieldTree: frm.role
    })
  }

  return res;
}