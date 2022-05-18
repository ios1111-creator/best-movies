import {Component, Injectable, OnInit} from '@angular/core';
import {SpinnerService} from './spinner.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  constructor(public spinnerService: SpinnerService) {
  }

  ngOnInit() {

  }
}
