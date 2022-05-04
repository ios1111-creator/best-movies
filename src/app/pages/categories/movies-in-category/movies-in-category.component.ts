import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../../../models/movie';
import {HttpService} from '../../../services/http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './movies-in-category.component.html',
  styleUrls: ['./movies-in-category.component.css']
})
export class MoviesInCategoryComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private http: HttpService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('category')
    this.movies = this.http.getMoviesFromCategory(category)
  }

}
