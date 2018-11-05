import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpleResult } from '../../models/simple-result.model';
import { HttpHelperService } from '../http-helper/http-helper.service';


@Injectable({
  providedIn: 'root'
})
export class ExitStepService {
  constructor(private _httpHelper: HttpHelperService) { }

  public calculate(jumpSteps: string): Observable<SimpleResult> {
    let parameters: HttpParams = new HttpParams().set('input', jumpSteps);
    return this._httpHelper.invokeGetService("exit-steps", parameters);
  }
}
