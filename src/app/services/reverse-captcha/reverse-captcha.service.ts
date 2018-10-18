import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReverseCaptchaService {
  private _url = 'http://localhost:45603/api/reverseCaptcha';
  constructor(private _http: HttpClient) { }

  calculate(digits: number) {
    if( this._url != '' ) {
      // let parameters = new HttpParams();
      let parameters = { input: digits.toString() };
      return this._http.get<any>(this._url, { params: parameters }).subscribe(data => {let res = JSON.parse(JSON.stringify(data)); console.log(res)});
    }
    else {
      return this.calculateDisconnected(digits);
    }
  }
  
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
