import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { Question } from './models/question.model';
import { ProgressComponent } from "./components/progress/progress.component";
import { DoneComponent } from "./components/done/done.component";
import { ExamService } from './services/exam.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuestionPresenterComponent, ProgressComponent, DoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly store = inject(ExamService);

}
