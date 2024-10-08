import { CommonModule } from '@angular/common';
import { Component, contentChild, contentChildren, effect, input, model, signal } from '@angular/core';
import { OptionDirective } from './option.directive';

@Component({
  selector: 'app-option-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-selector.component.html',
  styleUrl: './option-selector.component.scss'
})
export class OptionSelectorComponent {
  readonly options = input.required<string[]>();
  readonly templateDirective = contentChild(OptionDirective);

  readonly selected = model.required();

  select(option: string) {
    this.selected.set(option);
  }
}
