import {Component, Injectable, OnInit} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {delay} from "rxjs/operators";
import {SpinnerService} from "./spinner.service";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  constructor(private spinnerService: SpinnerService) {
  }

  ngOnInit() {
    console.log(this.spinnerService.show());

  }
}
