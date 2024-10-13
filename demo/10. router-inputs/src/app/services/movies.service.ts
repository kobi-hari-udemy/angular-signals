import { computed, Inject, Injectable, signal } from "@angular/core";
import { MOVIES } from "../data/movies.data";

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    readonly #movies = signal(MOVIES);

    movies = this.#movies.asReadonly();

}