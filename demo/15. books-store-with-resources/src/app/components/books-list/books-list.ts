import { Component, inject, input, model, signal } from '@angular/core';
import { Book } from '../../models/book';
import { Busy } from "../busy/busy";
import { StateService } from '../../services/state-service';

@Component({
  selector: 'app-books-list',
  imports: [Busy],
  templateUrl: './books-list.html',
  styleUrl: './books-list.scss',
})
export class BooksList {
  readonly state = inject(StateService);
}
