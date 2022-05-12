import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }
  // isLoadingSubject = new Subject<boolean>();
  // // isLoading: Observable<boolean> = this.isLoadingSubject.pipe(delay(0));
  //
  // show() {
  //   this.isLoadingSubject.next(true);
  //   console.log(this.isLoadingSubject);
  // }
  //
  // hide() {
  //   this.isLoadingSubject.next();
  // }
  isLoading = new Subject<boolean>();
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
  }



