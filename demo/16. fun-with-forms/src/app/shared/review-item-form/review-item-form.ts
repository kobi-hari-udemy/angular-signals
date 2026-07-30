import { Component, input } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';
import { ReviewItem } from '../../models/dinner-review.model';
import { FieldWrapper } from '../field-wrapper/field-wrapper';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'app-review-item-form',
  imports: [FieldWrapper, FormField, StarRating],
  templateUrl: './review-item-form.html',
  styleUrl: './review-item-form.scss',
})
export class ReviewItemForm {
  readonly header = input('');

  readonly fieldTree = input.required<FieldTree<ReviewItem>>();

}
