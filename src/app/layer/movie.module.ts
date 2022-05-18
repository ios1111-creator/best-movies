import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {MoviesComponent} from './movies/movies.component';
import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';
import {CategoriesComponent} from './categories/categories.component';
import {MoviesInCategoryComponent} from './categories/movies-in-category/movies-in-category.component';
import {YearsComponent} from './years/years.component';
import {MovieInYearsComponent} from './years/movie-in-years/movie-in-years.component';
import {AddMovieComponent} from '../movie-layout/add-movie/add-movie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayerComponent} from './layer.component';

const routes: Routes = [
    {
      path: '', component: LayerComponent, children: [
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
    LayerComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule, FormsModule,
    ReactiveFormsModule]
})
export class MovieModule {

}
