import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../../models/movie';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.movies = this.http.getMovies();
    console.log(this.movies);

  }

}
