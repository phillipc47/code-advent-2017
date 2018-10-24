import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpleResult } from '../../models/simple-result.model';
import { HttpHelperService } from '../http-helper/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ReverseCaptchaService {
  constructor(private _httpHelper: HttpHelperService) { }

  public calculate(digits: number): Observable<SimpleResult> {
    let parameters: HttpParams = new HttpParams().set('input', digits.toString());
    return this._httpHelper.invokeGetService("reverse-captcha", parameters);
  }

  //TODO: Can do in memory service to 'fake' the connection
  private calculateDisconnected(digits: number) {
    // Obviously would not do this for production code -- would embed business logic and such in a service.  However, to lower app dependencies on external services and 
    // for the sake of this example, compute locally.  
    if( digits ) {
      let digitsString = digits.toString();

      if( digitsString ) {
        let digitsArray = digitsString.split('').map(Number);

        if( digitsArray.length == 1 ) {
          return 0;
        } 
        else {
          let currentPosition: number;
          let nextPosition: number;
          let sum: number;

          sum = 0;
          for(currentPosition = 0, nextPosition = 1; currentPosition < digitsArray.length; currentPosition += 1, nextPosition += 1) {
            if( nextPosition >= digitsArray.length ) {
              // Circular list, loop around to first number
              nextPosition = 0;
            }

            if( digitsArray[currentPosition] == digitsArray[nextPosition] ) {
              sum += digitsArray[currentPosition];
            }
          }

          return sum;
        }
      }
    }

    //TODO: Handle exception cases
    return 0;
  }
}
