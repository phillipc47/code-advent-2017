import { Component, OnInit } from '@angular/core';
import { DistributorService } from '../services/distributor/distributor.service';
import { ResultDataService } from '../services/result-service/result-data.service';
import { SimpleResult} from '../models/simple-result.model';
import { NumericHelperService } from '../services/numeric-helper/numeric-helper.service';

@Component({
  selector: 'app-day-six',
  templateUrl: './day-six.component.html',
  styleUrls: ['./day-six.component.css']
})
export class DaySixComponent implements OnInit {
  public memoryBanks: string;

  constructor(private _distributorService: DistributorService, private _numericHelperService: NumericHelperService, private _resultDataService: ResultDataService ) { }

  ngOnInit() {
  }

  onSubmit() {
    if( this._numericHelperService.isValid(this.memoryBanks) ) {
      this._distributorService.calculate(this.memoryBanks).subscribe((data: SimpleResult)  =>  this._resultDataService.updateResult(data.result.toString()));
    }
    else {
      this._resultDataService.updateResult("Invalid numeric input!");
    }
  }
}
