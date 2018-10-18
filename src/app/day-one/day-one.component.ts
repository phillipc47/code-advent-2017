import { Component, OnInit } from '@angular/core';
import { ReverseCaptchaService } from '../services/reverse-captcha/reverse-captcha.service';
import { ResultDataService } from '../services/result-service/result-data.service';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.css']
})
export class DayOneComponent implements OnInit {
  public digits: number;

  constructor( private _reverseCaptchaService: ReverseCaptchaService, private _resultDataService: ResultDataService ) {
   }

  ngOnInit() {
  }

  onSubmit() {
    if( this.digits != null ) {
      this._resultDataService.updateResult(this._reverseCaptchaService.calculate(this.digits));
    }
  }
}