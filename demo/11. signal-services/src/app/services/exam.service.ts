import { computed, Injectable, signal } from '@angular/core';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';

@Injectable({
  providedIn: 'root',
})
export class ExamService {

  readonly #questions = signal<Question[]>([
    {
      caption: 'How much is 4 * 3',
      answers: ['4', '8', '12', '16'],
      correctAnswerIndex: 2,
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
  readonly questions = this.#questions.asReadonly();

  readonly #userAnswers = signal<number[]>([]);
  readonly userAnswers = computed(() => this.#userAnswers().map<Answer>((ans, index) => ({
    userAnswerIndex: ans,
    isCorrect: ans === this.questions()[index].correctAnswerIndex
  })))

  readonly #isBusy = signal<boolean>(false);
  readonly isBusy = this.#isBusy.asReadonly();

  readonly currentQuestionIndex = computed(() => this.userAnswers().length);
  readonly currentQuestion = computed(() => 
    this.questions()[this.currentQuestionIndex()]
    );

  readonly questionsCount = computed(() => this.questions().length);
  readonly isQuizDone = computed(() => 
    this.userAnswers().length === this.questionsCount());

  readonly correctAnswers = computed(() => 
    this.userAnswers().filter(ans => ans.isCorrect)
  );

  readonly correctAnswersCount = computed(() => this.correctAnswers().length);


  constructor() {}
}
