import { Component, OnInit } from '@angular/core';
import { ChecksumService } from '../services/checksum/checksum.service';
import { ResultDataService } from '../services/result-service/result-data.service';
import { SimpleResult} from '../models/simple-result.model';
import { NumericHelperService } from '../services/numeric-helper/numeric-helper.service';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css']
})
export class DayTwoComponent implements OnInit {

  public rowOne: string;
  public rowTwo: string;
  public rowThree: string;

  constructor( private _checkSumService: ChecksumService, private _numericHelperService: NumericHelperService, private _resultDataService: ResultDataService  ) { }

  ngOnInit() {
  }

  onSubmit() {
    let spreadsheetRows: string[] = [this.rowOne, this.rowTwo, this.rowThree];

    if( this._numericHelperService.isArrayValid(spreadsheetRows) ) {
      this._checkSumService.calculate(spreadsheetRows).subscribe((data: SimpleResult)  =>  this._resultDataService.updateResult(data.result.toString()));
    }
    else {
      this._resultDataService.updateResult("Invalid numeric input!");
    }
  }
}
