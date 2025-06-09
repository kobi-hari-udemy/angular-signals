import { Injectable, linkedSignal, resource, signal } from '@angular/core';
import { Book } from '../models/book';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  readonly apiBase = 'http://localhost:3000/api/books';
  readonly wsBase = 'ws://localhost:3000/ws';

  #keyword = signal<string>('the');

  // #searchResult = resource({
  //   params: () => ({keyword: this.#keyword()}), 
  //   loader: (options) => this.#searchKeywordPromise(options.params.keyword, options.abortSignal), 
  //   defaultValue: []
  // });

  #searchResult = httpResource<Book[]>(() => ({
    url: `${this.apiBase}/search`, 
    params: { q: this.#keyword()},     
    
  }), {
    defaultValue: [], 
  })

  #selectedBookId = linkedSignal<Book[], string>({
    source: () => this.searchResult.value(), 
    computation: (src, prev) => {
      if (!prev) {
        return src.length > 0 ? src[0].id : '';
      }
      if (prev.value === '' && src.length > 0) {
        return src[0].id;
      }

      return prev.value;
    }
  })

  get keyword() {
    return this.#keyword.asReadonly();
  }

  get searchResult() {
    return this.#searchResult.asReadonly();
  }

  get selectedBookId() {
    return this.#selectedBookId.asReadonly();
  }

  setKeyword(value: string) {
    console.log('Keyword changes to', value);
    this.#keyword.set(value);
  }

  setSelectedBookId(value: string) {
    this.#selectedBookId.set(value);
  }


  #searchKeywordPromise(value: string, abortSignal?: AbortSignal): Promise<Book[]> {
    return fetch(`${this.apiBase}/search?q=${value}`, {signal: abortSignal})
      .then(resp => resp.json())
  }

  constructor() { }
}
