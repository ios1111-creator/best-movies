import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../models/movie';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('http://localhost:3000/movies');
  }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/categories');
  }

  getMovie(id: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('http://localhost:3000/movies/' + id);
  }

  getMoviesFromCategory(category: string): Observable<Movie[]> {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.category === category))
   ).pipe(tap(console.log));
  }

  getYears():Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/years');
  }

  getMoviesFromYears(year: string) {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.year === year))
    )
  }
  addMovie(movie:Movie):Observable<Movie>{
    return this.httpClient.post<Movie>('http://localhost:3000/movies',movie)
  }
  editMovie(movie:Partial<Movie>):Observable<Movie>{
    return this.httpClient.put<Movie>('http://localhost:3000/movies'+ movie.id,movie).pipe(tap(console.log))
  }
}
