import { Component, input, output } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-presenter',
  standalone: true,
  imports: [],
  templateUrl: './question-presenter.component.html',
  styleUrl: './question-presenter.component.scss'
})
export class QuestionPresenterComponent {
  readonly question = input.required<Question>();

  readonly answered = output<number>();

  onAnswer(answerIndex: number) {
    this.answered.emit(answerIndex);
  }

}
