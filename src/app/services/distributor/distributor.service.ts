import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpleResult } from '../../models/simple-result.model';
import { HttpHelperService } from '../http-helper/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {
  constructor(private _httpHelper: HttpHelperService) { }

  public calculate(memoryBanks: string): Observable<SimpleResult> {
    let parameters: HttpParams = new HttpParams().set('input', memoryBanks);
    return this._httpHelper.invokeGetService("distributor", parameters);
  }
}
