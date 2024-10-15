import { Injectable, signal } from '@angular/core';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class ExamService {

  readonly questions = signal<Question[]>([
    {
      caption: 'How much is 4 + 4',
      answers: ['4', '8', '12', '16'],
      correctAnswerIndex: 1,
    },
    {
      caption: 'How much is 5 + 5',
      answers: ['5', '10', '15', '20'],
      correctAnswerIndex: 1,
    },
    {
      caption: 'How much is 6 + 6',
      answers: ['6', '12', '18', '24'],
      correctAnswerIndex: 1,
    },
  ]);

  readonly userAnswers = signal<number[]>([]);
  readonly isBusy = signal<boolean>(false);

  constructor() {}
}
