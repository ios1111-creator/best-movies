import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.css']
})
export class MovieCoverComponent implements OnInit {
  @Input() movie: Movie;
  imgNotFound = 'https://bitsofco.de/content/images/2018/12/broken-1.png';

  constructor() {
  }

  ngOnInit(): void {
  }

}
