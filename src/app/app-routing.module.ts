import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from './pages/movies/movies.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {CategoriesComponent} from './pages/categories/categories.component';
import {MovieDetailsComponent} from './pages/movies/movie-details/movie-details.component';
import {RouterModule, Routes} from '@angular/router';
import {MoviesInCategoryComponent} from './pages/categories/movies-in-category/movies-in-category.component';
import {YearsComponent} from "./pages/years/years.component";
import {MovieInYearsComponent} from "./pages/years/movie-in-years/movie-in-years.component";
import {AddMovieComponent} from "./pages/add-movie/add-movie.component";
import {LoginComponent} from "./login/login/login.component";
// import * as path from "path";
import {RegisterComponent} from "./login/register/register.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'category/:category', component: MoviesInCategoryComponent},
  {path: 'years', component: YearsComponent},
  {path: 'year/:year', component: MovieInYearsComponent},
  {path: 'add_movie', component: AddMovieComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
