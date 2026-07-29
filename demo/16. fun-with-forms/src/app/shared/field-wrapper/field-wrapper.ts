import { Component, input } from '@angular/core';

@Component({
  selector: 'app-field-wrapper',
  imports: [],
  templateUrl: './field-wrapper.html',
  styleUrl: './field-wrapper.scss',
})
export class FieldWrapper {
  readonly label = input('');

}
