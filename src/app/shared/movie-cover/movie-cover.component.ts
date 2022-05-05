import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.css']
})
export class MovieCoverComponent implements OnInit {
@Input() movie:Movie;
  toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Undo</button>';
constructor() { }

  ngOnInit(): void {
  }

}
