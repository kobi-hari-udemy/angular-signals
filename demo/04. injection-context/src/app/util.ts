import { DestroyRef, inject } from "@angular/core";
import { interval } from "rxjs";

export function startCounting() {
    const dr = inject(DestroyRef);
    const sub = interval(1000).subscribe(console.log);
    dr.onDestroy(() => sub.unsubscribe());
}