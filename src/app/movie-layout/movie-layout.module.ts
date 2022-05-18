import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {YearsComponent} from './years/years.component';
import {MovieInYearsComponent} from './years/movie-in-years/movie-in-years.component';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MovieLayoutComponent} from './movie-layout.component';
import {CategoriesComponent} from './categories/categories.component';
import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';
import {MoviesInCategoryComponent} from './categories/movies-in-category/movies-in-category.component';


const routes: Routes = [
    {
      path: '', component: MovieLayoutComponent, children: [
        {path: 'movies', component: MoviesComponent},
        {path: 'movie/:id', component: MovieDetailsComponent},
        {path: 'categories', component: CategoriesComponent},
        {path: 'category/:category', component: MoviesInCategoryComponent},
        {path: 'years', component: YearsComponent},
        {path: 'year/:year', component: MovieInYearsComponent},
        {path: 'add_movie', component: AddMovieComponent}
      ]
    },
  ]
;

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    CategoriesComponent,
    MoviesInCategoryComponent,
    YearsComponent,
    MovieInYearsComponent,
    AddMovieComponent,
    MovieLayoutComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, FormsModule,
    ReactiveFormsModule]
})
export class MovieLayoutModule { }
