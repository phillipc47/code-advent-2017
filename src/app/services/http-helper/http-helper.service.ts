import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { SimpleResult } from '../../models/simple-result.model';
import { AppConfigService } from '../app-config/app-config.service';
import { ConfigurationData } from 'src/app/models/configuration-data.model';

import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private _http: HttpClient, private _appConfigService: AppConfigService) {
  }

  //TODO: Can also do this on interceptor eventually
  private handleError( error: HttpErrorResponse ) {
    console.error("When Invoking a GET Service, an error occcurred");
    if( error.error !instanceof ErrorEvent) {
      console.error(`Error Status: ${error.status} Body: ${error.error}`);
    }

    return throwError(error);
  }

  private createEmptyResult(parameters: HttpParams): Observable<SimpleResult> {
    let parameterOutput: string = '';

    Object.keys(parameters).forEach(function(key) {
      parameterOutput += `key: ${key} Value: ${parameters[key]}\n`;
    });

    let emptyResult: Observable<SimpleResult> = Observable.create( observer => { observer.next( { input: parameterOutput, result: 0 } ) } );
    return emptyResult;
  }

  public invokeGetService(serviceKey: string, parameters: HttpParams): Observable<SimpleResult> {
    if( this._appConfigService ) {
      let configData: ConfigurationData = this._appConfigService.GetConfigurationData();
      if( configData ) {
        let endpoint = configData.serviceEndpoints[serviceKey];
        if( endpoint ) {
          return this._http.get<SimpleResult>(endpoint.url, { params: parameters } )
                           .pipe( catchError(this.handleError) );
        } else {
          console.error(`No endpoint found which corresponds to ${serviceKey}`);
        }
      } else {
        console.error("Unable to load configuration data");
      }
    } else {
      console.error("Configuration Service does not exist");
    }

    return this.createEmptyResult(parameters);
  }
}
