import { Component, OnInit } from '@angular/core';
import { ChecksumService } from '../services/checksum/checksum.service';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css']
})
export class DayTwoComponent implements OnInit {

  public rowOne: string;
  public rowTwo: string;
  public rowThree: string;
  public calculationResult : number;

  constructor( private _checkSumService: ChecksumService ) { }

  ngOnInit() {
  }

  onSubmit() {
    let spreadsheetRows = [this.rowOne, this.rowTwo, this.rowThree];
    this.calculationResult = this._checkSumService.calculate(spreadsheetRows);
  }
}
