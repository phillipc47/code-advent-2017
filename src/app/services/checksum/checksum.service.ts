import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpleResult } from '../../models/simple-result.model';

import { HttpHelperService } from '../http-helper/http-helper.service';


@Injectable({
  providedIn: 'root'
})
export class ChecksumService {
  constructor(private _httpHelper: HttpHelperService) { }

  calculate(spreadsheetArray: string[]): Observable<SimpleResult> {
    let parameters: HttpParams = new HttpParams().set('input', this.buildServiceInput(spreadsheetArray));
    return this._httpHelper.invokeGetService("checksum", parameters);
  }

  private buildServiceInput(spreadsheetArray: string[]): string {
    let input: string = '';

    if( spreadsheetArray && spreadsheetArray.length > 0 ) {
      spreadsheetArray.forEach( row => {
        if( row ) {
          if( input.length > 0 ) {
            input += ', ';
          }
          input += row;
        }
      });
    }

    return input;
  }
}
