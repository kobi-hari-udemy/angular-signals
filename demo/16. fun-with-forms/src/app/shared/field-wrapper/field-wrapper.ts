import { Component, computed, contentChild, effect, input } from '@angular/core';
import { Field, MAX } from '@angular/forms/signals';
import { MIN_WORDS } from '../../schemas/min-words-validator';

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
  readonly hasMinWords = computed(() => this.fieldState().hasMetadata(MIN_WORDS));
  readonly minWords = computed(() => this.hasMinWords() 
    ? this.fieldState().metadata(MIN_WORDS)()!
    : 0
  );


}
