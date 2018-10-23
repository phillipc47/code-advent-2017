import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { ConfigurationData } from '../../models/configuration-data.model';

@Injectable({
  providedIn: 'root'
})

export class AppConfigService {
  private _url: string = 'http://localhost:45603/api/configurationData';
  private _configurationData: ConfigurationData;

  constructor( private _http: HttpClient ) { }

  public loadConfigurationData(): Promise<ConfigurationData> {
    let parameters: HttpParams = new HttpParams(); 

    let promise = this._http.get<ConfigurationData>(this._url, { params: parameters } ).toPromise<ConfigurationData>()
    promise.catch(this.handleError);
    promise.then( response => this._configurationData = response )//.then( response => console.log("Response: " + JSON.stringify(response)));
    
    return promise;
  }

  public GetConfigurationData(): ConfigurationData {
    return this._configurationData;
  }
  
  private handleError(error: HttpResponse<any> | any ): any {
    let errorMessage: string;

    // TODO: Can move some of this out to global interceptor
    if( error instanceof HttpResponse ) {
      const httpResponseError: HttpResponse<any> = error;
      const body = httpResponseError.body || '';
      const errorDetails = body.error || JSON.stringify(body);
      
      errorMessage = `${error.status} - ${error.statusText || ''} ${errorDetails}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }

    //TODO:
    console.log(errorMessage);
    return new Promise( (resolve) => { resolve(errorMessage) });
  }
}
