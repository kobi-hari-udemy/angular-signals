import { computed, inject, Injectable, signal } from '@angular/core';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ExamGeneratorService } from './exam-generator.service';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  readonly #generateExam$ = new BehaviorSubject<number>(1);

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
  readonly #userAnswers = signal<number[]>([]);
  readonly #isBusy = signal<boolean>(false);


  readonly questions = this.#questions.asReadonly();
  readonly level = toSignal(this.#generateExam$);

  readonly userAnswers = computed(() => this.#userAnswers().map<Answer>((ans, index) => ({
    userAnswerIndex: ans,
    isCorrect: ans === this.questions()[index].correctAnswerIndex
  })))

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

  answerCurrentQuestion(answerIndex: number) {
    this.#userAnswers.update(answers => [...answers, answerIndex]);
  }

  increaseLevel() {
    this.#generateExam$.next(this.#generateExam$.value + 1);
  }

  decreaseLevel() {
    this.#generateExam$.next(this.#generateExam$.value - 1);
  }

  repeatLevel() {
    this.#generateExam$.next(this.#generateExam$.value);
  }

  constructor() {
    const generator = inject(ExamGeneratorService);


    this.#generateExam$.pipe(
      tap(level => this.#isBusy.set(true)),
      switchMap(level => generator.generateExam(level)),
      tap(questions => {
        this.#questions.set(questions);
        this.#userAnswers.set([]);
        this.#isBusy.set(false);
      })
    ).subscribe();

  }
}
