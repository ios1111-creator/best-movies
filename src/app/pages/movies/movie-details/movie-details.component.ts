import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../../../models/movie';
import {HttpService} from '../../../services/http.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Observable<Movie[]>;

  constructor(private httpS: HttpService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.movieDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.httpS.getMovie(params.get('id')))
    );
  }

  getToMovies() {
    this.router.navigate(['/movies']);
    console.log(this.router);
  }
}
