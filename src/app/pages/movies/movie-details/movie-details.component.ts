import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../../../models/movie";
import {HttpService} from 'src/app/services/http.service';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Location} from "@angular/common";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Observable<Movie[]>;
  editmode = false;
  editText = '';
  text: string;
  categories: string[] = [];
  years: string[] = []
  title: string = ''
  year: string = ''
  country: string = ''
  director: string = ''
  category: string = ''
  plot: string = ''
  poster: string = ''
  imdbRating: string = ''

  constructor(private http: HttpService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
  }

  ngOnInit(): void {
    this.movieDetails = this.route.paramMap.pipe(
      switchMap((params) => this.http.getMovie(params.get('id')))
    )
    console.log(this.route)
  }

  back() {
    // this.router.navigate(['/movies']);
    this.location.back();
  }

  deleteMovie(movie: Movie) {
    this.http.deleteMovie(movie.id).subscribe()
    console.log(this.movieDetails)
  }

  edit1(movie) {
    this.movieDetails = movie;
  }
  edit() {
    this.editmode = true;
    this.editText = this.text;
  }

  save(id: number) {
    const movie: Partial<Movie> = {
      id: id,
      title: this.title,
      year: this.year,
      category: this.category,
      plot: this.plot
    }

    this.editmode = false;
    this.text = this.editText;
    this.http.editMovie(movie).subscribe();
  }

  cancel() {
    this.editmode = false;
    this.editText = '';
  }
}
