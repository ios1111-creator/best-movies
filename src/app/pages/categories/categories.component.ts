import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Observable} from "rxjs";
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories:Observable<Movie[]>
  constructor(private http:HttpService) { }

  ngOnInit(): void {
this.categories=this.http.getCategories()
  }

}
