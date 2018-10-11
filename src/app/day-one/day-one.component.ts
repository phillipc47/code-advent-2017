import { Component, OnInit } from '@angular/core';
import { ReverseCaptchaService } from '../services/reverse-captcha/reverse-captcha.service';

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.css']
})
export class DayOneComponent implements OnInit {
  public digits: number;

  constructor( private _reverseCaptchaService: ReverseCaptchaService ) { }

  ngOnInit() {
  }

  onSubmit() {
    if( this.digits == null ) {
      console.log("No digits entered");
    }
    else {
      console.log( this._reverseCaptchaService.calculate(this.digits) );
    }
  }
}
