import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {SortPipe} from './pipe/sort.pipe';
import {MovieCoverComponent} from './movie-cover/movie-cover.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    LoadingSpinnerComponent,
    SortPipe,
    MovieCoverComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    LoadingSpinnerComponent,
    SortPipe,
    MovieCoverComponent,
  ]
})
export class SharedModule {
}
