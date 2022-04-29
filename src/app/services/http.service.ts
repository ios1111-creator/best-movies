import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/movie";

@Injectable({
  providedIn:'root'
})
export class HttpService{
  constructor(private httpClient: HttpClient) {
  }
  getMovies(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>('http://localhost:3000/movies')
  }
  getCategories():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>('http://localhost:3000/categories')
  }
}
