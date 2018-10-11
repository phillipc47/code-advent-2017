import { Component, OnInit } from '@angular/core';
import { ReverseCaptchaService } from '../services/reverse-captcha/reverse-captcha.service';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.css']
})
export class DayOneComponent implements OnInit {
  public digits: number;
  public calculationResult: number;

  constructor( private _reverseCaptchaService: ReverseCaptchaService ) { }

  ngOnInit() {
  }

  onSubmit() {
    if( this.digits != null ) {
      // Direct update, future examples will show update via subscription
      this.calculationResult = this._reverseCaptchaService.calculate(this.digits);
    }
  }
}
