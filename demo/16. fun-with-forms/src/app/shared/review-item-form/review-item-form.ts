import { Component, input } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';
import { ReviewItem } from '../../models/dinner-review.model';
import { FieldWrapper } from '../field-wrapper/field-wrapper';

@Component({
  selector: 'app-review-item-form',
  imports: [FieldWrapper, FormField],
  templateUrl: './review-item-form.html',
  styleUrl: './review-item-form.scss',
})
export class ReviewItemForm {
  readonly header = input('');

  readonly fieldTree = input.required<FieldTree<ReviewItem>>();

}
