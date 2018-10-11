import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReverseCaptchaService {
  private _url = '';
  constructor(private _http: HttpClient) { }

  calculate(digits: number) {
    if( this._url != '' ) {
      alert('Not Implemented');
      // this._http.post<any>(this._url, digits)
    }
    else {
      return this.calculateDisconnecte(digits);
    }
  }
  
  private calculateDisconnecte(digits: number) {

    if( digits ) {
      var digitsString = digits.toString();

      if( digitsString ) {
        var digitsArray = digitsString.split('').map(Number);

        if( digitsArray.length == 1 ) {
          return 0;
        } 
        else {
          var currentPosition: number;
          var nextPosition: number;
          var sum: number;

          sum = 0;
          for(var currentPosition = 0, nextPosition = 1; currentPosition < digitsArray.length; currentPosition += 1, nextPosition += 1) {
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
