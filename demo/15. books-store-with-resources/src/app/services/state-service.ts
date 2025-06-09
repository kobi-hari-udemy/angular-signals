import { Injectable, resource, signal } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  readonly apiBase = 'http://localhost:3000/api/books';
  readonly wsBase = 'ws://localhost:3000/ws';

  #keyword = signal<string>('the');

  #searchResult = resource({
    params: () => ({keyword: this.#keyword()}), 
    loader: (options) => this.#searchKeywordPromise(options.params.keyword, options.abortSignal), 
    defaultValue: []
  });

  get keyword() {
    return this.#keyword.asReadonly();
  }

  get searchResult() {
    return this.#searchResult.asReadonly();
  }

  setKeyword(value: string) {
    console.log('Keyword changes to', value);
    this.#keyword.set(value);
  }


  #searchKeywordPromise(value: string, abortSignal?: AbortSignal): Promise<Book[]> {
    return fetch(`${this.apiBase}/search?q=${value}`, {signal: abortSignal})
      .then(resp => resp.json())
  }

  constructor() { }
}
