import { Injectable } from '@angular/core';
import { COLORS } from '../data/colors';
import { Color } from '../models/color.model';
import { delay, finalize, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search(keyword: string, abort?: AbortSignal) {
    const word = keyword.toLowerCase().trim();

    const result = !!word
      ? COLORS.filter(clr => clr.name.toLowerCase().includes(word))
      : [];

    console.log('Starting search: ', word);
    return new Promise<Color[]>(resolve => {
      const timeout = setTimeout(
          () => {
            console.log('Search completed: ', word);
            resolve(result)
          },
          3000);
      abort?.addEventListener('abort', () => {
        clearTimeout(timeout);
        console.log('Search aborted: ', word);
      });
    })
  }

  rxSearch(keyword: string) {
    const word = keyword.toLowerCase().trim();

    const result = !!word
      ? COLORS.filter(clr => clr.name.toLowerCase().includes(word))
      : [];

      return of(result).pipe(
        tap(() => console.log('Search started: ', word)),
        delay(3000), 
        tap(res => console.log('Search result: ', res)),
        finalize(() => console.log('Search completed: ', word)),
      );

  }

}
