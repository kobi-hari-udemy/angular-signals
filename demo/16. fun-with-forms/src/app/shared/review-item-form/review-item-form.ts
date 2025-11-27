import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';
import { ReviewItem } from '../../models/dinner-review.model';
import { FieldStyleDirective } from '../field-styling.directive';
import { FieldWrapper } from '../field-wrapper/field-wrapper';

@Component({
  selector: 'app-review-item-form',
  imports: [Field, FieldStyleDirective, FieldWrapper],
  templateUrl: './review-item-form.html',
  styleUrl: './review-item-form.scss',
})
export class ReviewItemForm {
  readonly header = input('');

  readonly field = input.required<FieldTree<ReviewItem>>();

}
