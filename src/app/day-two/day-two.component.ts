import { Component, OnInit } from '@angular/core';
import { ChecksumService } from '../services/checksum/checksum.service';
import { ResultDataService } from '../services/result-service/result-data.service';
import { SimpleResult} from '../models/simple-result.model';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css']
})
export class DayTwoComponent implements OnInit {

  public rowOne: string;
  public rowTwo: string;
  public rowThree: string;

  constructor( private _checkSumService: ChecksumService, private _resultDataService: ResultDataService  ) { }

  ngOnInit() {
  }

  onSubmit() {
    let spreadsheetRows = [this.rowOne, this.rowTwo, this.rowThree];

    this._checkSumService.calculate(spreadsheetRows).subscribe((data: SimpleResult)  =>  this._resultDataService.updateResult(data.result.toString()));
  }
}
