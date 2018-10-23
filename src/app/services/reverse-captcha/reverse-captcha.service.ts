import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimpleResult } from '../../models/simple-result.model';
import { AppConfigService } from '../app-config/app-config.service';
import { ConfigurationData } from 'src/app/models/configuration-data.model';

@Injectable({
  providedIn: 'root'
})
export class ReverseCaptchaService {
  private _serviceKey: string = "reverse-captcha";

  constructor(private _http: HttpClient, private _appConfigService: AppConfigService) { }

  public calculate(digits: number): Observable<SimpleResult> {

    if( this._appConfigService ) {
      //TODO: We can wrap this in a helper
      let configData: ConfigurationData = this._appConfigService.GetConfigurationData();
      if( configData ) {
        let endpoint = configData.serviceEndpoints[this._serviceKey];
        if( endpoint ) {
          let parameters: HttpParams = new HttpParams().set('input', digits.toString());
          return this._http.get<SimpleResult>(endpoint.url, { params: parameters } );
        } else {
          //TODO: Only temporary
          console.log("Nope, no endpoint");
        }
      }
    }
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
