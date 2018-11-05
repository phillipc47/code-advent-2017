import { Component, OnInit } from '@angular/core';
import { ReverseCaptchaService } from '../services/reverse-captcha/reverse-captcha.service';
import { ResultDataService } from '../services/result-service/result-data.service';
import { SimpleResult} from '../models/simple-result.model';


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
      this._reverseCaptchaService.calculate(this.digits).subscribe((data: SimpleResult)  =>  this._resultDataService.updateResult(data.result.toString()));
    }
  }
}