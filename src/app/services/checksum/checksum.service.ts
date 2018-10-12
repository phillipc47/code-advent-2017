import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChecksumService {
  private _url = '';

  constructor(private _http: HttpClient) { }

  calculate(spreadsheetArray: string[]) {
    if( this._url != '' ) {
      alert('Not Implemented');
    }
    else {
      return this.calculateDisconnected(spreadsheetArray);
    }
  }
  
  private calculateDisconnected(spreadsheetArray: string[]) {
    // Obviously would not do this for production code -- would embed business logic and such in a service.  However, to lower app dependencies on external services and 
    // for the sake of this example, compute locally.  
    if( spreadsheetArray && spreadsheetArray.length > 0 ) {
      let differences: number[] = new Array(spreadsheetArray.length);
      
      spreadsheetArray.forEach(row => {
        if( row ) {
          let lowHigh = this.findLowestHighest(row);
          let low: number = lowHigh.low;
          let high: number = lowHigh.high;

          let difference = high - low;
          if( difference != 0 ) {
            differences.push(difference);
          }
        }
      });

      return this.computeCheckSum(differences);
    }

    //TODO: Handle exception cases
    return 0;
  }

  private findLowestHighest(data: string) {
    let highest: number = Number.MIN_SAFE_INTEGER;
    let lowest: number = Number.MAX_SAFE_INTEGER;
    let numbers = data.split(' ');

    numbers.forEach(numberCandidate => {
      if( numberCandidate.trim() !== '' ) {
        let number = Number(numberCandidate);

        if( number > highest ) {
          highest = number;
        }

        if( number < lowest ) {
          lowest = number;
        }
      }
    });

    return {low: lowest, high: highest};
  }

  private computeCheckSum(differences: number[]) {
    let checksum: number = 0;
    
    if( differences ) {
      differences.forEach(difference => {
        checksum += difference;
      });
    }

    return checksum;
  }
}
