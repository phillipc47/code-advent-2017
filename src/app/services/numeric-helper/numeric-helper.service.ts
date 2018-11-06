import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumericHelperService {

  constructor() { }

  private isIndividualNumberValid( possibleNumber: string | number ): boolean {
    return !isNaN(Number(possibleNumber));
  }

  public isValid(possibleNumber: string | number): boolean {
    const candidate: string = possibleNumber.toString();

    if( this.isIndividualNumberValid(candidate) ) {
      return true;
    }

    let candidateArray = candidate.split(' ').map(Number);
    for(let index: number = 0; index < candidateArray.length; index += 1) {
      if( !this.isIndividualNumberValid(candidateArray[index]) ) {
        return false;
      }
    }

    return true;
  }

  public isArrayValid( possibleNumberArray: string[] ): boolean {
    for( let index: number = 0; index < possibleNumberArray.length; index += 1) {
      if( !possibleNumberArray[index] ) {
        continue;
      }

      if( !this.isValid(possibleNumberArray[index]) ) {
        return false;
      }
    }

    return true;
  }
}
