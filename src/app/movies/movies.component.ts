import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { MediaObserver } from '@angular/flex-layout';
import { map, takeWhile, startWith } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
   movies: Movie[];
  //selectedMovie: Movie;

  /**
  * The number of colums in the mat-grid-list directive.
  */
  public cols: Observable<number>;
  
  constructor(private media: MediaObserver , private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
    const grid = new Map([
      ["xs", 1],
      ["sm", 3],
      ["md", 3],
      ["lg", 4],
      ["xl", 4]
    ]);
    let start: number;
    grid.forEach((cols, mqAlias) => {
      if (this.media.isActive(mqAlias)) {
        start = cols;
      }
    });
    
    this.cols = this.media.media$.pipe(
      map(change => {
        console.log(change);
        console.log(grid.get(change.mqAlias));
        return grid.get(change.mqAlias);
      }), startWith(start));
    
  }

  

  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.movieService.addMovie({ name } as Movie)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(h => h !== movie);
    this.movieService.deleteMovie(movie).subscribe();
  }
}
