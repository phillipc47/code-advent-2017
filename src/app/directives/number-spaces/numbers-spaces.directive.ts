import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersSpaces]'
})
export class NumbersSpacesDirective {

  private _regex = /^[0-9\s]*$/;
  
  constructor( ) { }

  private shouldApply( event: KeyboardEvent ): boolean {
    // This just feels so wrong -- revist when time permits
    const attribute: Attr = event.srcElement.attributes.getNamedItem('appNumbersSpaces');
  
    return !!attribute;
  }

  private isCharacterAllowed(candidate: string): boolean {
    //TODO: Figure out the regex expression, test for space or numeric in the interim
    if( candidate == ' ' || this._regex.test(candidate)) {
      return true;
    }

    return false;
  }

  private isAllowed(candidate: string): boolean {
    for(let i: number = 0; i < candidate.length; i++ ) {
      const currentCharacter = candidate.charAt( i );
      if( !this.isCharacterAllowed(currentCharacter) )  {
        return false;
      }
    }
    
    return true;
  }

  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if( !this.shouldApply(event) ) { 
      return true;
    };

    const inputChar = event.key;
    if( this.isAllowed(inputChar) ) {
      return true;
    }
    else {
      event.preventDefault();
      return false;
    }
  }

  @HostListener('paste', ['$event']) 
  pasteEvent(event) {
    if( !this.shouldApply(event) ) { 
      return true;
    };

    const data = event.clipboardData.getData('Text');

    if( this.isAllowed(data) ) {
      return true;
    }
    else {
      event.preventDefault;
      return false;
    }
  }
}
