import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieCoverComponent } from './shared/movie-cover/movie-cover.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCoverComponent,
    CategoriesComponent,
    MoviesComponent,
    PageNotFoundComponent,
    MovieDetailsComponent,
    MoviesInCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
