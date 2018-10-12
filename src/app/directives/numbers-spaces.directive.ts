import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersSpaces]'
})
export class NumbersSpacesDirective {

  private _regex = /^[0-9\c\s]*$/;
  
  constructor() { }

  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const inputChar = event.key;

    if( this._regex.test(inputChar) ) {
      return true;
    }
    else {
      event.preventDefault();
      return false;
    }
  }

  @HostListener('paste', ['$event']) 
  pasteEvent(event) {
    const data = event.clipboardData.getData('Text');

    if( this._regex.test(data) ) {
      return true;
    }

    event.preventDefault;
    return false;
  }
}
