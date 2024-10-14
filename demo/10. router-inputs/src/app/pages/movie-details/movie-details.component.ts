import { Component, computed, inject, input, numberAttribute } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export default class MovieDetailsComponent {
  // readonly route = inject(ActivatedRoute);
  readonly moviesService = inject(MoviesService);

  readonly id = input.required({transform: numberAttribute});

  // readonly id$ = this.route.params.pipe(
  //   map(params => Number(params['id']))
  // );

  // readonly movie$ = this.id$.pipe(
  //   map(id => this.moviesService.movies()
  //             .find(movie => movie.id === id)!)
  // );

  readonly movie = computed(() => 
    this.moviesService.movies()
        .find(mv => mv.id === this.id()));

  // readonly poster$ = this.movie$.pipe(
  //   map(movie => `movies/${movie.posterImage}`)
  // );

  readonly poster = computed(
    () => `movies/${this.movie()?.posterImage ?? ''}`);

}
