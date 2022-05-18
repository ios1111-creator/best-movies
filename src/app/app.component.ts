import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SpinnerService} from "./shared/loading-spinner/spinner.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'best-movies';
  abs = false;

  constructor(public spinnerService: SpinnerService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
}

