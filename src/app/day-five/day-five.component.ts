import { Component, OnInit } from '@angular/core';
import { ExitStepService } from '../services/exit-step/exit-step.service';
import { ResultDataService } from '../services/result-service/result-data.service';
import { SimpleResult} from '../models/simple-result.model';
import { NumericHelperService } from '../services/numeric-helper/numeric-helper.service';


@Component({
  selector: 'app-day-five',
  templateUrl: './day-five.component.html',
  styleUrls: ['./day-five.component.css']
})
export class DayFiveComponent implements OnInit {
  public jumpOffsets: string;

  constructor(private _exitStepService: ExitStepService, private _numericHelperService: NumericHelperService, private _resultDataService: ResultDataService ) { }

  ngOnInit() {
  }

  onSubmit() {
    if( this._numericHelperService.isValid(this.jumpOffsets) ) {
      this._exitStepService.calculate(this.jumpOffsets).subscribe((data: SimpleResult)  =>  this._resultDataService.updateResult(data.result.toString()));
    }
    else {
      this._resultDataService.updateResult("Invalid numeric input!");
    }
  }
}
