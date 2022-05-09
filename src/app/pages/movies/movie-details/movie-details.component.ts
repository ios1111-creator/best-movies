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

}
