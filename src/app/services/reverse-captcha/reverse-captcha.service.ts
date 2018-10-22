import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { SimpleResult} from '../../models/simple-result.model';

@Injectable({
  providedIn: 'root'
})
export class ReverseCaptchaService {
  //TODO: Get this from a config
  private _url = 'http://localhost:45603/api/reverseCaptcha';
  private _result: SimpleResult;
  private _whatever: SimpleResult;

  constructor(private _http: HttpClient) { }

  calculate(digits: number): Observable<SimpleResult> {
      let parameters: HttpParams = new HttpParams().set('input', digits.toString());
      return this._http.get<SimpleResult>(this._url, { params: parameters } );
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
