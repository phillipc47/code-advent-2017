import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpleResult } from '../../models/simple-result.model';

import { HttpHelperService } from '../http-helper/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class PassPhraseService {

  constructor(private _httpHelper: HttpHelperService) { }

  public calculate(passPhrase: string): Observable<SimpleResult> {
    let parameters: HttpParams = new HttpParams().set('input', passPhrase);
    return this._httpHelper.invokeGetService("pass-phrase", parameters);
  }
}
