import { Component, computed, contentChild, effect, input } from '@angular/core';
import { Field } from '@angular/forms/signals';

@Component({
  selector: 'app-field',
  imports: [],
  templateUrl: './field-wrapper.html',
  styleUrl: './field-wrapper.scss',
})
export class FieldWrapper<T> {
  readonly label = input('');

  readonly fieldDirective = contentChild.required(Field<T>);
  readonly fieldState = computed(() => this.fieldDirective().state());
  readonly errors = computed(() => this.fieldState().errors());
  readonly required = computed(() => this.fieldState().required());
}
