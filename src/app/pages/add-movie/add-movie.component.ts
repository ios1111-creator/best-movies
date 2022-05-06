import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
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

  constructor(private HttpService: HttpService) {
  }

  ngOnInit(): void {
    this.HttpService.getCategories().subscribe(categories => this.categories = categories)
    this.HttpService.getYears().subscribe(years => this.years = years);
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
    }
    this.HttpService.addMovie(movie).subscribe()
  }
}
