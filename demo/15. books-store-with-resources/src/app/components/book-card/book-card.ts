import { Component, input, signal } from '@angular/core';
import { Book } from '../../models/book';
import { Busy } from '../busy/busy';

@Component({
  selector: 'app-book-card',
  imports: [Busy],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss'
})
export class BookCard {
  readonly book = signal<Book>({
    id: 'asdasdasdasdasdasdas',
    title: 'Angular 17',
    author: 'John Doe',
    description: 'A comprehensive guide to Angular 17 development, covering new features and best practices.',
    stock: 14,
  });

  readonly stock = signal(43);

}
