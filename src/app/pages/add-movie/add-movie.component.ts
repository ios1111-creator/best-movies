import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Movie} from "../../models/movie";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  model: Partial<Movie> = {};
  categories: string[] = [];
  years: string[] = [];
  title: string = '';
  year: string = '';
  country: string = '';
  director: string = '';
  category: string = '';
  plot: string = '';
  poster: string = '';
  imdbRating: string = '';
  errorMessage: string;
  public maxValue: number = 10;
  public minValue: number = 0;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getCategories().subscribe(categories => this.categories = categories);
    this.httpService.getYears().subscribe(years => this.years = years);
  }

  addMovie() {
    const movie: Movie = {
      title: this.title,
      year: this.year,
      country: this.country,
      director: this.director,
      category: this.category,
      plot: this.plot,
      poster: this.poster,
      imdbRating: this.imdbRating,
    };
    this.httpService.addMovie(movie).subscribe();
    // this.httpService.addMovie(this.model as Movie).subscribe(
    //   // result => console.log(result),
    //   // error => console.error(error),
    //   {error: (err: string) => this.errorMessage = err}
    // );
  }

  printM(titleI: NgModel) {
    console.log(titleI);
  }
  valueChanged(e) {
    this.imdbRating = e.target.value;
  }
}
