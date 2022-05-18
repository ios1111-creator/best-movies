import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../../../models/movie';
import {HttpService} from 'src/app/services/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Location} from '@angular/common';

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
  years: string[] = [];
  title = '';
  year = '';
  country = '';
  director = '';
  category = '';
  plot = '';
  poster = '';
  imdbRating = '';
  errorMessage: string;

  constructor(private http: HttpService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
  }

  ngOnInit(): void {
    this.movieDetails = this.route.paramMap.pipe(
      switchMap((params) => this.http.getMovie(params.get('id')))
    );
  }

  back() {
    this.router.navigate(['/movies']);
    // this.location.back();
  }

  deleteMovie(movie: Movie) {
    this.http.deleteMovie(movie.id).subscribe();
    console.log(this.movieDetails);
  }

  edit() {
    this.editmode = true;
    this.editText = this.text;
  }

  save(id: number) {
    const movie: Partial<Movie> = {
      id,
      title: this.title,
      year: this.year,
      category: this.category,
      plot: this.plot
    };

    this.editmode = false;
    this.text = this.editText;
    this.http.editMovie(movie).subscribe({error: (err: string) => this.errorMessage = err});
  }

  cancel() {
    this.editmode = false;
    this.editText = '';
  }
}
