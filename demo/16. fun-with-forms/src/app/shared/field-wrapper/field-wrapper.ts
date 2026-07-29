import { Component, computed, contentChild, input } from '@angular/core';
import { FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-field-wrapper',
  imports: [],
  templateUrl: './field-wrapper.html',
  styleUrl: './field-wrapper.scss',
})
export class FieldWrapper<T> {
  readonly label = input('');
  readonly fieldDirective = contentChild.required(FormField<T>);
  readonly fieldState = computed(() => this.fieldDirective().state());
  readonly errors = computed(() => this.fieldState().errors());
  readonly required = computed(() => this.fieldState().required());

}
