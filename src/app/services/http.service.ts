import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Movie} from '../models/movie';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {
  }

  getMovies(loader?: boolean | null): Observable<Movie[]> {
    let params = new HttpParams();
    if (loader) {
      params = params.append('loader', loader.toString());
    }
    return this.httpClient.get<Movie[]>('http://localhost:3000/movies').pipe(catchError(this.handleError));
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

  getYears(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/years');
  }

  getMoviesFromYears(year: string) {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.year === year))
    );
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>('http://localhost:3000/movies', movie).pipe(catchError(this.handleError));
  }

  editMovie(movie: Partial<Movie>): Observable<Movie> {
    return this.httpClient.patch<Movie>('http://localhost:3000/movies/' + movie.id, movie).pipe(tap(console.log),
      catchError(this.handleError));
  }

  deleteMovie(id: any): Observable<Movie[]> {
    return this.httpClient.delete<Movie[]>('http://localhost:3000/movies/' + id).pipe(tap(console.log));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Name: ${error.name}` +
      `Message: ${error.message}` +
      `Returned code: ${error.status}`
    );
    return throwError('Something bad happened; please try again later.');
  }
}
