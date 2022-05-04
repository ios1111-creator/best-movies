import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('http://localhost:3000/movies');
  }

  getCategories(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('http://localhost:3000/categories');
  }

  getMovie(id: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('http://localhost:3000/movies/' + id);
  }

  getMoviesFromCategory(category: string): Observable<Movie[]> {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.category === category))
    );
  }

  getYears():Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/years');
  }

  getMoviesFromYears(year: string) {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.year === year))
    )
  }
}
