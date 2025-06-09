import { Component, inject, input, signal } from '@angular/core';
import { Book } from '../../models/book';
import { Busy } from '../busy/busy';
import { StateService } from '../../services/state-service';

@Component({
  selector: 'app-book-card',
  imports: [Busy],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss'
})
export class BookCard {
  readonly state = inject(StateService);

  readonly stock = signal(10);

}
