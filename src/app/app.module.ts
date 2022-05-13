import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MovieCoverComponent} from './shared/movie-cover/movie-cover.component';
import {CategoriesComponent} from './pages/categories/categories.component';
import {MoviesComponent} from './pages/movies/movies.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MovieDetailsComponent} from './pages/movies/movie-details/movie-details.component';
import {MoviesInCategoryComponent} from './pages/categories/movies-in-category/movies-in-category.component';
import {YearsComponent} from './pages/years/years.component';
import {MovieInYearsComponent} from './pages/years/movie-in-years/movie-in-years.component';
import {SortPipe} from './pipe/sort.pipe';
import {AddMovieComponent} from './pages/add-movie/add-movie.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoadingSpinnerComponent} from "./shared/loading-spinner/loading-spinner.component";
import {InterceptorInterceptor} from "./services/interceptor.interceptor";
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCoverComponent,
    CategoriesComponent,
    MoviesComponent,
    PageNotFoundComponent,
    MovieDetailsComponent,
    MoviesInCategoryComponent,
    YearsComponent,
    MovieInYearsComponent,
    SortPipe,
    AddMovieComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true},
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
