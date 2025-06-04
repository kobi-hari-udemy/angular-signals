import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, resource, ResourceStreamItem, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookCard } from "./components/book-card/book-card";
import { Book } from './models/book';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, BookCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  booksIds = httpResource<string[]>(() => 'http://localhost:3000/api/books/ids');

  selectedBookId = signal('');

  selectedBook = httpResource<Book>(() => this.selectedBookId() 
    ? `http://localhost:3000/api/books/${this.selectedBookId()}`
    : undefined);

  selectedStock = resource({
    params: () => ({ bookId: this.selectedBookId() }),
    stream: async (prm) => {
      const result = signal<ResourceStreamItem<number>>({ value: 0});

      if (prm.params.bookId) {
        // create web socket connection
        const ws = new WebSocket(`ws://localhost:3000/ws/stock/${prm.params.bookId}`);
        ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          console.log('WebSocket message received:', data);
          result.set({ value: data.stock });
        };

        prm.abortSignal.addEventListener('abort', () => {
          console.log('WebSocket connection closed');
          ws.close();
        });

      }
      console.log(prm.params.bookId);

      return result;
    }
  })

  go() {
    this.booksIds.reload();
  }
}
