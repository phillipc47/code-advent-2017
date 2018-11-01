import { Component, OnInit } from '@angular/core';
import { PassPhraseService } from '../services/pass-phrase/pass-phrase.service';
import { ResultDataService } from '../services/result-service/result-data.service';
import { SimpleResult} from '../models/simple-result.model';

@Component({
  selector: 'app-day-four',
  templateUrl: './day-four.component.html',
  styleUrls: ['./day-four.component.css']
})
export class DayFourComponent implements OnInit {
  public passPhrase: string;

  constructor(private _passPhraseService: PassPhraseService, private _resultDataService: ResultDataService  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this._passPhraseService.calculate(this.passPhrase).subscribe((data: SimpleResult)  =>  this._resultDataService.updateResult(data.result.toString()));
  }
}
