import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Movie} from '../../../models/movie';

@Component({
  selector: 'app-movie-in-years',
  templateUrl: './movie-in-years.component.html',
  styleUrls: ['./movie-in-years.component.css']
})
export class MovieInYearsComponent implements OnInit {
  years: Observable<Movie[]>;

  constructor(private http: HttpService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const year = this.route.snapshot.paramMap.get('year');
    this.years = this.http.getMoviesFromYears(year);
  }

}
