import {AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoadingSpinnerComponent} from "./shared/loading-spinner/loading-spinner.component";
import {SpinnerService} from "./shared/loading-spinner/spinner.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'best-movies';
  // isLoading = true;
  // isLoading: Subject<boolean> = this.spinnerService.isLoading;
  constructor(public spinnerService: SpinnerService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    // console.log(this.isLoading);
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
    }
  }

