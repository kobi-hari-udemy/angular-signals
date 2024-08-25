import { Injectable } from "@angular/core";
import { delay, map, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    getPrimeFactors(n: number): Observable<number[]> {
        return of(n).pipe(
            delay(1000), 
            map(getPrimeFactors)
        )
    }
}

function getPrimeFactors(n: number): number[] {
    const factors: number[] = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n /= divisor;
      } else {
        divisor++;
      }
    }
  
    return factors;
  }