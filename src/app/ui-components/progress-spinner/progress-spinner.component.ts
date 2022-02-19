import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerService } from './progress-spinner.service';


@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css']
})
export class ProgressSpinnerComponent implements OnInit {

  constructor(public _progressSpinnerService:ProgressSpinnerService) { }

  ngOnInit(): void {
  }

}
