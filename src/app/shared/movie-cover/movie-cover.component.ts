import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.css']
})
export class MovieCoverComponent implements OnInit {
  @Input() movie: Movie;
  imgNotFound = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

  constructor() {
  }

  ngOnInit(): void {
  }

}
