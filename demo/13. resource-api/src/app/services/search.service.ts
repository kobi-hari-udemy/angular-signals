import { Injectable } from '@angular/core';
import { COLORS } from '../data/colors';
import { Color } from '../models/color.model';

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
}
